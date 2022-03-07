import {useState, useRef, useEffect} from 'react'
import {GrRotateLeft} from 'react-icons/gr'
import {GrRotateRight} from 'react-icons/gr'
import {FaPlayCircle} from 'react-icons/fa'
import {FaPauseCircle} from 'react-icons/fa'


const AudioPlayer = ({song, image,alt, title, artist, animation}) => {
  //array of variables, first one is a main var and the second is a function
  //useState sets the default
  const[isPlaying, setIsPlaying] = useState(false);
  const[duration, setDuration] = useState(0);
  const[currentTime, setCurrentTime] = useState(0);

  //get a reference to the element
  const audioPlayer = useRef();
  const progressBar = useRef(); //reference to progress bar
  const animationRef = useRef(); //reference animation


  //learn this
  useEffect(() => {
    
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}`:`${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const previousValue = isPlaying;

    setIsPlaying(!previousValue);
    if(!previousValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }else{
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    ChangePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    ChangePlayerCurrentTime();
  }

  const ChangePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--get-before-width',`${progressBar.current.value/duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) -30;
    changeRange();
  }
  
  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  }

  return (
    <div data-aos-easing = "ease-in-out" data-aos = {animation} className = "md:w-1/3 w-full my-4 mx-3 h-full bg-white rounded-xl overflow-hidden shadow-lg">
        <img src= {image} alt={alt}/>
        <audio ref={audioPlayer} src = {song} preload = "metadata"></audio>
        <div className="flex justify-center -translate-y-7">
          <button onClick={backThirty} className = "bg-white border-0 text-2xl rounded-l-lg px-2 pt-1"><GrRotateLeft /></button>
          <button className = "bg-white border-0 text-6xl pt-1" onClick={togglePlayPause}> { isPlaying ? <FaPauseCircle/>:<FaPlayCircle /> }</button>
          <button onClick = {forwardThirty} className = "bg-white border-0 text-2xl rounded-r-lg px-2 pt-1"><GrRotateRight /></button>
        </div>
        <div className='flex justify-center text-2xl font-bold mx-2 mb-2 font-inconsolata'>
          {title}
        </div>
        <div className='flex justify-center text-md font-semibold mx-1 mb-1 font-inconsolata'>
          {artist}
        </div>
        <div className='flex justify-between -translate-y-7'>
          <div className='px-2 font-bold font-sans'>{calculateTime(currentTime)}</div>
          <div className='px-2 font-bold font-sans'>{(duration && !isNaN(duration)) && calculateTime(duration-currentTime)}</div>
        </div>
        
        <div className='px-1 -translate-y-6'>
          <input defaultValue="0" ref={progressBar} className="relative appearance-none outline-none w-full bg-yellow-400 h-0.5 rounded-lg slider-thumb" onChange={changeRange} type = "range" />
        </div>
        
    </div>
  )
}
export default AudioPlayer