import heroimage from '../../assets/image/heroimage.svg'

export default function Hero() {
  return (
    <section className="w-full sm:px-[100px] px-[40px] mt-[120px] mb-[67px] flex lg:flex-row flex-col-reverse gap-[100px]">
      <div className="lg:w-[55%] flex flex-col gap-[43px]">
        <h1 className="sm:text-[50px] text-[35px] font-[400]">Rent a <span className="text-[#A02279] font-[700]">Place</span> away from <span className="text-[#A02279] font-[700]">Home</span> in the <span className="text-[#A02279] font-[700]">Metaverse</span></h1>
        <p className="sm:text-[24px] text-[18px] font-[400]">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form className="w-full flex">
          <label className="w-[60%]">
            <input type="text" placeholder="Search for location" className="placeholder:text-[#B8B8B8] border py-[20px] px-[15px] w-full rounded-l-[8px]" />
          </label>
          <label className="bg-gredient py-[20px] w-[40%]">
            <input type="submit" value="submit"  className="text-center flex justify-center w-full text-[16px] font-[400] text-white"/>
          </label>
        </form>
      </div>
      <div className='lg:w-[45%] sm:min-w-[450px] mx-auto'>
        <img src={heroimage} alt="" />
      </div>
    </section>
  )
}