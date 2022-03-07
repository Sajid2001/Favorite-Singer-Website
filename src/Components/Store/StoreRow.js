import StoreCard from "./StoreCard"
import sticker from "../../assets/images/sticker.jpg"

const StoreRow = () => {
  return (
    <div className="flex flex-col md:flex-row"> 
      <StoreCard alt={sticker} image="https://ih1.redbubble.net/image.2162014250.2930/st,small,507x507-pad,600x600,f8f8f8.jpg" title="Autographed Yoasobi Sticker" price = "5000"/>
      <StoreCard alt={sticker} image="https://ih1.redbubble.net/image.2162014250.2930/st,small,507x507-pad,600x600,f8f8f8.jpg" title="Autographed Yoasobi Sticker" price = "5000"/>
      <StoreCard alt={sticker} image="https://ih1.redbubble.net/image.2162014250.2930/st,small,507x507-pad,600x600,f8f8f8.jpg" title="Autographed Yoasobi Sticker" price = "5000"/>
    </div>
  )
}

export default StoreRow