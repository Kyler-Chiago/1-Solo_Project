import React from 'react'

const CB1Inner = () => {
    return (
        <div className="CB1InnerWrapper changeBorderColor changeBgColor">
            <div className="aCWrapper">
                <div className="acShield changeBorderColor">
                    <input name="acInp" type="text" placeholder="" className="acInp changeFontColor changeBorderColor" form="saveCharacter" id="acInp"></input>
                    <div className="acShieldText changeFontColor">
                        Armor Class
                    </div>
                </div>
            </div>
            <div className="iniWrapper">
                <div className="iniBox changeBorderColor">
                    <input name="iniInp" type="text" placeholder="" className="iniInp changeFontColor changeBorderColor" form="saveCharacter" id="iniInp"></input>
                    <div className="acShieldText changeFontColor">
                        Initiative
                    </div>
                </div>
            </div>
            <div className="spdWrapper">
                <div className="iniBox changeBorderColor">
                    <input name="spdiInp" type="text" placeholder="" className="iniInp changeFontColor changeBorderColor" form="saveCharacter" id="spdiInp"></input>
                    <div className="acShieldText changeFontColor">
                        Speed
                    </div>
                </div>
            </div>
            <div className="hpWrapper changeBorderColor">
                <div className="hpMaxWrapper">
                    <div className="hpMaxText changeFontColor">
                        Hit Point Maximum:
                    </div>
                    <input name="hpMax" type="text" placeholder="" className="hpMax changeFontColor" form="saveCharacter" id="hpMax"></input>
                </div>
                <div className="hpInputWrapper">
                    <input name="hp" type="text" placeholder="" className="hp changeFontColor" form="saveCharacter" id="hp"></input>
                </div>
                <div className="currHPWrapper changeFontColor">
                    Current Hit Points
                </div>
            </div>
            <div className="tmpHpWrapper">
                <div className="tmpHpInner changeBorderColor">
                    <div className="tempHpInputWrapper">
                        <input name="tempHp" type="text" placeholder="" className="tempHp changeFontColor" form="saveCharacter" id="tempHp"></input>
                    </div>
                    <div className="tempHPTextWrapper changeFontColor">
                        Temporary Hit Points
                    </div>
                </div>
            </div>
            <div className="hdAndDSWrapper">
                <div className="hdWrapper changeBorderColor">
                    <div className="totalHd">
                        <div className="totalHdText changeFontColor">Total:</div>
                        <input name="ttlHdInp" type="text" placeholder="" className="ttlHdInp changeFontColor" form="saveCharacter" id="ttlHdInp"></input>
                    </div>
                    <div className="currHdWrapper">
                        <input name="curHdInp" type="text" placeholder="" className="curHdInp changeFontColor" form="saveCharacter" id="curHdInp"></input>
                    </div>
                    <div className="hDText changeFontColor">
                        Hit Dice
                    </div>
                </div>
                <div className="dsWrapper changeBorderColor">
                    {/* Made the death saves text inputs instead of buttons to save time */}
                    <div className="dSSucWrapper">
                        <div className="dSText changeFontColor">
                            Successes:
                        </div>
                        <input name="curDSSuc" type="text" placeholder="" className="curHdInp changeFontColor" form="saveCharacter" id="curDSSuc"></input>
                    </div>
                    <div className="dSSucWrapper">
                        <div className="dSText changeFontColor">
                            Failures:
                        </div>
                        <input name="curDSFal" type="text" placeholder="" className="curHdInp changeFontColor" form="saveCharacter" id="curDSFal"></input>
                    </div>
                    <div className="hDText changeFontColor">
                        Death Saves
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CB1Inner;