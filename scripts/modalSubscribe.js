function modalSubscribe() {

    const btnSubscribe = document.querySelector('.btn_subscribe');
    const modalSubscribe = document.querySelector('[data-subscribe]');
    const closeModal = document.getElementById('closeSubscribeMessage');

    btnSubscribe.addEventListener('click', () => {
        modalSubscribe.showModal()
    })

    closeModal.addEventListener('click', () => {
        modalSubscribe.close()
    })
}

modalSubscribe();



