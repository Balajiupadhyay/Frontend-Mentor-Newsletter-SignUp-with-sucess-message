let submitButton = document.getElementById('submit-btn');
let form = document.querySelector('.hide-form');
let sucessMessage = document.querySelector('.hide-sucess');

submitButton.addEventListener('click', function()
{
    let emailInput = document.querySelector('.email-input');
    let errorMessage = document.querySelector('.error-message');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(emailInput.value)) 
    {
        errorMessage.textContent = 'Valid email required.';

    } 
    else 
    {
        errorMessage.textContent = '';
        form.style.display= "none"
        sucessMessage.style.display= "block"
    }
});

let goBackButton = document.getElementById('go-back-btn');
goBackButton.addEventListener('click', function()
{
    if(form.style.display== "none")
    {
        form.style.display= "flex";
        sucessMessage.style.display= "none"
    }

})