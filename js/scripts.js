$(document).ready(function () {
  /* Карусель */
$('.carousel').carousel({
    interval: 5000,
    pause: "hover",
    wrap: true,
  });
  /* Якорь  */ 
  $(".button_scroll").click(function(f) { f.preventDefault(); var a = $(this).attr("href"),
  b = $(a).offset().top;
$("body,html").animate({ scrollTop: b }, 500) });

/* Работа формы */ 
$(function() { $("body").on("submit", ".form_newsletter", function(f) { var b = "Укажите значения всех обязательных для заполнения полей!"; var a = 0; var g = $(".mail", this).val(); var h = $(".phone", this).val(); if (g.length < 1) { f.preventDefault();
  $(".mail", this).css({ border: "1px solid #cc0000" });
  alert(b); return false } $(".email-block", this).addClass("hide");
$(".phone-block", this).removeClass("hide");
$(".infront", this).addClass("hide");
$(".infront_submit", this).addClass("hide");
$(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + g + " Бонус уже у Вас на почте").removeClass("hide");
$(".span_phone", this).html("Введите свой номер телефона и мы напомним вам о начале интенсива").removeClass("hide"); if (h) { window.open("https://mastervision.su/verdezi/bonus.html");
  $(".span_phone", this).html("Ваш номер " + h + " зарегистрирован!") } });
$(".phone-block input", this).keydown(function(a) { if ($.inArray(a.keyCode, [46, 8, 9, 27, 13, 110, 190, 107, 187]) !== -1 || (a.keyCode == 65 && (a.ctrlKey === true || a.metaKey === true)) || (a.keyCode >= 35 && a.keyCode <= 40)) { return } if ((a.shiftKey || (a.keyCode < 48 || a.keyCode > 57)) && (a.keyCode < 96 || a.keyCode > 105)) { a.preventDefault() } }) });

/* Модальное*/ 
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})













});

