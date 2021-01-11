class AddressBookData {

    get id(){ 
        return this._id;
    }

    set id(id){ 
        this._id = id;
    }

    get name(){ 
        return this._name;
    }

    set name(name){ 
        let nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}([ ][A-Z]([a-z]{1,})*)*$');
        if(nameRegex.test(name)){
            this._name = name;
        } else {
            throw "Name is Incorrect";
        }
    }

    set address(address){ 
        this._address = address;
    }

    get address(){ 
        return this._address;
    }

    set city(city){ 
        this._city = city;
    }

    get city(){ 
        return this._city;
    }

    set state(state){ 
        this._state = state;
    }

    get state(){ 
        return this._state;
    }

    set zip(zip){ 
        this._zip = zip;
    }

    get zip(){ 
        return this._zip;
    }

    set tel(tel){ 
        let telRegex = RegExp('^([\+]?[0-9]{2})?[-\.]?[ ]?[0-9]{10}$');
        if(telRegex.test(tel)){
            this._tel = tel;
        } else {
            throw "Phone Number is Incorrect";
        }
    }

    get tel(){ 
        return this._tel;
    }

    toString(){
        return "id="+this.id+", name =" + this.name + ", address =" + this.address + ", city =" + this.city +
                ", state ="+ this.state +", zip ="+ this.zip +", Tel ="+ this.tel;
    }
} 