// import { useState } from 'react';
import React from "react";
import { Navigate } from "react-router-dom"

export default function HomePage() {
    const [trivia, setTrivia] = React.useState(false);

    if (trivia) {
        return <Navigate to="/trivia"/>
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
                        <option>You Don't Have to be Like This</option>
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