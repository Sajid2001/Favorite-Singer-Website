import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faAmazon } from "@fortawesome/free-brands-svg-icons"
import { faItunes} from "@fortawesome/free-brands-svg-icons"
import { faSoundcloud} from "@fortawesome/free-brands-svg-icons"

const musicIconImports = [
    {
        name: "Spotify",
        logo: faSpotify,
        link:"https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj",
        hoverColor: "hover:text-green-500",
    },
    {
        name: "Youtube",
        logo: faYoutube,
        link:"https://www.youtube.com/channel/UCvpredjG93ifbCP1Y77JyFA",
        hoverColor: "hover:text-red-500",
    },
    {
        name: "Amazon",
        logo: faAmazon,
        link:"https://amz.run/5Lm9",
        hoverColor: "hover:text-yellow-500",
    },
    {
        name: "Itunes",
        logo: faItunes,
        link:"https://music.apple.com/us/artist/yoasobi/1490256993",
        hoverColor: "hover:text-pink-400",
    },
    {
        name: "Soundcloud",
        logo: faSoundcloud,
        link:"https://soundcloud.com/yoasobimusic",
        hoverColor: "hover:text-orange-500",
    },
]

export default musicIconImports;