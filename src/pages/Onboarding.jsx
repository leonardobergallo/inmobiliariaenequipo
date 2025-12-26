import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Onboarding = ({ onComplete }) => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Encuentra tu hogar ideal",
      description: "Filtra por ubicación, precio y características únicas para descubrir la casa de tus sueños hoy mismo.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQt-KA2OhmLg8zx53R0GgDXjyQA8856bhTQ7WJvol4_FqCIJFfrOmoY7ty8fSXQsbz4KxyjBAYZkp4qqaDV9eTwt89DSjDItut-bsFak1spkUS8PxKLqNADtklgSTw3WJpg208MnosgSIl1qm_2XcixQviBeOfRr5UcjVsjEp6us3DCSv8c6P7CDzcIzOUWYe-IpsQNM3mb7IincYZxu8qsmv-GjYE1lx1L-PG-LAgFNvGUtOpjTYwadcqlamc-dNJORk8uc2Jb6w"
    },
    {
      title: "Tours virtuales 360°",
      description: "Explora propiedades desde la comodidad de tu hogar con nuestros tours virtuales inmersivos.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhlD009AU3m_jXBmBTXtfygtln5NWDd-iWjEUaE6twZtv2zvQqoHX0qOFFIPebF92T0v-H1dHLOlmxkph08fv4b0ulZOeM8Wwg6tK8-qmvsB4DrNYb_uQyNToQE6NM8OAM0T9qZw_4SAUm8qhq2x9xSzhKb5fTgB3eHjii90hbShVcXsoiy8qgBRCTZbKHk0NWvj0Bx0k8yYB02xp-QqEw6CNmY9RB-lSAsLUisseHZ1MsI210SVTBUdSvvr6omoW4LumFsytNGzk"
    },
    {
      title: "Agentes expertos",
      description: "Conecta con agentes inmobiliarios profesionales que te ayudarán a encontrar la propiedad perfecta.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp44XXDSa1JfDAwunEtRaMZ3W6JkGrvzw4FUdKidMrtDrC-w-XJXKBzJgZwal5oWP70Nk-L3AjD2X5Z3HNPMnCb-tNsjR1b1EUb7mdzj-slDAQGHIhIxZqSsLTTQpJ_dAllCySItiRHtlCI4WDV8qA8mHncqsBNLbiZeZvWllHsOu97_AzT4py4hKd8hZQUM9DNYG5egExwP2GF2Wm4hSw9TO2Wr30YsqBmMEPBhhetGtP6g5WrV-oaOkDg6Gphh_AK_mM4DdJiLU"
    },
    {
      title: "Calculadora de hipotecas",
      description: "Calcula tus pagos mensuales y encuentra el financiamiento perfecto para tu nueva propiedad.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYAUUzwn1_LUTQkn1x0yIobFAzBHJJT6qejhkiDcqPkb59dLqKLD020qDMPLogrUd6d8KdyQXn_aB11ecOaRYPY7SNgxawhRO_rSyF3CpwYbYOB1ViQ2nbEJdP0I9OOqRanWGsaGcA7OGnCqiXzA2_gUjP6vAj3Mk_S28lI-cVaTGWSdK6c-Q7mZcJX3gWjjj0QKVoF0GwD6vX_yM-c1yfp7EZOqHYfv1nicyfoNhkObCUxEiOJlT-mAK-4kBWj1pXQoyDaCTOJu4"
    }
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true')
    if (onComplete) onComplete()
    navigate('/login')
  }

  return (
    <div className="relative flex h-full min-h-screen w-full sm:max-w-md sm:h-[850px] sm:min-h-0 sm:rounded-[32px] sm:shadow-2xl flex-col bg-background-light dark:bg-background-dark overflow-hidden border-0 sm:border-8 sm:border-white dark:sm:border-[#1a0b0b] mx-auto">
      <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex items-center justify-between p-6 pb-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">home_work</span>
          <span className="text-sm font-bold tracking-wider uppercase text-gray-800 dark:text-white opacity-80">Equipo</span>
        </div>
        <button
          onClick={handleComplete}
          className="group flex items-center justify-end px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm font-bold leading-normal tracking-wide group-hover:text-primary transition-colors">
            Saltar
          </p>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 relative z-10">
        <div className="w-full mb-8 relative group">
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl shadow-primary/10 relative transform transition hover:scale-[1.01] duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <span className="text-xs font-bold text-gray-800 dark:text-white">Verificado</span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-2 mb-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 rounded-full bg-primary'
                  : 'w-2 rounded-full bg-gray-300 dark:bg-white/20'
              }`}
            ></div>
          ))}
        </div>

        <div className="w-full text-center mb-3">
          <h2 className="text-[#181111] dark:text-white tracking-tight text-[28px] font-extrabold leading-tight">
            {slides[currentSlide].title.split(' ').map((word, i, arr) => 
              i === arr.length - 1 ? (
                <span key={i}><span className="text-primary">{word}</span></span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
        </div>

        <div className="w-full text-center px-4">
          <p className="text-gray-500 dark:text-gray-300 text-base font-medium leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      <div className="w-full p-6 pb-10 relative z-10">
        <button
          onClick={handleNext}
          className="w-full bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all duration-200 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mb-5"
        >
          <span>{currentSlide === slides.length - 1 ? 'Comenzar' : 'Siguiente'}</span>
          <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
        </button>

        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <button
            onClick={() => navigate('/login')}
            className="text-[#181111] dark:text-white hover:text-primary dark:hover:text-primary transition-colors px-4 py-2 rounded-lg"
          >
            Iniciar sesión
          </button>
          <div className="h-4 w-px bg-gray-300 dark:bg-white/20"></div>
          <button
            onClick={() => navigate('/register')}
            className="text-[#181111] dark:text-white hover:text-primary dark:hover:text-primary transition-colors px-4 py-2 rounded-lg"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding

