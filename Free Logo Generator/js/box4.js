function rantangellogo4(){
 let   box4 = document.querySelector('.box4');
    let logobox4 = document.querySelector('.logobox4');
    let valu = document.querySelector('.input_field').value;
    let box_4_h = document.getElementById('box_4_h');
    let box_4_h2 = document.getElementById('box_4_h2');
    let box_4_tag = document.getElementById('box_4_tag')
    let arry = valu.split(" ");
    console.log( "box 4",arry);

  
    if(valu.length < 15 && arry.length==1) {
        logobox4.style.border = "3px solid white";
        box_4_h.innerText = arry[0];
        box_4_h2.style.display="none";
        box_4_tag.style.display="none";
        logobox4.style.lineHeight="27px";
        console.log("abto ho jana chaeye");
        logobox4.style.height = "36px";
        box_4_h.style.padding = "0px 0px";
        logobox4.style.padding = "0px 3px";
        box_4_h.style.letterSpacing = "4px";
        box_4_h.style.fontSize = "25px";
        box_4_h.style.marginLeft = "3px";
     
        box4.style.backgroundColor = "#842222";


    }else if(valu.length <= 30 && arry.length==2 ){

      
        box_4_h.innerText = arry[0];  
        box_4_h2.style.display="none";  
        box_4_tag.innerText=arry[1];

    }else if(valu.length < 25 && arry.length==3 ){
        
        box_4_h.innerText = arry[0];
        box_4_h2.innerText = arry[1];
        box_4_tag.innerText = arry[2];
        console.log('kwn work ni kr rha');
    
    }else{
        console.log("notshowings");
    }
}
    
    


function changefont2() {

    let valu = document.querySelector('.logo_submit').value;
    let lengthh = valu.length;
    let arry = valu.split(" ");
    let box1 = document.querySelector('.logobox');
    let msg = document.getElementById('msg');
    let yourdesign2 = document.getElementById('yourdesign2');
    let fontchange2 = document.querySelector('.fontchange2').value;
   



    if (fontchange2 == "anton") {

           if (lengthh <= 7 && arry.length <= 1) {
            yourdesign2.style.fontFamily = 'anton';
            yourdesign2.innerText = valu;
            box1.style.border = 5 + 'px solid white';
            yourdesign2.style.bottom = -95 + 'px';
            yourdesign2.style.lineHeight = 28 + 'px';
            yourdesign2.style.right = 7 + 'px'; 
            console.log("clicked");
          

        } else 

        if(arry.length == 2 && lengthh <= 13) 
        
        {

            yourdesign2.style.fontFamily = 'anton';
            yourdesign2.innerText = valu;
            box1.style2.border = 5 + 'px solid white';
            yourdesign2.style.bottom = -64 + 'px';
            yourdesign2.style.lineHeight = 28 + 'px';
            yourdesign2.style.right = 7 + 'px';


        } else if (arry.length >= 3 && lengthh <= 18) {
            yourdesign2.style.fontFamily = 'anton';
            yourdesign2.innerText = valu;
            box1.style.border = 5 + 'px solid white';
            yourdesign2.style.bottom = -33 + 'px';
            yourdesign2.style.lineHeight = 28 + 'px';
            yourdesign2.style.right = 7 + 'px';
        } else {
            console.log(" detect your mistake")
        }
    }

    if (fontchange2 == "bebas") {

    }

    if (fontchange2 == 'nexabold') {

        if (lengthh <= 6 && arry.length <= 1) {
            let yourdesign = document.getElementById('yourdesign');
            yourdesign2.innerText = valu;
            box1.style.border = 4 + 'px solid white';
            yourdesign2.style.fontFamily = 'Nexa Bold';
            yourdesign2.style.right = 7 + "px";
            if (yourdesign2.style.bottom = -52 + "px") {
                yourdesign2.style.bottom = -102 + "px";
            }

            else if (yourdesign2.style.bottom = -90 + "px") {
                yourdesign2.style.bottom = -102 + "px";
            }
            console.log("helos");

        } else if (arry.length == 2 && lengthh <= 12) {
            let yourdesign2 = document.getElementById('yourdesign');
            box1.style.border = 4 + 'px solid white';
            yourdesign2.style.fontFamily = 'Nexa Bold';
            yourdesign2.innerText = valu;
            yourdesign2.style.bottom = -77 + "px";
            yourdesign2.style.right = 7 + "px";
            console.log("helos2 ", arry.length);

        } else if (arry.length >= 3 && lengthh <= 15) {
            let yourdesign2 = document.getElementById('yourdesign');
            box1.style.border = 4 + 'px solid white';
            yourdesign2.style.fontFamily = 'Nexa Bold';
            yourdesign2.innerText = valu;
            yourdesign2.style.bottom = -52 + "px";
            yourdesign2.style.right = 7 + "px";
            console.log("helos3");
        } else {
            console.log(" detect your mistake")
        }


    }

    if (fontchange2 == "Ethnocentric Rg") {
        yourdesign2.style.fontFamily = 'Ethnocentric Rg';
        msg.style.display = 'block';
    }
}
///////////////////////// background color changed \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function backgroundcolor2(color) {
    let yourdesign2 = document.getElementById('towcolorlogo');
    let yourdesign22 = document.getElementById('towcolor2logo');
    let divbox2 = document.querySelector('.box2');
    let themee = document.getElementById('theme2').value;
    divbox2.style.backgroundColor = themee;
    yourdesign2.style.color=themee;
  
    console.log(divbox2);

}


function changebackground2() {
   
    let towcolorlogo = document.getElementById('towcolorlogo');
    let towcolor2logo = document.getElementById('towcolor2logo');
    let logodiv2 = document.querySelector('.box2');
    let logobox2 = document.querySelector('.logobox2');
    let themee = document.getElementById('theme2').value;
   let theme = document.getElementById('option_bar2').value;
    console.log(theme);
   

      if (themee == "Black&white") {

        towcolorlogo.style.color = "white";
        towcolor2logo.style.backgroundColor = "themee";
            logodiv2.style.backgroundColor = "themee";
            logobox2.style.borderColor = "black";

            console.log("verygoodwork");

        } else if (theme == "Blue&Gray") {

            logobox2.style.borderColor = "rgb(85, 89, 92)";
            towcolor2logo.style.color = "rgb(0, 60, 130)";
            towcolorlogo.style.backgroundColor = "rgb(85, 89, 92)";
            logodiv2.style.backgroundColor = "themee";


        } else if (theme == "Red&black") { 

            logobox2.style.borderColor = "red";
            towcolor2logo.style.color = "black";
            towcolorlogo.style.backgroundColor = "red";
            logodiv2.style.backgroundColor = "themee";

        } else if(theme == "white&black") {

            yourdesign2.style.color = "white";
            yourdesign2.style.backgroundColor = "themee";
            logodiv2.style.backgroundColor = "themee";
           

        }

    }



///////////////////////// background color changed \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function changebackgroundd() {


    let logodiv = document.querySelector('.logodiv');
    let logobox = document.querySelector('.logobox');
    yourdesign.style.color = "white";
    yourdesign.style.backgroundColor = "black";
    logodiv.style.backgroundColor = "black";
    logodiv.style.border = "1px solid white";
    logobox.style.border = " 5px solid white";




}


























////else {
        //let err = document.querySelector('.err');
       // err.style.display = "block";
       // setTimeout(() => {
           // err.style.display = "none";
       // }, 10000);
   // }
