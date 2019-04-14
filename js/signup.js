$( document ).ready(function() {
  /*   $.ajax({
        url: 'http://api.reimaginebanking.com/customers?key=14e76db44c0d76ef32abacebb8f5c903',
        success: function(results){
            alert("work");
            console.log(results);
        }
    }); */
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCweTYap4IJhr5BZE70I5vKp8g10Yj4QXk",
    authDomain: "bitcamp-tudev.firebaseapp.com",
    databaseURL: "https://bitcamp-tudev.firebaseio.com",
    projectId: "bitcamp-tudev",
    storageBucket: "bitcamp-tudev.appspot.com",
    messagingSenderId: "548659393485"
  };
  firebase.initializeApp(config);

  function btnRegister(){
  var email=$("#email").document.getElementById().val;
  alert(email);
  }
  
});