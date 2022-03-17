
const passwordGen = () => {
  let characters = [
    0,1,2,3,4,5,6,7,8,9,"!","§","$","&","@","€","A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
    
  let result = "";
  let randomNum;
  for (let i = 0; i < 12; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    result += characters[randomNum];
  }
  return document.querySelector("#password").innerHTML = result;
};
const gen = document.querySelector("#pass");
gen.addEventListener("click", passwordGen);