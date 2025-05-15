/*Внутрішня частина меню*/
/*Відкрити/сховати бічну навігацію*/
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  /*Закрити/сховати бічну навігацію*/
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }
  /*Внутрішня частина меню*/
  /*Внутрішня інформація*/
  /*Запустіть ефект таймера лише на кілька секунд*/
  function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  /*Запустіть ефект таймера лише на кілька секунд*/
  function ahFunction() {
    var x = document.getElementById("ahshop");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  /*Запустіть ефект таймера лише на кілька секунд*/
  function hubAnimation() {
    var x = document.getElementById("snackhub");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  /*Запустіть ефект таймера лише на кілька секунд*/
  function hubAnimshop() {
    var x = document.getElementById("hubshop");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  /*Запустіть ефект таймера лише на кілька секунд*/
  function checkAnimshop() {
    var x = document.getElementById("checkinfo");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
  /*Внутрішня інформація*/
  /*Реєстраційні дії*/
  try {
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    // Коли користувач натискає поле пароля, відображається вікно повідомлення
    myInput.onfocus = function () {
      document.getElementById("message").style.display = "block";
    };
    // Коли користувач клацає за межами поля пароля, приховайте вікно повідомлення
    myInput.onblur = function () {
      document.getElementById("message").style.display = "none";
    };
    // Коли користувач починає вводити щось у полі пароля
    myInput.onkeyup = function () {
      // Перевірте малі літери
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      // Перевірте великі літери
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
      // Перевірте числа
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
  
      // Перевірте довжину
      if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    };
  } catch (e) {}
  /*Реєстраційні дії*/
  
  document.querySelectorAll("#mySidenav a[href]").forEach(function (a) {
    a.addEventListener('click', function() {
      closeHamburgerHandler();
    });
  });
  
  function closeHamburgerHandler() {
    var menu = document.getElementById("mySidenav");
    if (menu) {
      menu.style.display = "none";
    }
  }
  
  window.addEventListener('orientationchange', closeHamburgerHandler);
  window.addEventListener('resize', closeHamburgerHandler);
  