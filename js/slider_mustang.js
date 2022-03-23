(function() {

    const sliders = [...document.querySelectorAll('.mustang__body')];
    const buttonNext = document.querySelector('#next_mustang');
    const buttonBefore = document.querySelector('#before_mustang');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.mustang__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;


        sliders[Number(currentTestimony) - 1].classList.remove('mustang__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('mustang__body--show');

    }

})();