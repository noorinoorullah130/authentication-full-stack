import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../models/db.js";

const register = (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO user (username, password) VALUES(?, ?, ?";

    db.query(sql, [username, hash], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "user registered!" });
    });
};

const login = (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM user WHERE username = ?";

    db.query(sql, [username], (err, results) => {
        if (err || results.length === 0)
            return res.status(401).json({ message: "User not found" });

        const user = results[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch)
            return res.status(401).json({ message: "Password is incorrect!" });

        const token = 
    });
};
