import stars from '../../assets/icons/stars.svg'
export default function Card({cardImage}) {
  return (
    <div className='w-[292px] p-[16px] border border-[#D7D7D7] rounded-[15px] flex flex-col gap-[16px]'>
      <div>
        <img src={cardImage} alt="frame" />
      </div>
      <div className='text-[12px] flex flex-col gap-[10px]'>
        <div className='flex justify-between'>
          <span className='font-[400]'>Desert king</span>
          <span className='font-[700]'>1MBT per night</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-[400]'>2345km away</span>
          <span className='font-[400]'>available for 2weeks stay</span>
        </div>
        <div>
          <img src={stars} alt="stars" />
        </div>
      </div>
    </div>
  )
}