import React from "react";
import { createRoot } from 'react-dom/client';
import Navbar from "../../js/component/Navbar.jsx";
import Jumbotron from "../../js/component/Jumbotron.jsx";
import Card from "../../js/component/Card.jsx";

const domNode = document.getElementById('app');
const root = createRoot(domNode);

//include images into your bundle


//create your first component
const Home = () => {
	const cardContent = [
		{
            title: "Card 1",
            text: "This is the first card's content."
        },
        {
            title: "Card 2",
            text: "This is the second card's content."
        },
        {
            title: "Card 3",
            text: "This is the third card's content."
        },
        {
            title: "Card 4",
            text: "This is the fourth card's content."
        }
	]

	return (
		<><Navbar /><div className="container">
			<Jumbotron />
			<div className="row">
                {cardContent.map((card, index) => (
                    <div className="col-md-3" key={index}>
                        <Card
                            title={card.title}
                            text={card.text}
                        />
                    </div>
                ))}
            </div>
		</div></>
	);
};

export default Home;

