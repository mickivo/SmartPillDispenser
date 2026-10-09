const firebaseConfig = {
  apiKey: "AIzaSyCpoXltcvLyITSGGtz35m-m57AEAMIHnmM",
  authDomain: "kotakubat-smart-default-rtdb.firebaseapp.com",
  databaseURL: "https://kotakubat-smart-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kotakubat-smart-default-rtdb",
  storageBucket: "kotakubat-smart-default-rtdb.appspot.com",
  messagingSenderId: "1083981881263",
  appId: "1:1083981881263:web:0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

function getDeviceIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id') || "SPD-2026-001";
}

const DEVICE_ID = getDeviceIdFromUrl();