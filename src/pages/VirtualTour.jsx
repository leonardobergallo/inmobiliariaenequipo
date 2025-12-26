import { useNavigate, useParams } from 'react-router-dom'

const VirtualTour = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-24">
      <div className="relative w-full aspect-[3/4] sm:aspect-video bg-black group overflow-hidden rounded-b-xl shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhlD009AU3m_jXBmBTXtfygtln5NWDd-iWjEUaE6twZtv2zvQqoHX0qOFFIPebF92T0v-H1dHLOlmxkph08fv4b0ulZOeM8Wwg6tK8-qmvsB4DrNYb_uQyNToQE6NM8OAM0T9qZw_4SAUm8qhq2x9xSzhKb5fTgB3eHjii90hbShVcXsoiy8qgBRCTZbKHk0NWvj0Bx0k8yYB02xp-QqEw6CNmY9RB-lSAsLUisseHZ1MsI210SVTBUdSvvr6omoW4LumFsytNGzk")`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        </div>

        <div className="absolute top-0 left-0 w-full p-4 pt-12 flex items-center justify-between z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-3">
            <button className="flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition">
              <span className="material-symbols-outlined">ios_share</span>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="flex shrink-0 items-center justify-center rounded-full size-20 bg-primary/90 text-white shadow-[0_0_40px_rgba(19,127,236,0.6)] hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined text-[40px]">play_arrow</span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 z-20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                En vivo
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">360</span>
                Tour 360°
              </span>
            </div>
            <button className="text-white hover:text-primary transition">
              <span className="material-symbols-outlined">fullscreen</span>
            </button>
          </div>
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-20 right-4 opacity-50 z-10 hidden sm:block">
          <p className="text-[10px] font-bold text-white uppercase tracking-widest">
            Inmobiliaria en Equipo
          </p>
        </div>
      </div>

      <div className="flex w-full overflow-x-auto no-scrollbar gap-3 p-4 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <button className="shrink-0 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md transition">
          General
        </button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Sala
        </button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Cocina
        </button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Recámara Principal
        </button>
        <button className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Jardín
        </button>
      </div>

      <div className="flex flex-col px-4 pt-5 gap-1">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-tight">
              $5,250,000 MXN
            </h1>
            <h2 className="text-[#111418] dark:text-gray-200 text-lg font-medium leading-tight mt-1">
              Modern Loft en Centro Histórico
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="material-symbols-outlined text-[18px] fill-current">star</span>
              <span className="text-sm font-bold text-[#111418] dark:text-white">4.9</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-2 text-[#637588] dark:text-[#9dabb9]">
          <span className="material-symbols-outlined text-[18px]">location_on</span>
          <p className="text-sm font-normal">Av. Siempreviva 123, Springfield</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-4 py-6">
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
          <span className="material-symbols-outlined text-primary mb-1">bed</span>
          <p className="text-xs text-gray-600 dark:text-gray-400">3 Hab</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
          <span className="material-symbols-outlined text-primary mb-1">bathtub</span>
          <p className="text-xs text-gray-600 dark:text-gray-400">2 Baños</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
          <span className="material-symbols-outlined text-primary mb-1">straighten</span>
          <p className="text-xs text-gray-600 dark:text-gray-400">120m²</p>
        </div>
      </div>
    </div>
  )
}

export default VirtualTour

