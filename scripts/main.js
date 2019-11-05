let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kevin-1.png'){
        myImage.setAttribute('src','images/kevin-2.png');
    }
    else{
        myImage.setAttribute('src','images/kevin-1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(myName === null || !myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Kevin is next to God, ' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kevin is next to God, ' + storedName
}
myButton.onclick = function(){
    setUserName();
}