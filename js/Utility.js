const checkName = (name) => {
    let nameRegex= RegExp('^[A-Z][a-zA-Z]{2,}([ ][A-Z]([a-z]{1,})*)*$');
    if(!nameRegex.test(name)) throw "Name is Incorrect";
}

const checkTel = (tel) => {
    let telRegex = RegExp('^([\+]?[0-9]{2})?[-\.]?[ ]?[0-9]{10}$');
    if(!telRegex.test(tel)) throw "Phone Number is Incorrect";
} 