import React from "react";

const Note = (props) =>{
    const onclickFunction = () =>{
        props.func(props.id);
    }
    return(
        <>
            <div className="note">
                <h5>{props.title}</h5>
                <p className="content">{props.content}</p>
                <button onClick={onclickFunction} className="note-button" type="button"><i class="fa-solid fa-trash dell-button"></i></button>
            </div>
        </>
    );

}

export default Note;