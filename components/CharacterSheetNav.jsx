import React from 'react'

const CharacterSheetNav = props => {
    const { charId } = props;
    return (
        <div className="characterSheetNavWrapper">
            <form action='/' method='POST'>
                <input type='submit' value="Login Page" className="createCharacterButton"></input>
            </form>
            <form action='/home' method='POST'>
                <input type='submit' value="Home" className="createCharacterButton"></input>
            </form>
            <form action='/deleteCharacter' method='POST' id="deleteCharacter">
                <button name="_id" type="submit" value={charId} className="createCharacterButton">Delete Character</button>
            </form>
            <form action='/updateCharacter' method='POST' id="saveCharacter">
                <button name="_id" type="submit" value={charId} className="createCharacterButton">Save Character</button>
            </form>
        </div>
    )
}

export default CharacterSheetNav;