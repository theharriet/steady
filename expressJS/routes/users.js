const express = require("express")
const router = express.Router()
// router is mini app, independence. app처럼 get과 post를 갖고있음

//that means every singl route 쓰면 logger 작동 -> main 페이지에서는 안됨
router.use(logger)

// http://localhost:3000/users
router.get("/", (req, res) => {
    console.log(req.query.name) //주소창에 http://localhost:3000/users?name=Kyle 넣으면 터미널에 kyle뜸
    res.send("User List")
 })

 // http://localhost:3000/users/new
 // 얘가 /:id보다 아래에 있으면 /new도 /:id로 뜸. 코드를 위에서부터 읽기때문에.
router.get("/new", (req, res) => {
    // res.render("users/new", { firstName: "Test"})
    res.render("users/new")
 })

router.post("/", (req, res) =>{
    //res.send("Create User")
    const isValid = false
    if (isValid){
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    }else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })
    }
    //console.log(req.body.firstName)
    //res.send("Hi")
})

//아래 세개의 router랑 exactly same
router.route("/:id")
.get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Put User With ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{ name: "Harriet"}, { name: "Sally"}]

// whenever you find parameter with the name of 'id', run this function
router.param("id", (req, res, next, id) => {
    //console.log(id)
    req.user = users[id]
    next()
})
//what this param has allowed router to do -> anytime we have an 'id' get it from our user(we have 
//'users' variable), get the particular user for that 'id', then continue on with the rest of our code(next()) 

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

// // dynamic parameter. /를 포함한 모든 url ex) /1, /2, /1424
// router.get("/:id", (req, res) => {
//     //req.params.id
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Put User With ID ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
// })
// //get, put, delete 이 세개의 router는 almost same


 module.exports = router

