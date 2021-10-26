//console.log("hello");
const express = require("express")
const app = express()
// it means it is main application 

//npm i ejs 후에
app.set("view engine", "ejs")


// http://localhost:3000
app.get("/", (req, res) => {
    console.log("Here")
    //res.send("Hi")
    //res.sendStatus(500) - 500 internal server error
    //res.status(500).send("Hi") - 500 에러 나면서 화면엔 hi
    //res.status(500).json({ message : "Error"})
    //res.json({ message : "Error"})
    //res.download("server.js") // user가 파일을 다운로드할수 있게끔. 파일 path써주면됨
    res.render("index", { text: "World"}) // html or ejs 파일 랜더링
})

//user.js로 옮김
// //페이지가 하나씩 만들어짐 http://localhost:3000/users
// app.get("/users", (req, res) => {
//     res.send("User List")
// })

// // http://localhost:3000/users/new
// app.get("/users/new", (req, res)=> {
//     res.send("User New Form")
// })

const userRouter = require("./routes/users")
//const postRouter = require("./routes/users")

app.use("/users", userRouter) //users.js의 두 라우터가 /users로 시작하므로 생략한 부분 설정
//app.use("/users", postRouter)

app.listen(3000)


// npm init -y
// npm i express
// npm i --save-dev nodemon 서버를 언제든 리스타트하기 쉽게 만들어줌
// npm run devStart
// npm i ejs