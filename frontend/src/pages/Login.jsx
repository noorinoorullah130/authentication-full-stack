import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="auth-form">
            <form>
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p className="navigation" onClick={() => navigate("/")}>
                Register
            </p>
        </div>
    );
}

export default Login;
