import React from 'react'
import YourFace from '../docs/assets/images/YourFace.jpg'
// import dnd5elogo from '../docs/assets/images/dnd5elogo.png'

const HomeCharacterSingle = props => {
    const { charName, charLev, race, charClass, charId } = props;
    // this.id = charId;
    // console.log("HomeCharacterSingle.jsx: charId:", charId);
    return (
        <div className="singleCharacterHome">
            <div className="singleCharacterHomePic">
                <img src={YourFace} alt="img not found" className="singleCharacterHomePicImg"></img>
            </div>
            <div className="singleCharacterHomeName">
                Name: {charName}
            </div>
            <div className="singleCharacterHomeLevel">
                Level: {charLev}
            </div>
            <div className="singleCharacterHomeRace">
                Race: {race}
            </div>
            <div className="singleCharacterHomeClass">
                Class: {charClass}
            </div>
            <form action='/getCharacter' method='POST' className="getThisCharForm">
                    <button name="_id" type="submit" value={charId} className = "getThisCharButton"></button>
            </form>
        </div>
    )
}

export default HomeCharacterSingle;