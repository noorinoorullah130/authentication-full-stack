import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth.js";

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
