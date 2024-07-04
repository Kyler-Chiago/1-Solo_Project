import React from 'react'

const SkillsBlock = props => {
    // console.log(props);
    // let acrSklButtonOpacity = "0.5";
    return (
        <div className="whatIsThis">
            {/* <input name="acrSklButtonOpacity" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="acrSklButtonOpacity" value={acrSklButtonOpacity}></input> */}
            <div className="acrobatics">
                <div className="STButtonBorder">
                    <button id="acrSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('acrSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('acrSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('acrSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                    {/* <input type="button" name="acrSklButtonOpacity" id="acrSklButtonOpacity" value={acrSklButtonOpacity} form="saveCharacter" onClick={() => {
                        let strengthSTButton = document.getElementById('acrSklButtonOpacity');
                        if (strengthSTButton.style.opacity == "0.7") {
                            acrSklButtonOpacity = "0"
                            document.getElementById('acrSklButtonOpacity').style.opacity = "0";
                            console.log(acrSklButtonOpacity);
                        } else {
                            acrSklButtonOpacity = "0.7"
                            document.getElementById('acrSklButtonOpacity').style.opacity = "0.7";
                            console.log(acrSklButtonOpacity);
                        }
                    }}></input> */}
                </div>
                <input name="acrSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="acrSkl"></input>
                <div className="skillsText">
                    Acrobatics (Dex)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="AniSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('AniSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('AniSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('AniSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="AniSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="AniSkl"></input>
                <div className="skillsText">
                    Animal Handling (Wis)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="ArcSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('ArcSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('ArcSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('ArcSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="ArcSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="ArcSkl"></input>
                <div className="skillsText">
                    Arcana (Int)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="AthSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('AthSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('AthSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('AthSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="AthSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="AthSkl"></input>
                <div className="skillsText">
                    Athletics (Str)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="decSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('decSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('decSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('decSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="decSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="decSkl"></input>
                <div className="skillsText">
                    Deception (Cha)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="hisSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('hisSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('hisSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('hisSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="hisSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="hisSkl"></input>
                <div className="skillsText">
                    History(Int)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="insSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('insSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('insSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('insSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="insSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="insSkl"></input>
                <div className="skillsText">
                    Insight (Wis)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="intSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('intSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('intSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('intSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="intSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="intSkl"></input>
                <div className="skillsText">
                    Intimidation (Cha)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="invSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('invSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('invSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('invSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="invSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="invSkl"></input>
                <div className="skillsText">
                    Investigation (Int)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="medSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('medSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('medSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('medSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="medSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="medSkl"></input>
                <div className="skillsText">
                    Medicine (Wis)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="ntrSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('ntrSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('ntrSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('ntrSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="ntrSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="ntrSkl"></input>
                <div className="skillsText">
                    Nature (Int)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="perSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('perSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('perSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('perSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="perSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="perSkl"></input>
                <div className="skillsText">
                    Perception (Cha)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="prfSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('prfSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('prfSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('prfSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="prfSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="prfSkl"></input>
                <div className="skillsText">
                    Performance (Cha)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="prsSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('prsSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('prsSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('prsSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="prsSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="prsSkl"></input>
                <div className="skillsText">
                    Persuasion (Cha)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="rlgSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('rlgSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('rlgSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('rlgSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="rlgSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="rlgSkl"></input>
                <div className="skillsText">
                    Religion (Int)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="sohSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('sohSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('sohSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('sohSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="sohSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="sohSkl"></input>
                <div className="skillsText">
                    Sleight of Hand (Dex)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="sthSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('sthSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('sthSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('sthSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="sthSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="sthSkl"></input>
                <div className="skillsText">
                    Stealth (Dex)
                </div>
            </div>
            <div className="midST">
                <div className="STButtonBorder">
                    <button id="srvSklButton" onClick={() => {
                        let strengthSTButton = document.getElementById('srvSklButton');
                        if (strengthSTButton.style.opacity == "0.7") {
                            document.getElementById('srvSklButton').style.opacity = "0";
                        } else {
                            document.getElementById('srvSklButton').style.opacity = "0.7";
                        }
                    }}></button>
                </div>
                <input name="srvSkl" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="srvSkl"></input>
                <div className="skillsText">
                    Survival (Wis)
                </div>
            </div>
            <div className="skillsSkills">
                <div className="STText">
                    Skills
                </div>
            </div>
        </div>
    )
}

export default SkillsBlock