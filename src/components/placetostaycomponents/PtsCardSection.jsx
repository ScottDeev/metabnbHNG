import Card from "../card/Card"
import { PlaceToStayCardData } from "../card/CardData"
export default function PtsCardSection() {
  return (
    <div className="sm:px-[100px] px-[40px] pt-[39px] pb-[58px]">
      <div className="flex flex-wrap gap-[24px] justify-center">
        {PlaceToStayCardData.map(nft => (
          <Card cardImage={nft} key={nft}/>
        ))}
      </div>
    </div>
  )
}