// "use strict";

let nameElement = document.querySelector("#name");
let emailElement = document.querySelector("#email");
let textareaElement = document.querySelector("#describeIdea");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".submitForm");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");

      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove("_sending");
      } else {
        alert("Sending message failed!");
        form.classList.remove("_sending");
      }
    } else {
      alert("Fill all require fields!");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._required");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      checkInputCopyPaste(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
          console.error("Email test failed");
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function checkInputCopyPaste(input) {
    let lengthLimit = input.getAttribute("maxlength");
    let value = input.value;

    input.addEventListener("change", (e) => {
      if (input.value.length >= lengthLimit) {
        input.value = value.slice(0, lengthLimit - 1);
      }
    });
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
