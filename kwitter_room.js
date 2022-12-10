var firebaseConfig = {
      apiKey: "AIzaSyAfX5yYngJBAoIQwAuzA0esdajZvBX1FoY",
      authDomain: "chating-c42f6.firebaseapp.com",
      databaseURL: "https://chating-c42f6-default-rtdb.firebaseio.com",
      projectId: "chating-c42f6",
      storageBucket: "chating-c42f6.appspot.com",
      messagingSenderId: "811918479091",
      appId: "1:811918479091:web:d7c866884030650201b186"
    };
  
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
      document.getElementById("user_name").innerHTML = "Hola, " + user_name;

      function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"addingroom name"});
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

    
function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
       console.log("room name " + Room_names);
       row = "<div class='room_name' id= " + Room_names + "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getRoom();

function redirectToRoomName(Room_names)
{
      console.log(Room_names);
      localStorage.setItem("room_name", Room_names);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}