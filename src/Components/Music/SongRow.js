import AudioPlayer from "./AudioPlayer"
import IconList from "../Icons/IconList"
import MusicIconImports from "../Imports/MusicIconImports"


const SongRow = ({title, songs}) => {
  return (
    <div className="my-2">
          <h2 className="m-3 text-6xl font-bold">{title}</h2>
          <div className="flex flex-col md:flex-row">
            {songs.map((song) => (
                <AudioPlayer key={song.id} alt = {song.alt} animation={song.animation} song = {song.file} title = {song.title} image = {song.image} artist = {song.artist}/>
            ))} 
          </div>
          <IconList text = "Listen" icons={MusicIconImports}/>
    </div>
  )
}

export default SongRow