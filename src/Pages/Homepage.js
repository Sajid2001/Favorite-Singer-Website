import LeadCard from "../Components/LeadCard"
import SongRow from "../Components/Music/SongRow"
import SongImports from "../Components/Imports/SongImports";
import AlbumImports from "../Components/Imports/AlbumImports"
import News from "../Components/Events/News";
import AlbumRow from "../Components/Music/AlbumRow";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import altImage from '../assets/images/yoasobi.jpg'


const Homepage = () => {
  useEffect(() => {
    AOS.init({duration:1200,once:true})
    AOS.refresh();
    
  },[])

  return (
    <>
        <LeadCard alt = {altImage} url = "https://www.billboard.com/wp-content/uploads/2021/10/YOASOBI-2021-bb-japan-billboard-1548-1633729444.jpg"/>
        <SongRow title = "Hottest Singles" songs = {SongImports}/>
        <AlbumRow albums = {AlbumImports}/>
        <News/>
    </>
  )
}

export default Homepage