import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyCard from '../components/PropertyCard'

const SearchResults = () => {
  const navigate = useNavigate()
  const [viewMode, setViewMode] = useState('list') // 'list' or 'grid'

  const properties = [
    {
      id: 1,
      title: "Casa Moderna en Centro",
      location: "Av. Reforma 123, Ciudad de México",
      price: "$250,000 USD",
      bedrooms: 3,
      bathrooms: 2,
      area: "120m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYAUUzwn1_LUTQkn1x0yIobFAzBHJJT6qejhkiDcqPkb59dLqKLD020qDMPLogrUd6d8KdyQXn_aB11ecOaRYPY7SNgxawhRO_rSyF3CpwYbYOB1ViQ2nbEJdP0I9OOqRanWGsaGcA7OGnCqiXzA2_gUjP6vAj3Mk_S28lI-cVaTGWSdK6c-Q7mZcJX3gWjjj0QKVoF0GwD6vX_yM-c1yfp7EZOqHYfv1nicyfoNhkObCUxEiOJlT-mAK-4kBWj1pXQoyDaCTOJu4"
    },
    {
      id: 2,
      title: "Loft Exclusivo Polanco",
      location: "Calle Campos Elíseos, CDMX",
      price: "$180,000 USD",
      bedrooms: 1,
      bathrooms: 1,
      area: "85m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkc5ITNlvLnDxm7EGo0tJfnx-lnGK301DMSjU8GFNIayJpQEnJyRm4hTBya7vwgGwoagIOYQK1zuYtNMDMGEZPwzZKE4hzlchybodv2kpjbl2--mG_oayPCQWfQ2d4GYJ0XRMdsWS-qIRYYlggXYwOcDNuXtq-Lo8Xii-vN4i5p6kiQ0lTWpw_nGXr1TQlMWVwH2d-GfsV5ZOZ7fKrTN4b5Os7GpnDFMq819Fgejv9sfJJBljrJfOFNQ1nC1ljQZc1xjOf5MOguMU"
    },
    {
      id: 3,
      title: "Villa Sol y Mar",
      location: "Zona Hotelera, Cancún",
      price: "$450k",
      bedrooms: 4,
      bathrooms: 3,
      area: "200m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN2fiNJvdAVzbujGy1KbuouFnq0MLZHQ5L3UE_amlQfxF2tr77ZMPb48qygDRdI1ZqxOEXQbqXXFg1tvjg5QsJpTSe-PCBGOJ4mCIRXLsIi7ejc48qH64_VLsVjY57eLYtHZqb4ht3D13lh8sHUzNeg1IAFyNEq6d4MLIlbMcn_WTmWcmZbbqSQVbuCHWWvYYkDdvvrFfIWRENL2lrIv6-WuVrtmFDb4xLNLZXAjHkvaGEXVHaxhjaZ0z6l2PT517rnT1U7GTIieQ"
    },
    {
      id: 4,
      title: "Residencia Familiar",
      location: "Lomas de Chapultepec",
      price: "$320k",
      bedrooms: 3,
      bathrooms: 2,
      area: "180m²",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATI49yHjfNKht0WTkFSdx00tKue9MnxyHLhi6x5WP04JLeuKUWSC0H6gG9tXrgbl-8qMSYvAPxlTitckwcH2YvXjBiQNgyQhXi3GqlXXO3Kwo3Xj_hiRcmtkh3rjLp4A9UI-3jEH39-nacU5ZNs3klXIBwgHIjNhloJAjCjGJCmVeAC0uEC8kf6buuzuYlKPpvIspIZEZaQGqI-alx7mibdfMcb0M8eotF0wTRVE6b5k44dTqfeA8Qyoex9Ls5ZHlJika4iV6kleY"
    }
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] md:max-w-7xl mx-auto bg-white dark:bg-[#111a22] shadow-xl md:shadow-none">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 md:pb-8 md:ml-64 px-4 md:px-6 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-[#111418] dark:text-white">
            Resultados de búsqueda
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              <span className="material-symbols-outlined">view_list</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">sort</span>
            Ordenar
          </button>
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {properties.length} propiedades encontradas
          </p>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'}>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              horizontal={viewMode === 'list'}
            />
          ))}
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default SearchResults

