import express from "express";
import db from "./server/mysql/connection.js";
import session from "express-session";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Tambahkan middleware express-session
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Fungsi middleware untuk memeriksa apakah pengguna telah login
const requireLogin = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/");
  }
};

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.post("/api/register", (req, res) => {
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
    // res.json({ message: "Pendaftaran berhasil!", user: newUser });
    res.redirect("/");
  });
});


let tasks = [];
let xityText = [];

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    const currentTime = h + ":" + m + ":" + s;

    setTimeout(startTime, 1000); // Panggil fungsi ini lagi setiap 1 detik
    return currentTime;
}

app.get("/dashboard", requireLogin, (req, res) => {
    if (req.session.loggedIn) {
        const user = req.session.user;
        // Jika sesi loggedIn benar, berarti pengguna telah login
        res.render("dashboard.ejs", { 
            user, 
            tasks : tasks,
            clock : startTime()
        });
    } else {
        // Jika sesi loggedIn salah, arahkan pengguna ke halaman login
        res.redirect("/");
    }
});

app.post("/dashboard", (req, res) => {
    const newTask = req.body["text"];
    if (newTask && newTask.trim() !== "") {
      tasks.push(newTask);
    }
    res.redirect("/dashboard"); // Redirect to the root URL to render the updated tasks
});


app.get("/perplexity", requireLogin, (req, res) => {
  if (req.session.loggedIn) {
      const user = req.session.user;
      // Jika sesi loggedIn benar, berarti pengguna telah login
      res.render("perplexity.ejs", { 
        user,
        xityText: xityText,
        clock: startTime()
    });
  } else {
      // Jika sesi loggedIn salah, arahkan pengguna ke halaman login
      res.redirect("/");
  }
});

app.post("/perplexity", (req, res) => {
  const newText = req.body["text"];
  if (newText && newText.trim() !== "") {
    xityText.push(newText);
  }
  res.redirect("/perplexity"); // Redirect to the root URL to render the updated tasks
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT * FROM tbl_users WHERE email = ? AND password = ?";

    db.query(query, [email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Terjadi kesalahan saat login.");
        }

        if (result.length > 0) {
            req.session.loggedIn = true;
            req.session.user = result[0]; // Simpan data pengguna di sesi
            res.redirect("/dashboard");
        } else {
            console.log("Email atau password salah.");

            res.render("login.ejs", {
                wrong : "show",
            })
        }
    });
});


app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/chatai", requireLogin, (req, res) => {
    if (req.session.loggedIn) {
        const user = req.session.user;
        // Jika sesi loggedIn benar, berarti pengguna telah login
        res.render("chatai.ejs", { user });
    } else {
        // Jika sesi loggedIn salah, arahkan pengguna ke halaman login
        res.redirect("/");
    }
});




app.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
