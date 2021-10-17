const regForm = document.querySelector('.contact-form')
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


regForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log("checking");
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    
    // console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'sucess'){
            alert('Registration Sucessfull!! for more details check your email inbox.');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }
        else {
            alert('Something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData));
    
})