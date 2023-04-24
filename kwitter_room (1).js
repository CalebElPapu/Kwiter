      var firebaseConfig = {
      apiKey: "AIzaSyCNHIqS0Gg-hayXGklTvs3WtmcFH0HlXAA",
      authDomain: "kwiter-f2563.firebaseapp.com",
      databaseURL: "https://kwiter-f2563-default-rtdb.firebaseio.com",
      projectId: "kwiter-f2563",
      storageBucket: "kwiter-f2563.appspot.com",
      messagingSenderId: "308945143671",
      appId: "1:308945143671:web:bc4a3e25ae0730284b0372"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function addRoom() {
      
      window.location.replace("kwitter_page.html");
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
        purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

}
      function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Inicio del código
       console.log("Room Name - " + room_name);

       row = "<div class= 'room_name' id="+ room_name + " onclick='redirectToRoomName(this.id)' >#"+room_name + "</div><hr>";
      document.getElementById("ouput").innerHTML +=row;
      
       //Final del código
      });});}
getData();

      function redirectToRoomName(room_name) {
            console.log(Room_names);
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }
