import React from 'react'

const CharacterSheetNav = props => {
    const { charId } = props;
    return (
        <div className="characterSheetNavWrapper">
            <form action='/' method='POST'>
                <input type='submit' value="Logout" className="createCharacterButton"></input>
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
            <input name = "borderColor" type="color" id="borderColor" form="saveCharacter" onInput={() => {
                // let changeColorTest = document.getElementById('changeColorTest')
                // changeColorTest.style.borderColor = document.getElementById('borderColor').value;
                let borderColors = document.getElementsByClassName("changeBorderColor");
                for (let borderColor of borderColors) {
                    borderColor.style.borderColor = document.getElementById('borderColor').value;
                }
                let equipmentMonBorders = document.getElementsByClassName("cB3MonNam");
                for (let equipmentMonBorder of equipmentMonBorders) {
                    equipmentMonBorder.style.backgroundColor = document.getElementById('borderColor').value;
                }
            }}></input>
        </div>
    )
}

export default CharacterSheetNav;