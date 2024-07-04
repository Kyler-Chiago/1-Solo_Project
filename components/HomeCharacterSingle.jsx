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
                {/* Class: {charClass} */}
                {/* testing a button redirect with passing the chardata with it to fill in the character sheet */}
                {/* <button>test character</button> */}
                {/* <form method="post">
                    <input type="submit" value={charId}></input>
                </form> */}
                <form action='/getCharacter' method='POST'>
                    <button name="_id" type="submit" value={charId}>get this</button>
                    {/* <input type='submit' value={charId} placeholder="" className="createCharacterButton"></input> */}

                </form>

                {/* The Id is being successfully passed here */}
                {/* Id: {charId} */}
            </div>
        </div>
    )
}

export default HomeCharacterSingle;