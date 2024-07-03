import React from 'react'
import nightBackground from '../docs/assets/images/anime-night-digital-art-hd-landscape_1920x1080.jpg'

const CharacterSheet = () => {

    // const input = document.querySelector("input[name='strengthAbilityInput']");
    // const log = document.getElementById("strengthModCalc");
    // console.log(input);

    // input.addEventListener("input", updateValue);

    // function updateValue(e) {
    //     log.textContent = e.target.value;
    // }

    return (
        <div className="wrapper">
            {/* <div className="page1"> */}
            <div className="page1" style={{
                backgroundImage: `url(${nightBackground})`
            }}>
                {/* <img src={nightBackground} alt="Image Not Found"/> */}
                {/* <img src={dice} alt="Image Not Found"/>  */}
                <div className="page1Margin">
                    <div className="page1Header">
                        <div className="characterName">
                            <div>
                                <form action='/' method='POST'>
                                    <input type='submit' value="Login Page" className="createCharacterButton"></input>
                                </form>
                                <form action='/home' method='POST'>
                                    <input type='submit' value="Home" className="createCharacterButton"></input>
                                </form>
                                <form action='/saveCharacter' method='POST' id="saveCharacter">
                                    <input type='submit' value="Save Character" className="createCharacterButton"></input>
                                </form>
                                <span>Character Name:</span>
                                <input name="charName" type="text" placeholder="" className="profCheckInput" form="saveCharacter"></input>
                            </div>
                        </div>
                        <div className="characterBasics">
                            <div className="classLevel">

                            </div>
                            <div className="background">

                            </div>
                            <div className="playerName">

                            </div>
                            <div className="race">

                            </div>
                            <div className="alignment">

                            </div>
                            <div className="exp"></div>
                        </div>
                    </div>
                    <div className="mainBlock">
                        <div className="leftBlock">
                            <div className="leftBlockRow">
                                <div className="statColumn">
                                    <div className="stat">
                                        <div className="statBorder">

                                        </div>
                                        <div className="ability">
                                            <span className="centerText">Strength</span>
                                        </div>
                                        <div className="abilityModifier">
                                            <span id="strengthModCalc"></span>
                                        </div>
                                        <div className="abilityScoreBox">
                                            <div className="abilityScore">
                                                {/* <span >20</span> */}
                                                <input name="strAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="statBorder">

                                        </div>
                                        <div className="ability">
                                            <span>Dexterity</span>
                                        </div>
                                        <div className="abilityModifier">
                                            <span>+5</span>
                                        </div>
                                        <div className="abilityScoreBox">
                                            <div className="abilityScore">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="statBorder">

                                        </div>
                                        <div className="ability">
                                            <span className="centerText">Constitution</span>
                                        </div>
                                        <div className="abilityModifier">

                                        </div>
                                        <div className="abilityScoreBox">
                                            <div className="abilityScore">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="statBorder">

                                        </div>
                                        <div className="ability">
                                            <span>Intelligence</span>
                                        </div>
                                        <div className="abilityModifier">

                                        </div>
                                        <div className="abilityScoreBox">
                                            <div className="abilityScore">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="statBorder">

                                        </div>
                                        <div className="ability">
                                            <span>Wisdom</span>
                                        </div>
                                        <div className="abilityModifier">

                                        </div>
                                        <div className="abilityScoreBox">
                                            <div className="abilityScore">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="statBorder">

                                        </div>
                                        <div className="ability">
                                            <span>Charisma</span>
                                        </div>
                                        <div className="abilityModifier">

                                        </div>
                                        <div className="abilityScoreBox">
                                            <div className="abilityScore">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <div className="inspirationBlock">
                                        <div className="inspirationCheck">
                                            <button id="inspirationButton" onClick={() => {
                                                let inspirationButton = document.getElementById('inspirationButton');
                                                if (inspirationButton.style.opacity == "0.7") {
                                                    document.getElementById('inspirationButton').style.opacity = "0";
                                                } else {
                                                    document.getElementById('inspirationButton').style.opacity = "0.7";
                                                }
                                            }}></button>
                                        </div>
                                        <div className="inspirationText">
                                            Inspiration
                                        </div>
                                    </div>
                                    <div className="profBonusBlock">
                                        <div className="profCheck">
                                            <input name="profBon" type="text" placeholder="" className="profCheckInput" form="saveCharacter"></input>
                                        </div>
                                        <div className="profText">
                                            Proficiency Bonus
                                        </div>
                                    </div>
                                    <div className="savingThrowsBlock">
                                        <div className="strengthST">
                                            <div className="STButtonBorder">
                                                <button id="strengthSTButton" onClick={() => {
                                                    let strengthSTButton = document.getElementById('strengthSTButton');
                                                    if (strengthSTButton.style.opacity == "0.7") {
                                                        document.getElementById('strengthSTButton').style.opacity = "0";
                                                    } else {
                                                        document.getElementById('strengthSTButton').style.opacity = "0.7";
                                                    }
                                                }}></button>
                                            </div>
                                            <input name="strSav" type="text" placeholder="" className="strengthSTInput" form="saveCharacter"></input>
                                            <div className="STText">
                                                Strength
                                            </div>
                                        </div>
                                        <div className="midST dexterityST">
                                            <div className="STButtonBorder">
                                                <button id="dexteritySTButton" onClick={() => {
                                                    let strengthSTButton = document.getElementById('dexteritySTButton');
                                                    if (strengthSTButton.style.opacity == "0.7") {
                                                        document.getElementById('dexteritySTButton').style.opacity = "0";
                                                    } else {
                                                        document.getElementById('dexteritySTButton').style.opacity = "0.7";
                                                    }
                                                }}></button>
                                            </div>
                                            <input name="dexSav" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter"></input>
                                            <div className="STText">
                                                Dexterity
                                            </div>
                                        </div>
                                        <div className="midST conST">
                                            <div className="STButtonBorder">
                                                <button id="constitutionSTButton" onClick={() => {
                                                    let strengthSTButton = document.getElementById('constitutionSTButton');
                                                    if (strengthSTButton.style.opacity == "0.7") {
                                                        document.getElementById('constitutionSTButton').style.opacity = "0";
                                                    } else {
                                                        document.getElementById('constitutionSTButton').style.opacity = "0.7";
                                                    }
                                                }}></button>
                                            </div>
                                            <input name="conSav" type="text" placeholder="" className="constitutionSTInput" form="saveCharacter"></input>
                                            <div className="STText">
                                                Constitution
                                            </div>
                                        </div>
                                        <div className="midST intelligenceST">
                                            <div className="STButtonBorder">
                                                <button id="intelligenceSTButton" onClick={() => {
                                                    let strengthSTButton = document.getElementById('intelligenceSTButton');
                                                    if (strengthSTButton.style.opacity == "0.7") {
                                                        document.getElementById('intelligenceSTButton').style.opacity = "0";
                                                    } else {
                                                        document.getElementById('intelligenceSTButton').style.opacity = "0.7";
                                                    }
                                                }}></button>
                                            </div>
                                            <input name="intSav" type="text" placeholder="" className="intelligenceSTInput" form="saveCharacter"></input>
                                            <div className="STText">
                                                Intelligence
                                            </div>
                                        </div>
                                        <div className="midST wisdomST">
                                            <div className="STButtonBorder">
                                                <button id="wisdomSTButton" onClick={() => {
                                                    let strengthSTButton = document.getElementById('wisdomSTButton');
                                                    if (strengthSTButton.style.opacity == "0.7") {
                                                        document.getElementById('wisdomSTButton').style.opacity = "0";
                                                    } else {
                                                        document.getElementById('wisdomSTButton').style.opacity = "0.7";
                                                    }
                                                }}></button>
                                            </div>
                                            <input name="wisSav" type="text" placeholder="" className="wisdomSTInput" form="saveCharacter"></input>
                                            <div className="STText">
                                                Wisdom
                                            </div>
                                        </div>
                                        <div className="charismaST">
                                            <div className="STButtonBorder">
                                                <button id="charismaSTButton" onClick={() => {
                                                    let strengthSTButton = document.getElementById('charismaSTButton');
                                                    if (strengthSTButton.style.opacity == "0.7") {
                                                        document.getElementById('charismaSTButton').style.opacity = "0";
                                                    } else {
                                                        document.getElementById('charismaSTButton').style.opacity = "0.7";
                                                    }
                                                }}></button>
                                            </div>
                                            <input name="chaSav" type="text" placeholder="" className="charismaSTInput" form="saveCharacter"></input>
                                            <div className="STText">
                                                Charisma
                                            </div>
                                        </div>
                                        <div className="savingThrowsST">
                                                <div className="savingThrowsSTText">
                                                    {/* <span>Saving Throws</span> */}
                                                    Saving Throws
                                                </div>
                                        </div>
                                    </div>
                                    <div className="skillsBlock">

                                    </div>
                                </div>
                            </div>
                            <div className="l3">
                                <div className="l3PW">

                                </div>
                                <div className="l3OPaL">

                                </div>
                            </div>
                        </div>
                        <div className="centerBlock">
                            <div className="cB1">

                            </div>
                            <div className="cB2">

                            </div>
                            <div className="cB3">

                            </div>
                        </div>
                        <div className="rightBlock">
                            <div className="rB1">

                            </div>
                            <div className="rB2">

                            </div>
                        </div>
                        {/* <h1>
                    Dungeons & Dragons 5e Character Sheet
                </h1> */}
                    </div>
                </div>

            </div>
        </div>
    )
};

export default CharacterSheet;