import songOne from "../../assets/songs/Romance.mp3"
import imageOne from '../../assets/images/romance.jpg'
import songTwo from "../../assets/songs/RacingIntoTheNight.mp3";
import imageTwo from '../../assets/images/racing.jpg'
import songThree from "../../assets/songs/GhostCityTokyo.mp3";
import imageThree from '../../assets/images/Ghost_City.jpg'


  const songList = [
    {
      id:1,
      title:"Taisho Roman",
      artist: "Ikura",
      image:"https://www.lyrical-nonsense.com/wp-content/uploads/2021/09/YOASOBI-Taisho-Romance.jpg",
      animation:"fade-right",
      file: songOne,
      alt:imageOne
    },
    {
      id:2,
      title:"Racing Into the Night",
      artist: "Ikura",
      image:"https://www.lyrical-nonsense.com/wp-content/uploads/2021/06/YOASOBI-Into-The-Night.jpg",
      animation:"fade-up",
      file: songTwo,
      alt:imageTwo
    },
    {
      id:3,
      title:"Ghost City Tokyo",
      artist: "Ayase",
      image:"https://www.lyrical-nonsense.com/wp-content/uploads/2019/12/Ayase-Yuurei-Tokyo.jpg",
      animation:"fade-left",
      file: songThree,
      alt:imageThree
    }
  ]


export default songList
