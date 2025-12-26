import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyCard from '../components/PropertyCard'

const Home = () => {
  const navigate = useNavigate()

  const featuredProperties = [
    {
      id: 1,
      title: "Casa Moderna en Centro",
      location: "Av. Reforma 123, Ciudad de México",
      price: "$250,000 USD",
      bedrooms: 3,
      bathrooms: 2,
      area: "120m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYAUUzwn1_LUTQkn1x0yIobFAzBHJJT6qejhkiDcqPkb59dLqKLD020qDMPLogrUd6d8KdyQXn_aB11ecOaRYPY7SNgxawhRO_rSyF3CpwYbYOB1ViQ2nbEJdP0I9OOqRanWGsaGcA7OGnCqiXzA2_gUjP6vAj3Mk_S28lI-cVaTGWSdK6c-Q7mZcJX3gWjjj0QKVoF0GwD6vX_yM-c1yfp7EZOqHYfv1nicyfoNhkObCUxEiOJlT-mAK-4kBWj1pXQoyDaCTOJu4",
      featured: true
    },
    {
      id: 2,
      title: "Loft Exclusivo Polanco",
      location: "Calle Campos Elíseos, CDMX",
      price: "$180,000 USD",
      bedrooms: 1,
      bathrooms: 1,
      area: "85m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkc5ITNlvLnDxm7EGo0tJfnx-lnGK301DMSjU8GFNIayJpQEnJyRm4hTBya7vwgGwoagIOYQK1zuYtNMDMGEZPwzZKE4hzlchybodv2kpjbl2--mG_oayPCQWfQ2d4GYJ0XRMdsWS-qIRYYlggXYwOcDNuXtq-Lo8Xii-vN4i5p6kiQ0lTWpw_nGXr1TQlMWVwH2d-GfsV5ZOZ7fKrTN4b5Os7GpnDFMq819Fgejv9sfJJBljrJfOFNQ1nC1ljQZc1xjOf5MOguMU",
      featured: false
    }
  ]

  const recentProperties = [
    {
      id: 3,
      title: "Villa Sol y Mar",
      location: "Zona Hotelera, Cancún",
      price: "$450k",
      bedrooms: 4,
      bathrooms: 3,
      area: "200m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN2fiNJvdAVzbujGy1KbuouFnq0MLZHQ5L3UE_amlQfxF2tr77ZMPb48qygDRdI1ZqxOEXQbqXXFg1tvjg5QsJpTSe-PCBGOJ4mCIRXLsIi7ejc48qH64_VLsVjY57eLYtHZqb4ht3D13lh8sHUzNeg1IAFyNEq6d4MLIlbMcn_WTmWcmZbbqSQVbuCHWWvYYkDdvvrFfIWRENL2lrIv6-WuVrtmFDb4xLNLZXAjHkvaGEXVHaxhjaZ0z6l2PT517rnT1U7GTIieQ",
      new: true
    },
    {
      id: 4,
      title: "Residencia Familiar",
      location: "Lomas de Chapultepec",
      price: "$320k",
      bedrooms: 3,
      bathrooms: 2,
      area: "180m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATI49yHjfNKht0WTkFSdx00tKue9MnxyHLhi6x5WP04JLeuKUWSC0H6gG9tXrgbl-8qMSYvAPxlTitckwcH2YvXjBiQNgyQhXi3GqlXXO3Kwo3Xj_hiRcmtkh3rjLp4A9UI-3jEH39-nacU5ZNs3klXIBwgHIjNhloJAjCjGJCmVeAC0uEC8kf6buuzuYlKPpvIspIZEZaQGqI-alx7mibdfMcb0M8eotF0wTRVE6b5k44dTqfeA8Qyoex9Ls5ZHlJika4iV6kleY",
      new: true
    }
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] md:max-w-7xl mx-auto bg-white dark:bg-[#111a22] shadow-xl md:shadow-none">
      <Header />

      <main className="flex-1 flex flex-col pb-24 md:pb-8 md:ml-64">
        <div className="px-4 pt-6 pb-2">
          <h1 className="text-[#111418] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
            Hola, Alex! <br />
            <span className="text-gray-500 dark:text-gray-400 text-xl font-medium">
              Encuentra tu lugar ideal.
            </span>
          </h1>
        </div>

        <div className="px-4 py-4 sticky top-[65px] z-40 bg-white dark:bg-[#111a22] transition-all">
          <div
            onClick={() => navigate('/search')}
            className="flex w-full items-center rounded-xl bg-background-light dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden h-12 cursor-pointer"
          >
            <div className="flex items-center justify-center pl-4 text-primary dark:text-blue-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="w-full bg-transparent border-none text-base text-[#111418] dark:text-white placeholder:text-gray-400 focus:ring-0 px-3 h-full cursor-pointer"
              placeholder="Ciudad, zona o código postal..."
              readOnly
            />
            <button className="flex items-center justify-center px-4 h-full border-l border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar pb-2">
          <div className="flex px-4 gap-3 min-w-max">
            <button className="flex h-9 items-center justify-center px-5 rounded-full bg-primary text-white shadow-md shadow-blue-500/20 transition-transform active:scale-95">
              <span className="text-sm font-semibold">Comprar</span>
            </button>
            <button className="flex h-9 items-center justify-center px-5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary transition-colors active:scale-95">
              <span className="text-sm font-medium">Alquilar</span>
            </button>
            <button className="flex h-9 items-center justify-center px-5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary transition-colors active:scale-95">
              <span className="text-sm font-medium">Casas</span>
            </button>
            <button className="flex h-9 items-center justify-center px-5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary transition-colors active:scale-95">
              <span className="text-sm font-medium">Departamentos</span>
            </button>
          </div>
        </div>

        <section className="mt-6">
          <div className="flex items-center justify-between px-4 pb-4">
            <h2 className="text-xl font-bold text-[#111418] dark:text-white tracking-tight">
              Propiedades Destacadas
            </h2>
            <button
              onClick={() => navigate('/search')}
              className="text-sm font-semibold text-primary dark:text-blue-400 hover:underline"
            >
              Ver todo
            </button>
          </div>
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible px-4 gap-4 pb-6 no-scrollbar snap-x snap-mandatory md:snap-none">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} featured={property.featured} />
            ))}
            <div className="group relative flex flex-col min-w-[280px] md:min-w-0 w-[280px] md:w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden snap-center md:snap-none hover:shadow-xl transition-shadow duration-300 cursor-pointer opacity-80">
              <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                  <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">arrow_forward</span>
                  <p className="text-sm font-medium text-gray-500">Ver más propiedades</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 py-2 md:px-6">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#111a22] to-[#2c3e50] p-5 md:p-6 shadow-lg">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-2/3 md:w-3/4">
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1">
                  ¿Quieres vender tu propiedad?
                </h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3">
                  Únete a nuestro equipo y llega a miles de compradores.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-primary hover:bg-blue-600 text-white text-xs md:text-sm font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/30"
                >
                  Contactar Agente
                </button>
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-end">
                <div className="bg-white/10 p-2 md:p-3 rounded-full backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white text-3xl md:text-4xl">handshake</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-6 mb-4">
          <div className="flex items-center justify-between px-4 md:px-6 pb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#111418] dark:text-white tracking-tight">
              Recién Añadidas
            </h2>
            <button
              onClick={() => navigate('/search')}
              className="text-sm font-semibold text-primary dark:text-blue-400 hover:underline"
            >
              Ver todo
            </button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} horizontal={true} />
            ))}
          </div>
        </section>
      </main>

      <Navbar />
    </div>
  )
}

export default Home

