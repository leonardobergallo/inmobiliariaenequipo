import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const PropertyMap = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 relative">
        <div className="absolute top-4 left-4 right-4 z-10 flex gap-2">
          <button className="flex-1 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg flex items-center justify-center gap-2 text-sm font-medium text-[#111418] dark:text-white">
            <span className="material-symbols-outlined">tune</span>
            Filtros
          </button>
          <button className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-lg flex items-center justify-center gap-2 text-sm font-medium text-[#111418] dark:text-white">
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>

        <div className="flex-1 relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVmIyrUnjuobVi03y-fSo8wGEhl75uOZ3r50W8ZKP1FklJgP2R4EVpAXXnooplXH6H0gpJ6cer2PcZRw6t9WGR8OFPB4Gpt24ZwENWW3GQC1ismpVPQ48TqxsNOQ0YwoJxIXHhlLBofaJd8dSa8yNDUpm43BWZf-bHhTwu2P9CRbFywIzNgCBPwPGkvOCdwSMRnj77d0C1zfC_xJpNYhk5670GoDVQGpwY-52vo4s1OMNIRHHEhD91ae2qLOlAd741f_LwdZxXT-4"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-6xl drop-shadow-lg">
                location_on
              </span>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg text-[#111418] dark:text-white">12 propiedades</h3>
              <button className="text-primary text-sm font-semibold">Ver lista</button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              En esta zona
            </p>
          </div>
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default PropertyMap

