
var firebaseConfig = {
    apiKey: "AIzaSyA8SVsE__eiRIzP08DqDruhF908hnWxlOA",
    authDomain: "kwitter-eafca.firebaseapp.com",
    databaseURL: "https://kwitter-eafca-default-rtdb.firebaseio.com",
    projectId: "kwitter-eafca",
    storageBucket: "kwitter-eafca.appspot.com",
    messagingSenderId: "956870854948",
    appId: "1:956870854948:web:a39df6a51bf527c31e4bb1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom(){
    room_name =document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
console.log("Room Name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
    });});}
getData();


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html"
}