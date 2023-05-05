const firebaseConfig = {
    apiKey: "AIzaSyBQ9-rUKhPQJS3t3rsTutA33GCIErDE5PY",
    authDomain: "projekat-54816.firebaseapp.com",
    databaseURL: "https://projekat-54816-default-rtdb.firebaseio.com",
    projectId: "projekat-54816",
    storageBucket: "projekat-54816.appspot.com",
    messagingSenderId: "833525907510",
    appId: "1:833525907510:web:6191439d7581d1bd9a9897"
  };

  firebase.initializeApp(firebaseConfig);

  var broj=0;
  
  function addItem(adresa, problem, title, description){
    var list=document.getElementById('list');
    var header=document.createElement('h2');
    var _adresa=document.createElement('li');
    var _title=document.createElement('li');
    var _description=document.createElement('li');

    header.innerHTML=(++broj)+". "+problem;
    _adresa.innerHTML="Adress: "+adresa;
    _title.innerHTML="Title: "+title;
    _description.innerHTML="Description: "+description;

    list.appendChild(header);
    list.appendChild(_adresa);
    list.appendChild(_title);
    list.appendChild(_description);


  };

  function fecth(){
    var firebaseRef=firebase.database().ref("contactForm");
    firebaseRef.once("value", function(snapshot){
        var data=snapshot.val();
        snapshot.forEach(function(childSnapshot){

            let adres=childSnapshot.val().adres;
            let problem=childSnapshot.val().problem;
            let title=childSnapshot.val().title;
            let description=childSnapshot.val().description;
            console.log(adres, problem, title, description);
            addItem(adres, problem, title, description)
        });
    });
  };

  window.onload(fecth());