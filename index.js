// Блок с записями
let tableBlock = document.querySelector(".table-block");
// Записи
let tableInputs = tableBlock.querySelectorAll(".table-input");
// Кнопки удаления записей
let removeBtns = tableBlock.querySelectorAll(".table-input-remove button");
// Блок с полями для добавления записей
let inputAdd = document.querySelector(".add");
// Поля для добавления записей
let addInputs = inputAdd.querySelectorAll("input[type=text]");
// Кнопка добавления записи
let addBtn = inputAdd.querySelector(".table-input-add");

// Функция добавления элемента
const addElement = () => {
  // Обрабатываем событие клика по кнопке "добавить"
  addBtn.addEventListener("click", () => {
    let error = false;
    // Если хотя бы один инпут не заполнен, выходим из функции и добавление не происходит
    addInputs.forEach((element) => {
      if (element.value == "") {
        error = true;
        return false;
      }
    });

    if (error) {
      return false;
    }

    // Если же заполнены все инпуты, то записываем в переменные введённые значения
    let lastName = inputAdd.querySelector("input[name=last-name]").value;
    let firstName = inputAdd.querySelector("input[name=first-name]").value;
    let secondName = inputAdd.querySelector("input[name=second-name]").value;
    let cource = inputAdd.querySelector("input[name=cource]").value;
    let group = inputAdd.querySelector("input[name=group]").value;

    // Создаём новый элемент с новыми значениями в атрибуте value
    let newElement = `<div class="table-input">
          <p class="table-input-field last-name">${lastName}</p>
          <p class="table-input-field first-name">${firstName}</p>
          <p class="table-input-field second-name">${secondName}</p>
          <p class="table-input-field cource">${cource}</p>
          <p class="table-input-field group">${group}</p>
          <div class="table-input-remove">
            <button>Удалить</button>
          </div>
        </div>`;

    // Добавляем новый элемент в блок с записями
    tableBlock.innerHTML += newElement;

    // Очищаем поля для ввода значений нового элемента
    addInputs.forEach((element) => {
      element.value = "";
    });

    // Обновляем переменные, тк количество элементов в них изменилось
    tableBlock = document.querySelector(".table-block");
    tableInputs = tableBlock.querySelectorAll(".table-input");
    removeBtns = tableBlock.querySelectorAll(".table-input-remove button");
    removeElement();
  });
};


addElement();

