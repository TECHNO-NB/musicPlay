let music = document.querySelector(".music");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let img = document.querySelector("img");
let icon = document.getElementById("icon");
let range = document.querySelector("input");
let count=0;
let isPlaying = true;





const songs = [
    {
        title: 'Neffex-Cold',
        singer: 'Neffex',
        song: './song/song.mp3',
        img: './img/music1.png'

    },
    {
        title: 'All or Nothing',
        singer: 'Aiobahn & Guy Arthur',
        song: './song/song1.mp3',
        img: './img/music2.png'

    },
    {
        title: 'Sharks-',
        singer: 'Zeli',
        song: './song/song2.mp3',
        img: './img/music3.png'

    }

];




const loadMusic = (song) => {
    music.src = song.song;
    h1.innerText = song.title;
    h3.innerText = song.singer;
    img.src = song.img;
}
loadMusic(songs[count]);

const playMusic = () => {
     music.play();
    img.classList.add('animation');
    icon.classList.replace("fa-play", "fa-pause");
    isPlaying = false;
}
const pauseMusic = () => {
    music.pause();
    img.classList.remove('animation');
    icon.classList.replace("fa-pause", "fa-play");
    isPlaying = true;
}

const changeRange = () => {
    music.currentTime = range.value;
}



const loadRange = () => {
    range.value = music.currentTime;

}
setInterval(loadRange, 50);

const myMusic = () => {
    range.max = music.duration;
    isPlaying ? playMusic() : pauseMusic();
}

const backwardMusic=()=>{
    count=(count - 1 + songs.length ) % songs.length;
    loadMusic(songs[count]);
    playMusic();
  
}
const forwardMusic=()=>{
  
    count=(count +1 ) % songs.length;
   loadMusic(songs[count]);
   playMusic();
  
}


