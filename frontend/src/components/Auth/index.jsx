import "./styles.css";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import dotenv from "dotenv";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Auth = ({user, setUser}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    dotenv.config();

    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location])

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = (e) => {
        let chosenField = e.target
        if (chosenField.placeholder === "Username") {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = () => {}

    const googleSuccess = async (res) => {
        console.log(res);

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
                <form className="login-form">
                    <input type="text" placeholder="Username" value={username}
                        onChange={handleChange} autoFocus
                    />
                    <input type="password" placeholder="Password" value={password} onChange={handleChange}
                    />

                    <Link to="/auth" className="login-btn"><button type="submit" onSubmit={handleSubmit}>Login</button></Link>

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