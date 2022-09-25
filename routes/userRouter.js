let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

router.get("/login", (req, res) => {
  req.session.returnURL = req.query.returnURL;
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/login", (req, res, next) => {
  let userModel = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
  };

  let keepLoggedIn = req.body.keepLoggedIn != undefined;

  userController
    .getUserByEmail(userModel.username)
    .then((user) => {
      if (user) {
        if (userController.comparePassword(userModel.password, user.password)) {
          req.session.cookie.maxAge = keepLoggedIn
            ? 30 * 24 * 60 * 60 * 1000
            : null;
          req.session.user = user;
          if (req.session.returnURL) {
            res.redirect(req.session.returnURL);
          } else {
            res.redirect("/");
          }
        } else {
          res.render("login", {
            message: "Incorrect Password",
            type: "alert-danger",
          });
        }
      } else {
        res.render("login", {
          message: "Email does not exists!",
          type: "alert-danger",
        });
      }
    })
    .catch((error) => next(error));
});

router.post("/register", (req, res, next) => {
  let userModel = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
  };

  let confirmPassword = req.body.confirmPassword;
  let keepLoggedIn = req.body.keepLoggedIn != undefined;

  // Kiem tra confirm password va password giong nhau
  if (userModel.password != confirmPassword) {
    return res.render("register", {
      message: "Confirm password does not match!",
      type: "alert-danger",
    });
  }

  // Kiem tra username chua ton tai
  userController.getUserByEmail(userModel.username).then((user) => {
    if (user) {
      return res.render("register", {
        message: `Email ${userModel.username} exists! Please choose another email address.`,
        type: "alert-danger",
      });
    } else {
      // Tao tai khoan
      return userController
        .createUser(userModel)
        .then((user) => {
          if (keepLoggedIn) {
            req.session.cookie.maxAge = keepLoggedIn
              ? 30 * 24 * 60 * 60 * 1000
              : null;
            req.session.user = user;
            res.redirect("/");
          } else {
            res.render("login", {
              message: "You have registered, now please login!",
              type: "alert-primary",
            });
          }
        })
        .catch((error) => next(error));
    }
  });
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      return next(error);
    }
    return res.redirect("/users/login");
  });
});

module.exports = router;
