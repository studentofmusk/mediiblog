const Hero = () => {
  return (
    <section className="relative  md:h-[80vh] bg-color-bg flex justify-end">
        <img src="doctor.png" className="h-full" />
        <div className="absolute top-0 left-0 ml-6 w-4/6 md:w-4/6 flex items-center justify-center h-full">
          <div className="text-white">
            <div className="text-xs md:text-base mb-5 ml-2">
              Award-winning exam prep apps
            </div>
            <div className="text-2xl sm:text-5xl md:text-6xl font-[1000]">
              Own Your Education
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero