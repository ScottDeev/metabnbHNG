import nft from  '../../assets/image/nfts.svg'
export default function Metabnb() {
  return (
    <div className="bg-[#A02279] sm:px-[100px] px-[40px] py-[100px] flex lg:flex-row flex-col items-center lg:gap-[122px] gap-[50px]">
      <div className='lg:w-[40%] text-white flex flex-col gap-[35px] items-start'>
        <h1 className='sm:text-[48px] text-[25px] font-[700]'>Metabnb NFTs</h1>
        <p className='sm:text-[18px] text-[16px] font-[400]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <button className='py-[14px] px-[33px] text-[#A02279] bg-white rounded-[8px]'>Learn more</button>
      </div>
      <div className='lg:w-[60%]'>
        <img className='w-full sm:min-w-[500px]' src={nft} alt="" />
      </div>
    </div>
  )
}