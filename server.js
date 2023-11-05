import express from 'express';
import db from './server/mysql/connection.js';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const newUser = {
    name,
    email,
    password,
  };

  const query = "INSERT INTO tbl_users SET ?";

  db.query(query, newUser, (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mendaftar.", error: err });
    }

    console.log("Pengguna baru telah ditambahkan.");
    res.redirect("/");
  });
});



app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
