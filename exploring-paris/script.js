
//Variables ------

let images = [
    'images/paris_night.jpg',
    'images/city.jpg',
    'images/sunset-bridge.jpg',
    'images/stadium_park.jpg'
];
let num = 0;
let imageContainer = document.getElementById('pic');
let backButton = document.getElementById('back');
let nextButton = document.getElementById('next');


//Functions ------

nextButton.addEventListener('click', function nextSlider() {
    num++;
    if(num < images.length) {
        imageContainer.src = images[num];
    }
    else {
        imageContainer.src = images[0];
        num = 0;
    };
});

backButton.addEventListener('click', function backSlider() {
    if(num > 0) {
        num--;
        imageContainer.src = images[num];
    }
    else {
        num += (images.length-1);
        imageContainer.src = images[num];
    };
});



