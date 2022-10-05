import { useLocation } from 'react-router-dom';

const Login  = () => {
    const location = useLocation()
    const { msgToLogin } = location.state
    return(
        <div>
            <h2>Login</h2>
            {msgToLogin}
        </div>
    );

};

export default Login ;