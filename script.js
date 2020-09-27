score = 0;
cross = true;
audio = new Audio('hit.mp3');
audiogo = new Audio('background_music.mp3');
document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode);
    if(e.keyCode == 38){
        rocket = document.querySelector('.rocket');
        rocket.classList.add('animaterocket');
        setTimeout(() => {
            rocket.classList.remove('animaterocket')
        }, 700);

    }
    if(e.keyCode == 39){
        rocket = document.querySelector('.rocket');
        rocketx = parseInt(window.getComputedStyle(rocket,null).getPropertyValue('left'));
        rocket.style.left = rocketx + 112 + "px";

    }
    if(e.keyCode == 37){
        rocket = document.querySelector('.rocket');
        rocketx = parseInt(window.getComputedStyle(rocket,null).getPropertyValue('left'));
        rocket.style.left = (rocketx - 112) + "px";

    }
}
setInterval(() => {
    rocket = document.querySelector('.rocket');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    rx = parseInt(window.getComputedStyle(rocket,null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(rocket,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx = Math.abs(rx-ox);
    offsety = Math.abs(ry-oy);
    if(offsetx < 73 && offsety <52){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        audio.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
            
        }, 1000);
    }
    else if(offsetx < 145 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        anidur = parseFloat(window.getComputedStyle(obstacleani,null).getPropertyValue('animation-duration'));
        newdur = anidur - 1;
        console.log(newdur);
        obstacle.style.animatiionduration = newdur + 's';
    }

}, 10);

function updatescore(score){
    scorecont.innerHTML = "your score:" + score;

}