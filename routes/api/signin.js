const User = require("../../models/User")
const bcrypt = require("bcrypt");
const UserSession = require("../../models/UserSession")

module.exports = (app) => {

  app.post("/api/account/signup", (req, res, next) => {
    let { body } = req;
    console.log("body", body)
    let {
      name,
      email,
      password,
      songLink,
      imageLink,
      bio,
      goal
    } = body;

    if (!name) {
      return res.send({
        success: false,
        message: "Error:  name cannot be blank."
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: "Error: email cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: password cannot be blank."
      });
    };

    console.log("line: 87")

    email = email.toLowerCase();

    // steps
    // 1. verify email doesnt exist already
    // 2. save it
    User.find({
      email: email,
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Err1: Server error."
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "Err2: Server error."
        });
      }

      // save new user
      const newUser = new User();

      newUser.email = email;
      newUser.name = name;
      newUser.songLink = songLink;
      newUser.imageLink = imageLink;
      newUser.bio = bio;
      newUser.goal = goal;
      newUser.password = newUser.generateHash(password);

      // test
      console.log(newUser)

      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: "Err3: Server error."
          });
        }
        return res.send({
          success: true,
          message: "Signed Up"
        });
      })
    })
  });
  app.post("/api/account/signin", (req, res, next) => {
    let { body } = req;
    let {
      email,
      password
    } = body;

    if (!email) {
      return res.send({
        success: false,
        message: "Error: email cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: password cannot be blank."
      });
    };

    email = email.toLowerCase();

    User.find({
      email: email,
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Err5: Server error."
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Err6: invalid."
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Err7: invalid."
        });
      }

      // otherwise correct user

      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          console.log(err)
          return res.send({
            success: false,
            message: "Err8: server err."
          })
        }

        return res.send({
          success: true,
          message: "valid sign in",
          token: doc._id
        })
      })

    })

  })
  app.get("/api/account/verify", (req, res, next) => {
    //get the token

    const { query } = req;
    const { token } = query
    //verify unique and not del
    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "err10: server err"
        })
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: "err11: server error"
        })
      } else {
        return res.send({
          success: true,
          message: "Good"
        })
      }

    })
  })
  app.get("/api/account/logout", (req, res, next) => {
    //get the token

    const { query } = req;
    const { token } = query
    //verify unique and not del
    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
       $set: {isDeleted: true }}
    , null, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "err253: server err"
        })
      }
      return res.send({
        success: true,
        message: "logged out"
      })
    })
  })
};

