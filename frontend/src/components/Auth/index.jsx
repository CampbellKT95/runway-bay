import "./styles.css";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import dotenv from "dotenv";
import {signin} from "../../actions/auth";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const initialState = {username: "", password: ""}

const Auth = ({user, setUser}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    dotenv.config();

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location])

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        let chosenField = e.target
        if (chosenField.name === "username") {
            setFormData({...formData, username: e.target.value});
        } else {
            setFormData({...formData, password: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signin(formData, history))
    }

    const googleSuccess = async (res) => {

        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: "AUTH", data: {result, token}});

            history.push("/tenants")

        } catch (error) {
            console.log(error)

        }
    }

    const googleFailure = (error) => {
        console.log("Google Sign In unsuccessful. Please try again.");
        console.log(error);
    }


    return (
        <>
            <section className="login-background">
                <h2 className="login-title">Runway Bay</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={formData.username}
                        onChange={handleChange} name="username" autoFocus
                    />
                    <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} name="password"
                    />

                    <button type="submit">Login</button>

                    <GoogleLogin 
                        clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        
                        render={(renderProps) => (
                            <button className="google-btn" 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}>
                                <GoogleIcon /> Sign On
                            </button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                </form>

                <div className="contact">
                    <h4>Kadin Campbell</h4>
                    <a href="mailto:ktcampbelldevelopment@gmail.com" className="mail">
                        <EmailIcon className="mail-icon" />
                    </a>
                    <a href="https://github.com/CampbellKT95" className="github">
                        <GitHubIcon className="github-icon" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Auth;