import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

function Hero() {
    return (
        <section className="col-md-6">
            <StyledHero className="row justify-content-center align-items-center">
                <Image style={{ width: "75%", height: "75%"}} src="https://capstone-flashcard-app.s3.us-east-2.amazonaws.com/CodeBlox.svg" alt="CodeBlox Logo" />
            </StyledHero>
        </section>
    );
}

const StyledHero = styled.div`
    height: 100vh;
    background: #1E1E1E;
`;

export default Hero;