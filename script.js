let share_button = document.querySelectorAll('.share--button');

let share_button_desktop = share_button.item(0);
let share_button_mobile = share_button.item(1);

function colocandoHide() {
    document.querySelector('.area--share-desktop').classList.add("hide");
    document.querySelector('.area--share-mobile').classList.add("hide");
}

function abrirShare() {
    if (screen.width > 780) {
        document.querySelector('.area--share-desktop').classList.toggle('hide');
    } else {
        document.querySelector('.area--author').classList.toggle('hide');
        document.querySelector('.area--share-mobile').classList.toggle('hide');
    }
}

for (i=0; i<share_button.length; ++i) {
    share_button.item(i).addEventListener('click', abrirShare);
}

colocandoHide();

