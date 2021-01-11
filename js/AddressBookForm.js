window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        let nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}([ ][A-Z]([a-z]{1,})*)*$');
        if(nameRegex.test(name.value)){
            nameError.textContent = "";
        } else {
            nameError.textContent = "Name is Incorrect";
        }
    });

    const tel = document.querySelector('#tel');
    const telError = document.querySelector('.tel-error');
    tel.addEventListener('input', function(){
        let telRegex = RegExp('^([\+]?[0-9]{2})?[-\.]?[ ]?[0-9]{10}$');
        if(telRegex.test(tel.value)){
            telError.textContent = "";
        } else {
            telError.textContent = "Phone Number is Incorrect";
        }
    });    
}); 
