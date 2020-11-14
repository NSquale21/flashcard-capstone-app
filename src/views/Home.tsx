import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import LoginForm from '../components/LoginForm';
import Container from 'react-bootstrap/Container';

function Home() {
    return(
        <Container fluid>
            <FullDiv className="row">
                <Hero />
                <LoginForm />
            </FullDiv>
        </Container>
    );
}

const FullDiv = styled.main`
    height: 100vh;
`;

export default Home;