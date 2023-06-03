(function() {
    "use strict"

    const requestForm = document.querySelector('.request__form');
    const submitBtn = requestForm.querySelector('.btn--form');

    const collectData = function (formEl) {
        const data = Array.from(formEl.elements)
            .filter((item) => !!item.name)  // фильтруем эл-ты с пустым именем (кнопка)
            .map((el) => { return {name: el.name, value: el.value } });
        console.log(data);

        // newArray.forEach((item) => {
        //     const { name, value } = item;
        //     console.log({ name, value });
        //
        //     console.log(item.name, item.value);
        // })
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        collectData(requestForm);
    };

    // submitBtn.addEventListener('click', handleSubmit);
    requestForm.addEventListener('submit', handleSubmit)

})();
