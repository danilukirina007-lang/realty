// Функция открытия и закрытия мобильного меню
function mobileMenu() {
    var nav = document.getElementsByTagName("nav")[0];
    if (!nav) {
        return;
    }
    nav.classList.toggle("mobile");
}

// Закрытие меню при клике на ссылку (мобильная версия)
document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementsByTagName("nav")[0];
    if (!nav) {
        return;
    }

    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            if (window.innerWidth <= 800) {
                nav.classList.remove("mobile");
            }
        });
    }

    // При изменении размера экрана скрываем мобильное меню
    window.addEventListener("resize", function () {
        if (window.innerWidth > 800) {
            nav.classList.remove("mobile");
        }
    });

    // Динамически генерируемый контент — счётчик просмотров объектов
    var counter = document.getElementById("view-counter");
    if (counter) {
        var count = 0;
        var interval = setInterval(function () {
            count += Math.floor(Math.random() * 3) + 1;
            counter.textContent = count;
            if (count >= 47) {
                counter.textContent = 47;
                clearInterval(interval);
            }
        }, 60);
    }

    // Анимация появления карточек при скролле
    var cards = document.querySelectorAll(".property-card, .tour-item, .info-block");
    function checkVisible() {
        cards.forEach(function (card) {
            var rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                card.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkVisible);
    checkVisible();

    // Форма — валидация и сообщение при отправке
    var form = document.querySelector(".cform");
    if (form) {
        var btn = form.querySelector("input[type=submit]");
        if (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                var inputs = form.querySelectorAll("input[type=text], input[type=email], textarea");
                var ok = true;
                inputs.forEach(function (inp) {
                    if (inp.value.trim() === "") ok = false;
                });
                if (!ok) {
                    alert("Пожалуйста, заполните все поля формы.");
                } else {
                    alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");
                    form.reset();
                }
            });
        }
    }
});
