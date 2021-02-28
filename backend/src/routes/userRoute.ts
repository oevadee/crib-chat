import express, { Router } from "express";
import bcrypt from "bcrypt";
import db from "../config/db";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await db.query(`INSERT INTO users(email, password) values($1, $2)`, [
      email,
      hash,
    ]);
  } catch (err) {
    throw err;
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const dbUser = await db.query(
      "SELECT id, email, password, first_name, last_name FROM users WHERE email = $1",
      [email]
    );
    if (dbUser.rows.length) {
      if (bcrypt.compareSync(password, dbUser.rows[0].password)) {
        const { id, first_name, last_name, email } = dbUser.rows[0];
        return res.status(200).json({
          id,
          firstName: first_name,
          lastName: last_name,
          email,
        });
      } else return res.status(400).json({ message: "Auth failed" });
    }
  } catch (err) {
    throw err;
  }
});

router.put("/update-profile", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body.values;
    const { id } = req.body.user;
    const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    let newUser;
    if (email.length > 6) newUser = { ...rows[0], email: email };
    else
      res.status(400).json({ message: "Email must be at least 6 characters" });
    if (firstName.length > 3) newUser = { ...newUser, first_name: firstName };
    else
      res
        .status(400)
        .json({ message: "First name must be at least 3 characters" });
    if (lastName) newUser = { ...newUser, last_name: lastName };
    else
      res
        .status(400)
        .json({ message: "Last name must be at least 3 characters" });
    await db.query(
      "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4",
      [firstName, lastName, email, id]
    );
    return res.status(200).json({
      id,
      firstName,
      lastName,
      email,
    });
  } catch (err) {
    throw err;
  }
});

export default router;
