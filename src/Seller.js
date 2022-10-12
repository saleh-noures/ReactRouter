import {Link} from "react-router-dom";
import { useLocation, useNavigate, navigate  } from 'react-router-dom';
import {useState} from "react";

const Seller = () => {
    const location = useLocation()
    const { msgToSeller } = location.state
    const [page, setPage] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (page === 'login')
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
                <label>Enter "login" to navigate to login page:
                    <input
                        type="text"
                        value={page}
                        onChange={(e) => setPage(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
            {isLogin && <Navigate to="/login" state={{ msgToLogin: "Hi There from Seller to Login" }}/>}
        </div>
);

}

export default Seller;