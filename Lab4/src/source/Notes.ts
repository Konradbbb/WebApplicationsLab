import {Note} from './Note';

export class Notes {

notesArr: Note[];

constructor(){
    this.notesArr = Array<Note>();
}

addNote(note: Note){
    console.log(this.notesArr);
    this.notesArr.push(note);
}

getNotes(): Note[]{

    return this.notesArr;

}

}