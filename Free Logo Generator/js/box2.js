function rantangellogo2() {
    console.log('2functin is running now');
    let logobox2 = document.querySelector('.logobox2');
    let valu = document.querySelector('.input_field').value;
    let colo1logo = document.querySelector('#towcolorlogo');
    let colo2logo = document.querySelector('#towcolor2logo');
 
    let arry = valu.split(" ");
    colo1logo.style.backgroundColor = 'rgb(0, 60, 130)';
    colo1logo.style.color = "white";
    console.log("funciton is 2runing now what the ehe");
    colo2logo.style.color = "rgb(85, 89, 92)";
    logobox2.style.border = "4px solid rgb(0, 60, 130)";
  
    
    if (valu.length < 20 && arry.length==1) {
        colo1logo.innerText = arry[0];
        colo2logo.style.display="none";
        logobox2.style.borderRadius = "39px";
        colo1logo.style.padding = "5px 15px";
        colo1logo.style.borderRadius = "30px";
        logobox2.style.padding = "4px 5px";
        logobox2.style.lineHeight = "31px";
    }else if (valu.length < 20 && arry.length==2) {

        colo1logo.innerText = arry[0];
        if (arry[1] == undefined) {
            colo2logo.innerText = "asm";
        } else {
            colo2logo.innerText = arry[1];
        }

    } 
}







