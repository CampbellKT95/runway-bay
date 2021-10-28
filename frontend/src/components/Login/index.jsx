import "./index.css";
import React, {useState, useEffect} from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {

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


    return (
        <>
            <h2 className="login-title">Runway Bay</h2>
            <form className="login-form">
                <input type="text" placeholder="Username" value={username}
                    onChange={handleChange}
                />
                <input type="text" placeholder="Password" value={password}
                    onChange={handleChange}
                />
                <button type="submit" onSubmit={handleSubmit}>Login</button>
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
        </>
    )
}

export default Login;