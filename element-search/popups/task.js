const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';
const closeModalMain = document.querySelector('.modal__close');

closeModalMain.onclick = function() {
    modalMain.className = 'modal modal__close';
}

const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

showSuccess.onclick = function() {
    modalSuccess.className = 'modal modal_active'; 
    modalMain.className = 'modal';
    closeModalMain.onclick = function() {
        modalSuccess.className = 'modal modal__close';
    }
}