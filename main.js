width = window.innerWidth;
height = window.innerHeight;
window.onresize = changeVariables;
nav = document.querySelector("nav");
logo = document.querySelector(".logo");
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
        Hpadding = 20;
        Vpadding = 20;
        showHam()
    }
    nav.style.padding= Vpadding+"px "+Hpadding+"px "+Vpadding+"px "+Hpadding+"px ";
}

function showHam(){
    // links.style.display = 'none';
}

// 1366 695
// 1161 680 padding decrease
// 500 680 mobile starts


setLogoMargin(width);
setContainerPadding(width);




