import IconList from "./Icons/IconList"
import SocialMediaImports from "./Imports/SocialMediaImports"



const Footer = () => {
  return (
    <div className="mt-8">
        <footer className="bg-gradient-to-br from-pink-500 to-orange-400">
            <div className=" px-6 pt-6">
                <IconList text = "Follow" icons={SocialMediaImports}/>
                <div className="text-white text-center text-xl p-4">
                This is a just fan made website
                <div className="text-white text-xl">🙏Please don't sue me</div>
                </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer