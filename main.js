width = window.innerWidth;
height = window.innerHeight;
window.onresize = changeVariables;
nav = document.querySelector("nav");
logo = document.querySelector(".logo");
container = document.querySelector(".container");
links = document.querySelector(".links");


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

function showHam(){
    // links.style.display = 'inline';
    links.querySelector('ul').style.display = 'inline';  
    container.style.position = 'relative';
    nav.style.display = 'inline-block';
    nav.style.width = '100%';
    links.style.width = '90%';
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




