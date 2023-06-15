import React, { useState } from "react";

const CreateNote = (props) =>{

    const [note, SetNote] = useState({
        title : "",
        content : "",
    });

    const OnChangeFunc = (event) =>{
        const {name, value} = event.target;
        SetNote( (prevData)=>{
            return{
                ...prevData, [name] : value,
            };
        });
        console.log(note);
    }

    const OnClickFunc = () =>{
        props.passNote(note);
        SetNote({
             title : "",
             content : "",
            })
    }

    return(
        <>
        <div className="create-note-main">
            <div className="create-note">
                <input className="create-note-input" type="text" placeholder="title" autoComplete="off" name="title" value={note.title} onChange={OnChangeFunc} /> 
                <textarea className="create-note-textarea" placeholder="Write a Note" value={note.content}
                name="content" onChange={OnChangeFunc}></textarea>
                <button onClick={OnClickFunc} className="create-note-button" type="button"><i class="fa-solid fa-plus addButton"></i></button>
            </div>
        </div>
       </>
    );
}

export default CreateNote; 