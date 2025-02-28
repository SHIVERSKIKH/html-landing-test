// Находим элементы управления
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const track = document.querySelector(".carousel-track");
const pageNumber = document.querySelector(".pagination .page-number");

// Количество элементов и расчёт страниц
const items = document.querySelectorAll(".carousel-item");
const visibleItems = 3; // Видимые элементы
const totalItems = items.length;
const totalPages = Math.ceil(totalItems / visibleItems);
document.querySelector(".pagination .total-pages").textContent = totalPages;

// Текущая страница
let currentPage = 1;

// Обновление кнопок активного состояния
function updateButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

// Перемещение карусели
function moveCarousel() {
  const offset = (currentPage - 1) * -100; // Смещение по страницам
  track.style.transform = `translateX(${offset}%)`;
  pageNumber.textContent = currentPage;
  updateButtons();
}

// Навигация вперёд
nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    moveCarousel();
  }
});

// Навигация назад
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    moveCarousel();
  }
});

// Инициализация
updateButtons();
