// Конфигурация
const CONFIG = {
  openingDate: "2025-09-01T10:00:00", // Дата открытия
  salonName: 'Свадебный салон "Невеста"',
  address: "г. Москва, ул. Свадебная, д. 1",
  phone: "+7 (495) 123-45-67",
  email: "info@elegance-wedding.ru",
  workHours: {
    weekday: "Пн-Пт: 10:00 - 20:00",
    weekend: "Сб-Вс: 11:00 - 19:00",
  },
};
// Данные о товарах
const products = [
  {
    id: 1,
    name: "Свадебное платье «Амелия»",
    price: 45000,
    images: [
      "images 1/платье 1.jpg",
      "images 1/платье 2.jpg",
      "images 1/платье 3.jpg",
      "images 1/платье 4.jpg",
    ],
    video: "images 1/ПЛАТЬЕ.mp4",
    category: "dresses",
    description: "Роскошное платье из французского кружева с длинным шлейфом",
  },
  {
    id: 2,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images/платье 1.jpg",
      "images/платье 2.jpg",
      "images/платье 3.jpg",
      "images/платье 4.jpg",
      "images/платье 5.jpg",
      "images/платье 6.jpg",
      "images/платье 7.jpg",
      "images/платье 8.jpg",
      "images/платье 9.jpg",
    ],
    video: "images/платье 2.mp4",
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 3,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 2/платье 1.jpg",
      "images 2/платье 2.jpg",
      "images 2/платье 3.jpg",
      "images 2/платье 4.jpg",
      "images 2/платье 5.jpg",
    ],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 4,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 3/платье 1.jpg",
      "images 3/платье 2.jpg",
      "images 3/платье 3.jpg",
      "images 3/платье 4.jpg",
    ],
    video: "images 3/платье девочка рыжая.mp4",
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 5,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 4/платье 1.jpg",
      "images 4/платье 2.jpg",
      "images 4/платье 3.jpg",
      "images 4/платье 4.jpg",
      "images 4/платье 5.jpg",
      "images 4/платье 7.jpg",
      "images 4/платье 8.jpg",
    ],
    video: "images 4/платье 5.mp4",
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 6,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 5/платье 1.jpg",
      "images 5/платье 2.jpg",
      "images 5/платье 3.jpg",
      "images 5/платье 4.jpg",
      "images 5/платье 5.jpg",
      "images 5/платье 6.jpg",
      "images 5/платье 7.jpg",
    ],
    videos: ["images 5/Платье.mp4", "images 5/платье 6.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 7,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 6/платье 1.jpg",
      "images 6/платье 2.jpg",
      "images 6/платье 3.jpg",
      "images 6/платье 4.jpg",
      "images 6/платье 5.jpg",
      "images 6/платье 6.jpg",
    ],
    videos: ["images 6/ПЛАТЬЕ-2ч.mp4", "images 6/ПЛАТЬЕ.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 8,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 7/платье 1.jpg",
      "images 7/платье 2.jpg",
      "images 7/платье 3.jpg",
      "images 7/платье 4.jpg",
    ],
    videos: [
      "images 7/платье.mp4",
      "images 7/платье 1.mp4",
      "images 7/платье 2.mp4",
    ],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 9,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 8/платье 1.jpg",
      "images 8/платье 2.jpg",
      "images 8/платье 3.jpg",
      "images 8/платье 4.jpg",
      "images 8/платье 5.jpg",
      "images 8/платье 6.jpg",
    ],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 10,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 9/платье 1.jpg",
      "images 9/платье 2.jpg",
      "images 9/платье 3.jpg",
      "images 9/платье 4.jpg",
      "images 9/платье 5.jpg",
      "images 9/платье 6.jpg",
      "images 9/платье 7.jpg",
      "images 9/платье 8.jpg",
    ],
    videos: ["images 9/платье 2ч.mp4", "images 9/платье 1ч.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 11,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 10/платье 1.jpg",
      "images 10/платье 2.jpg",
      "images 10/платье 3.jpg",
      "images 10/платье 4.jpg",
      "images 10/платье 5.jpg",
    ],
    videos: ["images 10/платье 2ч.mp4", "images 10/платье 1ч.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 12,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 11/платье 1.jpg",
      "images 11/платье 2.jpg",
      "images 11/платье 3.jpg",
      "images 11/платье 4.jpg",
      "images 11/платье 5.jpg",
    ],
    video: ["images 11/платье.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 13,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 12/платье 1.jpg",
      "images 12/платье 2.jpg",
      "images 12/платье 3.jpg",
      "images 12/платье 4.jpg",
      "images 12/платье 5.jpg",
    ],
    video: ["images 12/платье.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 14,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 13/платье 1.jpg",
      "images 13/платье 2.jpg",
      "images 13/платье 3.jpg",
      "images 13/платье 4.jpg",
      "images 13/платье 5.jpg",
    ],
    video: ["images 13/платье.mp4"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 15,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "images 14/платье 1.jpg",
      "images 14/платье 2.jpg",
      "images 14/платье 3.jpg",
      "images 14/платье 4.jpg",
      "images 14/платье 5.jpg",
    ],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 16,
    name: "Фата «Нежность»",
    price: 8500,
    images: ["фата.jpeg"],
    category: "veils",
    description: "Длинная фата из тончайшего тюля с жемчужной вышивкой",
  },
  {
    id: 17,
    name: "Диадема «Королева»",
    price: 12000,
    images: ["диадема.jpg"],
    category: "tiaras",
    description: "Изящная диадема с кристаллами Swarovski",
  },
  {
    id: 18,
    name: "Туфли «Золушка»",
    price: 9500,
    images: ["туфли.jpeg"],
    category: "shoes",
    description: "Элегантные туфли на каблуке с жемчужными деталями",
  },
];

// Переменные для управления отображением платьев
// Глобальные переменные
let allDressesVisible = false;
const visibleDressesCount = 5; // Количество отображаемых платьев по умолчанию

// Таймер обратного отсчета
function startCountdown() {
  // Реализация таймера, если требуется
  const countdownDate = new Date("2025-09-29T23:59:59").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerHTML = `
                    <div class="expired-message">
                        Акция завершена!
                    </div>
                `;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновляем отдельные элементы
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}

// Отображение платьев
function renderDresses() {
  const dressesContainer = document.getElementById("dresses-container");
  const dresses = products.filter((product) => product.category === "dresses");
  const showMoreBtn = document.getElementById("show-more-btn");

  dressesContainer.innerHTML = "";

  // Определяем, сколько платьев показывать
  const dressesToShow = allDressesVisible
    ? dresses
    : dresses.slice(0, visibleDressesCount);

  dressesToShow.forEach((dress) => {
    const dressCard = document.createElement("div");
    dressCard.className = "dress-card";

    // Поддержка как старого формата (одно видео), так и нового (массив видео)
    const videos = Array.isArray(dress.videos)
      ? dress.videos
      : dress.video
        ? [dress.video]
        : [];

    let currentMediaIndex = 0;
    let isVideoPlaying = false;

    // Создаем объединенный массив всех медиа-элементов
    const allMedia = [...dress.images, ...videos];
    const isMedia = allMedia.length > 1;

    dressCard.innerHTML = `
      <div class="image-container">
        <img src="${dress.images[0]}" alt="${dress.name}" class="dress-image">
        ${videos
          .map(
            (video, index) =>
              `<video class="dress-video" data-index="${index}" style="display: none;" controls>
            <source src="${video}" type="video/mp4">
            Ваш браузер не поддерживает видео
          </video>`
          )
          .join("")}
        ${
          isMedia
            ? `
          <button class="nav-button prev">&#8249;</button>
          <button class="nav-button next">&#8250;</button>
          <div class="image-counter">1 / ${allMedia.length}</div>
        `
            : ""
        }
        ${videos.length > 0 ? `<button class="video-button">▶ Видео</button>` : ""}
      </div>
      <div class="dress-info">
        <h3>${dress.name}</h3>
        ${dress.description ? `<p class="dress-description">${dress.description}</p>` : ""}
        <p class="dress-price">${dress.price.toLocaleString("ru-RU")} руб.</p>
      </div>
    `;

    // Добавляем обработчики для переключения изображений и видео
    if (isMedia) {
      const prevButton = dressCard.querySelector(".prev");
      const nextButton = dressCard.querySelector(".next");
      const imageElement = dressCard.querySelector(".dress-image");
      const videoElements = dressCard.querySelectorAll(".dress-video");
      const counterElement = dressCard.querySelector(".image-counter");
      const videoButton = dressCard.querySelector(".video-button");

      // Функция для обновления отображаемого контента
      const updateContent = () => {
        // Скрываем все видео
        videoElements.forEach((video) => {
          video.style.display = "none";
          video.pause();
        });

        // Показываем изображение или видео в зависимости от текущего индекса
        if (currentMediaIndex < dress.images.length) {
          // Показываем изображение
          imageElement.style.display = "block";
          imageElement.src = dress.images[currentMediaIndex];
          if (videoButton) videoButton.textContent = "▶ Видео";
          dressCard.classList.remove("video-playing");
          isVideoPlaying = false;
        } else {
          // Показываем видео
          const videoIndex = currentMediaIndex - dress.images.length;
          imageElement.style.display = "none";
          videoElements[videoIndex].style.display = "block";
          if (videoButton) videoButton.textContent = "◼ Стоп";
          dressCard.classList.add("video-playing");
          isVideoPlaying = true;
        }
        counterElement.textContent = `${currentMediaIndex + 1} / ${allMedia.length}`;
      };

      prevButton.addEventListener("click", () => {
        currentMediaIndex =
          (currentMediaIndex - 1 + allMedia.length) % allMedia.length;
        updateContent();
      });

      nextButton.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex + 1) % allMedia.length;
        updateContent();
      });

      if (videoButton) {
        videoButton.addEventListener("click", () => {
          if (isVideoPlaying) {
            // Если видео уже воспроизводится, переключаем на первое изображение
            currentMediaIndex = 0;
            updateContent();
          } else {
            // Переключаем на первое видео
            currentMediaIndex = dress.images.length;
            updateContent();
            if (videoElements.length > 0) {
              videoElements[0].play();
            }
          }
        });
      }

      // Инициализируем отображение
      updateContent();
    }

    dressesContainer.appendChild(dressCard);
  });

  // Показываем или скрываем кнопку "Показать все платья"
  if (dresses.length <= visibleDressesCount) {
    showMoreBtn.style.display = "none";
  } else {
    showMoreBtn.style.display = "block";
    showMoreBtn.textContent = allDressesVisible
      ? "Свернуть"
      : "Показать все платья";
  }
}

// Обработчик кнопки "Показать все платья"
function initShowMoreButton() {
  const showMoreBtn = document.getElementById("show-more-btn");
  showMoreBtn.addEventListener("click", () => {
    allDressesVisible = !allDressesVisible;
    renderDresses();
  });
}

// Отображение аксессуаров
function renderAccessories(category = "all") {
  const accessoriesContainer = document.getElementById("accessories-container");
  let accessories = products.filter(
    (product) => product.category !== "dresses"
  );

  if (category !== "all") {
    accessories = accessories.filter((item) => item.category === category);
  }

  accessoriesContainer.innerHTML = "";

  if (accessories.length === 0) {
    accessoriesContainer.innerHTML = "<p>Нет товаров в этой категории</p>";
    return;
  }

  accessories.forEach((item) => {
    const accessoryCard = document.createElement("div");
    accessoryCard.className = "accessory-card";

    accessoryCard.innerHTML = `
      <div class="accessory-image">
        <img src="${item.images[0]}" alt="${item.name}">
      </div>
      <div class="accessory-info">
        <h3>${item.name}</h3>
        ${item.description ? `<p>${item.description}</p>` : ""}
        <p class="price">${item.price.toLocaleString("ru-RU")} руб.</p>
      </div>
    `;

    accessoriesContainer.appendChild(accessoryCard);
  });
}

// Инициализация фильтрации аксессуаров
function initFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Убираем активный класс у всех кнопок
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Добавляем активный класс к текущей кнопке
      button.classList.add("active");

      // Фильтруем аксессуары
      const category = button.getAttribute("data-category");
      renderAccessories(category);
    });
  });
}

// Плавная прокрутка к якорям
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  startCountdown();
  renderDresses();
  renderAccessories();
  initFilterButtons();
  initSmoothScroll();
  initShowMoreButton();
});
