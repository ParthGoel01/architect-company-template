document.addEventListener('DOMContentLoaded',function(){
    let Mode = ['<i class="fa-solid fa-sun" style="color: #ffffff;"></i>','<i class="fa-solid fa-moon"></i>'];
    let i=1;
    document.getElementById('toggle_button').addEventListener('click',()=>{
        document.body.classList.toggle('dark-theme');
        document.getElementById('toggle_button').innerHTML=Mode[(i+1)%2];
        i=(i+1)%2;
    })

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let comment = document.getElementById('comment');
    let submit = document.getElementById('submit');

    name.addEventListener('keypress',(e)=>{
        if(e.key==='Enter' && name.value.trim()===''){
            alert('Enter Name');
        }
        else if(e.key==='Enter'){
            name.blur();
            email.focus();
        }
    })
    email.addEventListener('keypress',(e)=>{
        if(e.key==='Enter' && email.value.trim()===''){
            alert('Enter Email');
        }
        else if(e.key==='Enter'){
            email.blur();
            subject.focus();
        }
    })
    subject.addEventListener('keypress',(e)=>{
        if(e.key==='Enter' && subject.value.trim()===''){
            alert('Enter Subject');
        }
        else if(e.key==='Enter'){
            subject.blur();
            comment.focus();
        }
    })
    comment.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){
            comment.blur();
            submit.click();
        }
    })
    
    submit.addEventListener('click',()=>{
        if(name.value.trim()===''){
            name.focus();
        }
        else if(email.value.trim()===''){
            email.focus();
        }
        else if(subject.value.trim()===''){
            subject.focus();
        }
        else{
            // document.querySelectorAll('.input').forEach(element => {
            //     element.value="";
            // });
            alert('Information recieved! We will contact you soon.')
        }
    });

    const form = document.getElementById("myForm");
    form.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });
    form.querySelector('button[type="submit"]').addEventListener("click", function () {
        form.submit();
    });
});