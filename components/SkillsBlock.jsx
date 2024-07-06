import React from 'react'

const SkillsBlock = props => {
    // console.log(props);
    // let acrSklButtonOpacity = "0.5";
    return (
        <div className="whatIsThis">
            {/* <input name="acrSklButtonOpacity" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="acrSklButtonOpacity" value={acrSklButtonOpacity}></input> */}
            <div className="acrobatics changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="acrSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('acrSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('acrSklButton').style.opacity = "0.8";
                            document.getElementById('acrSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('acrButOpa').value = "0.8";
                            document.getElementById('acrButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('acrSklButton').style.opacity = "0";
                            document.getElementById('acrButOpa').value = '0';
                        } else {
                            document.getElementById('acrSklButton').style.opacity = "1";
                            document.getElementById('acrSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('acrButOpa').value = "1";
                            document.getElementById('acrButCol').value = document.getElementById('profButCol').value;
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
                <input name="acrSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="acrSkl"></input>
                <div className="skillsText changeFontColor">
                    Acrobatics (Dex)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="AniSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('AniSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('AniSklButton').style.opacity = "0.8";
                            document.getElementById('AniSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('aniButOpa').value = "0.8";
                            document.getElementById('aniButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('AniSklButton').style.opacity = "0";
                            document.getElementById('aniButOpa').value = '0';
                        } else {
                            document.getElementById('AniSklButton').style.opacity = "1";
                            document.getElementById('AniSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('aniButOpa').value = "1";
                            document.getElementById('aniButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="AniSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="AniSkl"></input>
                <div className="skillsText changeFontColor">
                    Animal Handling (Wis)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="ArcSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('ArcSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('ArcSklButton').style.opacity = "0.8";
                            document.getElementById('ArcSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('arcButOpa').value = "0.8";
                            document.getElementById('arcButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('ArcSklButton').style.opacity = "0";
                            document.getElementById('arcButOpa').value = '0';
                        } else {
                            document.getElementById('ArcSklButton').style.opacity = "1";
                            document.getElementById('ArcSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('arcButOpa').value = "1";
                            document.getElementById('arcButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="ArcSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="ArcSkl"></input>
                <div className="skillsText changeFontColor">
                    Arcana (Int)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="AthSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('AthSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('AthSklButton').style.opacity = "0.8";
                            document.getElementById('AthSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('athButOpa').value = "0.8";
                            document.getElementById('athButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('AthSklButton').style.opacity = "0";
                            document.getElementById('athButOpa').value = '0';
                        } else {
                            document.getElementById('AthSklButton').style.opacity = "1";
                            document.getElementById('AthSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('athButOpa').value = "1";
                            document.getElementById('athButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="AthSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="AthSkl"></input>
                <div className="skillsText changeFontColor">
                    Athletics (Str)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="decSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('decSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('decSklButton').style.opacity = "0.8";
                            document.getElementById('decSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('decButOpa').value = "0.8";
                            document.getElementById('decButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('decSklButton').style.opacity = "0";
                            document.getElementById('decButOpa').value = '0';
                        } else {
                            document.getElementById('decSklButton').style.opacity = "1";
                            document.getElementById('decSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('decButOpa').value = "1";
                            document.getElementById('decButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="decSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="decSkl"></input>
                <div className="skillsText changeFontColor">
                    Deception (Cha)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="hisSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('hisSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('hisSklButton').style.opacity = "0.8";
                            document.getElementById('hisSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('hisButOpa').value = "0.8";
                            document.getElementById('hisButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('hisSklButton').style.opacity = "0";
                            document.getElementById('hisButOpa').value = '0';
                        } else {
                            document.getElementById('hisSklButton').style.opacity = "1";
                            document.getElementById('hisSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('hisButOpa').value = "1";
                            document.getElementById('hisButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="hisSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="hisSkl"></input>
                <div className="skillsText changeFontColor">
                    History(Int)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="insSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('insSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('insSklButton').style.opacity = "0.8";
                            document.getElementById('insSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('insButOpa').value = "0.8";
                            document.getElementById('insButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('insSklButton').style.opacity = "0";
                            document.getElementById('insButOpa').value = '0';
                        } else {
                            document.getElementById('insSklButton').style.opacity = "1";
                            document.getElementById('insSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('insButOpa').value = "1";
                            document.getElementById('insButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="insSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="insSkl"></input>
                <div className="skillsText changeFontColor">
                    Insight (Wis)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="intSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('intSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('intSklButton').style.opacity = "0.8";
                            document.getElementById('intSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('intButOpa').value = "0.8";
                            document.getElementById('intButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('intSklButton').style.opacity = "0";
                            document.getElementById('intButOpa').value = '0';
                        } else {
                            document.getElementById('intSklButton').style.opacity = "1";
                            document.getElementById('intSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('intButOpa').value = "1";
                            document.getElementById('intButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="intSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="intSkl"></input>
                <div className="skillsText changeFontColor">
                    Intimidation (Cha)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="invSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('invSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('invSklButton').style.opacity = "0.8";
                            document.getElementById('invSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('invButOpa').value = "0.8";
                            document.getElementById('invButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('invSklButton').style.opacity = "0";
                            document.getElementById('invButOpa').value = '0';
                        } else {
                            document.getElementById('invSklButton').style.opacity = "1";
                            document.getElementById('invSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('invButOpa').value = "1";
                            document.getElementById('invButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="invSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="invSkl"></input>
                <div className="skillsText changeFontColor">
                    Investigation (Int)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="medSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('medSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('medSklButton').style.opacity = "0.8";
                            document.getElementById('medSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('medButOpa').value = "0.8";
                            document.getElementById('medButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('medSklButton').style.opacity = "0";
                            document.getElementById('medButOpa').value = '0';
                        } else {
                            document.getElementById('medSklButton').style.opacity = "1";
                            document.getElementById('medSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('medButOpa').value = "1";
                            document.getElementById('medButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="medSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="medSkl"></input>
                <div className="skillsText changeFontColor">
                    Medicine (Wis)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="ntrSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('ntrSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('ntrSklButton').style.opacity = "0.8";
                            document.getElementById('ntrSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('ntrButOpa').value = "0.8";
                            document.getElementById('ntrButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('ntrSklButton').style.opacity = "0";
                            document.getElementById('ntrButOpa').value = '0';
                        } else {
                            document.getElementById('ntrSklButton').style.opacity = "1";
                            document.getElementById('ntrSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('ntrButOpa').value = "1";
                            document.getElementById('ntrButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="ntrSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="ntrSkl"></input>
                <div className="skillsText changeFontColor">
                    Nature (Int)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="perSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('perSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('perSklButton').style.opacity = "0.8";
                            document.getElementById('perSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('perButOpa').value = "0.8";
                            document.getElementById('perButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('perSklButton').style.opacity = "0";
                            document.getElementById('perButOpa').value = '0';
                        } else {
                            document.getElementById('perSklButton').style.opacity = "1";
                            document.getElementById('perSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('perButOpa').value = "1";
                            document.getElementById('perButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="perSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="perSkl"></input>
                <div className="skillsText changeFontColor">
                    Perception (Cha)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="prfSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('prfSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('prfSklButton').style.opacity = "0.8";
                            document.getElementById('prfSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('prfButOpa').value = "0.8";
                            document.getElementById('prfButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('prfSklButton').style.opacity = "0";
                            document.getElementById('prfButOpa').value = '0';
                        } else {
                            document.getElementById('prfSklButton').style.opacity = "1";
                            document.getElementById('prfSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('prfButOpa').value = "1";
                            document.getElementById('prfButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="prfSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="prfSkl"></input>
                <div className="skillsText changeFontColor">
                    Performance (Cha)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="prsSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('prsSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('prsSklButton').style.opacity = "0.8";
                            document.getElementById('prsSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('prsButOpa').value = "0.8";
                            document.getElementById('prsButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('prsSklButton').style.opacity = "0";
                            document.getElementById('prsButOpa').value = '0';
                        } else {
                            document.getElementById('prsSklButton').style.opacity = "1";
                            document.getElementById('prsSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('prsButOpa').value = "1";
                            document.getElementById('prsButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="prsSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="prsSkl"></input>
                <div className="skillsText changeFontColor">
                    Persuasion (Cha)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="rlgSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('rlgSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('rlgSklButton').style.opacity = "0.8";
                            document.getElementById('rlgSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('rlgButOpa').value = "0.8";
                            document.getElementById('rlgButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('rlgSklButton').style.opacity = "0";
                            document.getElementById('rlgButOpa').value = '0';
                        } else {
                            document.getElementById('rlgSklButton').style.opacity = "1";
                            document.getElementById('rlgSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('rlgButOpa').value = "1";
                            document.getElementById('rlgButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="rlgSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="rlgSkl"></input>
                <div className="skillsText changeFontColor">
                    Religion (Int)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="sohSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('sohSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('sohSklButton').style.opacity = "0.8";
                            document.getElementById('sohSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('sohButOpa').value = "0.8";
                            document.getElementById('sohButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('sohSklButton').style.opacity = "0";
                            document.getElementById('sohButOpa').value = '0';
                        } else {
                            document.getElementById('sohSklButton').style.opacity = "1";
                            document.getElementById('sohSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('sohButOpa').value = "1";
                            document.getElementById('sohButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="sohSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="sohSkl"></input>
                <div className="skillsText changeFontColor">
                    Sleight of Hand (Dex)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="sthSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('sthSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('sthSklButton').style.opacity = "0.8";
                            document.getElementById('sthSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('sthButOpa').value = "0.8";
                            document.getElementById('sthButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('sthSklButton').style.opacity = "0";
                            document.getElementById('sthButOpa').value = '0';
                        } else {
                            document.getElementById('sthSklButton').style.opacity = "1";
                            document.getElementById('sthSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('sthButOpa').value = "1";
                            document.getElementById('sthButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="sthSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="sthSkl"></input>
                <div className="skillsText changeFontColor">
                    Stealth (Dex)
                </div>
            </div>
            <div className="midST changeBorderColor changeBgColor">
                <div className="STButtonBorder">
                    <button id="srvSklButton" className = "changeButCol" onClick={() => {
                        let strengthSTButton = document.getElementById('srvSklButton');
                        if (strengthSTButton.style.opacity == "1") {
                            document.getElementById('srvSklButton').style.opacity = "0.8";
                            document.getElementById('srvSklButton').style.backgroundColor = document.getElementById('exprButCol').value;
                            document.getElementById('srvButOpa').value = "0.8";
                            document.getElementById('srvButCol').value = document.getElementById('exprButCol').value;
                        } else if (strengthSTButton.style.opacity == "0.8") {
                            document.getElementById('srvSklButton').style.opacity = "0";
                            document.getElementById('srvButOpa').value = '0';
                        } else {
                            document.getElementById('srvSklButton').style.opacity = "1";
                            document.getElementById('srvSklButton').style.backgroundColor = document.getElementById('profButCol').value;
                            document.getElementById('srvButOpa').value = "1";
                            document.getElementById('srvButCol').value = document.getElementById('profButCol').value;
                        }
                    }}></button>
                </div>
                <input name="srvSkl" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="srvSkl"></input>
                <div className="skillsText changeFontColor">
                    Survival (Wis)
                </div>
            </div>
            <div className="skillsSkills changeBorderColor changeBgColor">
                <div className="STText changeFontColor">
                    Skills
                </div>
            </div>
        </div>
    )
}

export default SkillsBlock