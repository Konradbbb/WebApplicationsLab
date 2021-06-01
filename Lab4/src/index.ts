import './main.scss';

import firebase from 'firebase';
import { firebaseConfig } from './config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const note = {
    title: 'First note1',
    content: 'First note content from code'
}


//adding new notes
// addNote(note);

async function addNote(note: any) {
    const res = await db.collection('notes').add(note);
}

//delete notes
// deleteNote('teldfpemuaqHmTddY6YV');
async function deleteNote(id: string) {
    const res = await db.collection('notes').doc(id).delete();
}

//update notes
// updateNote('linj2nz1FUpPnHsJNgvj', {title: 'update note', content: 'updated note from code'})
async function updateNote(id: string, note: any) {
    const res = await db.collection('notes').doc(id).update(note);
}

//get note 
// getNote('linj2nz1FUpPnHsJNgvj').then(res => console.log(res));
async function getNote(id: string) {
    return db.collection('notes').doc(id).get().then(res => ({id: res.id, data: res.data()}));
}



async function getNotes() {
    return db.collection('notes').get().then (res => ({size: res.size, docs: res.docs}));
}




document.getElementById("addNoteButton").addEventListener("click", () => {

    let noteTitle = (document.getElementById("inputTitle") as HTMLInputElement).value;

   let noteContent = (document.getElementById("inputContent") as HTMLInputElement).value;

   
   const containerElement = document.createElement("div");
   containerElement.className = "noteContainer";

   const titleElement = document.createElement("p");
   titleElement.innerHTML = noteTitle;

   const contentElement = document.createElement("p");
   contentElement.innerHTML = noteContent;

   containerElement.appendChild(titleElement);
    containerElement.appendChild(contentElement);

    document.getElementsByClassName("lessImportantNotes")[0].appendChild(containerElement);

})