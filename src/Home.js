import {Link} from "react-router-dom";

const Home = () => {
    let msgToAbout = "Hi There from Home to About";
    return(
        <div>
            <h2>Home</h2>
            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/seller" state={{ msgToSeller: "Hi There from Home to Seller" }}>Seller</Link><br/>

                <Link to={`/about/${msgToAbout}`}>About</Link>

            </nav>
        </div>
    );
}

export default Home;