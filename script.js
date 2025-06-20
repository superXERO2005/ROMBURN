const sliderItems = [
    'images/Main.0000 1.svg',
    'images/Main.0001 1.svg',
    'images/Main.0003 1.svg',
    'images/Main.0015 1.svg',
    'images/Main.0016 1.svg',
]

document.addEventListener('DOMContentLoaded', function() {
    const sliderView = document.getElementById('sliderView');
    const leftButton = document.getElementById('sliderLeftButton');
    const rightButton = document.getElementById('sliderRightButton');
    
    let currentIndex = 0;
    const totalItems = sliderItems.length;
    
    function updateSlider() {
        sliderView.src = sliderItems[currentIndex]
    }
    
    updateSlider();
    
    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1
        }

        updateSlider();
    });
    
    rightButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0
        }

        updateSlider();
    });
});
