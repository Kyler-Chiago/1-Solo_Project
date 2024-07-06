import React from 'react'

const CB1Inner = () => {
    return (
        <div className="CB1InnerWrapper">
            <div className="aCWrapper">
                <div className="acShield">
                    <input name="acInp" type="text" placeholder="" className="acInp" form="saveCharacter" id="acInp"></input>
                    <div className="acShieldText">
                        Armor Class
                    </div>
                </div>
            </div>
            <div className="iniWrapper">
                <div className="iniBox">
                    <input name="iniInp" type="text" placeholder="" className="iniInp" form="saveCharacter" id="iniInp"></input>
                    <div className="acShieldText">
                        Initiative
                    </div>
                </div>
            </div>
            <div className="spdWrapper">
                <div className="iniBox">
                    <input name="spdiInp" type="text" placeholder="" className="iniInp" form="saveCharacter" id="spdiInp"></input>
                    <div className="acShieldText">
                        Speed
                    </div>
                </div>
            </div>
            <div className="hpWrapper">
                <div className="hpMaxWrapper">
                    <div className="hpMaxText">
                        Hit Point Maximum:
                    </div>
                    <input name="hpMax" type="text" placeholder="" className="hpMax" form="saveCharacter" id="hpMax"></input>
                </div>
                <div className="hpInputWrapper">
                    <input name="hp" type="text" placeholder="" className="hp" form="saveCharacter" id="hp"></input>
                </div>
                <div className="currHPWrapper">
                    Current Hit Points
                </div>
            </div>
            <div className="tmpHpWrapper">
                <div className="tmpHpInner">
                    <div className="tempHpInputWrapper">
                        <input name="tempHp" type="text" placeholder="" className="tempHp" form="saveCharacter" id="tempHp"></input>
                    </div>
                    <div className="tempHPTextWrapper">
                        Temporary Hit Points
                    </div>
                </div>
            </div>
            <div className="hdAndDSWrapper">
                <div className="hdWrapper">
                    <div className="totalHd">
                        <div className="totalHdText">Total:</div>
                        <input name="ttlHdInp" type="text" placeholder="" className="ttlHdInp" form="saveCharacter" id="ttlHdInp"></input>
                    </div>
                    <div className="currHdWrapper">
                        <input name="curHdInp" type="text" placeholder="" className="curHdInp" form="saveCharacter" id="curHdInp"></input>
                    </div>
                    <div className="hDText">
                        Hit Dice
                    </div>
                </div>
                <div className="dsWrapper">
                    {/* Made the death saves text inputs instead of buttons to save time */}
                    <div className="dSSucWrapper">
                        <div className="dSText">
                            Successes:
                        </div>
                        <input name="curDSSuc" type="text" placeholder="" className="curHdInp" form="saveCharacter" id="curDSSuc"></input>
                    </div>
                    <div className="dSSucWrapper">
                        <div className="dSText">
                            Failures:
                        </div>
                        <input name="curDSFal" type="text" placeholder="" className="curHdInp" form="saveCharacter" id="curDSFal"></input>
                    </div>
                    <div className="hDText">
                        Death Saves
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CB1Inner;