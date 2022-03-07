import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faReddit } from "@fortawesome/free-brands-svg-icons"

const socialMediaIconImports = [
    {
        name: "Youtube",
        logo: faYoutube,
        link:"https://www.youtube.com/channel/UCvpredjG93ifbCP1Y77JyFA",
        hoverColor: "hover:text-red-500",
    },
    {
        name: "Facebook",
        logo: faFacebook,
        link:"https://www.youtube.com/watch?v=aYsgsSo1aow",
        hoverColor: "hover:text-blue-500",
    },
    {
        name: "Instagram",
        logo: faInstagram,
        link:"https://www.instagram.com/lilasikuta/?hl=en",
        hoverColor: "hover:text-pink-400",
    },
    {
        name: "Twitter",
        logo: faTwitter,
        link:"https://mobile.twitter.com/yoasobi_staff?lang=en",
        hoverColor: "hover:text-cyan-400",
    },
    {
        name: "Reddit",
        logo: faReddit,
        link:"https://www.reddit.com/r/YOASOBI/",
        hoverColor: "hover:text-orange-500",
    }
]

export default socialMediaIconImports;

