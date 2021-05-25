// Функция удаления элемента
const removeElement = () => {
  // Обходим циклом все кнопки "удалить"
  removeBtns.forEach((btn) => {
    // Добавляем обработчик события клика для каждой кнопки
    btn.addEventListener("click", (e) => {
      // e.target - конкретная кнопка, на которую кликнули
      // Записываем в переменную tableInput весь элемент, в котором есть кнопка, на которую мы кликнули
      let tableInput = e.target.closest(".table-input");
      
      // Удаляем элемент
      tableInput.remove();
    });
  });
};

removeElement();