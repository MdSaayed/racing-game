
//selecting dom
const player_1 = document.querySelector('#player_1');
const player_2 = document.querySelector('#player_2');
const reset_btn = document.querySelector('#reset');
const d_race_time = document.querySelector('#d_race_time');
const race_time = document.querySelector('#race_time');
const d_p1_score = document.querySelector('#d_p1_score');
const d_p2_score = document.querySelector('#d_p2_score');
const msg_box = document.querySelector('.msg_box');
const winner_msg = document.querySelector('#winner_msg');

 
//creating default value
var p1_score = 0;
var p2_score = 0;
var default_race_time = 5;
var winner = false;

player_1.addEventListener('click',()=>{
        if(p1_score!==default_race_time && winner==false){
            p1_score ++;
            d_p1_score.innerHTML = p1_score;
            if(p1_score == default_race_time){
                d_p1_score.classList.add('winner');
                msg_box.classList.add('winner_msg_show');
                winner_msg.textContent = 'Congrass! player 1 is won';
                winner = true;
            }
        console.log('Clicked');
        }
})

player_2.addEventListener('click',()=>{
    if(p2_score!==default_race_time && winner==false){
        p2_score ++;
        d_p2_score.innerHTML = p2_score;
        if(p2_score == default_race_time){
            d_p2_score.classList.add('winner');
            msg_box.classList.add('winner_msg_show');
            winner_msg.textContent = 'Congrass! player 2 is won';
            winner = true;
        }
    console.log('Clicked');
    }
})

//input race value
race_time.addEventListener('change',(e)=>{
    reset();
    default_race_time = e.target.value;
    d_race_time.innerHTML = default_race_time;
    e.target.value = '';
})

//call reset btn
reset_btn.addEventListener('click',reset);

//reset all data
function reset(){
    p1_score = 0;
    p2_score = 0;
    default_race_time = 5;
    winner = false;
    d_p2_score.innerHTML = p2_score;
    d_p1_score.innerHTML = p1_score;
    d_race_time.innerHTML = default_race_time;
    d_p1_score.classList.remove('winner');
    d_p2_score.classList.remove('winner');
    msg_box.classList.remove('winner_msg_show');

    console.log('reset');
}














