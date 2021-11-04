function rantangellogo3() {

    let box3 = document.getElementsByClassName('box3');
    let logobox3 = document.querySelector('.logobox3');
    let valu = document.querySelector('.input_field').value;

    let colo3logo = document.getElementById('towcolor3logo');
    let colo4logo = document.getElementById('towcolor4logo');
    let colo5logo = document.getElementById('towcolor5logo');
    let arry = valu.split(" ");
    console.log(arry[1],arry[2],arry[0]);

    colo3logo.style.backgroundColor = '#1e81b0';

    colo5logo.style.backgroundColor = "white";
 
    colo3logo.style.color = "white";
    logobox3.fontFamily ="nexa";
    colo5logo.style.color = "#1e81b0";

    logobox3.style.border = "4px solid #1e81b0";
    logobox3.style.height = "49px";
    logobox3.style.color = "3px solid #9c27b0";
    
  

    if (valu.length < 11 && arry.length == 1) {

        colo3logo.innerText = arry[0];
        colo4logo.style.display = "none";
        colo5logo.style.display = "none";
 
        logobox3.style.height = "50px";
    } else if (valu.length < 18 && arry.length == 2) {

        colo3logo.innerText = arry[0];
        colo4logo.innerText = arry[1];
        colo5logo.style.display = "none";
      
        logobox3.style.height = "50px";

    } else if (valu.length < 11 && arry.length == 3) {

        colo3logo.innerText = arry[0];
        if (arry[1] == undefined) {
            colo4logo.innerText = "asm";
        } else {
            colo4logo.innerText = arry[1];
        }
    } else if (valu.length > 6 && arry.length == 3) {
        colo3logo.innerText = arry[0];
        colo4logo.innerText = arry[1];
        colo5logo.innerText = arry[2];
        console.log("function is not working");

    } else {
        console.log("funciton is 3 runing now what the ehe");


    }


}

