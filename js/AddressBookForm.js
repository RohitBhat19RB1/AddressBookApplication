let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            setTextValue('.name-error',"");
            return;
        }
        try{
            checkName(name.value);
            setTextValue('.name-error',"");
        } catch(exception){
            setTextValue('.name-error', exception);
      }
    });

    const tel = document.querySelector('#tel');
    tel.addEventListener('input', function(){
        if(tel.value.length == 0){
            setTextValue('.tel-error',"")
            return;
        }
        try{
            checkTel(tel.value);
            setTextValue('.tel-error',"")
       } catch(exception){
        setTextValue('.tel-error', exception);
    }
    });  
    checkForUpdate();
}); 

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try{
        setAddressBookObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch(exception){
        return;
    }
}

const setAddressBookObject = () => {
    if(!isUpdate && site_properties.use_local_storage.match("true")){
        addressBookObj.id = createNewId();
    }
    addressBookObj._name= getInputValueById('#name');
    addressBookObj._address = getInputValueById('#address');
    addressBookObj._city = getInputValueById('#city');
    addressBookObj._state = getInputValueById('#state');
    addressBookObj._zip = getInputValueById('#zip');
    addressBookObj._tel = getInputValueById('#tel');
};

function createAndUpdateStorage() {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList) {
        let addressBookDetails = addressBookList.find(personData => personData.id == addressBookObj.id);
        if(!addressBookDetails){                     
            addressBookList.push(addressBookObj);
        } else {
            const index = addressBookList
                          .map(personData => personData.id)
                          .indexOf(addressBookDetails.id);
            addressBookList.splice(index, 1, addressBookObj);              
        }
    } else {
        addressBookList = [addressBookObj];
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

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem("editPerson");
    isUpdate = addressBookJson ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}; 

const setForm = () => {
    setValue("#name", addressBookObj._name);
    setValue("#address", addressBookObj._address);
    setValue("#city", addressBookObj._city);
    setValue("#state", addressBookObj._state);
    setValue("#zip", addressBookObj._zip);
    setValue("#tel", addressBookObj._tel);
};

const resetForm = () => {
    setValue("#name", "");
    setValue("#address", "");
    setValue("#city", "");
    setValue("#state", "");
    setValue("#zip", "");
    setValue("#tel", "");
};  

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}; 

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}; 
