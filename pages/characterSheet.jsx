import React from 'react'
import nightBackground from '../docs/assets/images/anime-night-digital-art-hd-landscape_1920x1080.jpg'
import { useState, useEffect } from 'react'
import CharacterSheetNav from '../components/CharacterSheetNav';
import SkillsBlock from '../components/SkillsBlock';
import PWisBlock from '../components/PWisBlock';
import CB1Inner from '../components/CB1Inner';
import RB1 from '../components/RB1';
import RB2 from '../components/RB2';
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

            let acrButOpa = document.getElementById("acrButOpa");
            acrButOpa.value = characterData.acrButOpa;
            let acrSklButton = document.getElementById("acrSklButton");
            let acrButCol = document.getElementById("acrButCol");
            if (acrButOpa.value == "1") {
                acrSklButton.style.backgroundColor = characterData.profButCol;
                acrButCol.value = characterData.profButCol;
            } else {
                acrSklButton.style.backgroundColor = characterData.exprButCol;
                acrButCol.value = characterData.exprButCol;
            }
            acrSklButton.style.opacity = characterData.acrButOpa;

            let aniButOpa = document.getElementById("aniButOpa");
            aniButOpa.value = characterData.aniButOpa;
            let AniSklButton = document.getElementById("AniSklButton");
            let aniButCol = document.getElementById("aniButCol");
            if (aniButOpa.value == "1") {
                AniSklButton.style.backgroundColor = characterData.profButCol;
                aniButCol.value = characterData.profButCol;
            } else {
                AniSklButton.style.backgroundColor = characterData.exprButCol;
                aniButCol.value = characterData.exprButCol;
            }
            AniSklButton.style.opacity = characterData.aniButOpa;

            let arcButOpa = document.getElementById("arcButOpa");
            arcButOpa.value = characterData.arcButOpa;
            let ArcSklButton = document.getElementById("ArcSklButton");
            let arcButCol = document.getElementById("arcButCol");
            if (arcButOpa.value == "1") {
                ArcSklButton.style.backgroundColor = characterData.profButCol;
                arcButCol.value = characterData.profButCol;
            } else {
                ArcSklButton.style.backgroundColor = characterData.exprButCol;
                arcButCol.value = characterData.exprButCol;
            }
            ArcSklButton.style.opacity = characterData.arcButOpa;

            let athButOpa = document.getElementById("athButOpa");
            athButOpa.value = characterData.athButOpa;
            let AthSklButton = document.getElementById("AthSklButton");
            let athButCol = document.getElementById("athButCol");
            if (athButOpa.value == "1") {
                AthSklButton.style.backgroundColor = characterData.profButCol;
                athButCol.value = characterData.profButCol;
            } else {
                AthSklButton.style.backgroundColor = characterData.exprButCol;
                athButCol.value = characterData.exprButCol;
            }
            AthSklButton.style.opacity = characterData.athButOpa;

            let decButOpa = document.getElementById("decButOpa");
            decButOpa.value = characterData.decButOpa;
            let decSklButton = document.getElementById("decSklButton");
            let decButCol = document.getElementById("decButCol");
            if (decButOpa.value == "1") {
                decSklButton.style.backgroundColor = characterData.profButCol;
                decButCol.value = characterData.profButCol;
            } else {
                decSklButton.style.backgroundColor = characterData.exprButCol;
                decButCol.value = characterData.exprButCol;
            }
            decSklButton.style.opacity = characterData.decButOpa;

            let hisButOpa = document.getElementById("hisButOpa");
            hisButOpa.value = characterData.hisButOpa;
            let hisSklButton = document.getElementById("hisSklButton");
            let hisButCol = document.getElementById("hisButCol");
            if (hisButOpa.value == "1") {
                hisSklButton.style.backgroundColor = characterData.profButCol;
                hisButCol.value = characterData.profButCol;
            } else {
                hisSklButton.style.backgroundColor = characterData.exprButCol;
                hisButCol.value = characterData.exprButCol;
            }
            hisSklButton.style.opacity = characterData.hisButOpa;

            let insButOpa = document.getElementById("insButOpa");
            insButOpa.value = characterData.insButOpa;
            // console.log(insButOpa.value);
            let insSklButton = document.getElementById("insSklButton");
            let insButCol = document.getElementById("insButCol");
            if (insButOpa.value == "1") {
                insButCol.value = characterData.insButCol;
                insSklButton.style.backgroundColor = characterData.profButCol;
            } else {
                insSklButton.style.backgroundColor = characterData.exprButCol;
                insButCol.value = characterData.insButCol;
            }
            insSklButton.style.opacity = characterData.insButOpa;

            let intButOpa = document.getElementById("intButOpa");
            intButOpa.value = characterData.intButOpa;
            let intSklButton = document.getElementById("intSklButton");
            let intButCol = document.getElementById("intButCol");
            if (intButOpa.value == "1") {
                intSklButton.style.backgroundColor = characterData.profButCol;
                intButCol.value = characterData.profButCol;
            } else {
                intSklButton.style.backgroundColor = characterData.exprButCol;
                intButCol.value = characterData.exprButCol;
            }
            intSklButton.style.opacity = characterData.intButOpa;

            let invButOpa = document.getElementById("invButOpa");
            invButOpa.value = characterData.invButOpa;
            let invSklButton = document.getElementById("invSklButton");
            let invButCol = document.getElementById("invButCol");
            if (invButOpa.value == "1") {
                invSklButton.style.backgroundColor = characterData.profButCol;
                invButCol.value = characterData.profButCol;
            } else {
                invSklButton.style.backgroundColor = characterData.exprButCol;
                invButCol.value = characterData.exprButCol;
            }
            invSklButton.style.opacity = characterData.invButOpa;

            let medButOpa = document.getElementById("medButOpa");
            medButOpa.value = characterData.medButOpa;
            let medSklButton = document.getElementById("medSklButton");
            let medButCol = document.getElementById("medButCol");
            if (medButOpa.value == "1") {
                medSklButton.style.backgroundColor = characterData.profButCol;
                medButCol.value = characterData.profButCol;
            } else {
                medSklButton.style.backgroundColor = characterData.exprButCol;
                medButCol.value = characterData.exprButCol;
            }
            medSklButton.style.opacity = characterData.medButOpa;

            let ntrButOpa = document.getElementById("ntrButOpa");
            ntrButOpa.value = characterData.ntrButOpa;
            let ntrSklButton = document.getElementById("ntrSklButton");
            let ntrButCol = document.getElementById("ntrButCol");
            if (ntrButOpa.value == "1") {
                ntrSklButton.style.backgroundColor = characterData.profButCol;
                ntrButCol.value = characterData.profButCol;
            } else {
                ntrSklButton.style.backgroundColor = characterData.exprButCol;
                ntrButCol.value = characterData.exprButCol;
            }
            ntrSklButton.style.opacity = characterData.ntrButOpa;

            let perButOpa = document.getElementById("perButOpa");
            perButOpa.value = characterData.perButOpa;
            let perSklButton = document.getElementById("perSklButton");
            let perButCol = document.getElementById("perButCol");
            if (perButOpa.value == "1") {
                perSklButton.style.backgroundColor = characterData.profButCol;
                perButCol.value = characterData.profButCol;
            } else {
                perSklButton.style.backgroundColor = characterData.exprButCol;
                perButCol.value = characterData.exprButCol;
            }
            perSklButton.style.opacity = characterData.perButOpa;

            let prfButOpa = document.getElementById("prfButOpa");
            prfButOpa.value = characterData.prfButOpa;
            let prfSklButton = document.getElementById("prfSklButton");
            let prfButCol = document.getElementById("prfButCol");
            if (prfButOpa.value == "1") {
                prfSklButton.style.backgroundColor = characterData.profButCol;
                prfButCol.value = characterData.profButCol;
            } else {
                prfSklButton.style.backgroundColor = characterData.exprButCol;
                prfButCol.value = characterData.exprButCol;
            }
            prfSklButton.style.opacity = characterData.prfButOpa;

            let prsButOpa = document.getElementById("prsButOpa");
            prsButOpa.value = characterData.prsButOpa;
            let prsSklButton = document.getElementById("prsSklButton");
            let prsButCol = document.getElementById("prsButCol");
            if (prsButOpa.value == "1") {
                prsSklButton.style.backgroundColor = characterData.profButCol;
                prsButCol.value = characterData.profButCol;
            } else {
                prsSklButton.style.backgroundColor = characterData.exprButCol;
                prsButCol.value = characterData.exprButCol;
            }
            prsSklButton.style.opacity = characterData.prsButOpa;

            let rlgButOpa = document.getElementById("rlgButOpa");
            rlgButOpa.value = characterData.rlgButOpa;
            let rlgSklButton = document.getElementById("rlgSklButton");
            let rlgButCol = document.getElementById("rlgButCol");
            if (rlgButOpa.value == "1") {
                rlgSklButton.style.backgroundColor = characterData.profButCol;
                rlgButCol.value = characterData.profButCol;
            } else {
                rlgSklButton.style.backgroundColor = characterData.exprButCol;
                rlgButCol.value = characterData.exprButCol;
            }
            rlgSklButton.style.opacity = characterData.rlgButOpa;

            let sohButOpa = document.getElementById("sohButOpa");
            sohButOpa.value = characterData.sohButOpa;
            let sohSklButton = document.getElementById("sohSklButton");
            let sohButCol = document.getElementById("sohButCol");
            if (sohButOpa.value == "1") {
                sohSklButton.style.backgroundColor = characterData.profButCol;
                sohButCol.value = characterData.profButCol;
            } else {
                sohSklButton.style.backgroundColor = characterData.exprButCol;
                sohButCol.value = characterData.exprButCol;
            }
            sohSklButton.style.opacity = characterData.sohButOpa;

            let sthButOpa = document.getElementById("sthButOpa");
            sthButOpa.value = characterData.sthButOpa;
            let sthSklButton = document.getElementById("sthSklButton");
            let sthButCol = document.getElementById("sthButCol");
            if (sthButOpa.value == "1") {
                sthSklButton.style.backgroundColor = characterData.profButCol;
                sthButCol.value = characterData.profButCol;
            } else {
                sthSklButton.style.backgroundColor = characterData.exprButCol;
                sthButCol.value = characterData.exprButCol;
            }
            sthSklButton.style.opacity = characterData.sthButOpa;



            let srvButOpa = document.getElementById("srvButOpa");
            srvButOpa.value = characterData.srvButOpa;
            let srvSklButton = document.getElementById("srvSklButton");
            let srvButCol = document.getElementById("srvButCol");
            if (srvButOpa.value == "1") {
                srvSklButton.style.backgroundColor = characterData.profButCol;
                srvButCol.value = characterData.profButCol;
            } else {
                srvSklButton.style.backgroundColor = characterData.exprButCol;
                srvButCol.value = characterData.exprButCol;
            }
            srvSklButton.style.opacity = characterData.srvButOpa;

            let inspirationButton = document.getElementById("inspirationButton");
            inspirationButton.style.opacity = characterData.inspButOpa;
            inspirationButton.style.backgroundColor = characterData.profButCol;
            let inspButOpa = document.getElementById('inspButOpa');
            inspButOpa.value = characterData.inspButOpa;

            let strengthSTButton = document.getElementById("strengthSTButton");
            strengthSTButton.style.opacity = characterData.strSTButOpa;
            strengthSTButton.style.backgroundColor = characterData.profButCol;
            let strSTButOpa = document.getElementById('strSTButOpa');
            strSTButOpa.value = characterData.strSTButOpa;

            let dexteritySTButton = document.getElementById("dexteritySTButton");
            dexteritySTButton.style.opacity = characterData.dexSTButOpa;
            dexteritySTButton.style.backgroundColor = characterData.profButCol;
            let dexSTButOpa = document.getElementById('dexSTButOpa');
            dexSTButOpa.value = characterData.dexSTButOpa;

            let constitutionSTButton = document.getElementById("constitutionSTButton");
            constitutionSTButton.style.opacity = characterData.conSTButOpa;
            constitutionSTButton.style.backgroundColor = characterData.profButCol;
            let conSTButOpa = document.getElementById('conSTButOpa');
            conSTButOpa.value = characterData.conSTButOpa;

            let intelligenceSTButton = document.getElementById("intelligenceSTButton");
            intelligenceSTButton.style.opacity = characterData.intSTButOpa;
            intelligenceSTButton.style.backgroundColor = characterData.profButCol;
            let intSTButOpa = document.getElementById('intSTButOpa');
            intSTButOpa.value = characterData.intSTButOpa;

            let wisdomSTButton = document.getElementById("wisdomSTButton");
            wisdomSTButton.style.opacity = characterData.wisSTButOpa;
            wisdomSTButton.style.backgroundColor = characterData.profButCol;
            let wisSTButOpa = document.getElementById('wisSTButOpa');
            wisSTButOpa.value = characterData.wisSTButOpa;

            let charismaSTButton = document.getElementById("charismaSTButton");
            charismaSTButton.style.opacity = characterData.chaSTButOpa;
            charismaSTButton.style.backgroundColor = characterData.profButCol;
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

            let persTrtInp = document.getElementById('persTrtInp');
            persTrtInp.value = characterData.persTrtInp;

            let idlsTrtInp = document.getElementById('idlsTrtInp');
            idlsTrtInp.value = characterData.idlsTrtInp;

            let bndsTrtInp = document.getElementById('bndsTrtInp');
            bndsTrtInp.value = characterData.bndsTrtInp;

            let flwsTrtInp = document.getElementById('flwsTrtInp');
            flwsTrtInp.value = characterData.flwsTrtInp;

            let featTrtInp = document.getElementById('featTrtInp');
            featTrtInp.value = characterData.featTrtInp;

            let borderColor = document.getElementById('borderColor');
            borderColor.value = characterData.borderColor;
            let borderColors = document.getElementsByClassName("changeBorderColor");
            for (let borderColor of borderColors) {
                borderColor.style.borderColor = document.getElementById('borderColor').value;
            }
            let equipmentMonBorders = document.getElementsByClassName("cB3MonNam");
            for (let equipmentMonBorder of equipmentMonBorders) {
                equipmentMonBorder.style.backgroundColor = document.getElementById('borderColor').value;
            }

            let fontColor = document.getElementById('fontColor');
            fontColor.value = characterData.fontColor;
            let fontColors = document.getElementsByClassName("changeFontColor");
            for (let fontColor of fontColors) {
                fontColor.style.color = document.getElementById('fontColor').value;
            }

            let abiScBgCol = document.getElementById('abiScBgCol');
            abiScBgCol.value = characterData.abiScBgCol;
            let abiScBgCols = document.getElementsByClassName("changeAbiScBgCol");
            for (let abiScBgCol of abiScBgCols) {
                abiScBgCol.style.backgroundColor = document.getElementById('abiScBgCol').value;
            }

            let boxBgCol = document.getElementById('boxBgCol');
            boxBgCol.value = characterData.boxBgCol;
            let boxBgCols = document.getElementsByClassName("changeBgColor");
            function hexToRgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }
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

            let profButCol = document.getElementById('profButCol');
            profButCol.value = characterData.profButCol;

            let exprButCol = document.getElementById('exprButCol');
            exprButCol.value = characterData.exprButCol;
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
                                    <input name="charName" type="text" placeholder="" className="charNameInputOver changeFontColor changeBgColor changeBorderColor" form="saveCharacter" id="charName" ></input>
                                    <span className="charNameTextUnder changeFontColor">Character Name</span>
                                </div>
                            </div>
                            <div className="characterBasics">
                                <div className="classLevel changeBorderColor changeBgColor">
                                    <div className="charBasicsTextClass changeFontColor">Class</div>
                                    <div className="charBasicsTextLev changeFontColor">Level</div>
                                    <input name="charClass" type="text" placeholder="" className="charBasicsFormClass changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="charClass"></input>
                                    <input name="charLev" type="text" placeholder="" className="charBasicsFormLev changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="charLev"></input>
                                </div>
                                <div className="background changeBorderColor changeBgColor">
                                    <input name="charBack" type="text" placeholder="" className="charBasicsForm changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="charBack"></input>
                                    <div className="charBasicsText changeFontColor">Background</div>
                                </div>
                                <div className="playerName changeBorderColor changeBgColor">
                                    <div className="charBasicsText changeFontColor">Player</div>
                                    <input name="player" type="text" placeholder="" className="charBasicsForm changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="player"></input>
                                </div>
                                <div className="race changeBorderColor changeBgColor">
                                    <div className="charBasicsText changeFontColor">Race</div>
                                    <input name="race" type="text" placeholder="" className="charBasicsForm changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="race"></input>
                                </div>
                                <div className="alignment changeBorderColor changeBgColor">
                                    <div className="charBasicsText changeFontColor">Alignment</div>
                                    <input name="align" type="text" placeholder="" className="charBasicsForm changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="align"></input>
                                </div>
                                <div className="exp changeBorderColor changeBgColor">
                                    <div className="charBasicsText changeFontColor">Experience</div>
                                    <input name="exp" type="text" placeholder="" className="charBasicsForm changeFontColor changeBorderColor changeBgColorInputs" form="saveCharacter" id="exp"></input>
                                </div>
                            </div>
                        </div>
                        <div className="mainBlock">
                            <div className="leftBlock">
                                <div className="leftBlockRow">
                                    <div className="statColumn">
                                        <div className="stat">
                                            <div className="statBorder changeBorderColor changeBgColor">

                                            </div>
                                            <div className="ability changeBorderColor">
                                                <span className="centerText changeFontColor">Strength</span>
                                            </div>
                                            <div className="abilityModifier">
                                                {/* <span id="strengthModCalc"></span> */}
                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore changeBorderColor">
                                                    {/* <span >20</span> */}
                                                    <input name="strAbi" type="text" placeholder="" className="strengthAbilityInput changeFontColor changeAbiScBgCol" form="saveCharacter" id="strAbi"></input>
                                                </div>

                                            </div>
                                            <input name="strMod" type="text" placeholder="" className="abiMod changeFontColor" form="saveCharacter" id="strMod"></input>
                                        </div>
                                        <div className="stat">
                                            <div className="statBorder changeBorderColor changeBgColor">

                                            </div>
                                            <div className="ability changeBorderColor changeFontColor">
                                                <span>Dexterity</span>
                                            </div>
                                            <div className="abilityModifier">
                                                {/* <span>+5</span> */}
                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore changeBorderColor">
                                                    <input name="dexAbi" type="text" placeholder="" className="strengthAbilityInput changeFontColor changeAbiScBgCol" form="saveCharacter" id="dexAbi"></input>
                                                </div>
                                            </div>
                                            <input name="dexMod" type="text" placeholder="" className="abiMod changeFontColor" form="saveCharacter" id="dexMod"></input>
                                        </div>
                                        <div className="stat">
                                            <div className="statBorder changeBorderColor changeBgColor">

                                            </div>
                                            <div className="ability changeBorderColor changeFontColor">
                                                <span className="centerText">Constitution</span>
                                            </div>
                                            <div className="abilityModifier">

                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore changeBorderColor">
                                                    <input name="conAbi" type="text" placeholder="" className="strengthAbilityInput changeFontColor changeAbiScBgCol" form="saveCharacter" id="conAbi"></input>
                                                </div>
                                            </div>
                                            <input name="conMod" type="text" placeholder="" className="abiMod changeFontColor" form="saveCharacter" id="conMod"></input>
                                        </div>
                                        <div className="stat">
                                            <div className="statBorder changeBorderColor changeBgColor">

                                            </div>
                                            <div className="ability changeBorderColor changeFontColor">
                                                <span>Intelligence</span>
                                            </div>
                                            <div className="abilityModifier">

                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore changeBorderColor">
                                                    <input name="intAbi" type="text" placeholder="" className="strengthAbilityInput changeFontColor changeAbiScBgCol" form="saveCharacter" id="intAbi"></input>
                                                </div>
                                            </div>
                                            <input name="intMod" type="text" placeholder="" className="abiMod changeFontColor" form="saveCharacter" id="intMod"></input>
                                        </div>
                                        <div className="stat">
                                            <div className="statBorder changeBorderColor changeBgColor">

                                            </div>
                                            <div className="ability changeBorderColor changeFontColor">
                                                <span>Wisdom</span>
                                            </div>
                                            <div className="abilityModifier">

                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore changeBorderColor">
                                                    <input name="wisAbi" type="text" placeholder="" className="strengthAbilityInput changeFontColor changeAbiScBgCol" form="saveCharacter" id="wisAbi"></input>
                                                </div>
                                            </div>
                                            <input name="wisMod" type="text" placeholder="" className="abiMod changeFontColor" form="saveCharacter" id="wisMod"></input>
                                        </div>
                                        <div className="stat">
                                            <div className="statBorder changeBorderColor changeBgColor">

                                            </div>
                                            <div className="ability changeBorderColor changeFontColor">
                                                <span>Charisma</span>
                                            </div>
                                            <div className="abilityModifier">

                                            </div>
                                            <div className="abilityScoreBox">
                                                <div className="abilityScore changeBorderColor">
                                                    <input name="chaAbi" type="text" placeholder="" className="strengthAbilityInput changeFontColor changeAbiScBgCol" form="saveCharacter" id="chaAbi"></input>
                                                </div>
                                            </div>
                                            <input name="chaMod" type="text" placeholder="" className="abiMod changeFontColor" form="saveCharacter" id="chaMod"></input>
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <div className="inspirationBlock">
                                            <div className="inspirationCheck changeBorderColor">
                                                <button id="inspirationButton" className="changeBorderColor changeButCol" onClick={() => {
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
                                            <div className="inspirationText changeBorderColor changeFontColor changeBgColor">
                                                Inspiration
                                            </div>
                                        </div>
                                        <div className="profBonusBlock">
                                            <div className="profCheck changeBorderColor changeBgColor">
                                                <input name="profBon" type="text" placeholder="" className="profCheckInput changeFontColor changeBorderColor" form="saveCharacter" id="profBon"></input>
                                            </div>
                                            <div className="profText changeBorderColor changeFontColor changeBgColor">
                                                Proficiency Bonus
                                            </div>
                                        </div>
                                        <div className="savingThrowsBlock">
                                            <div className="strengthST changeBorderColor changeBgColor">
                                                <div className="STButtonBorder">
                                                    <button id="strengthSTButton" className="changeButCol" onClick={() => {
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
                                                <input name="strSav" type="text" placeholder="" className="strengthSTInput changeFontColor" form="saveCharacter" id="strSav"></input>
                                                <div className="STText changeFontColor">
                                                    Strength
                                                </div>
                                            </div>
                                            <div className="midST dexterityST changeBorderColor changeBgColor">
                                                <div className="STButtonBorder">
                                                    <button id="dexteritySTButton" className="changeButCol" onClick={() => {
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
                                                <input name="dexSav" type="text" placeholder="" className="dexteritySTInput changeFontColor" form="saveCharacter" id="dexSav"></input>
                                                <div className="STText changeFontColor">
                                                    Dexterity
                                                </div>
                                            </div>
                                            <div className="midST conST changeBorderColor changeBgColor">
                                                <div className="STButtonBorder">
                                                    <button id="constitutionSTButton" className="changeButCol" onClick={() => {
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
                                                <input name="conSav" type="text" placeholder="" className="constitutionSTInput changeFontColor" form="saveCharacter" id="conSav"></input>
                                                <div className="STText changeFontColor">
                                                    Constitution
                                                </div>
                                            </div>
                                            <div className="midST intelligenceST changeBorderColor changeBgColor">
                                                <div className="STButtonBorder">
                                                    <button id="intelligenceSTButton" className="changeButCol" onClick={() => {
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
                                                <input name="intSav" type="text" placeholder="" className="intelligenceSTInput changeFontColor" form="saveCharacter" id="intSav"></input>
                                                <div className="STText changeFontColor">
                                                    Intelligence
                                                </div>
                                            </div>
                                            <div className="midST wisdomST changeBorderColor changeBgColor">
                                                <div className="STButtonBorder">
                                                    <button id="wisdomSTButton" className="changeButCol" onClick={() => {
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
                                                <input name="wisSav" type="text" placeholder="" className="wisdomSTInput changeFontColor" form="saveCharacter" id="wisSav"></input>
                                                <div className="STText changeFontColor">
                                                    Wisdom
                                                </div>
                                            </div>
                                            <div className="charismaST changeBorderColor changeBgColor">
                                                <div className="STButtonBorder">
                                                    <button id="charismaSTButton" className="changeButCol" onClick={() => {
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
                                                <input name="chaSav" type="text" placeholder="" className="charismaSTInput changeFontColor" form="saveCharacter" id="chaSav"></input>
                                                <div className="STText changeFontColor">
                                                    Charisma
                                                </div>
                                            </div>
                                            <div className="savingThrowsST changeBorderColor changeBgColor">
                                                <div className="savingThrowsSTText changeFontColor">
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
                                    <div className="l3OPaL changeBorderColor changeBgColor">
                                        <textarea name="oPandL" type="text" placeholder="" className="oPandL changeFontColor changeBorderColor" form="saveCharacter" id="oPandL"></textarea>
                                        <div className="l3OPaLBot changeFontColor">Other Proficiencies & Languages</div>
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
                                <RB1 />
                                <RB2 />
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