import React from "react";
import styled from "styled-components";



const Footer = () => {

    return(

        <>
        <Wrapper>
                <div className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Why choose us?</h3>
                    <p>We have more icons, services, and support in Pro. If you want them, you 
                        subscribe. No shenanigans. We won't sell your data, because we don't want to 
                        live in that world,and we don't want to run that company</p>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="/#">Home</a>
                    <a href="/#">About us</a>
                    <a href="/#">Services</a>
                    <a href="/#">Contact</a>
                    
                </div>



            </div>
        

        <h1 className="credit">created by <a href="/#">miss.Shilpa Gawade</a> | All rights reserved.</h1>

    </div>
    </Wrapper>
        </>
    )
}

const Wrapper = styled.section `

.footer{
    background: rgb(255 172 28);
}

.footer .box-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 30%;
}

.footer .box-container .box{
    margin: 2rem;
    flex:1 1 30rem;
}

.footer .box-container .box h3{
    font-size: 2.5rem;
    color: #fff;
}

.footer .box-container .box p{
    font-size: 1.4rem;
    color: #eee;
    padding:1rem 0;
}

.footer .box-container .box a{
    font-size: 1.8rem;
    color: #eee;
    padding: .4rem 0;
    display: block;
}

.footer .box-container .box a:hover{
    text-decoration: underline;
}

.footer .box-container .box:nth-child(2){
    text-align: center;
}

.footer .box-container form{
    display: flex;
    align-items: center;
}

.footer .box-container form input[type="email"]
{
    height: 4.1rem;
    width: 100%;
    font-size: 1.7rem;
    padding:0.1rem;
}

.footer .box-container form .btn{
    margin-top: 0;
}

.footer .box-container form .btn:hover{
    color:#333;
    background: #ccc;
}

.footer .credit{
    font-size: 2rem;
    background: #222;
    text-align: center;
    color: #fff;
    padding: 2rem 1rem;
    font-weight: normal;
}

.footer .credit a{
    color:var(--orange);

}

`;

export default Footer;