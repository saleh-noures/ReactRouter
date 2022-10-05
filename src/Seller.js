import {Link} from "react-router-dom";
import { useLocation, useNavigate, Navigate  } from 'react-router-dom';
import {useState} from "react";

const Seller = () => {
    const location = useLocation()
    const { msgToSeller } = location.state
    const [name, setName] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === 'Saleh')
        {
            setIsLogin(true);

            //or navigate('/login');
        }
    }
    return (
        <div>
            <h2>Seller</h2>
            <Link to="/">Home</Link><br/>
            {msgToSeller}<br/>

            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
            {isLogin && <Navigate to="/login" state={{ msgToLogin: "Hi There from Seller to Login" }}/>}
        </div>
);

}

export default Seller;