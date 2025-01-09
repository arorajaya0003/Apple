document.getElementById('left-arrow-new').addEventListener('click', function() {
    document.getElementById('one-card-container').scrollBy({
        left: -500, // Adjust the value to scroll by a custom width
        behavior: 'smooth'
    });
});

document.getElementById('right-arrow-new').addEventListener('click', function() {
    document.getElementById('one-card-container').scrollBy({
        left: 500, // Adjust the value to scroll by a custom width
        behavior: 'smooth'
    });
});


document.getElementById('left-arrow').addEventListener('click', function() {
    document.getElementById('second-card-container').scrollBy({
        left: -500, // Adjust the value to scroll by a custom width
        behavior: 'smooth'
    });
});

document.getElementById('right-arrow').addEventListener('click', function() {
    document.getElementById('second-card-container').scrollBy({
        left: 500, // Adjust the value to scroll by a custom width
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.scroll-container .content');
    const scrollAmount = 300; // Adjust the scroll distance as needed

    // Event listener for left arrow
    document.querySelector('#leftArrow').addEventListener('click', function () {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    });

    // Event listener for right arrow
    document.querySelector('#rightArrow').addEventListener('click', function () {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });
});
