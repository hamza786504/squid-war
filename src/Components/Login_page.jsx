import { useState } from 'react';
import '../css/Login_page.css';
import ErrorIcon from '@mui/icons-material/Error';
import api from '../api.json';
export function Login_page(){
    const [coins , setCoins] = useState(0);
    const [users , setUsers] = useState(100);
    const [login , setLogin] = useState("");
    const [userDetails , setUserDetails] = useState({
        email : "",
        password : ""
    })

    const setInput = (e) => {
        const {name , value} = e.target;
        setUserDetails((preValue) => {
            return{
                ...preValue,
                [name] : value
            };
        })
    }

    const signUpSubmit = (e) => {
        e.preventDefault();
        const {email , password} = userDetails;
        if(api[0].email === email && api[0].password === password){
            setLogin(true);
        }else{
            setLogin(false);
        }
    }
    return (
        <>
            <section style={{position : "relative"}}>
                <span className="square"></span>
                <img className="triangle" src="./images/side-triangle.png" />
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="logo">
                                <img src={'./images/logo.png'} alt="logo" />
                            </div>
                            <div className="svg_image">
                                <img src="./images/girl-robot.png" alt="svg" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="currency_box">
                                <div className="coins">
                                    <h5>{coins}</h5>
                                    <h4>Earn Coins</h4>
                                </div>
                                <img src="./images/currency.png" alt="coins" />
                            </div>
                            <div className="form_section text-start">
                                <form action="" onSubmit={signUpSubmit}>
                                    <h3 className="form_heading">Login to the Game</h3>
                                    <p className="from_subtitle">Squidwar is <span>only {users} people</span> can participate</p>
                                    {(login === false) ? <div className="form_error">
                                        <ErrorIcon style={{color : "#df5598"}} /> Enter a correct Email and password
                                    </div> : ""}
                                    <input type="text" name="email" id="email" className="input_field" value={userDetails.email} onChange={setInput} placeholder="Email Address" />
                                    <input type="password" name="password" id="password" className="input_field" value={userDetails.password} onChange={setInput} placeholder="Password" />
                                    <span className="remember_passbox">
                                        <input type="checkbox" name="remember_password" id="remember_password" />
                                        <label htmlFor="remember_password">Remember Me</label>
                                    </span>
                                    <br />
                                    <div className="buttons_section mt-4" style={{display : "flex" , alignItems : "center"}}>
                                    <button type="submit" className="butn butn_green">Sign Up</button>
                                    <button className="butn_transparent" style={{flex : "1"}}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
