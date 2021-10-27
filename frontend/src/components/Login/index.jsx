import "./index.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {


    return (
        <>
            <h2 className="login-title">Runway Bay</h2>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Login</button>
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