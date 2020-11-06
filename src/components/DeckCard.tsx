import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Deck } from '../utils/types';

function DeckCard(props: DeckCardProps) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Form.Check 
                    type="checkbox" 
                    label={props.deck.deck_name} 
                    value={props.deck.id} 
                    onChange={props.handleSelect} />
            </Card.Body>
        </Card>
    );
}

type DeckCardProps = {
    children?: React.ReactNode;
    deck: Deck;
    handleSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default DeckCard;