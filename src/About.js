import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'
import React, { useState } from "react";

const About = () => {
    const { msgToAbout } = useParams();
    return (
        <div>
            <h2>About</h2>
            <Link to="/">Home</Link><br/>
            {msgToAbout}
        </div>
    );
}
export default About;