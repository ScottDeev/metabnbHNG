import Card from "../card/Card"
import { HomeCardData } from "../card/CardData"
export default function CardSection() {
  return (
    <div className="sm:px-[100px] px-[40px] pt-[39px] pb-[58px]">
      <h1 className="text-center sm:text-[48px] text-[25px] font-[700] mb-[43px]">Inspiration for your next adventure</h1>
      <div className="flex flex-wrap gap-[24px] justify-center">
        {HomeCardData.map(nft => (
          <Card cardImage={nft} key={nft}/>
        ))}
      </div>
    </div>
  )
}