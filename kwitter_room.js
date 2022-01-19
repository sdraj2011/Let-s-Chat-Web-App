
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBy9qrxC6n9iA2BM3h9YKUTuzKW05o6ODA",
      authDomain: "kwitter-54f48.firebaseapp.com",
      databaseURL: "https://kwitter-54f48-default-rtdb.firebaseio.com",
      projectId: "kwitter-54f48",
      storageBucket: "kwitter-54f48.appspot.com",
      messagingSenderId: "559995481959",
      appId: "1:559995481959:web:d75fd494bdf672dcc8c9c2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
