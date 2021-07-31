width = window.innerWidth;
height = window.innerHeight;
window.onresize = changeVariables;
nav = document.querySelector("nav");
logo = document.querySelector(".logo");
container = document.querySelector(".container");
links = document.querySelector(".links");
icon = document.querySelector(".ham").querySelector('span');


function setLogoMargin(width){
    logo.style.width  = (width-300)/2 +'px';
    links.style.width  = (width - (width-300)/2) +'px';

}

function changeVariables(){
    width = window.innerWidth;
    height = window.innerHeight;
    console.log(width,height)
    links.style.display = '';
    setLogoMargin(width)
    setContainerPadding(width);

}

function setContainerPadding(width){
    Vpadding = 50;
    Hpadding = 150;
    if (width<= 1080 & width>830){
        Hpadding = 100;
    }
    else if (width<= 830  & width>500){
        Hpadding = 50;
    }
    else if (width<=500){
        Hpadding = 25;
        Vpadding = 25;
        
        showHam()
    }
    nav.style.padding= Vpadding+"px "+Hpadding+"px "+Vpadding+"px "+Hpadding+"px ";
}
function ham(){
    //show cross
    
    if (icon.innerText === 'ham'){
        links.style.display = '';
        icon.innerText = 'close';
    }
    else{
        links.style.display = 'none';
        icon.innerText = 'ham';

    }
}
function closeHam(){
    links.style.display = '';
}
function showHam(){
    links.style.display = 'none';
    links.querySelector('ul').style.display = 'inline';  
    container.style.position = 'relative';
    nav.style.display = 'inline-block';
    nav.style.width = '100%';
    logo.style.width = '95%';
    links.style.width = '95%';
    links.style.textAlign = 'center';
    li = links.querySelector('ul').querySelectorAll('li')
    for (let i = 0; i < li.length; i++) {
        li[i].style.paddingTop = '20px'
        
    }
    
}

// 1366 695
// 1161 680 padding decrease
// 500 680 mobile starts


setLogoMargin(width);
setContainerPadding(width);




