import footerlogo from '../../assets/icons/logofooter.svg'
import fb from '../../assets/icons/fb.svg'
import insta from '../../assets/icons/insta.svg'
import twt from '../../assets/icons/twt.svg'
import copyright from '../../assets/icons/copyright.svg'

export default function Footer() {
  return (
    <footer className="bg-black sm:px-[100px] px-[40px] pt-[63px] pb-[37px] text-white flex flex-col gap-[35px]">
      <div className='flex md:flex-row flex-col justify-between gap-[50px] md:gap-0'>
        <div className='flex flex-col md:gap-[68px] gap-[20px]'>
          <div className='mb-[30px]'>
            <img className='sm:h-[38px] h-[25px]' src={footerlogo} alt="footerlogo" />
          </div>
          <div className='flex gap-[40px] '>
            <img src={fb} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={twt} alt="twt" />
          </div>
        </div>
        <div className='flex flex-col gap-[23px] mt-[15px] text-[18px]'>
          <h1>Community</h1>
          <div className='flex flex-col gap-[13px] text-[14px]'>
            <span>NFT</span>
            <span>Tokens</span>
            <span>Landlords</span>
            <span>Discord</span>
          </div>
        </div>
        <div className='flex flex-col gap-[23px] mt-[15px] text-[18px]'>
          <h1>Places</h1>
          <div className='flex flex-col gap-[13px] text-[14px]'>
            <span>Castle</span>
            <span>Farms</span>
            <span>Beach</span>
            <span>Learn more</span>
          </div>
        </div>
        <div className='flex flex-col gap-[23px] mt-[15px] text-[18px]'>
          <h1>About us</h1>
          <div className='flex flex-col gap-[13px] text-[14px]'>
            <span>Road map</span>
            <span>Creators </span>
            <span>Career</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>
      <div className='flex gap-[10px]'>
          <img src={copyright} alt="copyright" />
          <span>2022 Metabnb</span>
      </div>
    </footer>
  )
}