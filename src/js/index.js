window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const introduction = document.getElementById('introduction');
    header.classList.toggle('sticky', window.scrollY > 0);
    introduction.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function efeitoMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}




function detailsServices1() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/vender.png";
}

function detailsServices2() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/capas.png";
}

function detailsServices3() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/pelicula.png";
}

function detailsServices4() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/acesorios.png";
}

function detailsServices5() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/base.png";
}