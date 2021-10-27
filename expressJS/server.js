const express = require("express")
const app = express()

//app.use(logger) //all of your routes에 쓰고 싶으면 페이지 젤 위에 쓰래(everything is top to bottom), 
//개별적으로 쓸수도있음 - app.get("/", logger, (req, res))
//users.js에다가 쓸수도 있음

app.set("view engine", "ejs")


//get or post never use 'next'
app.get("/", (req, res) => {
    console.log("Here")
    res.render("index", { text: "World"}) // html or ejs 파일 랜더링
})

const userRouter = require("./routes/users")

app.use("/users", userRouter) //users.js의 두 라우터가 /users로 시작하므로 생략한 부분 설정

//users.js로 옮김
// function logger(req, res, next){
//     console.log(req.originalUrl)
//     next()
// }

app.listen(3000)
