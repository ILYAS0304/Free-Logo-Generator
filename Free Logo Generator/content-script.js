




setTimeout(() => {
 // document.getElementById('cvpTabUpload').click();
  document.getElementById('entry-title').value= "logo design";
  
}, 15000);

  var i = 0;
 var  txt =  `Hi there, freelancer gives you an option. Please tap on my name you
   will find a chat option and please come to private chat. I show you more ideas and variations.Thanks,`;
  var speed = 10;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('entry-title').innerHTML += txt.charAt(i);
      document.getElementById("entry-description").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();


 // document.addEventListener("DOMNodeInserted", function(evt) {
   // document.getElementById('entry-submit').click();

  //  setTimeout(() => {


    //  let closebtn = document.getElementById('contest-success-modal');
// closebtn.lastElementChild.firstElementChild.click();
  //document.getElementById('entry-submit').click();
      
   // }, 3000);
    
//}, false);


  