import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeGzYOm0sqAm-RGMfwIwLyVzrI8TfhDbc",
    databaseURL: "https://ucla-dining-plus.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.database();
dbh.goOnline();

export function getDatabase() {
    return dbh;
}

export function fromMenuItemToDBKey(item) {
    return `${item.location} ${item.name.replace(/[\\!@#$%^&*()-=_+~`;:'",./<>?{}\]\[|]/g, "")}`;
}