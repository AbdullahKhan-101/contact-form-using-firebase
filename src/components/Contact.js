import React, { useState } from 'react'
import '../App.css'
import { db } from '../firebase'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoader(true)
        db.collection("Contats").add({
            name:name,
            email:email,
            message:message,
        })
        .then(()=>{
            alert('message send successfully');
            setLoader(false)
        })
        .catch((error)=>{
            alert(error.message);
            setLoader(false)
        });
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
            <h1>Contact Form</h1>
                <label>Name</label><br/>
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
                
                <label>Email</label><br/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                
                <label>Message</label><br/>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="message"/>

                <button type="submit" style={{background : loader ?  "color: rgb(233, 231, 231)" : "rgb(10, 97, 209)"}}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
