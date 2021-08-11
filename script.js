const btnBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const allItems = document.querySelectorAll('.menu-items');
const overlay = document.querySelector('.overlay');
const bookmarkedBtn = document.querySelector('.bookmark-btn');
const bookmarkTxt = document.querySelector('.bookmark-text');
const backProjectBtn = document.querySelector('.back-project');
const backProjectModal = document.querySelector('.backproject-modal');
const btnCloseModal = document.querySelector('.close-modal');
const rewardBtns = document.querySelectorAll('.reward-btn');
const inputs = Array.from(document.querySelectorAll('.round'));
const buyPledge = document.querySelector('.buy-pledge');
const buyPledges = Array.from(document.querySelectorAll('.buy-pledge'));
const cardWraps = document.querySelectorAll('.card-wrap');
const continueBtns = Array.from(document.querySelectorAll('.continue'));
const thanksModal = document.querySelector('.thanks-modal');
const gotItBtns = document.querySelectorAll('.got-it');
const amountInputs = document.querySelectorAll('.amount-input');

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
    buyPledges.forEach(bP => {
        bP.classList.remove("buy-pledge-active");
    })
    cardWraps.forEach(cardWrap => {
        cardWrap.classList.remove('card-wrap-active');
    })
    inputs.forEach(input => {
        input.checked = false;
    })
})

btnCloseModal.addEventListener('click', () => {
    overlay.classList.remove('active-overlay');
    backProjectModal.classList.remove('active-backproj-modal');
})

// faire une fonction plus générale qui fait toutes les modifs quand le pledge atteint 0
// document.getElementById('opt4').disabled = true;


// modifier le montant d'un pledge




// on input click .buy-pledge-active is activated
inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        for(let numPledge = 0; numPledge < buyPledges.length; numPledge++) {
            let pledge = inputs[numPledge].getAttribute("data-attr");
            let pledgeDiv = document.querySelector(`div[data-attr="${pledge}"]`);

            if (numPledge === inputs.indexOf(e.target)) {
                buyPledges[numPledge].classList.add('buy-pledge-active');
                pledgeDiv.classList.add('card-wrap-active');
            } else {
                buyPledges[numPledge].classList.remove('buy-pledge-active');
                pledgeDiv.classList.remove('card-wrap-active');
            }
        }
    })
})

// reward button click simulates input click (.buy-pledge-active is activated)
rewardBtns.forEach(rewardBtn => {
    rewardBtn.addEventListener('click', () => {
        overlay.classList.add('active-overlay');
        backProjectModal.classList.add('active-backproj-modal');
        let pledge = rewardBtn.getAttribute("data-attr");
        let pledgeInput = document.querySelector(`input[data-attr="${pledge}"]`);
        pledgeInput.click();
    })
})

// thanks modal activated
continueBtns.forEach(continueBtn => {
    continueBtn.addEventListener('click', () => {
        // Max values for amount inputs (validation)
        let continueBtnIndex = continueBtns.indexOf(continueBtn);
        if(continueBtnIndex > 0) {
            let amountInputIndex = continueBtnIndex - 1;
            let amountInput = amountInputs[amountInputIndex];
            let minAmount = Number(amountInput.getAttribute('min'));
            let maxAmount = Number(amountInput.getAttribute('max'));
            let valueAmount = Number(amountInput.value);
            let valid = false;
            if(valueAmount > maxAmount){
                amountInput.parentElement.style.borderColor = "red";
                amountInput.value = maxAmount;
            } else if(valueAmount < minAmount) {
                amountInput.parentElement.style.borderColor = "red";
                amountInput.value = minAmount;
            } else {
                valid = true;
                backProjectModal.classList.remove('active-backproj-modal');
                thanksModal.classList.add('thanks-modal-active');
            }
        }

    })
})

gotItBtns.forEach(gotItBtn => {
    gotItBtn.addEventListener('click', () => {
        thanksModal.classList.remove('thanks-modal-active');
        overlay.classList.remove('active-overlay');
    })
})