import React from "react";
import styled from "styled-components";

const Services =() => {
    return(
        <>
        <Wrapper>
        <section className="service">
        <h3 className="h3">Services Provided</h3>
            <div className="box-container">
            

                <div className="box">
                    <i className="fas fa-tools"></i>
                    <h3>web development</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                         making it look like readable English.</p>
                </div>

                <div className="box">
                    <i className="fas fa-code"></i>
                    <h3>web design</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                         making it look like readable English.</p>
                </div>

               

                <div className="box">
                    <i className="fas fa-paint-brush"></i>
                    <h3>graphic design</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                         making it look like readable English.</p>
                </div>

                <div className="box">
                    <i className="fab fa-wordpress"></i>
                    <h3>wordpress</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                         making it look like readable English.</p>
                </div>

               


            </div> 

        </section>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section `


.service{
    min-height: 100vh;
    background: rgb(255, 245, 238);

}

.service .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem ;
    flex-wrap: wrap;
    padding: 1rem 0;
}

.service .box-container .box{
    background: #fff;
    margin: 1rem;
    padding: 1rem;
    width: 30rem;
    text-align: center;
    box-shadow: 0 0 .3rem rgba(0,0,0,.3);
}

.service .box-container .box i{
    font-size: 9rem;
    padding: 1rem;
    color: var(--orange);
}

.service .box-container .box h3{
    font-size: 3rem;
    color: #444;
    
}

.service .box-container .box p{
    font-size: 1.8rem;
    color: #666;
    padding: 1rem;

}

.h3{
    text-align: center;
    font-size: 50px;
    padding: 20px;
    color: black;
    font-family: 'Work Sans', sans-serif; ;
}

`;

export default Services;