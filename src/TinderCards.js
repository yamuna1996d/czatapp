import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCrds.css';
import db from "./firebase";
function TinderCards() {
    //calling data from array
    // const [people,setPeople] = useState([
    //     {
    //         name: "Jimin",
    //         url: 'https://static.billboard.com/files/media/Jimin-bts-press-photo-2017-billboard-1548-compressed.jpg'
    //     },
    // ]);

    const [people,setPeople] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection('people').onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc)=>doc.data()))
        );
        return()=>{
            unsubscribe();
        };
    },[]);

    return (
        <div>
            <div className="Cardcontainer">
            {people.map(person =>(
                <TinderCard className="swip" key ={person.name} preventSwipe={['up','down']} > 
                    <div className="card" 
                    style ={{backgroundImage: `url(${person.url})`}} >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
