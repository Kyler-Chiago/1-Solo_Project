import React from 'react'
import { useState, useEffect } from 'react'
import HomeCharacterSingle from './HomeCharacterSingle';

const HomeCharacterSection = () => {

    const [charactersList, setCharacters] = useState([]);

    const characters = async () => {
        const response = await fetch('/charactersList');
        // console.log(resp);
        setCharacters(await response.json());
    }

    useEffect(() => {
        characters()
    }, []);

    // These two if checks basically make the return wait until useEffect has updated characters
    // to the returned data 
    if (typeof charactersList[0] === 'object') {
        if (charactersList[0].strAbi || typeof charactersList[0].strAbi === "string") {
            const charactersArray = [];
            for (let i = 0; i < charactersList.length; i++) {
                charactersArray.push(
                    // console.log('charactersList[i].strAbi: ', charactersList[i].strAbi)
                    // charactersList[i].strAbi
                    <HomeCharacterSingle
                        key = {charactersList[i]._id}
                        // strAbi = {charactersList[i].strAbi}
                        charName = {charactersList[i].charName}  
                        charLev = {charactersList[i].charLev}
                        race = {charactersList[i].race}
                        charClass = {charactersList[i].charClass}
                        charId = {charactersList[i]._id}
                    />
                );
            }
            return (
                <div className = "homeCharactersContainerReal">
                    { charactersArray }
                </div>
            )
        }
    }
}

export default HomeCharacterSection;