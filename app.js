
const music = new Audio('Haareya.mp3');
 music.play();

 const songs = [
    {
        id: '1',
        songName: `Besabriyan <br> 
        <div class="subtitle">Aarman Mallik</div>`,
        poster: "img1.jpg"
    
    },
    {
        id: '2',
        songName: `Ahatein <br> 
        <div class="subtitle">Samyak Prasana</div>`,
        poster: "Ahatein.jpeg"
    
    },
    {
        id: '3',
        songName: `Kho Gaye <br> 
        <div class="subtitle">Taaruk Raina</div>`,
        poster: "Mismatched.jpeg"
    
    },
    {
        id: '4',
        songName: `Ghoomar  <br> 
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "Ghoomar.jpg"
    
    },
    {
        id: '5',
        songName:`Ainvayi Ainvayi <br>
         <div class="subtitle">Salim-Sulaiman</div>`,
        poster: "Ainvayi.jpeg"
    
    },
    {
        id: '6',
        songName: `Illahi <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg"
    
    },
    {
        id: '7',
        songName: `Nadaan Parinde <br> 
        <div class="subtitle">A.R.Rahman</div>`,
        poster: "Rockstar.jpg"
    
    },
    {
        id: '8',
        songName: `Darkhaast <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "shivay.png"
    
    },
    {
        id: '9',
        songName: `Qaafirana <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "Kedarnath.jpg"
    
    },
    {
        id: '10',
        songName: `Khairiyat <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "Chhichhore.jpg"
    
    },
    {
        id: '11',
        songName: `Rangrez <br> 
        <div class="subtitle">Shankar-Ehsaan-Loy</div>`,
        poster: "Bhag Milkha bhag.jpg"
    
    },
    {
        id: '12',
        songName: `Ae Watan <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "Raazi.jpg"
    
    },
    {
        id: '13',
        songName: `Sajni <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "Laapataa_Ladies_poster.jpg"
    
    },
    {
        id: '14',
        songName: `Moh Moh Ke Dhaage <br> 
        <div class="subtitle">Papon</div>`,
        poster: "Moh Moh ke dhage.jpeg"
    
    }
 ] 

  Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

  });

   let masterPlay = document.getElementById('masterPlay');
   let wave = document.getElementById('wave');
    
   masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else { 
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        
    }
   })


   let index = 0;
   let poster_master_play = document.getElementById('poster_master_play');   
   Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
         e.addEventListener('click', (el)=>{
            index = el.target.id;
            console.log(index);
            music.src = `audio/${index}.mp3`;
            poster_master_play.src = `img/${index}.jpg`;
            music.play();
        })
   })






let pop_song_left = document.getElementById('pop_song_left')
let pop_song_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0]


pop_song_right.addEventListener('click' , ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click' , ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left')
let pop_art_right = document.getElementById('pop_art_right')
let item = document.getElementsByClassName('item')[0]


pop_art_right.addEventListener('click' , ()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click' , ()=>{
    item.scrollLeft -= 330;
})

