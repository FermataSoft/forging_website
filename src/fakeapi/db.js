import initSqlJs from "sql.js";

export class Database {
    async getContent(query = null) {
        if (!query) {
            throw new Error("db query is undefined")
        }

        return new Promise(resolve => {
            this._init(query).then((result) => resolve(result)
            )
        })
    }

    contentToObj(contentDB) {
        let result = [];
        let contentObj = {};
        let values = contentDB.content.values;
        let columns = contentDB.content.columns;

        values.forEach((value) => {
            columns.forEach((columnName, index) => {
                contentObj[columnName] = value[index];
            });
            result.push(contentObj);
            contentObj = {};
        });

        return result;
    }

    async _init(query) {
        const sqlPromise = initSqlJs({
            locateFile: (file) =>
                "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm",
        });

        const dataPromise = fetch(import.meta.env.VITE_DATABASE_PATH).then((res) =>
            res.arrayBuffer()
        );
        const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
        const db = new SQL.Database(new Uint8Array(buf));

        const stmt = db.prepare(query);
        const contentDb = []

        while (stmt.step()) {
            const row = stmt.getAsObject();
            contentDb.push(row)
        }

        if (contentDb.length === 0) {
            throw new DatabaseError("Database returned empty object. Check database query");
        }

        return contentDb.length === 1 ? contentDb[0] : contentDb;
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}