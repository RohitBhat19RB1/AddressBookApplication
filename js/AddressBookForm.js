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

const save = () => {
    try{
        let addressBookData = createAddressBookData();
        createAndUpdateStorage(addressBookData);
    } catch(exception){
        return;
    }
}

function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const createAddressBookData = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.name = getInputValueById('#name');
    } catch(exception){
        setTextValue('.name-error', exception);
    }
    addressBookData.id = createNewId();
    addressBookData.address = getInputValueById('#address');
    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');
    addressBookData.zip = getInputValueById('#zip');
    addressBookData.tel = getInputValueById('#tel');
    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const createNewId = () => {
    let addressBookId = localStorage.getItem("AddressBookId");
    addressBookId = !addressBookId ? 1 : (parseInt(addressBookId) + 1).toString();
    localStorage.setItem("AddressBookId", addressBookId);
    return addressBookId;
};
