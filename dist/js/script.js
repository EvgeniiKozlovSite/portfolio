const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close1 = document.querySelector('.menu__overlay'),
      link_menu = document.querySelector('.menu__list'),
      percent = document.querySelectorAll('.using__elem-percent'),
      lines = document.querySelectorAll('.using__level'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
close1.addEventListener('click', () => {
    menu.classList.remove('active');
});
link_menu.addEventListener('click', () => {
    menu.classList.remove('active');
});

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const modal = document.querySelector('.modal'),
    mclick = document.querySelector('.modal__click'),
    mclose = document.querySelector('.modal__close');

mclick.addEventListener('click', () => {
    modal.classList.add('active');
});
mclose.addEventListener('click', () => {
    modal.classList.remove('active');
});

/* отправка писем */
$(document).ready(function(){
$.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");
    $('#order').fadeOut();
/*     $('.overlay, #thanks').fadeIn('fast');
 */    $('form').trigger('reset');
  });
  return false;
});


