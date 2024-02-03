// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZZtZMLaBmcPq54UbJPJfjH2Q7EQC8J6E",
    authDomain: "kwitter-540ac.firebaseapp.com",
    databaseURL: "https://kwitter-540ac-default-rtdb.firebaseio.com",
    projectId: "kwitter-540ac",
    storageBucket: "kwitter-540ac.appspot.com",
    messagingSenderId: "635590586872",
    appId: "1:635590586872:web:973f4b465bf92258f0e60d"
  };
  
  
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database(). ref("/").child(user_name).update({
        purpose : "adding user"
    });

}