import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm () {
    
    const [values, setValues] = React.useState<{ [key:string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    
    return (
        <FullDiv className="col-md-6 d-flex align-items-center">
                <Form className="w-100">
                    <Form.Group>
                        <Form.Control
                            value={values.email || ''}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="email"
                            className="w-75 mx-auto"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            value={values.email || ''}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="password"
                            className="w-75 mx-auto"
                        />
                    </Form.Group>
                    <Button className="w-50 mx-auto" block>Submit</Button>
                    <small className="m-3 form-text text-muted text-center">Not a member yet? Register now.</small>
                </Form>
        </FullDiv>
    );
}

const FullDiv = styled.section`
    height: 100vh;

    @media (max-height: 815px) {
        height: 50vh;
    }

    @media (orientation: landscape) {
        min-height: 100vh;
    }
`;

export default LoginForm;