import React from 'react'
import nightBackground from '../docs/assets/images/anime-night-digital-art-hd-landscape_1920x1080.jpg'
import { useState, useEffect } from 'react'
import CharacterSheetNav from '../components/CharacterSheetNav';
import SkillsBlock from '../components/SkillsBlock';
import PWisBlock from '../components/PWisBlock';
import CB1Inner from '../components/CB1Inner';
import RB1 from '../components/RB1';
import CB2Inner from '../components/CB2Inner';
import CB3Inner from '../components/CB3Inner';


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

            let acrSklButton = document.getElementById("acrSklButton");
            acrSklButton.style.opacity = characterData.acrButOpa;
            acrSklButton.style.backgroundColor = characterData.acrButCol;
            let acrButOpa = document.getElementById("acrButOpa");
            acrButOpa.value = characterData.acrButOpa;
            let acrButCol = document.getElementById("acrButCol");
            acrButCol.value = characterData.acrButCol;


            let AniSklButton = document.getElementById("AniSklButton");
            AniSklButton.style.opacity = characterData.aniButOpa;
            AniSklButton.style.backgroundColor = characterData.aniButCol;
            let aniButOpa = document.getElementById("aniButOpa");
            aniButOpa.value = characterData.aniButOpa;
            let aniButCol = document.getElementById("aniButCol");
            aniButCol.value = characterData.aniButCol;

            let ArcSklButton = document.getElementById("ArcSklButton");
            ArcSklButton.style.opacity = characterData.arcButOpa;
            ArcSklButton.style.backgroundColor = characterData.arcButCol;
            let arcButOpa = document.getElementById("arcButOpa");
            arcButOpa.value = characterData.arcButOpa;
            let arcButCol = document.getElementById("arcButCol");
            arcButCol.value = characterData.arcButCol;

            let AthSklButton = document.getElementById("AthSklButton");
            AthSklButton.style.opacity = characterData.athButOpa;
            AthSklButton.style.backgroundColor = characterData.athButCol;
            let athButOpa = document.getElementById("athButOpa");
            athButOpa.value = characterData.athButOpa;
            let athButCol = document.getElementById("athButCol");
            athButCol.value = characterData.athButCol;

            let decSklButton = document.getElementById("decSklButton");
            decSklButton.style.opacity = characterData.decButOpa;
            decSklButton.style.backgroundColor = characterData.decButCol;
            let decButOpa = document.getElementById("decButOpa");
            decButOpa.value = characterData.decButOpa;
            let decButCol = document.getElementById("decButCol");
            decButCol.value = characterData.decButCol;

            let hisSklButton = document.getElementById("hisSklButton");
            hisSklButton.style.opacity = characterData.hisButOpa;
            hisSklButton.style.backgroundColor = characterData.hisButCol;
            let hisButOpa = document.getElementById("hisButOpa");
            hisButOpa.value = characterData.hisButOpa;
            let hisButCol = document.getElementById("hisButCol");
            hisButCol.value = characterData.hisButCol;

            let insSklButton = document.getElementById("insSklButton");
            insSklButton.style.opacity = characterData.insButOpa;
            insSklButton.style.backgroundColor = characterData.insButCol;
            let insButOpa = document.getElementById("insButOpa");
            insButOpa.value = characterData.insButOpa;
            let insButCol = document.getElementById("insButCol");
            insButCol.value = characterData.insButCol;

            let intSklButton = document.getElementById("intSklButton");
            intSklButton.style.opacity = characterData.intButOpa;
            intSklButton.style.backgroundColor = characterData.intButCol;
            let intButOpa = document.getElementById("intButOpa");
            intButOpa.value = characterData.intButOpa;
            let intButCol = document.getElementById("intButCol");
            intButCol.value = characterData.intButCol;

            let invSklButton = document.getElementById("invSklButton");
            invSklButton.style.opacity = characterData.invButOpa;
            invSklButton.style.backgroundColor = characterData.invButCol;
            let invButOpa = document.getElementById("invButOpa");
            invButOpa.value = characterData.invButOpa;
            let invButCol = document.getElementById("invButCol");
            invButCol.value = characterData.invButCol;

            let medSklButton = document.getElementById("medSklButton");
            medSklButton.style.opacity = characterData.medButOpa;
            medSklButton.style.backgroundColor = characterData.medButCol;
            let medButOpa = document.getElementById("medButOpa");
            medButOpa.value = characterData.medButOpa;
            let medButCol = document.getElementById("medButCol");
            medButCol.value = characterData.medButCol;

            let ntrSklButton = document.getElementById("ntrSklButton");
            ntrSklButton.style.opacity = characterData.ntrButOpa;
            ntrSklButton.style.backgroundColor = characterData.ntrButCol;
            let ntrButOpa = document.getElementById("ntrButOpa");
            ntrButOpa.value = characterData.ntrButOpa;
            let ntrButCol = document.getElementById("ntrButCol");
            ntrButCol.value = characterData.ntrButCol;

            let perSklButton = document.getElementById("perSklButton");
            perSklButton.style.opacity = characterData.perButOpa;
            perSklButton.style.backgroundColor = characterData.perButCol;
            let perButOpa = document.getElementById("perButOpa");
            perButOpa.value = characterData.perButOpa;
            let perButCol = document.getElementById("perButCol");
            perButCol.value = characterData.perButCol;

            let prfSklButton = document.getElementById("prfSklButton");
            prfSklButton.style.opacity = characterData.prfButOpa;
            prfSklButton.style.backgroundColor = characterData.prfButCol;
            let prfButOpa = document.getElementById("prfButOpa");
            prfButOpa.value = characterData.prfButOpa;
            let prfButCol = document.getElementById("prfButCol");
            prfButCol.value = characterData.prfButCol;

            let prsSklButton = document.getElementById("prsSklButton");
            prsSklButton.style.opacity = characterData.prsButOpa;
            prsSklButton.style.backgroundColor = characterData.prsButCol;
            let prsButOpa = document.getElementById("prsButOpa");
            prsButOpa.value = characterData.prsButOpa;
            let prsButCol = document.getElementById("prsButCol");
            prsButCol.value = characterData.prsButCol;

            let rlgSklButton = document.getElementById("rlgSklButton");
            rlgSklButton.style.opacity = characterData.rlgButOpa;
            rlgSklButton.style.backgroundColor = characterData.rlgButCol;
            let rlgButOpa = document.getElementById("rlgButOpa");
            rlgButOpa.value = characterData.rlgButOpa;
            let rlgButCol = document.getElementById("rlgButCol");
            rlgButCol.value = characterData.rlgButCol;

            let sohSklButton = document.getElementById("sohSklButton");
            sohSklButton.style.opacity = characterData.sohButOpa;
            sohSklButton.style.backgroundColor = characterData.sohButCol;
            let sohButOpa = document.getElementById("sohButOpa");
            sohButOpa.value = characterData.sohButOpa;
            let sohButCol = document.getElementById("sohButCol");
            sohButCol.value = characterData.sohButCol;

            let sthSklButton = document.getElementById("sthSklButton");
            sthSklButton.style.opacity = characterData.sthButOpa;
            sthSklButton.style.backgroundColor = characterData.sthButCol;
            let sthButOpa = document.getElementById("sthButOpa");
            sthButOpa.value = characterData.sthButOpa;
            let sthButCol = document.getElementById("sthButCol");
            sthButCol.value = characterData.sthButCol;

            let srvSklButton = document.getElementById("srvSklButton");
            srvSklButton.style.opacity = characterData.srvButOpa;
            srvSklButton.style.backgroundColor = characterData.srvButCol;
            let srvButOpa = document.getElementById("srvButOpa");
            srvButOpa.value = characterData.srvButOpa;
            let srvButCol = document.getElementById("srvButCol");
            srvButCol.value = characterData.srvButCol;

            let inspirationButton = document.getElementById("inspirationButton");
            inspirationButton.style.opacity = characterData.inspButOpa;
            let inspButOpa = document.getElementById('inspButOpa');
            inspButOpa.value = characterData.inspButOpa;

            let strengthSTButton = document.getElementById("strengthSTButton");
            strengthSTButton.style.opacity = characterData.strSTButOpa;
            let strSTButOpa = document.getElementById('strSTButOpa');
            strSTButOpa.value = characterData.strSTButOpa;

            let dexteritySTButton = document.getElementById("dexteritySTButton");
            dexteritySTButton.style.opacity = characterData.dexSTButOpa;
            let dexSTButOpa = document.getElementById('dexSTButOpa');
            dexSTButOpa.value = characterData.dexSTButOpa;

            let constitutionSTButton = document.getElementById("constitutionSTButton");
            constitutionSTButton.style.opacity = characterData.conSTButOpa;
            let conSTButOpa = document.getElementById('conSTButOpa');
            conSTButOpa.value = characterData.conSTButOpa;

            let intelligenceSTButton = document.getElementById("intelligenceSTButton");
            intelligenceSTButton.style.opacity = characterData.intSTButOpa;
            let intSTButOpa = document.getElementById('intSTButOpa');
            intSTButOpa.value = characterData.intSTButOpa;

            let wisdomSTButton = document.getElementById("wisdomSTButton");
            wisdomSTButton.style.opacity = characterData.wisSTButOpa;
            let wisSTButOpa = document.getElementById('wisSTButOpa');
            wisSTButOpa.value = characterData.wisSTButOpa;

            let charismaSTButton = document.getElementById("charismaSTButton");
            charismaSTButton.style.opacity = characterData.chaSTButOpa;
            let chaSTButOpa = document.getElementById('chaSTButOpa');
            chaSTButOpa.value = characterData.chaSTButOpa;

            let tempHp = document.getElementById("tempHp");
            tempHp.value = characterData.tempHp;

            let ttlHdInp = document.getElementById("ttlHdInp");
            ttlHdInp.value = characterData.ttlHdInp;

            let curHdInp = document.getElementById('curHdInp');
            curHdInp.value = characterData.curHdInp;

            let curDSSuc = document.getElementById('curDSSuc');
            curDSSuc.value = characterData.curDSSuc;

            let curDSFal = document.getElementById('curDSFal');
            curDSFal.value = characterData.curDSFal;

            let atkNam1 = document.getElementById('atkNam1');
            atkNam1.value = characterData.atkNam1;

            let atkNam2 = document.getElementById('atkNam2');
            atkNam2.value = characterData.atkNam2;

            let atkNam3 = document.getElementById('atkNam3');
            atkNam3.value = characterData.atkNam3;

            let atkBon1 = document.getElementById('atkBon1');
            atkBon1.value = characterData.atkBon1;

            let atkBon2 = document.getElementById('atkBon2');
            atkBon2.value = characterData.atkBon2;

            let atkBon3 = document.getElementById('atkBon3');
            atkBon3.value = characterData.atkBon3;

            let dmgTyp1 = document.getElementById('dmgTyp1');
            dmgTyp1.value = characterData.dmgTyp1;

            let dmgTyp2 = document.getElementById('dmgTyp2');
            dmgTyp2.value = characterData.dmgTyp2;

            let dmgTyp3 = document.getElementById('dmgTyp3');
            dmgTyp3.value = characterData.dmgTyp3;

            let atkSplInp = document.getElementById('atkSplInp');
            atkSplInp.value = characterData.atkSplInp;

            let cB3InpAre = document.getElementById('cB3InpAre');
            cB3InpAre.value = characterData.cB3InpAre;

            let cpInp = document.getElementById('cpInp');
            cpInp.value = characterData.cpInp;

            let spInp = document.getElementById('spInp');
            spInp.value = characterData.spInp;

            let epInp = document.getElementById('epInp');
            epInp.value = characterData.epInp;

            let gpInp = document.getElementById('gpInp');
            gpInp.value = characterData.gpInp;

            let ppInp = document.getElementById('ppInp');
            ppInp.value = characterData.ppInp;
        }
    }

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
                                                        document.getElementById('inspButOpa').value = "0";
                                                    } else {
                                                        document.getElementById('inspirationButton').style.opacity = "0.7";
                                                        document.getElementById('inspButOpa').value = "0.7";
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
                                                            document.getElementById('strSTButOpa').value = "0";
                                                        } else {
                                                            document.getElementById('strengthSTButton').style.opacity = "0.7";
                                                            document.getElementById('strSTButOpa').value = "0.7";
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
                                                            document.getElementById('dexSTButOpa').value = "0";
                                                        } else {
                                                            document.getElementById('dexteritySTButton').style.opacity = "0.7";
                                                            document.getElementById('dexSTButOpa').value = "0.7";
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
                                                            document.getElementById('conSTButOpa').value = "0";
                                                        } else {
                                                            document.getElementById('constitutionSTButton').style.opacity = "0.7";
                                                            document.getElementById('conSTButOpa').value = "0.7";
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
                                                            document.getElementById('intSTButOpa').value = "0";
                                                        } else {
                                                            document.getElementById('intelligenceSTButton').style.opacity = "0.7";
                                                            document.getElementById('intSTButOpa').value = "0.7";
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
                                                            document.getElementById('wisSTButOpa').value = "0";
                                                        } else {
                                                            document.getElementById('wisdomSTButton').style.opacity = "0.7";
                                                            document.getElementById('wisSTButOpa').value = "0.7";
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
                                                            document.getElementById('chaSTButOpa').value = "0";
                                                        } else {
                                                            document.getElementById('charismaSTButton').style.opacity = "0.7";
                                                            document.getElementById('chaSTButOpa').value = "0.7";
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
                                                acrSklButtonOpacity={acrSklButtonOpacity}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="l3">
                                    < PWisBlock />
                                    <div className="l3OPaL">
                                        <textarea name="oPandL" type="text" placeholder="" className="oPandL" form="saveCharacter" id="oPandL"></textarea>
                                        <div className="l3OPaLBot">Other Proficiencies & Languages</div>
                                    </div>
                                </div>
                            </div>
                            <div className="centerBlock">
                                <div className="cB1">
                                    <CB1Inner />
                                </div>
                                <div className="cB2">
                                    <CB2Inner />
                                </div>
                                <div className="cB3">
                                    <CB3Inner />
                                </div>
                            </div>
                            <div className="rightBlock">
                                {/* <div className="rB1">
                                    using hidden inputs to save the button opacity and background color
                                    <input name="acrButOpa" type="text" placeholder="" form="saveCharacter" id="acrButOpa"></input>
                                    <input name="acrButCol" type="text" placeholder="" form="saveCharacter" id="acrButCol"></input>
                                    <input name="aniButOpa" type="text" placeholder="" form="saveCharacter" id="aniButOpa"></input>
                                    <input name="aniButCol" type="text" placeholder="" form="saveCharacter" id="aniButCol"></input>
                                </div> */}
                                <RB1/>
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
                    key={`characterSheetNav:` + charId}
                    charId={charId}
                // acrSklButtonOpacity = {acrSklButtonOpacity}
                />
            </div>
        </div>
    )
};

export default CharacterSheet;