const express = require("express")
const router = express.Router()
// router is mini app, independence. app처럼 get과 post를 갖고있음

router.get("/", (req, res) => {
    res.send("User List")
 })

 router.get("/new", (req, res)=> {
    res.send("User New Form")
 })

 module.exports = router

// 이 라우터 두개는 "/users"를 다 갖고 있으므로 생략해줌
// app.get() 대신에 router.get() or router.post() 써줌
// // http://localhost:3000/users
// router.get("/users", (req, res) => {
//     res.send("User List")
// })

// // http://localhost:3000/users/new
// router.get("/users/new", (req, res)=> {
//     res.send("User New Form")
// })