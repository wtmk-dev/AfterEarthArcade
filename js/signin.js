
function onclick_logIn()
{
    
}

function onclick_register()
{
    var emailValue = document.getElementById('email').value;

    const userData = 
    {
        email: emailValue,
    }

    fectch('https://aea-cmd-d3d2a4510890.herokuapp.com/reg', 
    {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'index.html'
        } else {
            console.log("response bad")
        }
    })
    .catch(error => {
        console.log("response error")
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('logIn');
    var registerButton = document.getElementById('register');

    if (loginButton) 
    {
        loginButton.addEventListener('click', onclick_logIn);
    }

    if(registerButton)
    {
        registerButton.addEventListener('click', onclick_register);
    }
});