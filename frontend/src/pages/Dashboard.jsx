import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../utils/auth";

function Dashboard() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/auth/dashboard", {
                headers: { Authorization: `Bearer ${getToken()}` },
            })
            .then((res) => setMessage(res.data.message));
    }, []);

    return <div className="dashboard">{message}</div>;
}

export default Dashboard;
