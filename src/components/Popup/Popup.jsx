import meta from '../../assets/icons/metamaskpop.svg'
import walletconnect from '../../assets/icons/walletconnect.svg'
import x from '../../assets/icons/x.svg'
import arrow from '../../assets/icons/arrow.svg'
export default function Popup({handleClickPop}) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col bg-white max-w-[600px] mx-auto gap-[32px] pb-[24px] rounded-[16px] fixed top-[347px] sm:w-full w-[90%] z-50'>
        <div className="flex justify-between px-[32px] py-[24px] border-b border-[#CFD8DC]">
          <span className="font-[700] text-[24px]">Connect Wallet</span>
          <img onClick={() => handleClickPop()} src={x} alt="x" />
        </div>
        <div className='px-[32px] flex flex-col gap-[16px]'>
          <span className='font-[400]'>Choose your preferred wallet:</span>
          <div className='flex justify-between border rounded-[12px] items-center py-[12px] px-[20px] border-[#CFD8DC] bg-[#F8F9FA]'>
            <div className='flex gap-[16px] items-center'>
              <img src={meta} alt="meta" />
              <span className='sora'>Metamask</span>
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className='flex justify-between border rounded-[12px] items-center py-[12px] px-[20px] border-[#CFD8DC]'>
            <div className='flex gap-[16px] items-center'>
              <img src={walletconnect} alt="meta" />
              <span className='sora'>WalletConnect</span>
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}