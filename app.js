// ====  Home Page => Home Form  ====
let homeForm = document.getElementById('home-form');

homeForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Uzr, tizim serverga ulanmagan!')
});

// ====  Home Page => Ellipse pressed Effect ====
let ellipse = document.querySelector('.ellipse'),
    circle = document.querySelector('.circle'),
    isPressed = 1;

ellipse.addEventListener('click', () => {
    if ( isPressed ) {
        circle.style.margin = '0';
        circle.style.backgroundColor = '#ababab';
        ellipse.style.backgroundColor = '#ababab33';
        isPressed = 0;
    } else {
        circle.style.margin = '0 0 0 19px';
        circle.style.backgroundColor = '#fff';
        ellipse.style.backgroundColor = '#1dd1a1';
        isPressed = 1;
    }
}) ;
