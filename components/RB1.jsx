import React from 'react'

const RB1 = () => {
    return (
        <div className="rB1">
            <div className="rB1InnerWrapper changeBorderColor changeBgColor" >
                <div className="persTraitsWrapper changeBorderColor">
                    <textarea name="persTrtInp" type="text" placeholder="" className="persTrtInp changeFontColor changeBorderColor" form="saveCharacter" id="persTrtInp"></textarea>
                    <div className="perTrtTxt changeFontColor">Personality Traits</div>
                </div>
                <div className="idealsWrapper changeBorderColor">
                    <textarea name="idlsTrtInp" type="text" placeholder="" className="persTrtInpGen changeFontColor changeBorderColor" form="saveCharacter" id="idlsTrtInp"></textarea>
                    <div className="perTrtTxt changeFontColor">Ideals</div>
                </div>
                <div className="bondsWrapper changeBorderColor">
                <textarea name="bndsTrtInp" type="text" placeholder="" className="persTrtInpGen changeFontColor changeBorderColor" form="saveCharacter" id="bndsTrtInp"></textarea>
                <div className="perTrtTxt changeFontColor">Bonds</div>
                </div>
                <div className="flawsWrapper changeBorderColor">
                <textarea name="flwsTrtInp" type="text" placeholder="" className="persTrtInpGen changeFontColor changeBorderColor" form="saveCharacter" id="flwsTrtInp"></textarea>
                <div className="perTrtTxt changeFontColor">Flaws</div>
                </div>
            </div>
            {/* Using hidden inputs to save the button opacity and color data since idk how else to do it */}
            <input name="acrButOpa" type="hidden" placeholder="" form="saveCharacter" id="acrButOpa"></input>
            <input name="acrButCol" type="hidden" placeholder="" form="saveCharacter" id="acrButCol"></input>
            <input name="aniButOpa" type="hidden" placeholder="" form="saveCharacter" id="aniButOpa"></input>
            <input name="aniButCol" type="hidden" placeholder="" form="saveCharacter" id="aniButCol"></input>
            <input name="arcButOpa" type="hidden" placeholder="" form="saveCharacter" id="arcButOpa"></input>
            <input name="arcButCol" type="hidden" placeholder="" form="saveCharacter" id="arcButCol"></input>
            <input name="athButOpa" type="hidden" placeholder="" form="saveCharacter" id="athButOpa"></input>
            <input name="athButCol" type="hidden" placeholder="" form="saveCharacter" id="athButCol"></input>
            <input name="decButOpa" type="hidden" placeholder="" form="saveCharacter" id="decButOpa"></input>
            <input name="decButCol" type="hidden" placeholder="" form="saveCharacter" id="decButCol"></input>
            <input name="hisButOpa" type="hidden" placeholder="" form="saveCharacter" id="hisButOpa"></input>
            <input name="hisButCol" type="hidden" placeholder="" form="saveCharacter" id="hisButCol"></input>
            <input name="insButOpa" type="hidden" placeholder="" form="saveCharacter" id="insButOpa"></input>
            <input name="insButCol" type="hidden" placeholder="" form="saveCharacter" id="insButCol"></input>
            <input name="intButOpa" type="hidden" placeholder="" form="saveCharacter" id="intButOpa"></input>
            <input name="intButCol" type="hidden" placeholder="" form="saveCharacter" id="intButCol"></input>
            <input name="invButOpa" type="hidden" placeholder="" form="saveCharacter" id="invButOpa"></input>
            <input name="invButCol" type="hidden" placeholder="" form="saveCharacter" id="invButCol"></input>
            <input name="medButOpa" type="hidden" placeholder="" form="saveCharacter" id="medButOpa"></input>
            <input name="medButCol" type="hidden" placeholder="" form="saveCharacter" id="medButCol"></input>
            <input name="ntrButOpa" type="hidden" placeholder="" form="saveCharacter" id="ntrButOpa"></input>
            <input name="ntrButCol" type="hidden" placeholder="" form="saveCharacter" id="ntrButCol"></input>
            <input name="perButOpa" type="hidden" placeholder="" form="saveCharacter" id="perButOpa"></input>
            <input name="perButCol" type="hidden" placeholder="" form="saveCharacter" id="perButCol"></input>
            <input name="prfButOpa" type="hidden" placeholder="" form="saveCharacter" id="prfButOpa"></input>
            <input name="prfButCol" type="hidden" placeholder="" form="saveCharacter" id="prfButCol"></input>
            <input name="prsButOpa" type="hidden" placeholder="" form="saveCharacter" id="prsButOpa"></input>
            <input name="prsButCol" type="hidden" placeholder="" form="saveCharacter" id="prsButCol"></input>
            <input name="rlgButOpa" type="hidden" placeholder="" form="saveCharacter" id="rlgButOpa"></input>
            <input name="rlgButCol" type="hidden" placeholder="" form="saveCharacter" id="rlgButCol"></input>
            <input name="sohButOpa" type="hidden" placeholder="" form="saveCharacter" id="sohButOpa"></input>
            <input name="sohButCol" type="hidden" placeholder="" form="saveCharacter" id="sohButCol"></input>
            <input name="sthButOpa" type="hidden" placeholder="" form="saveCharacter" id="sthButOpa"></input>
            <input name="sthButCol" type="hidden" placeholder="" form="saveCharacter" id="sthButCol"></input>
            <input name="srvButOpa" type="hidden" placeholder="" form="saveCharacter" id="srvButOpa"></input>
            <input name="srvButCol" type="hidden" placeholder="" form="saveCharacter" id="srvButCol"></input>
            <input name="inspButOpa" type="hidden" placeholder="" form="saveCharacter" id="inspButOpa"></input>
            <input name="strSTButOpa" type="hidden" placeholder="" form="saveCharacter" id="strSTButOpa"></input>
            <input name="dexSTButOpa" type="hidden" placeholder="" form="saveCharacter" id="dexSTButOpa"></input>
            <input name="conSTButOpa" type="hidden" placeholder="" form="saveCharacter" id="conSTButOpa"></input>
            <input name="intSTButOpa" type="hidden" placeholder="" form="saveCharacter" id="intSTButOpa"></input>
            <input name="wisSTButOpa" type="hidden" placeholder="" form="saveCharacter" id="wisSTButOpa"></input>
            <input name="chaSTButOpa" type="hidden" placeholder="" form="saveCharacter" id="chaSTButOpa"></input>
        </div>
    )
}

export default RB1;