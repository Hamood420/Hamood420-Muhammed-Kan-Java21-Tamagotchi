import { Tamagotchi } from "./modules/tamagotchi";

document.querySelector("#submitName").addEventListener("click", startGame);

function startGame(e) {
    e.preventDefault();
    //var myTamagotchi;

    let tamagotchiName = document.querySelector("#enterName").value;
    let tamagotchiTypeName = document.querySelector("#Tamagotchitype").value;
    let myTamagotchi = new Tamagotchi(tamagotchiTypeName, tamagotchiName);

    console.log(tamagotchiTypeName);
    //myTamagotchi = new Tamagotchi(TamagotchiTypeName,TamagotchiName);


    myTamagotchi.hungerDrain();
    myTamagotchi.happinessDrain();

    function FeedMyTamagotchi(){
    myTamagotchi.Eat();
    document.querySelector("#Hunger").innerText = myTamagotchi.getHungerlevel();
    
    }    
    
    function HaveFunTamagotchi() {
    myTamagotchi.Play();
    document.querySelector("#Happy").innerText = myTamagotchi.getHappinesslevel();
    }

    document.querySelector("#Eat").addEventListener("click", FeedMyTamagotchi);
    document.querySelector("#Play").addEventListener("click", HaveFunTamagotchi);


    myTamagotchi.ripTamagotchi();
    myTamagotchi.restartTheGame();

    if(tamagotchiTypeName == "dog") {
        const img = document.getElementById("dog");
        document.body.append(img);
        const imgUrl = new URL("./img/husky.jpg", import.meta.url);
        img.src = imgUrl.href;
        img.width = 300;
        img.style.marginRight = '500px';
    }
    
    if(tamagotchiTypeName == "dog2") {
        const img = document.getElementById("dog2");
        document.body.append(img);
        const imgUrl2 = new URL("./img/husky2.jpg", import.meta.url);
        img.src = imgUrl2.href;
        img.width = 300;
        img.style.marginRight = '500px';
    }
}