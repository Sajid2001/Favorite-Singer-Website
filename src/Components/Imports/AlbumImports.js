import songPicOne from '../../assets/images/book1.jpg'
import songPicTwo from '../../assets/images/book2.jpg'
import songPicThree from '../../assets/images/e-side.jpg'

 const albums = [
     {
        id:1,
        title:"The Book",
        image:"https://images.genius.com/a7312887ae604619fad7be36b3bd0c97.1000x1000x1.jpg",
        animation:"fade-up",
        link:"https://open.spotify.com/album/1xhO0GSoezdPJcSuNe1ySv",
        alt:songPicOne

     },
     {
         id:2,
        title:"The Book 2",
        image:"https://i.scdn.co/image/ab67616d0000b273e897f4915425f0a48484e3f9",
        animation:"fade-down",
        link:"https://www.youtube.com/watch?v=aYsgsSo1aow",
        alt:songPicTwo
     },
     {
         id:3,
        title:"E-Side",
        image:"https://images.genius.com/d8010d80144a093a68226643c304b2af.1000x1000x1.jpg",
        animation:"fade-up",
        link:"https://open.spotify.com/album/2Il38p3xyKeLHM5tHa4b6R",
        alt: songPicThree
     },
 ]

 export default albums;