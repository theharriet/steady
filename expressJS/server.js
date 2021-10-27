const express = require("express")
const app = express()

//static index html file
// public folder만들어서 index.ejs를 index.html로 변경

//static files이 있는 폴더 이름을 넣어줌 
// public 폴더안에 html파일 만들어서 넣으면 그 url따라가서 페이지 만들수있음
// that's a super handy way to builde render out just static html
// or css and javascript, they are all going to the public folder
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true })) //이거 없으면 /new 거기서 에러뜸
app.use(express.json()) //urlencoded랑 똑같은데 json 리퀘스트 할수있음 fetch도
//this is going to allow you to parse json information from the body

app.set("view engine", "ejs")

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)
