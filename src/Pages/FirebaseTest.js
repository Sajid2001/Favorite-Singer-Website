import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

const FirebaseTest = () => {

    //inputs the new data
    const [newFullName, setNewFullName] = useState("")
    const [newEmail, setNewEmail] = useState("")

    //grabs all the data
    const [emails,setEmails] = useState([]);

    //reference to the EmailList
    const emailsReference = collection(db,"emails")

    //adds the email in
    const SignUp = async () => { 
        await addDoc(emailsReference,{fullName:newFullName, email: newEmail})
    }

    const deleteEmail = async(id) => {
        const userDoc = doc(db,"emails",id);
        await deleteDoc(userDoc);
    }


    useEffect(() => {
        const getEmails = async () => {
            
            const data = await getDocs(emailsReference);
            setEmails(data.docs.map((doc => ({...doc.data(), id:doc.id}))))
        }

        getEmails()
    },[])

    return (
        <div>
            <input placeholder='Full Name' onChange={(event) => {setNewFullName(event.target.value)}}/>
            <input placeholder='Email'onChange={(event) => {setNewEmail(event.target.value)}}/>
            <button onClick={SignUp}>Sign Up</button>

            {emails.map((user) =>{
            return (
                <div>
                    {" "}
                    <h1>Name: {user.fullName}</h1>
                    <h1>email: {user.email}</h1>
                    <button onClick={() => {deleteEmail(user.id)}}>Delete User</button>
                </div>
            );
                
        })}
        </div>
    );

}           

export default FirebaseTest