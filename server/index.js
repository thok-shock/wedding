require("dotenv").config();
const express = require("express");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const config = require("../webpack.config.js");
const compiler = webpack(config);
const path = require('path')
const apiRouter = require("./api/router.js");
//const rootPath = path.resolve(__dirname, "..");


const App = express();
App.use(express.json());
App.set("trust proxy", 1); // trust first proxy
// App.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true
//   })
// );
// App.use(passport.initialize());
// App.use(passport.session());
// App.use((req, res, next) => {
//     console.log(req.session)
//     next()
// })

// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     console.log("authenticating");
//     db.query(
//       "SELECT * FROM user WHERE username = ?;",
//       [username],
//       (err, rows) => {
//         if (err) {
//             console.log(err)
//           return done(null, false, {
//             message:
//               "An unexpected error occured while searching for the user attempting to login",
//           });
//         } else if (!rows[0]) {
//           console.log("no rows found");
//           return done(null, false, { message: "User does not exist" });
//         } else {
//           console.log('comparing passwords');
//           bcrypt.compare(password, rows[0].password, (err, same) => {
//             if (err) {
//               return done(null, false, {
//                 message: "An error occurred comparing passwords",
//               });
//             } else if (same) {
//               console.log("authentication confirmed");
//               return done(null, rows[0]);
//             } else {
//               console.log("passwords did not match");
//               return done(null, false, { message: "Passwords do not match" });
//             }
//           });
//         }
//       }
//     );
//   })
// );

// passport.serializeUser(function (user, done) {
//     console.log('serializing', user.id)
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   db.query("SELECT * FROM user WHERE id = ?", [id], (err, data) => {
//     console.log('deserializing', data[0])
//     done(err, data[0]);
//   });
// });

if (process.env.NODE_ENV === "development") {
  App.use(
    middleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
  App.use(require("webpack-hot-middleware")(compiler));
}

App.get("/", (req, res) => {
  console.log("uh oh");
  res.send("ok");
});

App.use('/file/:id', (req, res) => {
  res.sendFile(path.join(__dirname, `../public/${req.params.id}`))
})

App.use("/api", apiRouter);
App.use("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

App.listen(process.env.SERVER_PORT, () => {
  console.log(`Running server on port ${process.env.SERVER_PORT}`);
});
