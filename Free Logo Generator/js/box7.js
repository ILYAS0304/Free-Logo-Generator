function rantangellogo7(){
    let logobox7 = document.querySelector('.logobox7');
    let valu = document.querySelector('.input_field').value;
    let towcolorlogo1 = document.querySelector('#boxtext');
    let towcolor2logo2 = document.querySelector('#boxtext2');
  
    let arry = valu.split(" ");
    console.log( arry);

  
    towcolorlogo1.innerText = arry[0];
    towcolor2logo2.innerText = arry[1];
    

    
}
    
    

