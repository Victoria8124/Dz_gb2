
// Дз
// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class libraryManagement {
//   #books = [];
//   constructor(itemBooks){
//     const duplicateBooks = [...new Set(itemBooks)];
//     if(duplicateBooks.length !== itemBooks.length){
//         throw new Error("Ошибка, в списке есть дубликат")
//     }
//     this.#books = duplicateBooks;
//   }

//   get allBooks(){
//     return this.#books;
//   }

//   addBook(title){
//     if(this.#books.includes(title)){
//         throw new Errow('ошибочка')
//     }
//     this.#books.push(title);
//   }

//   removeBook(title){
//        const indexBook = this.#books.indexOf(title)
//        if(indexBook === false){
//         throw new Error('нету в списке книг')
//        }
//        this.#books.splice(indexBook, 1)
//   }

//   hasBook(title){
//      return this.#books.includes(title);
//   }
// }

// const library = new libraryManagement([
//   "Путешествие Пилигрима в Небесную Страну",
//   "Робинзон Крузо",
//   "Путешествия Гулливера",
//   "Кларисса"
// ]);
// library.addBook("Эмма");
// console.log(library.allBooks);
//  console.log(library.hasBook("Робинзон Крузо")); // true
//  library.removeBook("Кларисса");
//  console.log(library.allBooks);

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      { id: "1", text: "Отличный телефон! Батарея держится долго." },
      { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [{ id: "3", text: "Интересный дизайн, но дорогой." }],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [{ id: "4", text: "Люблю играть на PS5, графика на высоте." }],
  },
];



window.onload = function () {
  loadingReviews();
const buttonElement = document.querySelector(".button");
buttonElement.addEventListener("click", addReview);
};

// Загружаем начальные отзывы
function loadingReviews() {
  const reviewsContainer = document.querySelector(".reviews");
  initialData.forEach((product) => {
    product.reviews.forEach((review) => {
      const reviewElement = document.createElement("p");
      reviewElement.textContent = review.text;
      reviewsContainer.appendChild(reviewElement);
    });
  });
};

// Функция для добавления отзыва
function addReview() {
  const reviewInput = document.getElementById("textareaId");
  const reviewText = reviewInput.value;

  try {
      if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
      }
    const reviewElement = document.createElement("p");
    reviewElement.textContent = reviewText;
    const reviewsContainer = document.querySelector(".reviews");
    reviewsContainer.appendChild(reviewElement);
    reviewInput.value = ""; // очищаем поле ввода
  } catch (error) {
    alert(error.message);
  }
};

// _______________________________________________________________________________

// // Задание 1
// // Шаг 1: Создаем массив альбомов
// const albums = [
//     { title: "Got to Be There", artist: "Michael Jackson", year: "1972" },
//     { title: "Ben", artist: "Michael Jackson", year: "1972" },
//     { title: "Music & Me", artist: "Michael Jackson", year: "1973" }
// ];

// // Шаг 2: Создаум объект в котоом содержится массив альбомов и свойство симбл
// const musicCollection = {
//     albums, 
//     [Symbol.iterator]() {
//         let index = 0; 

//         return {
//             next: () => {
//                 if (index < this.albums.length) {
//                     return { value: this.albums[index++], done: false };
//                 } else {
//                     return { done: true }; 
//                 }
//             }
//         };
//     }
// };

// // Шаг 3: Перебераем альбомы 
// for (const album of musicCollection) {
//     console.log(`${album.title} - ${album.artist} ${album.year}`);
// }

// // Задание 2
// // Создаем Map для хранения блюд и их поваров
// const dishesChefs = new Map([
//     ["Пицца Маргарита", "Виктор"],
//     ["Пицца Пепперони", "Виктор"],
//     ["Суши Филадельфия", "Ольга"],
//     ["Суши Калифорния", "Ольга"],
//     ["Тирамису", "Дмитрий"],
//     ["Чизкейк", "Дмитрий"]
// ]);

// // Создаем Map для хранения заказов клиентов
// const orderStorage = new Map();

// // Функция для добавления заказа клиента
// function addOrder(customer, dishes) {
//     orderStorage.set(customer, dishes);
// }

// // Добавим заказы клиентов
// addOrder("Алексей", ["Пицца Пепперони", "Тирамису"]);
// addOrder("Мария", ["Суши Калифорния", "Пицца Маргарита"]);
// addOrder("Ирина", ["Чизкейк"]);

// // Функция для получения информации о заказах и повара

// function orderInformation() {
//     for (let [customer, dishes] of orderStorage.entries()) {
//         console.log(`Клиент: ${customer}`);
        
//         for (let element of dishes) {
//             let chef = dishesChefs.get(element);
//             console.log(`  Заказал: ${element} (Повар: ${chef})`);
//         }
//     }
// }

// orderInformation();

//Функционал для банковского счета: СЕМЕНИР 2, 1 ЗАДАНИЕ 

// class BankAccount {
//     #_balance = 0;
//     constructor(_balance){
//         if (_balance < 0) {
//             throw new Error ('Отрицательный баланс') 
//         }
//         this.#_balance = _balance
//     }

//     get balance(){
//         return this.#_balance
//     }

//     deposit(sum) {
//         if (sum <= 0) {
//             console.log('Отрицательная сумма');
//         } else {
//             this.#_balance += sum;
//         }
//         return this.#_balance;
//     }

//     withdraw(num){
//         if (num < 0 || num > this.#_balance) {
//             throw new Error("Некорректная сумма");
//         } else {
//          this.#_balance -= num
//         }
//         return this.#_balance;
//     }
// }

// let account = new BankAccount(500)
// console.log(account.balance);

// account.deposit(200);
// console.log(account.balance);

// account.withdraw(1000);
// console.log(account.balance);
// __________________________________________
// class User {
//     constructor(name, surname){
//         this.name = name,
//         this.surname = surname
//     }

//     get name(){
//         return this.name;
//     }

//     get surnamename(){
//         return this.surname;
//     }
// }

// class RegularUser extends User {
//     constructor(name, surname){
//         super(name, surname);
//     }
// }
    
// class PremiumUser extends User {
//     constructor(name, surname){
//         super(name, surname);
//     }
//     premiumAccount = null;
//     setPremiumAccount(){
//         this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1)
//     }
    
// }
// ________________________________________

// Задание на создание проверки на вводимое число, если не число, то должна выходит ошибка 
// const input = document.querySelector('.input');
// const but = document.querySelector('.but');
// const div = document.querySelector('.div');
// but.addEventListener('click', function(e) {
//     try {
//         const inputElement = input.value;
//         if (isNaN(inputElement)) {
//             throw new Error('не число');            
//         };
//         div.textContent = 'Молодец';
//     } catch (error) {
//         div.textContent = error.message;
//     }
// })































