let addressBookList;
window.addEventListener('DOMContentLoaded', (event) =>{
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".contact-count").textContent = addressBookList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?
                        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th>Name</th><th>Address</th><th>City</th><th>State</th>"+
                       "<th>ZipCode</th><th>Phone Number</th><th>Actions</th>";
    if(addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`;                   
    for(const addressBookData of addressBookList){                   
        innerHtml = `${innerHtml}
            <tr>
                <td>${addressBookData._name}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zip}</td>
                <td>${addressBookData._tel}</td>
                <td>
                    <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${addressBookData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }        
    document.querySelector('#table-display').innerHTML = innerHtml;                   
};