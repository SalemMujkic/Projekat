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

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var problem=document.querySelector('input[name="problem"]:checked').value;;
    var adres=getElementVal("adress");
    var title=getElementVal("title");
    var description = getElementVal("description");
    var name=getElementVal("name");
    var surname=getElementVal("surname");
    var contact = getElementVal("contact");
    
  
    saveMessages(problem,adres, title, description, name, surname, contact);
  
    
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (problem, adres, title, description, name, surname, contact) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      problem: problem,
      adres: adres,
      title: title,
      description: description,
      name: name, 
      surname: surname,
      contact: contact,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  