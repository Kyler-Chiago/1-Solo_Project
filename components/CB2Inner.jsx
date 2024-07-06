import React from 'react'

const CB2Inner = () => {
    return (
        <div className="cB2InnerWrapper changeBorderColor changeBgColor">
            <div className="atkWrapper">
                <div className="atkName atkNamePos changeFontColor" >
                    Name
                </div>
                <div className="atkName atkBonPos changeFontColor">
                    Atk Bonus
                </div>
                <div className="atkName dmgTypPos changeFontColor">
                    Damage/Type
                </div>
                <input name="atkNam1" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="atkNam1"></input>
                <input name="atkNam2" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="atkNam2"></input>
                <input name="atkNam3" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="atkNam3"></input>
                <input name="atkBon1" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="atkBon1"></input>
                <input name="atkBon2" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="atkBon2"></input>
                <input name="atkBon3" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="atkBon3"></input>
                <input name="dmgTyp1" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="dmgTyp1"></input>
                <input name="dmgTyp2" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="dmgTyp2"></input>
                <input name="dmgTyp3" type="text" placeholder="" className="atkSplMini changeFontColor changeBorderColor" form="saveCharacter" id="dmgTyp3"></input>
            </div>
            <textarea name="atkSplInp" type="text" placeholder="" className="AtkandSplTextInpForm changeFontColor changeBorderColor" form="saveCharacter" id="atkSplInp"></textarea>
            {/* "AtkandSplTextInpForm changeFontColor changeBgColor" */}
            <div className="AtkandSplText changeFontColor">
                Attacks & Spellcasting
            </div>
        </div>
    )
}

export default CB2Inner;