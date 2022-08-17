//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the email input field
        const emailField = document.getElementById('user-email');
        const email = emailField.value;
        //console.log(email);
        
    //step-3: get password
        const passwordField = document.getElementById('user-paasword');
        const password = passwordField.value;
        //console.log(password);
    
    //step-4: verify email & password
        if((email === 'arafhussain11@gmail.com' && password === 'araf321') || (email==='program@gmail.com' && password === 'program321') || (email==='abc@gmail.com' && password === 'abc321') || (email==='ttahmina162@gmail.com' && password === 'tahmina#321')){
            window.location.href= 'bank.html';
        }
        else{
            alert('Please Enter Valid Email or Password')
        }
    });