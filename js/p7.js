document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[name="formochka"]');

  form.addEventListener("submit", function (event) {

    event.preventDefault();
    const firstname = form.querySelector('input[name="userFirstName"]').value;
    const lastname = form.querySelector('input[name="userSecondName"]').value;
    const address = form.querySelector('input[name="adress"]').value;
    const number = form.querySelector('input[name="number"]').value;

    const wished_date = form.querySelector('input[name="wished_date"]').value;

    const checkViz = form.querySelector('input[name="check-viz"]').checked;
    const checkBlank = form.querySelector('input[name="check-blank"]').checked;
    const checkFlyer = form.querySelector('input[name="check-flyer"]').checked;

    if (firstname == "" || lastname == "" || address == "" || number == "" || wished_date == "") {
      document.getElementById("error").innerHTML = "Заполните все поля!";
    }
    else if (checkBlank==false && checkFlyer==false && checkViz==false){
      document.getElementById("error").innerHTML = "Выберите хотябы одну категорию!";
    }
    else if (firstname != "" && lastname != "" && address != "" && number != "" && wished_date != "" && (checkViz || checkBlank || checkFlyer)) {
      const filename = new Date().toLocaleString("ru") + ".txt";

      const text = `
        Имя: ${firstname}
        Фамилия: ${lastname}
        Адрес: ${address}
        Номер телефона: ${number}
        Желаемая дата выполнения заказа: ${wished_date}
        Визитка: ${checkViz}
        Бланк: ${checkBlank}
        Флаер: ${checkFlyer}
        `;

      const link = document.createElement("a");
      const href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
      link.setAttribute("href", href);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
})