export default function Overlay({handleClickPop}) {
  return (
    <div onClick={() => handleClickPop()} className='bg-[#404040] opacity-[0.3] fixed top-0 left-0 w-full h-full'></div>
  )
}