const btnBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const allItems = document.querySelectorAll('.menu-items');
const overlay = document.querySelector('.overlay');
const bookmarkedBtn = document.querySelector('.bookmark-btn');
const bookmarkTxt = document.querySelector('.bookmark-text');
const backProjectBtn = document.querySelector('.back-project');
const backProjectModal = document.querySelector('.backproject-modal');
const btnCloseModal = document.querySelector('.close-modal');

// burger and menu animation
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

// bookmarked project
bookmarkedBtn.addEventListener('mouseup', () => {
    bookmarkedBtn.classList.toggle('bookmarked');

    if(bookmarkedBtn.classList.contains('bookmarked')){
        bookmarkTxt.textContent = 'Bookmarked';
    } else {
        bookmarkTxt.textContent = 'Bookmark';
    }
})

// back this project modal
backProjectBtn.addEventListener('click', () => {
    overlay.classList.add('active-overlay');
    backProjectModal.classList.add('active-backproj-modal');
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('active-overlay');
})

btnCloseModal.addEventListener('click', () => {
    overlay.classList.remove('active-overlay');
    backProjectModal.classList.remove('active-backproj-modal');
})