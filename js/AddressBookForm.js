window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            nameError.textContent = "";
            return;
        }
        try{
            (new AddressBookData()).name = name.value;;
            nameError.textContent = "";
        } catch(exception){
            nameError.textContent = exception;
      }
    });

    const tel = document.querySelector('#tel');
    const telError = document.querySelector('.tel-error');
    tel.addEventListener('input', function(){
        if(tel.value.length == 0){
            telError.textContent = "";
            return;
        }
        try{
            (new AddressBookData()).tel = tel.value;;
              telError.textContent = "";
            } catch(exception){
                telError.textContent = exception;
            }
    });    
}); 
