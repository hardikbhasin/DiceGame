/*For first dice*/
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
const image_1 = document.querySelector(".img1");
var random_image_src1 = "dice" + randomnumber1 + ".png";

image_1.setAttribute("src", random_image_src1);

/*For second dice*/
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
const image_2 = document.querySelector(".img2");
var random_image_src2 = "dice" + randomnumber2 + ".png";
image_2.setAttribute("src", random_image_src2);

/*check*/
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩Player-1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player-2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}