import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PropertyCard from '../components/PropertyCard'

const Favorites = () => {
  const navigate = useNavigate()

  const favorites = [
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
    }
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] md:max-w-7xl mx-auto bg-white dark:bg-[#111a22] shadow-xl md:shadow-none">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 md:pb-8 md:ml-64 px-4 md:px-6 pt-4">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-4">
          Propiedades Guardadas
        </h1>

        {favorites.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">
              favorite_border
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              No tienes propiedades guardadas
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">
              Guarda tus propiedades favoritas para verlas más tarde
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Explorar Propiedades
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((property) => (
              <PropertyCard key={property.id} property={property} horizontal={true} />
            ))}
          </div>
        )}
      </main>

      <Navbar />
    </div>
  )
}

export default Favorites

