import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./components/Card";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Card>
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Text</Card.Text>
        </Card.Body>
    </Card>

);
