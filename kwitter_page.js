//TUS ANLACES DE FIREBASE
var firebaseConfig= { 
  apiKey: "AIzaSyCNHIqS0Gg-hayXGklTvs3WtmcFH0HlXAA", 
  authDomain: "kwiter-f2563.firebaseapp.com", 
  databaseURL: "https://kwiter-f2563-default-rtdb.firebaseio.com", 
  projectId: "kwiter-f2563", 
  storageBucket: "kwiter-f2563.appspot.com", 
  messagingSenderId: "308945143671", 
  appId: "1:308945143671:web:bc4a3e25ae0730284b0372" 
}; 
  firebase.initializeApp(firebaseConfig);
  
  
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function enviar(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
       
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("el_pepe").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
        console.log(firebase_message_id);
        console.log(message_data);

        nombre = message_data['name'];

        message = message_data['message'];

        like = message_data['like'];

        name_with_tag = "<h4> " + nombre + "<img class='user_tick' src='tick.png'></h4>";

        message_with_tag = "<h4 class='message_h4' style='color:white';>" + message + "</h4>";

        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";

        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

        row = name_with_tag + message_with_tag + like_button + span_with_tag;

        document.getElementById("el_pepe").innerHTML += row;

//Termina código
      } });  }); }
getData();
function updateLike(message_id) {
  console.log("clicked on like button - " + message_id);
  
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
  });

}

//Agrega la función logout

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}



