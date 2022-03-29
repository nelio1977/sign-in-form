
const loginInput = document.getElementById('loginInput');
const loginPassword = document.getElementById('loginPassword');
const createAccountInput = document.getElementById('createAccountInput');
const createAccountEmail = document.getElementById('createAccountEmail')
const createAccountPassword = document.getElementById('createAccountPassword');
const createAccountPassword2 = document.getElementById('createAccountPassword2');


function login() {
    return loginInput.validity.valid;
}

function password() {
    return loginPassword.validity.valid;
}

function create() {
    return createAccountInput.validity.valid;
}

function createClass() {
    return createAccountInput.classList;
}

function createSiblingClass() {
    return createAccountInput.nextElementSibling.classList;
}

function email() {
    return createAccountEmail.validity.valid;
}

function emailClass() {
    return createAccountEmail.classList;
} 

function emailSiblingClass() {
    return createAccountEmail.nextElementSibling.classList;
}

function password1() {
    return createAccountPassword.validity.valid;
}

function password1Class() {
    return createAccountPassword.classList;
}

function password1SiblingClass() {
    return createAccountPassword.nextElementSibling.classList;
}

function password2() {
    return createAccountPassword2.validity.valid;
}

function password2Class() {
    return createAccountPassword2.classList;
}

function password2SiblingClass() {
    return createAccountPassword2.nextElementSibling.classList;
}

function logInClass() {
    return loginInput.classList;
}

function logInSiblingClass() {
    return loginInput.nextElementSibling.classList;
}

function passwordClass() {
    return loginPassword.classList;
}

function passwordSiblingClass() {
    return loginPassword.nextElementSibling.classList;
}

function parentElementClass() {
    return  createAccountInput.parentElement.querySelector('.username_error').classList;
}

document.addEventListener('DOMContentLoaded', e => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');
    
    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add('hidden-form')
        createAccountForm.classList.remove('hidden-form')
    })
    document.querySelector('#linkLogin').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('hidden-form')
        createAccountForm.classList.add('hidden-form')
    })


    loginInput.addEventListener('input', e => {
        if(login()) {
            logInClass().remove('error');
            logInSiblingClass().remove('show')
        }
    });

    loginPassword.addEventListener('input', e => {
        if(password()) {
            passwordClass().remove('error');
            passwordSiblingClass().remove('show')
        }
    });

    createAccountInput.addEventListener('blur', e => {
        if(createAccountInput.value.length < 8) {
            createClass().add('error');
            parentElementClass().add('show-error');
        }
    });

    createAccountInput.addEventListener('input', e => {
        if(create()) {
            createClass().remove('error')
            createSiblingClass().remove('show')
            parentElementClass().remove('show-error');
        }   
    });

    createAccountEmail.addEventListener('input', e => {
        if(email()) {
            emailClass().remove('error')
            emailSiblingClass().remove('show')
        }    
    });
    
    createAccountPassword.addEventListener('input', e => {
        if(password1()) {
            password1Class().remove('error')
            password1SiblingClass().remove('show')
        }
    });
    createAccountPassword2.addEventListener('input', e => {
        if(password2()) {
            password2Class().remove('error')
            password2SiblingClass().remove('show')
        }
    });
    

    loginForm.addEventListener('submit', e => {
        if(!(login())) {
            logInClass().add('error')
            logInSiblingClass().add('show')
            e.preventDefault();
        }
        if(!(password())) {
            passwordClass().add('error')
            passwordSiblingClass().add('show')
            e.preventDefault();
        }
    });
    
    createAccountForm.addEventListener('submit', e => {
        if(!(create())) {
            createClass().add('error')
            createSiblingClass().add('show')
            e.preventDefault();
        }
        if(!(email())) {
            emailClass().add('error')
            emailSiblingClass().add('show')
            e.preventDefault();
        }
        if(!(password1())) {
            password1Class().add('error')
            password1SiblingClass().add('show')
            e.preventDefault();
        }
        if(!(password2())) {
            password2Class().add('error')
           password2SiblingClass().add('show');
            e.preventDefault();
        } 
        if(createAccountPassword.value !== createAccountPassword2.value) {
            alert("Passwords do not match. Try again.")
            password1Class().add('error')
            password2Class().add('error')
            e.preventDefault();
        }
    });  
});


























