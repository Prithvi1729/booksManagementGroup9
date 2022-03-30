const express = require('express');
const router = express.Router();
const usercontroller= require("../controllers/UserController")
const bookcontroller= require("../controllers/BookController")
const reviewcontroller= require("../controllers/ReviewController")
const ProjectMiddleware= require("../Middleware/middleware")

//userAPI's
router.post("/register",usercontroller.user)
router.post("/login",usercontroller.loginUser)

//bookAPI's
router.post("/createbook",bookcontroller.createbook)
router.get("/getbook",bookcontroller.booklist)
router.get("/books/:bookId",bookcontroller.getBookReview)
router.put("/books/:bookId",bookcontroller.updatebook)
router.delete("/books/:bookId",bookcontroller.deleteBook)

//reviewAPI's
router.post("/createReview/:bookId",reviewcontroller.createReview)


module.exports = router;
