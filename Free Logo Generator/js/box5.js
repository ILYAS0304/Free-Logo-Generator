function rantangellogo5(){
    let logobox5 = document.querySelector('.logobox5');
    let valu = document.querySelector('.input_field').value;
    let box_5_h = document.getElementById('box_5_h');
    let box_5_h2 = document.getElementById('box_5_h2');
    let box_5_tag = document.getElementById('box_5_tag')
    let arry = valu.split(" ");
   console.log("funciton is runing now what the ehe");
    if(valu.length < 15 && arry.length==1) {

        box_5_h.innerText = arry[0];
        box_5_h.style.letterSpacing="9px";
        box_5_h2.style.display="none";
        box_5_tag.style.display="none";
        logobox5.style.paddingRight="0px";
        logobox5.style.height="45px";
        console.log("ye kay hy ider to run ho rha hy");

    }else if(valu.length <= 18 && arry.length==2 ){
        box_5_h.innerText = arry[0];  
        box_5_h2.style.display="none";  
        box_5_tag.innerText=arry[1];

    }else if(valu.length < 25 && arry.length==3 ){
        box_5_h.innerText = arry[0];
        box_5_h2.innerText = arry[1];
        box_5_tag.innerText = arry[2];
        console.log('kwn work ni kr rha');
    
    }else{
        console.log("notshowings");
    }
}



