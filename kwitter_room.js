
https://kwitter-b1c4e-default-rtdb.firebaseio.com/

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
 
      });});}
getData();
