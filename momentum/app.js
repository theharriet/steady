

const h1 = document.querySelector("div.hello:first-child h1");
//h1.style.color = "blue";

function handleh1Click(){
    // console.log(h1.style.color);
    // h1.style.color = "purple";
    // console.log(h1.style.color); --> css

    // const clickedClass = "clicked";
    // if(h1.className === clickedClass){
    //     h1.className = "";
    // }else {
    //     h1.className = clickedClass;
    // }   --> css에 클래스 네임 명시해주면 그건 무시당하는 버그가 생길수 있음. sexy-font가 replace됨

    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else {
    //     h1.classList.add(clickedClass);
    // }

    
    h1.classList.toggle("clicked");
}





h1.addEventListener("click", handleh1Click);
