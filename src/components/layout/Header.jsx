import FotoCesar from './assets/img/cesar.png'
import contact_globe from './assets/img/contact_globe.svg'

const Header = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-slate-50 to-slate-50 text-blue-950 py-16 font-comic-neue">
      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Primera Sección */}
        <div className="mb-8 md:mb-0 text-center md:text-left w-5/12">
          <h1 className="text-4xl font-bold mb-4">Antonio Valentin   <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-800 relative inline-block">
            <span className="relative text-white">FrontEnd</span>
          </span> </h1>
          <p className="text-2xl mb-6 font-bold  text-slate-950">Web Developer with over 2 years of experience and a programming instructor.</p>
          <p className="text-2xl mb-6 font-extrabold  text-rose-700">A Front Developer From México.</p>
          <button type="button" className="text-white bg-slate-950 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-slate-900 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
            See More
          </button>
        </div>

        {/* Segunda Sección */}
        <div className="mb-8 md:mb-0 text-center  items-center md:text-left w-5/12">
          <div className="bg-cover inset-0 animate-fondo " style={{ backgroundImage: `url(${contact_globe})` }}></div>
          <img src={FotoCesar} alt="César Antonio Valentin Sayago" className='h-96 w-96 text-center mx-auto anim_moveBottom' />
        </div>

      </div>
    </div>


  )
}

export default Header