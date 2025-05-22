import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    return (
        <div className="auth-form">
            <form>
                <h2>Register</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
            <p className="navigation" onClick={() => navigate("/login")}>
                Login
            </p>
        </div>
    );
}

export default Register;
