const btnBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const allItems = document.querySelectorAll('.menu-items');
const overlay = document.querySelector('.overlay');
const bookmarkedBtn = document.querySelector('.bookmark-btn');
const bookmarkTxt = document.querySelector('.bookmark-text');


btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    menu.classList.toggle('active-menu');
    overlay.classList.toggle('active-overlay');
})

allItems.forEach(item => item.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    menu.classList.toggle('active-menu');
    overlay.classList.toggle('active-overlay');
}))

bookmarkedBtn.addEventListener('mouseup', () => {
    bookmarkedBtn.classList.toggle('bookmarked');

    if(bookmarkedBtn.classList.contains('bookmarked')){
        bookmarkTxt.textContent = 'Bookmarked';
    } else {
        bookmarkTxt.textContent = 'Bookmark';
    }
})