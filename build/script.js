const handlerEventFun = (event) => {
    const transactionArr = document.getElementsByClassName('history__transaction');
    for (const transaction of transactionArr) {
        if (transaction.contains(event.target)) {
            if (transaction.classList.contains('show')) {
                transaction.classList.remove('show')
            } else {
                transaction.classList.add('show')
            }
        }
    }

    if (event.target.classList.contains('onoffswitch__button')) {
        if (event.target.classList.contains('on')) {
            event.target.classList.add('off');
            event.target.classList.remove('on');
        } else {
            event.target.classList.remove('off');
            event.target.classList.add('on');
        }
    }
};

document.body.addEventListener("click", handlerEventFun);
