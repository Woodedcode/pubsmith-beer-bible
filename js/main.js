const listItems = document.querySelectorAll('.popup');

listItems.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.querySelector('.popup').style.display = 'none';
    });
});