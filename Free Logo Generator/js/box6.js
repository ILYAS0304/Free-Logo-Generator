function rantangellogo6(){
    let logobox6 = document.querySelector('.logobox6');
    let valu = document.querySelector('.input_field').value;
    let hed = document.getElementById('hed');
    let teg = document.getElementById('teg');
  
    let arry = valu.split(" ");
 
if(arry.length ==1){
    hed.innerText = arry[0];
    teg.style.display = "none";
}else{
    hed.innerText = arry[0];
     
        teg.innerText = [arry[1],arry[2]];

}
    
   
}










////else {
        //let err = document.querySelector('.err');
       // err.style.display = "block";
       // setTimeout(() => {
           // err.style.display = "none";
       // }, 10000);
   // }
