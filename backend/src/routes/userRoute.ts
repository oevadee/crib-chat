import express, { Router } from "express";
import bcrypt from "bcrypt";
import db from "../config/db";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { login, password, confirmPassword } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await db.query(`INSERT INTO users(login, password) values($1, $2)`, [
      login,
      hash,
    ]);
  } catch (err) {
    throw err;
  }
});

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const dbUser = await db.query(
      "SELECT id, login, password, first_name, last_name FROM users WHERE login = $1",
      [login]
    );
    if (dbUser.rows.length) {
      if (bcrypt.compareSync(password, dbUser.rows[0].password)) {
        const { id, first_name, last_name, login } = dbUser.rows[0];
        return res.status(200).json({
          id,
          firstName: first_name,
          lastName: last_name,
          login: login
        });
      }
      else return res.status(400).json({ message: "Auth failed" });
    }
  } catch (err) {
    throw err;
  }
});

export default router;
