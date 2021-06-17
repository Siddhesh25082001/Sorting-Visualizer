// LogIn Form Validate function
function LogIn(){
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(username == ""){
        alert('Username Cannot Be blank');
        return false;
    }

    if(password == ""){
        alert('Password cannot Be blank');
        return false;
    } 

    return true;
}

// SignUp Form Validate function
function SignUp(){

    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(name == "") {
        alert('Name Cannot Be Blank');
        return false;
    }

    if(email == "") {
        alert('Email Cannot Be blank');
        return false;
    }
    
    if(username == ""){
        alert('Username Cannot Be blank');
        return false;
    }
   
    if(password.length < 4 || !letter.test(password) || !number.test(password)){
        
        if(password == ""){
            alert('Password cannot Be blank');
            return false;
        } 
        alert('Your Password is weak it must contain mixture of letter and number');
        return false;
    }

    return true;
}