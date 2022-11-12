import meta from '../../assets/icons/metamaskpop'
import x from '../../assets/icons/x.svg'
export default function Popup() {
  return (
    <div className='bg-blue-500 py-[50px]'>
      <div className='flex flex-col bg-white max-w-[600px] mx-auto gap-[32px]'>
        <div className="flex justify-between px-[32px] py-[24px] border-b border-[#CFD8DC]">
          <span className="font-[700] text-[24px]">Connect Wallet</span>
          <img src={x} alt="x" />
        </div>
        <div>
          <span>Choose your preferred wallet:</span>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}