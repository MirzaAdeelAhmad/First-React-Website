import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
 const App = () =>{
    const [addItem, SetaddItem] = useState([]);
    
    const addNote = (note) =>{
        SetaddItem( (Prevalue)=>{
            return[...Prevalue, note]
        })
        console.log(note);
    }

    const DeleteItem = (id) =>{
        SetaddItem( (olddata) =>
            olddata.filter( (currentData, indx)=>{
                return indx !== id;
            })
        )

    }

    return(
        <>
        <Header/>
        <CreateNote passNote = {addNote}/>

        <diV className="fullTop-main">
        {addItem.map( (val, index)=>{
            return  <Note
                id = {index}
                key = {index}
                title = {val.title}
                content = {val.content}
                func = {DeleteItem}
            />
        })}
        </diV>

        <Footer/>
        </>
    );
 }

 export default App;