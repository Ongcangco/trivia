import { useState } from 'react';
import React from "react";
import { redirect } from 'react-router-dom';


export default function HomePage() {
    const [trivia, setTrivia] = React.useState(false);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    

    const handleSubmit = () => {
    if (!category || !difficulty) {
        setError(true);
    return;
    } else {
        setError(false);
        setTrivia=redirect('/trivia');
    };
}

   
    
    return(
        <div className="settings">
            <span>Trivia Settings</span>
            <div className="select">
                <span>Difficulty</span>
                    <select>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                        <option>Show-Off Status</option>
                    </select>
                    <br/>
                <span>Category</span> 
                    <select>
                        <option>Board Games</option>
                        <option>Geography</option>
                        <option>Computers</option>
                        <option>Food</option>
                    </select> 
            </div>
                <button className="begin-button" onClick={() => {setTrivia(true)}}>Begin</button>
        </div>
    )
}