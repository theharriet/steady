const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

//chosenImage라는 변수에 이미지배열[랜덤한인덱스] 저장
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

//JS에서 html 생성해서 추가해볼겨 (img 태그 추가해서 사진 넣을겨)
// <img src="img/0.jpeg" />

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

//body 내부에 bgImage를 추가
document.body.appendChild(bgImage); //prependChild 쓰면 사진이 제일 위로 올라감