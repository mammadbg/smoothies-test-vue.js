
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBbGs5pikPrCo69rK3yVxJjn-VQDLKpyyA",
    authDomain: "ninja-smoothies-6ceeb.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-6ceeb.firebaseio.com",
    projectId: "ninja-smoothies-6ceeb",
    storageBucket: "ninja-smoothies-6ceeb.appspot.com",
    messagingSenderId: "688636825680",
    appId: "1:688636825680:web:639fd8a514d77612454155",
    measurementId: "G-C6R1N049Z9"
}

const firebaseApp = firebase.initializeApp(config);


// export firestore database
export default firebaseApp.firestore()