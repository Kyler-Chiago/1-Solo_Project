import React from 'react'

const CharacterSheetNav = props => {
    const { charId } = props;
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
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
            <div className="borderColorText">Border Color: </div>
            <input name="borderColor" type="color" className="colorInputStyle" id="borderColor" form="saveCharacter" onInput={() => {
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
            <div className="borderColorText">Font Color: </div>
            <input name="fontColor" type="color" className="colorInputStyle" id="fontColor" form="saveCharacter" onInput={() => {
                let fontColors = document.getElementsByClassName("changeFontColor");
                for (let fontColor of fontColors) {
                    fontColor.style.color = document.getElementById('fontColor').value;
                }
            }}></input>
            <div className="borderColorText">Abi Score Background Color: </div>
            <input name="abiScBgCol" type="color" id="abiScBgCol" form="saveCharacter" onInput={() => {
                let abiScBgCols = document.getElementsByClassName("changeAbiScBgCol");
                for (let abiScBgCol of abiScBgCols) {
                    abiScBgCol.style.backgroundColor = document.getElementById('abiScBgCol').value;
                }
            }}></input>

            <div className="borderColorText">Box Background Color: </div>
            <input name="boxBgCol" type="color" className="colorInputStyle" id="boxBgCol" form="saveCharacter" onInput={() => {
                let boxBgCols = document.getElementsByClassName("changeBgColor");
                for (let boxBgCol of boxBgCols) {
                    // Converting the given hex value for the color to rgb so we can use rgba and an opacity, at an opacity of 0.5
                    // could probably set this up with another input text field for the opacity and pass the opacity value in here
                    boxBgCol.style.backgroundColor = "rgba(" + hexToRgb(document.getElementById('boxBgCol').value).r + ", " + hexToRgb(document.getElementById('boxBgCol').value).g + ", " + hexToRgb(document.getElementById('boxBgCol').value).b + ", 0.5)"
                }
                let boxBgColsInputs = document.getElementsByClassName("changeBgColorInputs");
                for (let boxBgColInput of boxBgColsInputs) {
                    // 0.2 opacity instead of 0.5
                    boxBgColInput.style.backgroundColor = "rgba(" + hexToRgb(document.getElementById('boxBgCol').value).r + ", " + hexToRgb(document.getElementById('boxBgCol').value).g + ", " + hexToRgb(document.getElementById('boxBgCol').value).b + ", 0.2)"
                }
            }}></input>

            <div className="borderColorText">Proficiency Button Color: </div>
            <input name="profButCol" type="color" className="colorInputStyle" id="profButCol" form="saveCharacter" onInput={() => {
                let changeProfButCols = document.getElementsByClassName("changeButCol");
                for (let changeProfButCol of changeProfButCols) {
                    if (changeProfButCol.style.opacity == "1") { // for the Skill Buttons
                        changeProfButCol.style.backgroundColor = document.getElementById('profButCol').value;
                    } else if (changeProfButCol.style.opacity == "0.7") { // for the Saving Throw Buttons
                        changeProfButCol.style.backgroundColor = document.getElementById('profButCol').value;
                    }
                }
            }}></input>

            <div className="borderColorText">Expertise Button Color: </div>
            <input name="exprButCol" type="color" className="colorInputStyle" id="exprButCol" form="saveCharacter" onInput={() => {
                let changeExprButCols = document.getElementsByClassName("changeButCol");
                for (let changeExprButCol of changeExprButCols) {
                    if (changeExprButCol.style.opacity == "0.8") {
                        changeExprButCol.style.backgroundColor = document.getElementById('exprButCol').value;
                    }
                }
            }}></input>


            <div className="borderColorText">Upload Custom Background Image: </div>

        </div>
    )
}

export default CharacterSheetNav;