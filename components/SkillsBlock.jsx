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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('acrSklButton').style.opacity = "0.8";
                            document.getElementById('acrSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('acrButOpa').value = "0.8";
                            document.getElementById('acrButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('acrSklButton').style.opacity = "0";
                            document.getElementById('acrButOpa').value = '0';
                        } else {
                            document.getElementById('acrSklButton').style.opacity = "1";
                            document.getElementById('acrSklButton').style.backgroundColor = "blue";
                            document.getElementById('acrButOpa').value = "1";
                            document.getElementById('acrButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('AniSklButton').style.opacity = "0.8";
                            document.getElementById('AniSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('aniButOpa').value = "0.8";
                            document.getElementById('aniButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('AniSklButton').style.opacity = "0";
                            document.getElementById('aniButOpa').value = '0';
                        } else {
                            document.getElementById('AniSklButton').style.opacity = "1";
                            document.getElementById('AniSklButton').style.backgroundColor = "blue";
                            document.getElementById('aniButOpa').value = "1";
                            document.getElementById('aniButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('ArcSklButton').style.opacity = "0.8";
                            document.getElementById('ArcSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('arcButOpa').value = "0.8";
                            document.getElementById('arcButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('ArcSklButton').style.opacity = "0";
                            document.getElementById('arcButOpa').value = '0';
                        } else {
                            document.getElementById('ArcSklButton').style.opacity = "1";
                            document.getElementById('ArcSklButton').style.backgroundColor = "blue";
                            document.getElementById('arcButOpa').value = "1";
                            document.getElementById('arcButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('AthSklButton').style.opacity = "0.8";
                            document.getElementById('AthSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('athButOpa').value = "0.8";
                            document.getElementById('athButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('AthSklButton').style.opacity = "0";
                            document.getElementById('athButOpa').value = '0';
                        } else {
                            document.getElementById('AthSklButton').style.opacity = "1";
                            document.getElementById('AthSklButton').style.backgroundColor = "blue";
                            document.getElementById('athButOpa').value = "1";
                            document.getElementById('athButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('decSklButton').style.opacity = "0.8";
                            document.getElementById('decSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('decButOpa').value = "0.8";
                            document.getElementById('decButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('decSklButton').style.opacity = "0";
                            document.getElementById('decButOpa').value = '0';
                        } else {
                            document.getElementById('decSklButton').style.opacity = "1";
                            document.getElementById('decSklButton').style.backgroundColor = "blue";
                            document.getElementById('decButOpa').value = "1";
                            document.getElementById('decButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('hisSklButton').style.opacity = "0.8";
                            document.getElementById('hisSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('hisButOpa').value = "0.8";
                            document.getElementById('hisButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('hisSklButton').style.opacity = "0";
                            document.getElementById('hisButOpa').value = '0';
                        } else {
                            document.getElementById('hisSklButton').style.opacity = "1";
                            document.getElementById('hisSklButton').style.backgroundColor = "blue";
                            document.getElementById('hisButOpa').value = "1";
                            document.getElementById('hisButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('insSklButton').style.opacity = "0.8";
                            document.getElementById('insSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('insButOpa').value = "0.8";
                            document.getElementById('insButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('insSklButton').style.opacity = "0";
                            document.getElementById('insButOpa').value = '0';
                        } else {
                            document.getElementById('insSklButton').style.opacity = "1";
                            document.getElementById('insSklButton').style.backgroundColor = "blue";
                            document.getElementById('insButOpa').value = "1";
                            document.getElementById('insButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('intSklButton').style.opacity = "0.8";
                            document.getElementById('intSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('intButOpa').value = "0.8";
                            document.getElementById('intButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('intSklButton').style.opacity = "0";
                            document.getElementById('intButOpa').value = '0';
                        } else {
                            document.getElementById('intSklButton').style.opacity = "1";
                            document.getElementById('intSklButton').style.backgroundColor = "blue";
                            document.getElementById('intButOpa').value = "1";
                            document.getElementById('intButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('invSklButton').style.opacity = "0.8";
                            document.getElementById('invSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('invButOpa').value = "0.8";
                            document.getElementById('invButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('invSklButton').style.opacity = "0";
                            document.getElementById('invButOpa').value = '0';
                        } else {
                            document.getElementById('invSklButton').style.opacity = "1";
                            document.getElementById('invSklButton').style.backgroundColor = "blue";
                            document.getElementById('invButOpa').value = "1";
                            document.getElementById('invButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('medSklButton').style.opacity = "0.8";
                            document.getElementById('medSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('medButOpa').value = "0.8";
                            document.getElementById('medButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('medSklButton').style.opacity = "0";
                            document.getElementById('medButOpa').value = '0';
                        } else {
                            document.getElementById('medSklButton').style.opacity = "1";
                            document.getElementById('medSklButton').style.backgroundColor = "blue";
                            document.getElementById('medButOpa').value = "1";
                            document.getElementById('medButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('ntrSklButton').style.opacity = "0.8";
                            document.getElementById('ntrSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('ntrButOpa').value = "0.8";
                            document.getElementById('ntrButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('ntrSklButton').style.opacity = "0";
                            document.getElementById('ntrButOpa').value = '0';
                        } else {
                            document.getElementById('ntrSklButton').style.opacity = "1";
                            document.getElementById('ntrSklButton').style.backgroundColor = "blue";
                            document.getElementById('ntrButOpa').value = "1";
                            document.getElementById('ntrButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('perSklButton').style.opacity = "0.8";
                            document.getElementById('perSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('perButOpa').value = "0.8";
                            document.getElementById('perButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('perSklButton').style.opacity = "0";
                            document.getElementById('perButOpa').value = '0';
                        } else {
                            document.getElementById('perSklButton').style.opacity = "1";
                            document.getElementById('perSklButton').style.backgroundColor = "blue";
                            document.getElementById('perButOpa').value = "1";
                            document.getElementById('perButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('prfSklButton').style.opacity = "0.8";
                            document.getElementById('prfSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('prfButOpa').value = "0.8";
                            document.getElementById('prfButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('prfSklButton').style.opacity = "0";
                            document.getElementById('prfButOpa').value = '0';
                        } else {
                            document.getElementById('prfSklButton').style.opacity = "1";
                            document.getElementById('prfSklButton').style.backgroundColor = "blue";
                            document.getElementById('prfButOpa').value = "1";
                            document.getElementById('prfButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('prsSklButton').style.opacity = "0.8";
                            document.getElementById('prsSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('prsButOpa').value = "0.8";
                            document.getElementById('prsButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('prsSklButton').style.opacity = "0";
                            document.getElementById('prsButOpa').value = '0';
                        } else {
                            document.getElementById('prsSklButton').style.opacity = "1";
                            document.getElementById('prsSklButton').style.backgroundColor = "blue";
                            document.getElementById('prsButOpa').value = "1";
                            document.getElementById('prsButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('rlgSklButton').style.opacity = "0.8";
                            document.getElementById('rlgSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('rlgButOpa').value = "0.8";
                            document.getElementById('rlgButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('rlgSklButton').style.opacity = "0";
                            document.getElementById('rlgButOpa').value = '0';
                        } else {
                            document.getElementById('rlgSklButton').style.opacity = "1";
                            document.getElementById('rlgSklButton').style.backgroundColor = "blue";
                            document.getElementById('rlgButOpa').value = "1";
                            document.getElementById('rlgButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('sohSklButton').style.opacity = "0.8";
                            document.getElementById('sohSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('sohButOpa').value = "0.8";
                            document.getElementById('sohButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('sohSklButton').style.opacity = "0";
                            document.getElementById('sohButOpa').value = '0';
                        } else {
                            document.getElementById('sohSklButton').style.opacity = "1";
                            document.getElementById('sohSklButton').style.backgroundColor = "blue";
                            document.getElementById('sohButOpa').value = "1";
                            document.getElementById('sohButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('sthSklButton').style.opacity = "0.8";
                            document.getElementById('sthSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('sthButOpa').value = "0.8";
                            document.getElementById('sthButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('sthSklButton').style.opacity = "0";
                            document.getElementById('sthButOpa').value = '0';
                        } else {
                            document.getElementById('sthSklButton').style.opacity = "1";
                            document.getElementById('sthSklButton').style.backgroundColor = "blue";
                            document.getElementById('sthButOpa').value = "1";
                            document.getElementById('sthButCol').value = "blue";
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
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('srvSklButton').style.opacity = "0.8";
                            document.getElementById('srvSklButton').style.backgroundColor = 'rgb(0, 195, 255)';
                            document.getElementById('srvButOpa').value = "0.8";
                            document.getElementById('srvButCol').value = 'rgb(0, 195, 255)';
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('srvSklButton').style.opacity = "0";
                            document.getElementById('srvButOpa').value = '0';
                        } else {
                            document.getElementById('srvSklButton').style.opacity = "1";
                            document.getElementById('srvSklButton').style.backgroundColor = "blue";
                            document.getElementById('srvButOpa').value = "1";
                            document.getElementById('srvButCol').value = "blue";
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