import React from 'react';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DeckCard from '../components/DeckCard';
import { useParams } from 'react-router-dom';
import { Deck } from '../utils/types';
import { VscAdd } from 'react-icons/vsc';

function DecksPage() {

    const { id } = useParams<{ id: string }>();

    const [decks, setDecks] = React.useState<Deck[]>([]);
    const [selectedDecks, setSelectedDecks] = React.useState<string[]>([]);
    
    React.useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:8080/api/decks');
            if (res.ok) {
                const decks = await res.json();
                setDecks(decks);
            }
        })();
    }, []);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checked) {
            setSelectedDecks(selectedDecks.filter(deck => deck !== e.target.value));
        } else {
            setSelectedDecks([...selectedDecks, e.target.value]);
        }
    }

    const handleSubmit = async () => {
        const res = await fetch('http://localhost:8080/api/cardsdecks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ card_id: id, deck_id: selectedDecks })
        });
        if (res.ok) {
            const result = await res.json();
            console.log(result);
        }
    }
    
    return(
        <main>
            <section className="my-5 col-md-6">
                <h1>{ id }</h1>
                <Card className="card-pop">
                    <Card.Body>
                        <Card.Title><VscAdd size="50" /></Card.Title>
                    </Card.Body>
                </Card>
                {decks.map(deck => <DeckCard deck={deck} handleSelect={handleSelect} />)}
                        {/* {decks.map(deck => <Form.Check type="checkbox" label={deck.deck_name} value={deck.id} />)} */}
                        {/* <Form.Check type="checkbox" label="Check me out" /> */}
                <Button onClick={handleSubmit}>Submit</Button>
            </section>
        </main>
    );
}

export default DecksPage;