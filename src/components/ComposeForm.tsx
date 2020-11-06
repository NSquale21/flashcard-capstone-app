import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ReactCardFlip from 'react-card-flip';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/card.css';

function ComposeForm() {

    const history = useHistory();
    
    const [values, setValues] = React.useState<{ [key: string] : string }>({});
    const [flip, setFlip] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/api/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...values, user_id: 1 })
        });
        if (res.ok) {
            const result = await res.json();
            history.push(`/decks/${result.insertId}`);
        }
    }
    
    return(
        <>
            <article className="col-md-6 my-5">
                <Form>
                    <Form.Group>
                        <Form.Control
                            name="title"
                            value={values.title || ''}
                            onChange={handleChange}
                            onFocus={() => setFlip(false)}
                            placeholder="Title"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            name="content"
                            value={values.content || ''}
                            onChange={handleChange}
                            onFocus={() => setFlip(true)}
                            placeholder="Content"
                            as="textarea" 
                            rows={5} />
                        <Form.Text className="text-muted">
                            Markdown is supported.
                        </Form.Text>
                    </Form.Group>
                    <Button className="w-75 mx-auto" onClick={handleSubmit} block>Create Card</Button>
                </Form>
            </article>
            <article className="col-md-6 my-5">
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <div className="flashcard mx-auto rounded shadow-sm" onClick={() => setFlip(!flip)}>
                        <ReactMarkdown source={values.title} />
                    </div>
                    <div className="flashcard mx-auto rounded shadow-sm" onClick={() => setFlip(!flip)}>
                        <ReactMarkdown source={values.content} />
                    </div>
                </ReactCardFlip>
                <div className="text-center text-muted mt-2">
                    {flip ? 'Back' : 'Front' }
                </div>
            </article>
        </>
    );
}

export default ComposeForm;