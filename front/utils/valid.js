const valid = (name, email, password, cf_password) => {
    if (!name || !email || !password || !cf_password) {
        return "please add all fields";
    }
    if (!validateEmail(email)){
        return 'Invalid Email'
    }
    if(password)
    if(password !== cf_password){
        return 'Password not match'
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}