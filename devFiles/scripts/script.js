//search input
var search = document.getElementById('search');
var button = document.querySelector('.button-search');
var input = document.querySelector('.search input');
var buttonIcon = document.querySelector('.button-search i');
var basketValue = document.getElementById('basketValue');

button.onclick = function(){
    if (search.style.width === '29px'){
        search.style.width = 'auto';
        buttonIcon.style.backgroundImage = 'url(./icons/search.png)';
        button.style.backgroundColor = 'grey';
        
    } else {
        search.style.width = '29px';
        buttonIcon.style.backgroundImage = "url(./icons/search-black.png)";
        button.style.backgroundColor = 'white';
    }
};

input.onblur = function (){
    search.style.width = '29px';
    buttonIcon.style.backgroundImage = "url(./icons/search-black.png)";
    button.style.backgroundColor = 'white';
};


//login log out
var loginDiv = document.getElementById('login');
var logedIn = document.getElementById('loged-in');
var logedOut = document.getElementById('loged-out');


loginDiv.onclick = function(){
    if(logedIn.style.display === 'none'){
        logedOut.style.display = 'none';
        logedIn.style.display = 'inherit';
        basketValue.innerHTML = 4;
    } else {
        basketValue.innerHTML = 0;
        logedOut.style.display = 'inherit';
        logedIn.style.display = 'none';
    }
}