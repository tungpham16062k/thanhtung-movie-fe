
export const moveLable = (e) => {
    const input = e.target;
    if (input.value) {
        input.classList.add('form__control--active');
    } else {
        if (input.classList.contains('form__control--active')) {
            input.classList.remove('form__control--active');
        }
    }
};