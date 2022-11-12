import meta from '../../assets/icons/metamask.svg'
import mbtoken from '../../assets/icons/mbtoken.svg'
import opensea from '../../assets/icons/opensea.svg'
export default function TagLine() {
  return (
    <div className=" bg-gredient flex sm:flex-row flex-col justify-around py-[15px] items-center gap-[40px] sm:gap-0">
      <div>
        <img className='sm:h-[38px] h-[25px]' src={mbtoken} alt="mbtoken" />
      </div>
      <div>
        <img className='sm:h-[38px] h-[25px]' src={meta} alt="meta" />
      </div>
      <div>
        <img className='sm:h-[38px] h-[25px]' src={opensea} alt="opensea" />
      </div>
    </div>
  )
}