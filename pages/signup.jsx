import React from "react";
// import { useNavigate } from "react-router-dom"
import dice from '../docs/assets/images/purple-dice.png'

const Signup = () => {
    // let navigate = useNavigate();
    // const redirectCharacter = () => {
    //     let path = '/home';
    //     navigate(path);
    // };
    return (
        <div className="centerLogin">
            <div className="loginImageContainer">
                {/* Come back to this and try to get the image to show another way if I have time */}

                {/* <img src="../docs/assets/images/15922742b6ef2adc93919d64efed753f.png" className="loginImage"></img> */}
                <img src={dice} alt="image not found" className="loginImage" />
                {/* <img src="../docs/assets/images/purple-dice.png" alt="image not found" className="loginImage"/> */}
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png" className="loginImage"></img> */}
            </div>
            <div className="loginInnerBorder"></div>
            <div className="loginHeader">
                D&D 5E Character Creator
            </div>
            <div className="userPass">
                <form action='/signupUser' method='POST' className="userForm">
                    <div className="userFormUserName">
                        <div className="usertag">username</div>
                        <input name="username" type="text" placeholder="" className="userName"></input>
                    </div>
                    <div className="userFormPassWord">
                        <div className="passwordtag">password</div>
                        <input name="password" type="password" placeholder="" className="passWord"></input>
                    </div>
                    <div className="signupBottom">
                        <div className="userFormsignUpButton">
                            <input type='submit' value="Signup" className="signUpButton"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;