// 1. Зміна заголовка при натисканні на кнопку
document.getElementById("change-title-btn").addEventListener("click", function () {
  document.getElementById("main-title").textContent = "Заголовок змінено!";
});

// 2. Функція привітання
function greetUser(name) {
  console.log(`Привіт, ${name}!`);
}

// Виклик функції з прикладом
greetUser("Андрій");

// 3. Перевірка віку
function checkAge() {
  let age;
  while (true) {
    age = prompt("Введіть свій вік:");
    if (age === null) return; // Користувач натиснув "Скасувати"
    if (!isNaN(age) && age.trim() !== "") {
      age = Number(age);
      break;
    }
    alert("Будь ласка, введіть число!");
  }

  if (age < 18) {
    alert("Доступ заборонено");
  } else {
    alert("Доступ дозволено");
  }
}

// Автоматичний виклик функції при завантаженні сторінки
checkAge();

// 4. Випадковий колір фону при кліку в будь-якому місці body
function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.body.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomRGB();
});
