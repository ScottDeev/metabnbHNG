import location from '../../assets/icons/location.svg'
export default function Options() {
  return (
    <div className="sm:px-[100px] px-[40px] py-[75px] flex lg:flex-row flex-col gap-[65px] items-center justify-center">
      <div className="flex gap-[48px] flex-wrap font-[400] text-[20px] justify-center">
        <span>Resturant</span>
        <span>Cottage</span>
        <span>Castle</span>
        <span>fantast city</span>
        <span>beach</span>
        <span>Carbins</span>
        <span>Off-grid</span>
        <span>Farm</span>
      </div>
      <div className=' min-w-[161px] flex px-[14px] py-[12px] gap-[42px] border border-[#B4B4B4] rounded-[8px] font-[400]'>
        <span>Location</span>
        <img src={location} alt="location" />
      </div>
    </div>
  )
}