let showDialog = document.querySelector('#showDialog');
let dialog = document.querySelector('#dialo');

showDialog.addEventListener('click', () => {
    console.dir(dialog);
    dialog.showModal()
})