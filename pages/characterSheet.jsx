import React from 'react'
import nightBackground from '../docs/assets/images/anime-night-digital-art-hd-landscape_1920x1080.jpg'
import { useState, useEffect } from 'react'
import CharacterSheetNav from '../components/CharacterSheetNav';
import SkillsBlock from '../components/SkillsBlock';
import PWisBlock from '../components/PWisBlock';
import CB1Inner from '../components/CB1Inner';

const CharacterSheet = () => {

    // const [charactersList, setCharacters] = useState([]);

    // const characters = async () => {
    //     const response = await fetch('/charactersList');
    //     // console.log(resp);
    //     setCharacters(await response.json());
    // }

    // useEffect(() => {
    //     characters()
    // }, []);

    // let acrSklButtonOpacity = "test acrSklButtonOpacity";
    let acrSklButtonOpacity;

    const urlSearch = window.location.search;
    const charIdTest = new URLSearchParams(urlSearch);
    // console.log('charIdTest: ', charIdTest);
    const charId = charIdTest.get("char");
    // console.log('charId: ', charId);
    if (urlSearch.length !== 0) {
        // console.log('urlSearch: ', urlSearch);
        // console.log(typeof urlSearch);
        // const charIdTest = new URLSearchParams(urlSearch);
        // const charId = charIdTest.get("char");
        // console.log('characterSheet1 charId: ', charId);

        const [characterData, setCharacters] = useState([]);
        // console.log('characterSheet2 charId: ', charId);

        const character = async () => {
            const response = await fetch('/getThisCharacter', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ charId })
            });
            const data = await response.json();
            setCharacters(data);
        };

        // console.log('charId3: ', charId);
        // console.log('characterData11: ', characterData)

        useEffect(() => {
            character()
        }, []);

        // console.log('charId4: ', charId);

        if (Object.keys(characterData).length !== 0 && characterData.constructor === Object) {

            // console.log('characterData: ', characterData);
            // console.log(typeof characterData);

            // console.log(characterDara)
            let charName = document.getElementById("charName");
            charName.value = characterData.charName;

            let charClass = document.getElementById("charClass");
            charClass.value = characterData.charClass;

            let charLev = document.getElementById("charLev");
            charLev.value = characterData.charLev;

            let charBack = document.getElementById("charBack");
            charBack.value = characterData.charBack;

            let player = document.getElementById("player");
            player.value = characterData.player;

            let race = document.getElementById("race");
            race.value = characterData.race;

            let align = document.getElementById("align");
            align.value = characterData.align;

            let exp = document.getElementById("exp");
            exp.value = characterData.exp;

            let strAbi = document.getElementById("strAbi");
            strAbi.value = characterData.strAbi;

            let dexAbi = document.getElementById("dexAbi");
            dexAbi.value = characterData.dexAbi;

            let conAbi = document.getElementById("conAbi");
            // console.log('characterData.conAbi: ', characterData.conAbi);
            conAbi.value = characterData.conAbi;

            let intAbi = document.getElementById("intAbi");
            intAbi.value = characterData.intAbi;

            let wisAbi = document.getElementById("wisAbi");
            wisAbi.value = characterData.wisAbi;
            // let textFill = document.getElementById("chaSav");
            // textFill.value = "5";

            let chaAbi = document.getElementById("chaAbi");
            chaAbi.value = characterData.chaAbi;

            let profBon = document.getElementById("profBon");
            profBon.value = characterData.profBon;

            let strSav = document.getElementById("strSav");
            strSav.value = characterData.strSav;

            let dexSav = document.getElementById("dexSav");
            dexSav.value = characterData.dexSav;

            let conSav = document.getElementById("conSav");
            conSav.value = characterData.conSav;

            let intSav = document.getElementById("intSav");
            intSav.value = characterData.intSav;

            let wisSav = document.getElementById("wisSav");
            wisSav.value = characterData.wisSav;

            let chaSav = document.getElementById("chaSav");
            chaSav.value = characterData.chaSav;

            let strMod = document.getElementById("strMod");
            strMod.value = characterData.strMod;

            let dexMod = document.getElementById("dexMod");
            dexMod.value = characterData.dexMod;

            let conMod = document.getElementById("conMod");
            conMod.value = characterData.conMod;

            let intMod = document.getElementById("intMod");
            intMod.value = characterData.intMod;

            let wisMod = document.getElementById("wisMod");
            wisMod.value = characterData.wisMod;

            let chaMod = document.getElementById("chaMod");
            chaMod.value = characterData.chaMod;

            let acrSkl = document.getElementById("acrSkl");
            acrSkl.value = characterData.acrSkl;

            let AniSkl = document.getElementById("AniSkl");
            AniSkl.value = characterData.AniSkl;

            let ArcSkl = document.getElementById("ArcSkl");
            ArcSkl.value = characterData.ArcSkl;

            let AthSkl = document.getElementById("AthSkl");
            AthSkl.value = characterData.AthSkl;

            let decSkl = document.getElementById("decSkl");
            decSkl.value = characterData.decSkl;

            let hisSkl = document.getElementById("hisSkl");
            hisSkl.value = characterData.hisSkl;

            let insSkl = document.getElementById("insSkl");
            insSkl.value = characterData.insSkl;

            let intSkl = document.getElementById("intSkl");
            intSkl.value = characterData.intSkl;

            let invSkl = document.getElementById("invSkl");
            invSkl.value = characterData.invSkl;

            let medSkl = document.getElementById("medSkl");
            medSkl.value = characterData.medSkl;

            let ntrSkl = document.getElementById("ntrSkl");
            ntrSkl.value = characterData.ntrSkl;

            let perSkl = document.getElementById("perSkl");
            perSkl.value = characterData.perSkl;

            let prfSkl = document.getElementById("prfSkl");
            prfSkl.value = characterData.prfSkl;

            let prsSkl = document.getElementById("prsSkl");
            prsSkl.value = characterData.prsSkl;

            let rlgSkl = document.getElementById("rlgSkl");
            rlgSkl.value = characterData.rlgSkl;

            let sohSkl = document.getElementById("sohSkl");
            sohSkl.value = characterData.sohSkl;

            let sthSkl = document.getElementById("sthSkl");
            sthSkl.value = characterData.sthSkl;

            let srvSkl = document.getElementById("srvSkl");
            srvSkl.value = characterData.srvSkl;

            
            // console.log("characterData.acrSklButtonOpacity in cSheet: ", characterData.acrSklButtonOpacity);
            // let acrSklButtonOpacity = document.getElementById("acrSklButtonOpacity");
            // acrSklButtonOpacity.style.opacity = characterData.acrSklButtonOpacity;
            // acrSklButtonOpacity = characterData.acrSklButtonOpacity;
            // console.log('acrSklButtonOpacity in cSheet: ', acrSklButtonOpacity);

            // acrSklButtonOpacity 

            let pP = document.getElementById("pP");
            pP.value = characterData.pP;

            let oPandL = document.getElementById("oPandL");
            oPandL.value = characterData.oPandL;

            let acInp = document.getElementById("acInp");
            acInp.value = characterData.acInp;

            let iniInp = document.getElementById("iniInp");
            iniInp.value = characterData.iniInp;

            let spdiInp = document.getElementById("spdiInp");
            spdiInp.value = characterData.spdiInp;

            let hpMax = document.getElementById("hpMax");
            hpMax.value = characterData.hpMax;

            let hp = document.getElementById("hp");
            hp.value = characterData.hp;
        }
    }
    // console.log('acrSklButtonOpacity in cSheet2: ', acrSklButtonOpacity);

    return (
        <div className="wrapper">
            {/* <div className="page1"> */}
            <div className="characterSheetInnerWrapper">
                <div className="page1" style={{
                    backgroundImage: `url(${nightBackground})`
                }}>
                    {/* <img src={nightBackground} alt="Image Not Found"/> */}
                    {/* <img src={dice} alt="Image Not Found"/>  */}
                    <div className="page1Margin">
                        <div className="page1Header">
                            <div className="characterName">
                                <div className="characterNameContainer">
                                    <input name="charName" type="text" placeholder="" className="charNameInputOver" form="saveCharacter" id="charName" ></input>
                                    <span className="charNameTextUnder">Character Name</span>
                                </div>
                            </div>
                            <div className="characterBasics">
                                <div className="classLevel">
                                    <div className="charBasicsTextClass">Class</div>
                                    <div className="charBasicsTextLev">Level</div>
                                    <input name="charClass" type="text" placeholder="" className="charBasicsFormClass" form="saveCharacter" id="charClass"></input>
                                    <input name="charLev" type="text" placeholder="" className="charBasicsFormLev" form="saveCharacter" id="charLev"></input>
                                </div>
                                <div className="background">
                                    <input name="charBack" type="text" placeholder="" className="charBasicsForm" form="saveCharacter" id="charBack"></input>
                                    <div className="charBasicsText">Background</div>
                                </div>
                                <div className="playerName">
                                    <div className="charBasicsText">Player</div>
                                    <input name="player" type="text" placeholder="" className="charBasicsForm" form="saveCharacter" id="player"></input>
                                </div>
                                <div className="race">
                                    <div className="charBasicsText">Race</div>
                                    <input name="race" type="text" placeholder="" className="charBasicsForm" form="saveCharacter" id="race"></input>
                                </div>
                                <div className="alignment">
                                    <div className="charBasicsText">Alignment</div>
                                    <input name="align" type="text" placeholder="" className="charBasicsForm" form="saveCharacter" id="align"></input>
                                </div>
                                <div className="exp">
                                    <div className="charBasicsText">Experience</div>
                                    <input name="exp" type="text" placeholder="" className="charBasicsForm" form="saveCharacter" id="exp"></input>
                                </div>
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
                                                {/* <span id="strengthModCalc"></span> */}
                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore">
                                                    {/* <span >20</span> */}
                                                    <input name="strAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter" id="strAbi"></input>
                                                </div>
                                            </div>
                                            <input name="strMod" type="text" placeholder="" className="abiMod" form="saveCharacter" id="strMod"></input>
                                        </div>
                                        <div className="stat">
                                            <div className="statBorder">

                                            </div>
                                            <div className="ability">
                                                <span>Dexterity</span>
                                            </div>
                                            <div className="abilityModifier">
                                                {/* <span>+5</span> */}
                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore">
                                                    <input name="dexAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter" id="dexAbi"></input>
                                                </div>
                                            </div>
                                            <input name="dexMod" type="text" placeholder="" className="abiMod" form="saveCharacter" id="dexMod"></input>
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
                                                    <input name="conAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter" id="conAbi"></input>
                                                </div>
                                            </div>
                                            <input name="conMod" type="text" placeholder="" className="abiMod" form="saveCharacter" id="conMod"></input>
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
                                                    <input name="intAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter" id="intAbi"></input>
                                                </div>
                                            </div>
                                            <input name="intMod" type="text" placeholder="" className="abiMod" form="saveCharacter" id="intMod"></input>
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
                                                    <input name="wisAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter" id="wisAbi"></input>
                                                </div>
                                            </div>
                                            <input name="wisMod" type="text" placeholder="" className="abiMod" form="saveCharacter" id="wisMod"></input>
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
                                                    <input name="chaAbi" type="text" placeholder="" className="strengthAbilityInput" form="saveCharacter" id="chaAbi"></input>
                                                </div>
                                            </div>
                                            <input name="chaMod" type="text" placeholder="" className="abiMod" form="saveCharacter" id="chaMod"></input>
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
                                                <input name="profBon" type="text" placeholder="" className="profCheckInput" form="saveCharacter" id="profBon"></input>
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
                                                <input name="strSav" type="text" placeholder="" className="strengthSTInput" form="saveCharacter" id="strSav"></input>
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
                                                <input name="dexSav" type="text" placeholder="" className="dexteritySTInput" form="saveCharacter" id="dexSav"></input>
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
                                                <input name="conSav" type="text" placeholder="" className="constitutionSTInput" form="saveCharacter" id="conSav"></input>
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
                                                <input name="intSav" type="text" placeholder="" className="intelligenceSTInput" form="saveCharacter" id="intSav"></input>
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
                                                <input name="wisSav" type="text" placeholder="" className="wisdomSTInput" form="saveCharacter" id="wisSav"></input>
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
                                                <input name="chaSav" type="text" placeholder="" className="charismaSTInput" form="saveCharacter" id="chaSav"></input>
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
                                                <SkillsBlock 
                                                acrSklButtonOpacity = { acrSklButtonOpacity}
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="l3">
                                    < PWisBlock/>
                                    <div className="l3OPaL">
                                    <textarea name="oPandL" type="text" placeholder="" className = "oPandL" form="saveCharacter" id="oPandL"></textarea>
                                        <div className ="l3OPaLBot">Other Proficiencies & Languages</div>
                                    </div>
                                </div>
                            </div>
                            <div className="centerBlock">
                                <div className="cB1">
                                    <CB1Inner/>
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
                <CharacterSheetNav 
                key = {`characterSheetNav:` + charId}
                charId = {charId}
                // acrSklButtonOpacity = {acrSklButtonOpacity}
                />
            </div>
        </div>
    )
};

export default CharacterSheet;