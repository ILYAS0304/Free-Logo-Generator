function rantangellogo8(){
    let logobox8 = document.querySelector('.logobox4');
    let valu = document.querySelector('.input_field').value;
    let yourdesignlast = document.getElementById('yourdesignlast');
  
    let arry = valu.split(" ");
    console.log( '8very good');

  
    if(valu.length < 10 && arry.length ==1 ) {

        yourdesignlast.innerText = valu;
    }else if(valu.length < 15 && arry.length ==2 ) {

        yourdesignlast.innerText = valu;
    }
}
    
    


























////else {
        //let err = document.querySelector('.err');
       // err.style.display = "block";
       // setTimeout(() => {
           // err.style.display = "none";
       // }, 10000);
   // }
