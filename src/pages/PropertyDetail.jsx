import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'

const PropertyDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const property = {
    id: id,
    title: "Av. Libertador 1234",
    price: "$250,000 USD",
    location: "Palermo, Buenos Aires",
    type: "Venta",
    bedrooms: 3,
    bathrooms: 2,
    area: "120",
    description: "Hermoso departamento totalmente renovado con impresionantes vistas al río y a la ciudad. Ubicado en una de las zonas más exclusivas y seguras, este inmueble destaca por sus acabados de lujo, pisos de madera natural y una cocina integrada de concepto abierto equipada con tecnología de punta...",
    amenities: ["Piscina", "Cochera", "Gimnasio", "Balcón"],
    agent: {
      name: "Juan Pérez",
      title: "Agente Premium",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp44XXDSa1JfDAwunEtRaMZ3W6JkGrvzw4FUdKidMrtDrC-w-XJXKBzJgZwal5oWP70Nk-L3AjD2X5Z3HNPMnCb-tNsjR1b1EUb7mdzj-slDAQGHIhIxZqSsLTTQpJ_dAllCySItiRHtlCI4WDV8qA8mHncqsBNLbiZeZvWllHsOu97_AzT4py4hKd8hZQUM9DNYG5egExwP2GF2Wm4hSw9TO2Wr30YsqBmMEPBhhetGtP6g5WrV-oaOkDg6Gphh_AK_mM4DdJiLU",
      phone: "+54 11 1234-5678"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6mi8wHgfI9xu6zq0ayFRJ2-7AlM6IjsyuaQg-c39hft94J7kY_1TANsbnt3R9EEuJpCHkbnIuXOLEVAsVtR_qM8ZOXGo0ofxUpnWTA3fc1NuFgTbnU-9CQ7KsJhK02kEuTD6DsyI_7mx0syCkQASijQ585TeWeQzm9NwcODkHLYdGBaIsEV3BmcF_bJgYdKX5kYAYiA222bnkXRtgzyXDG5K1WtSZanz3f6bWsKkm2ODQpM-oE_pmxJ_qFGil4-6ZbhyWi6xpkSE"
    ]
  }

  return (
    <div className="relative flex min-h-screen flex-col pb-28 sm:pb-24 max-w-md md:max-w-4xl mx-auto bg-white dark:bg-background-dark shadow-2xl md:shadow-none overflow-hidden md:ml-64">
      <div className="absolute top-0 left-0 w-full p-4 pt-12 flex justify-between items-center z-20 pointer-events-none">
        <button
          onClick={() => navigate(-1)}
          className="pointer-events-auto flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white shadow-sm hover:bg-white/30 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <div className="flex gap-3 pointer-events-auto">
          <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white shadow-sm hover:bg-white/30 transition-all">
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white shadow-sm hover:bg-white/30 transition-all">
            <span className="material-symbols-outlined text-[20px]">favorite</span>
          </button>
        </div>
      </div>

      <div className="relative h-[40vh] w-full shrink-0">
        <div className="h-full w-full bg-gray-200">
          <img
            alt={property.title}
            className="h-full w-full object-cover"
            src={property.images[0]}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>
        <div className="absolute bottom-6 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
          1 / 15
        </div>
      </div>

      <div className="flex flex-col relative -mt-4 rounded-t-3xl bg-white dark:bg-background-dark z-10 px-5 pt-6 pb-4">
        <div className="self-center w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600 mb-4 opacity-50"></div>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-primary text-3xl font-bold tracking-tight mb-1">{property.price}</h1>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{property.title}</h2>
            </div>
            <span className="shrink-0 bg-primary/10 text-primary text-xs font-bold px-2 py-1.5 rounded uppercase tracking-wide">
              {property.type}
            </span>
          </div>
          <p className="text-[#617589] dark:text-gray-400 text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            {property.location}
          </p>
          <button
            onClick={() => navigate('/calculator')}
            className="mt-3 w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-full bg-white dark:bg-gray-700 text-remax-blue dark:text-blue-400 shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="material-symbols-outlined text-[18px]">calculate</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-remax-blue dark:group-hover:text-blue-400 transition-colors">
                  Calculadora de Hipotecas
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Simula tu financiación</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 group-hover:text-remax-blue dark:group-hover:text-blue-400 transition-colors">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between py-5 border-y border-gray-100 dark:border-gray-800 mb-6">
          <div className="flex flex-col items-center gap-1.5 flex-1">
            <span className="material-symbols-outlined text-[#617589] dark:text-gray-400 text-[24px]">bed</span>
            <div className="text-center">
              <p className="font-bold text-[#111418] dark:text-white text-base">{property.bedrooms}</p>
              <p className="text-xs text-[#617589] dark:text-gray-400">Habitaciones</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex flex-col items-center gap-1.5 flex-1">
            <span className="material-symbols-outlined text-[#617589] dark:text-gray-400 text-[24px]">bathtub</span>
            <div className="text-center">
              <p className="font-bold text-[#111418] dark:text-white text-base">{property.bathrooms}</p>
              <p className="text-xs text-[#617589] dark:text-gray-400">Baños</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex flex-col items-center gap-1.5 flex-1">
            <span className="material-symbols-outlined text-[#617589] dark:text-gray-400 text-[24px]">square_foot</span>
            <div className="text-center">
              <p className="font-bold text-[#111418] dark:text-white text-base">{property.area}</p>
              <p className="text-xs text-[#617589] dark:text-gray-400">m² Total</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => navigate(`/property/${id}/tour`)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 border border-blue-100 dark:border-blue-900/30 shadow-sm active:scale-[0.99] transition-all group relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-remax-blue"></div>
            <div className="flex items-center gap-4 z-10">
              <div className="relative">
                <div className="size-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm text-remax-blue dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[28px]">view_in_ar</span>
                </div>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-remax-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-remax-red"></span>
                </span>
              </div>
              <div className="text-left">
                <h3 className="text-base font-bold text-[#111418] dark:text-white leading-tight">Tour Virtual 360°</h3>
                <p className="text-xs text-[#617589] dark:text-gray-400">Explora la propiedad desde casa</p>
              </div>
            </div>
            <div className="flex items-center justify-center size-8 rounded-full bg-white dark:bg-gray-700 shadow-sm group-hover:text-primary transition-colors z-10">
              <span className="material-symbols-outlined text-[20px]">play_arrow</span>
            </div>
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold text-[#111418] dark:text-white mb-3">Descripción</h3>
          <p className="text-[#617589] dark:text-gray-300 text-sm leading-relaxed text-justify">
            {property.description}
          </p>
          <button className="text-primary text-sm font-semibold mt-2 hover:underline">Leer más</button>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-bold text-[#111418] dark:text-white mb-4">Comodidades</h3>
          <div className="grid grid-cols-2 gap-3">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-background-light dark:bg-gray-800/50">
                <span className="material-symbols-outlined text-primary">
                  {amenity === 'Piscina' ? 'pool' : amenity === 'Cochera' ? 'local_parking' : amenity === 'Gimnasio' ? 'fitness_center' : 'balcony'}
                </span>
                <span className="text-sm font-medium text-[#111418] dark:text-gray-200">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-base font-bold text-[#111418] dark:text-white mb-4">Agente Inmobiliario</h3>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-800">
            <div className="relative shrink-0">
              <img
                alt={property.agent.name}
                className="size-14 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
                src={property.agent.image}
              />
              <div className="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-[#111418] dark:text-white truncate">{property.agent.name}</p>
              <p className="text-xs text-primary font-bold uppercase tracking-wide">{property.agent.title}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate('/chat')}
                className="size-10 flex items-center justify-center rounded-full bg-background-light dark:bg-gray-700 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              </button>
              <button
                onClick={() => navigate(`/contact/${property.agent.name}`)}
                className="size-10 flex items-center justify-center rounded-full bg-background-light dark:bg-gray-700 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold text-[#111418] dark:text-white">Ubicación</h3>
            <button
              onClick={() => navigate('/map')}
              className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline"
            >
              Abrir Mapa <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </button>
          </div>
          <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              alt="Map view"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVmIyrUnjuobVi03y-fSo8wGEhl75uOZ3r50W8ZKP1FklJgP2R4EVpAXXnooplXH6H0gpJ6cer2PcZRw6t9WGR8OFPB4Gpt24ZwENWW3GQC1ismpVPQ48TqxsNOQ0YwoJxIXHhlLBofaJd8dSa8yNDUpm43BWZf-bHhTwu2P9CRbFywIzNgCBPwPGkvOCdwSMRnj77d0C1zfC_xJpNYhk5670GoDVQGpwY-52vo4s1OMNIRHHEhD91ae2qLOlAd741f_LwdZxXT-4"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <span className="material-symbols-outlined text-primary text-5xl drop-shadow-md">location_on</span>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black/30 rounded-full blur-[2px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-40 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 pb-8 pt-4 px-5 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)]">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex flex-col items-center justify-center size-12 shrink-0 rounded-xl bg-background-light dark:bg-gray-800 text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">bookmark_border</span>
          </button>
          <button
            onClick={() => navigate(`/contact/${property.agent.name}`)}
            className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl h-12 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">mail</span>
            Contactar Agente
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail

