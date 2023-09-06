let music = document.querySelector('.music');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let img = document.querySelector('img');
let icon = document.getElementById("icon");
let isPlaying = true;
let range = document.querySelector('input');


const songs = [{
    title: 'Neffex-Cold',
    singer: 'Neffex',
    song: './song/song.mp3',
    img: './img//music1.png'

}];


const loadMusic = (song) => {
    music.src = song.song;
    h1.innerText = song.title;
    h3.innerText = song.singer;
    img.src = song.img;

}

loadMusic(songs[0]);

const playMusic = () => {
    music.play();
    img.classList.add("animation");
    icon.classList.replace("fa-play", "fa-pause");
    isPlaying = false;

}
const pauseMusic = () => {
    music.pause();
    img.classList.remove("animation");
    icon.classList.replace("fa-pause", "fa-play");
    isPlaying = true;

}


const updateMusic = () => {
    music.currentTime = range.value;



}
const updateRange = () => {
    range.value = music.currentTime;
}
setInterval(updateRange, 10)



const myMusic = () => {

    isPlaying ? playMusic() : pauseMusic();

}





