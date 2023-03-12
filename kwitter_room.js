// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
function addRoom()
  { 
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("roomname", room_name);
      window.location = "kwitter_page.html";
      firebase.database().ref("/").child(room_name).update({
          purpose : "Adding Room Name"
      });
      
  }
  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; 
       }); }); }
  getData();
  function redirectToRoomName(name) {
    console.log(name);
     localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
     }
function logout() { localStorage.removeItem("user_name");
     localStorage.removeItem("room_name"); 
     window.location = "index.html"; 
}

    

  
