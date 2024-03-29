const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var NoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }

})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
