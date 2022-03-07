import React from 'react'
import Album from "./Album";

const AlbumRow = ({albums}) => {
  return (
    <div className="my-2">
          <h2 className="m-3 text-6xl font-bold">
            Freshest Albums
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            {albums.map((album) => (
                <Album key={album.id} alt={album.alt} link={album.link} animation={album.animation} title = {album.title} image = {album.image}/>
            ))} 
          </div>
      </div>
  )
}

export default AlbumRow