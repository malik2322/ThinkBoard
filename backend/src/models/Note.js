import mongoose from "mongoose";


// create a schema for the note model. A schema is a blueprint for the data that will be stored in the database. It defines the structure of the document, default values, validators, etc.

// model based off that schema. A model is a class with which we construct documents. In this case, each document will be a note with properties and behaviors as declared in our schema.

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },

},{
    timestamps: true, // this will automatically add createdAt and updatedAt fields to the schema
});

const Note  = mongoose.model("Note", noteSchema);

export default Note;