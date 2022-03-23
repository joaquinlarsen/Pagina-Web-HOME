(function() {

    const sliders = [...document.querySelectorAll('.tektrol__body')];
    const buttonNext = document.querySelector('#next_tektrol');
    const buttonBefore = document.querySelector('#before_tektrol');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.tektrol__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;


        sliders[Number(currentTestimony) - 1].classList.remove('tektrol__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('tektrol__body--show');

    }

})();