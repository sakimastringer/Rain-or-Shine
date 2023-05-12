import { Link } from "react-router-dom";
import "./App.css";


export default function Header(props){

    const navStyle = {


    };
    return (
        <header>
            {/* <div className="Rain" h1>Weather or Not</div> */}
            <nav style={navStyle}></nav>
                <Link to="/">
                    {/* <div>Home</div> */}
                </Link>
                <Link to="/search">
                    {/* <div>Search</div> */}
                </Link>
                <Link to="/results">
                    {/* <div>Results</div> */}
                </Link>
                
        </header>
    );
}

