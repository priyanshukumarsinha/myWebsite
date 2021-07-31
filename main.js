width = window.innerWidth;
height = window.innerHeight;
window.onresize = changeVariables;
nav = document.querySelector("nav");
logo = document.querySelector(".logo");
container = document.querySelector(".container");
links = document.querySelector(".links");
hamDiv = document.querySelector(".ham")
icon = hamDiv.querySelector('i');
headerDiv = document.querySelector("header");
DP = document.querySelector("#profile")
hamDiv.style.display = 'none';
section1Div = document.querySelector(".section1")
section2Div = document.querySelector(".section2")
headerDiv.querySelector('div').style.height = height -100+'px';

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
        showHam();
    }
    container.style.padding= Vpadding+"px "+Hpadding+"px "+Vpadding+"px "+Hpadding+"px ";
}
function ham(cls){
    //show cross
    console.log(cls)
    if (cls === 'fas fa-bars'){
        links.style.display = '';
        icon.className = 'fas fa-times';
    }
    else{
        links.style.display = 'none';
        icon.className = 'fas fa-bars';


    }
}
function closeHam(){
    links.style.display = '';
}
function showHam(){
    hamDiv.style.display = '';
    links.style.display = 'none';
    links.querySelector('ul').style.display = 'inline';  
    container.style.position = 'relative';
    nav.style.display = 'inline-block';
    nav.style.width = '100%';
    logo.style.width = '100%';
    links.style.width = '100%';
    links.style.textAlign = 'center';
    li = links.querySelector('ul').querySelectorAll('li')
    DP.style.height = '180px'
    headerDiv.style.flexDirection = 'column-reverse';
    divList = headerDiv.querySelectorAll('div');
    sectionDiv = divList[0].querySelector('section');
    sectionDiv.style.marginTop = '0';
    spanList = sectionDiv.querySelectorAll('span')
    sectionDiv.style.textAlign = 'center';
    sectionDiv.style.width = '100%';
    links.style.fontSize = '15px';

    spanList[0].style.fontSize = '20px';
    spanList[1].style.fontSize = '10px';

    divList[1].style.alignItems = 'center'
    sectionDiv.style.paddingTop = '30px'
    section2DivList = section2Div.querySelectorAll('div.content > div')
    section2DivChildList = section2Div.querySelectorAll('div.content > div > div')

    for (let i = 0; i < section2DivList.length; i++) {
        section2DivList[i].style.display = 'block'

        for (let j = 0; j < section2DivChildList.length; j++) {
            section2DivChildList[j].style.width = '90%'
            section2DivChildList[j].style.marginLeft = '0'


        }

    }
    
    paraList = section1Div.querySelectorAll('p')
    section1Div.querySelector('span').style.fontSize = '20px'
    for (let i = 0; i < paraList.length; i++) {
        paraList[i].style.fontSize = '14px'
    }

    // document.querySelector('.container').style.height = height+'px';
    document.querySelector('.container-1').style.height = height-150+'px';
    document.querySelector('.container-1').style.display = 'flex'
    document.querySelector('.container-1').style.flexDirection = 'column'
    document.querySelector('.container-1').style.justifyContent = 'space-around'


    for (let i = 0; i < divList.length; i++) {
        divList[i].style.width= '100%'
        divList[i].style.height= ''



        
    }
    for (let i = 0; i < li.length; i++) {
        li[i].style.paddingTop = '20px'
        
    }
    
}

// 1366 695
// 1161 680 padding decrease
// 500 680 mobile starts


setLogoMargin(width);
setContainerPadding(width);




