import React from 'react'

const CB3Inner = () => {
    return (
        <div className = "cB3InnerWrapper changeBorderColor">
            <div className="cB3Mon">
                <div className="cB3MonBox changeBorderColor">
                    <div className="cB3MonNam">
                        CP
                    </div>
                    <input name="cpInp" type="text" placeholder="" className="cB3MonInp" form="saveCharacter" id="cpInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam">
                        SP
                    </div>
                    <input name="spInp" type="text" placeholder="" className="cB3MonInp" form="saveCharacter" id="spInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam">
                        EP
                    </div>
                    <input name="epInp" type="text" placeholder="" className="cB3MonInp" form="saveCharacter" id="epInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam">
                        GP
                    </div>
                    <input name="gpInp" type="text" placeholder="" className="cB3MonInp" form="saveCharacter" id="gpInp"></input>
                </div>
                <div className="cB3MonBox changeBorderColor">
                <div className="cB3MonNam">
                        PP
                    </div>
                    <input name="ppInp" type="text" placeholder="" className="cB3MonInp" form="saveCharacter" id="ppInp"></input>
                </div>
            </div>
            <textarea name="cB3InpAre" type="text" placeholder="" className="cB3Inp" form="saveCharacter" id="cB3InpAre"></textarea>
            <div className="cB3TextBot">
                Equipment
            </div>
        </div>
    )
}

export default CB3Inner;