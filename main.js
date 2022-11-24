
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDBQoajA9b1XYknGIWIHnjWy6zQgu-G2ZQ",
    authDomain: "kwitter-dd3a0.firebaseapp.com",
    databaseURL: "https://kwitter-dd3a0-default-rtdb.firebaseio.com",
    projectId: "kwitter-dd3a0",
    storageBucket: "kwitter-dd3a0.appspot.com",
    messagingSenderId: "947520104187",
    appId: "1:947520104187:web:35b07bb65f8ebc8db2f25e",
    measurementId: "G-GHV5BW597Y"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function ai(){
    a= document.getElementById("un").value;
    firebase.database().ref("/").child(a).set({
        Name:"tanvi",
        Age:12
    }); 
  }