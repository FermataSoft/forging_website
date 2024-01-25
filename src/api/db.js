import initSqlJs from "sql.js";
import appConfig from "../globals";

export class Database {
    async getContent(query = null) {
        if (!query) {
            throw new Error("db query is undefined")
        }

        return new Promise((resolve, reject) => {
            this._init(query).then((result) => resolve(result))
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

        const dataPromise = fetch(appConfig.DatabasePath).then((res) =>
            res.arrayBuffer()
        );
        const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
        const db = new SQL.Database(new Uint8Array(buf));

        const contentDb = db.exec(query);

        return {
            content: contentDb[0],
        };
    }
}