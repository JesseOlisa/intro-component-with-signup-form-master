/*SELECTING ID AND CLASSES*/

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

/*FOR IDs*/
let firstName = id('firstname'),
    lastName = id('lastname'),
    email = id('email'),
    password = id('password'),
    form = id('form');


/*FOR CLASSES*/
let errorIcon = classes('error-icon'),
    errorMessage = classes('error-message');


/*EVENT LISTENER*/
form.addEventListener('submit', (e) => {
    e.preventDefault();

    formEngine(firstName, 0, 'First Name cannot be empty');
    formEngine(lastName, 1, 'Last Name cannot be empty');
    formEngine(email, 2, ' Looks like this is not an email');
    formEngine(password, 3, 'psassword cannot be empty');

    /*PASSWORD PLACEHOLDER*/

    if (email.value == "") {
        email.placeholder = 'email@example/com';
        email.classList.add('email-placeholder');
    }
    else {
        email.placeholder = 'Email Address';
    }

})


let formEngine = (id, index, message)=> {

    if (id.value.trim() === "") {
        errorMessage[index].innerHTML = message;
        errorIcon[index].style.opacity = '1';
        id.placeholder = '';
        id.classList.add('error-red');
    }
    else {
        errorMessage[index].innerHTML = '';
        errorIcon[index].style.opacity = '0';
        id.classList.remove('error-red');
    }
}



