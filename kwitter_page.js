var firebaseConfig = {
    apiKey: "AIzaSyDm6Fc2I2IeR5eRhoql9-67FpZTXjxJBIs",
    authDomain: "letschat--web-app-1.firebaseapp.com",
    databaseURL: "https://letschat--web-app-1-default-rtdb.firebaseio.com",
    projectId: "letschat--web-app-1",
    storageBucket: "letschat--web-app-1.appspot.com",
    messagingSenderId: "721615844380",
    appId: "1:721615844380:web:ef77b2e6491b8bad285bd9",
    measurementId: "G-VVN83G4SMV"
  };
  
firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();

function send(){
 msg= document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}
function logout() { localStorage.removeItem("user_name");
localStorage.removeItem("room_name"); 
window.location = "index.html"; 
}