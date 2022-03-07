
import StoreRow from "../Components/Store/StoreRow"
const Store = () => {
  return (
      <>
        <div className="text-bold font-anton text-7xl m-3 p-3 text-center">
            <h1 className="flex justify-center">Yoasobi Store</h1>
        </div>
        
        <StoreRow/>
        <StoreRow/>
        <StoreRow/>
        <StoreRow/>
        
    </>
  )
}

export default Store