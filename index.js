const userInput = document.getElementById('user-input');

function getUsers(event){
    let username = event.target.value.toLowerCase();
    const names = document.getElementsByClassName('name');
    //console.log(username);
    for(let i =0; i < names.length; i++){
        const currentName = names[i].textContent.toLowerCase();
        //console.log(currentName);
        if(currentName.includes(username)){
            names[i].style.display ='block';
        }
        else{
            names[i].style.display ='none';
        }
    }
}


userInput.addEventListener('keyup', getUsers);