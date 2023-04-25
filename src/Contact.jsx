import React from "react";

import {useFormik} from "formik";
import { signUpSchema } from "./Schema";
import styled from "styled-components";


    const initialValues = {
        name: "",
        email: "",
        password: "",
        message: "",
    };




    const Contact = () => {

    const {values,errors,resetForm,touched,handleBlur,handleSubmit,handleChange} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
            resetForm();
        
        }

       
    });



    return (

        <>
        <Wrapper>
        
        <div className="content"/>
        
        <h1 className="h1">Contact us</h1>
        
        <form  onSubmit={handleSubmit}>
        
            <label htmlFor="Name">Name</label><br/>
            <input type="text" name="name" 
             
            autoComplete="off"
            value={values.name}
            onBlur={handleBlur}
            
            onChange={handleChange}
            />
            {errors.name && touched.name? ( 
            <p className="form-error">{errors.name}</p>) :null}
            <br/><br/>
            <label htmlFor="Email">Email</label><br/>
            <input type="email" name="email"
            id="email" 
            autoComplete="off"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && touched.email? ( 
            <p className="form-error">{errors.email}</p>) :null}
            <br/><br/>
            <label htmlFor="password" >password</label><br/>
            <input type="password" name="password" 
            id="password" 
            autoComplete="off"
            onBlur={handleBlur}
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && touched.password? ( 
            <p className="form-error">{errors.password}</p>) :null}
            <br/><br/>
            <label htmlFor="Message">Message</label><br/>
            <textarea className="txtarea" col='5' row='4' 
            name="message" 
            id="message"
            autoComplete="off"
            onBlur={handleBlur}
            value={values.message}
            onChange={handleChange}
            >
            </textarea>
            {errors.message && touched.message? ( 
            <p className="form-error">{errors.message}</p>) :null}
            <button type="submit">Submit</button>
           
        </form>

        <img className="Con" src="./images/pic2.jpg" alt="24/7"/>
   
<div/>

</Wrapper>    


        </>
    )
}


const Wrapper = styled.section `




.content{
    background-color: rgb(255, 245, 238);
    height: 70%;
    width: 100%;
    padding: 390px 20px ;
    margin: 0px 0px;
}

form{
    top:200px;
    height:90%; 
    width:35%; 
    margin: 0px 40px 50px;
    padding: 10px 18px;
    position: absolute;
    background-color: whitesmoke;
    overflow: auto;
}

.form-error{
    color : red;
}

label{
    text-align: center;
    font-family: 'Arial';
    font-size: 20px;
    font-weight: normal;
    text-transform: capitalize;
    margin: 0 0px 0px;
}

input[type=email],
input[type=password],
input[type=text]{
    text-align: left;
    width: 95%;
    box-sizing: border-box;
    margin: 8px 0;
    padding: 12px 20px;
    
}

textarea{
    width: 95%;
    height: 20%;
}


button {
    background-color:rgb(255 172 28);
    text-decoration: none;
    width: 40%;
    box-sizing: border-box;
    margin: 30px 122px;
    padding: 12px 20px;
    cursor: pointer;
    height: 50px;
    font-size: 20px;
    color: white;
}

.h1{
    font-size: 40px;
    position: absolute;
    font-family: sans-serif;
    top: 130px;
    margin-left: 140px;
}

.Con{
    margin:0 0 0px 700px;
    top: 220px;
    height: 70%;
    width: 45%;
    position: absolute;
}

`;

export default Contact;