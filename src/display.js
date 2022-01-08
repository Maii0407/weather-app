
const display = (function() {
//section below are functions that generate the form section of the app
    function makeFormContainer() {
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        document.body.appendChild(formContainer);

        return formContainer;
    };

    function makeForm() {
        const form = document.createElement('form');
        form.classList.add('form');
        document.querySelector('.form-container').appendChild(form);

        return form;
    };

    function makeSearchBox() {
        const searchBox = document.createElement('input');
        searchBox.setAttribute('type', 'text');
        searchBox.placeholder = 'Enter Location';
        searchBox.classList.add('search-box');
        document.querySelector('.form').appendChild(searchBox);

        return searchBox;
    };

    function makeSearchBtn() {
        const searchBtn = document.createElement('button');
        searchBtn.setAttribute('type', 'button');
        searchBtn.classList.add('search-btn');
        searchBtn.innerText = 'Search Location';
        document.querySelector('.form').appendChild(searchBtn);

        return searchBtn;
    };

//function below generates the form section of the app
    function makeFormSection() {
        makeFormContainer();
        makeForm();
        makeSearchBox();
        makeSearchBtn();
    };

    return {
        makeFormSection,
    };
})();

export { display };