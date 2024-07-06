import React from 'react'

const CB3Inner = () => {
    return (
        <div className = "cB3InnerWrapper changeBorderColor changeBgColor">
            <div className="cB3Mon">
                <div className="cB3MonBox changeBorderColor">
                    <div className="cB3MonNam changeFontColor">
                        CP
                    </div>
                    <input name="cpInp" type="text" placeholder="" className="cB3MonInp changeFontColor" form="saveCharacter" id="cpInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam changeFontColor">
                        SP
                    </div>
                    <input name="spInp" type="text" placeholder="" className="cB3MonInp changeFontColor" form="saveCharacter" id="spInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam changeFontColor">
                        EP
                    </div>
                    <input name="epInp" type="text" placeholder="" className="cB3MonInp changeFontColor" form="saveCharacter" id="epInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam changeFontColor">
                        GP
                    </div>
                    <input name="gpInp" type="text" placeholder="" className="cB3MonInp changeFontColor" form="saveCharacter" id="gpInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam changeFontColor">
                        PP
                    </div>
                    <input name="ppInp" type="text" placeholder="" className="cB3MonInp changeFontColor" form="saveCharacter" id="ppInp"></input>
                </div>
            </div>
            <textarea name="cB3InpAre" type="text" placeholder="" className="cB3Inp changeFontColor changeBorderColor" form="saveCharacter" id="cB3InpAre"></textarea>
            <div className="cB3TextBot changeFontColor">
                Equipment
            </div>
        </div>
    )
}

export default CB3Inner;