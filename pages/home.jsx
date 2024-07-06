// import { useNavigate } from "react-router-dom"
import React from 'react'
import dnd5elogo from '../docs/assets/images/dnd5elogo.png'
import HomeCharacterSection from '../components/HomeCharacterSection.jsx'

const Home = () => {
    return (
        <div className="homeWrapper">
            <div className="homeHeader">
                <div className="homeHeaderBanner">

                </div>
                <div className="homeLeft">
                    
                </div>
                <div className="homeLogo">
                    <img src={dnd5elogo} alt="Image not found" className="homednd5elogo"></img>
                </div>
                <div className="homeLogout">
                    <form action='/logout' method='POST'>
                        <input type='submit' value="Logout" className="createCharacterButton"></input>
                    </form>
                    <form action='/deleteAllCharacters' method='POST'>
                        <input type='submit' value="Delete All Characters" className="createCharacterButton"></input>
                    </form>
                    {/* <button onClick={redirectLogin}>Logout</button> */}
                </div>
            </div>
            <div className="homeMainContainer">
                <div className="homeCharacterContainer">
                    {/* <button onClick={redirectCharacter} className="createCharacterButton">Create Character</button> */}
                    <div className="homeCharacterButton">
                        {/* <form action='/character' method='POST'>
                            <input type='submit' value="Create Character" className="createCharacterButton"></input>
                        </form> */}
                        <form action='/createCharacter' method='POST'>
                            <input type='submit' value="Create Character" className="createCharacterButton"></input>
                        </form>
                    </div>
                    <div className="homeCharacterScroll">
                        <HomeCharacterSection/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;