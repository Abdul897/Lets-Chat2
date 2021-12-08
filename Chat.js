const firebaseConfig = {
    apiKey: "AIzaSyAciQpt84cq2HVqqTUi71jL_XxevXm6LBY",
    authDomain: "lets-chat-8c23f.firebaseapp.com",
    projectId: "lets-chat-8c23f",
    storageBucket: "lets-chat-8c23f.appspot.com",
    messagingSenderId: "681904224913",
    appId: "1:681904224913:web:7ea8602a5ccb0fc4bf9d30",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  
function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="Chat.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="index.html";
}