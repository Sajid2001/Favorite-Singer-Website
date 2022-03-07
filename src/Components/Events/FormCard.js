import CustomButton from "../Buttons/CustomButton"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useLocation, useNavigate } from "react-router-dom";

const FormCard = ({headerText, subText}) => {
    const form = useRef();

    const navigate = useNavigate()

    const SignUp = async(e) => {
        e.preventDefault();
        await emailjs.sendForm('service_gvfpkm8', 'template_q4iv52b', form.current, process.env.REACT_APP_EMAILJS_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          
      });
    
      
      navigate('submitted');

    }

  return (

    <div data-aos="slide-left" className="my-3 mx-3 bg-white rounded-lg overflow-hidden shadow-lg">
        <form ref={form} className="rounded px-8 py-6 pb-8 my-2">
            <div className="mb-2">
                <h2 className="text-2xl pb-2 font-bold font-anton">{headerText}</h2>
                <h4 className="pb-3 font-inconsolata">{subText}</h4>
                
                <div className="items-center border-b border-red-400 py-2">
                    <label className="font-inconsolata"> First Name</label>
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type = "text" name="first_name"></input>

                </div>
                <div className="items-center border-b border-red-400 py-2">
                    <label className="font-inconsolata"> Last Name</label>
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type = "text" name="last_name" ></input>

                </div>
                <div className="items-center border-b border-red-400 py-2">
                    <label className="font-inconsolata"> Email</label>
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type = "email" name="email"></input>
                </div>
            </div>
            <div className="flex items-center justify-end mt-5">
                <CustomButton text = "Sign Up" onClick = {SignUp}/>
            </div>
        </form>
        
    </div>
  )
}
export default FormCard;
