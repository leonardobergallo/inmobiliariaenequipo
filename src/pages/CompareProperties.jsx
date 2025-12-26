import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const CompareProperties = () => {
  const navigate = useNavigate()

  const properties = [
    {
      id: 1,
      title: "Casa Moderna",
      price: "$250,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "120m²",
      location: "Centro",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYAUUzwn1_LUTQkn1x0yIobFAzBHJJT6qejhkiDcqPkb59dLqKLD020qDMPLogrUd6d8KdyQXn_aB11ecOaRYPY7SNgxawhRO_rSyF3CpwYbYOB1ViQ2nbEJdP0I9OOqRanWGsaGcA7OGnCqiXzA2_gUjP6vAj3Mk_S28lI-cVaTGWSdK6c-Q7mZcJX3gWjjj0QKVoF0GwD6vX_yM-c1yfp7EZOqHYfv1nicyfoNhkObCUxEiOJlT-mAK-4kBWj1pXQoyDaCTOJu4"
    },
    {
      id: 2,
      title: "Loft Exclusivo",
      price: "$180,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "85m²",
      location: "Polanco",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkc5ITNlvLnDxm7EGo0tJfnx-lnGK301DMSjU8GFNIayJpQEnJyRm4hTBya7vwgGwoagIOYQK1zuYtNMDMGEZPwzZKE4hzlchybodv2kpjbl2--mG_oayPCQWfQ2d4GYJ0XRMdsWS-qIRYYlggXYwOcDNuXtq-Lo8Xii-vN4i5p6kiQ0lTWpw_nGXr1TQlMWVwH2d-GfsV5ZOZ7fKrTN4b5Os7GpnDFMq819Fgejv9sfJJBljrJfOFNQ1nC1ljQZc1xjOf5MOguMU"
    }
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-4">
          Comparar Propiedades
        </h1>

        <div className="overflow-x-auto no-scrollbar mb-4">
          <div className="flex gap-4 min-w-max">
            {properties.map((property) => (
              <div
                key={property.id}
                className="w-64 shrink-0 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="relative h-32">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-2 right-2 size-8 rounded-full bg-white/80 dark:bg-black/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm text-[#111418] dark:text-white mb-1">
                    {property.title}
                  </h3>
                  <p className="text-primary font-bold text-sm mb-2">{property.price}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{property.location}</p>
                </div>
              </div>
            ))}
            {properties.length < 3 && (
              <button className="w-64 shrink-0 h-48 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-4xl mb-2">add</span>
                <span className="text-sm font-medium">Añadir propiedad</span>
              </button>
            )}
          </div>
        </div>

        <div className="bg-background-light dark:bg-gray-800 rounded-xl p-4">
          <h2 className="font-bold text-lg text-[#111418] dark:text-white mb-4">
            Comparación
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Precio</span>
              <div className="flex gap-4">
                {properties.map((p) => (
                  <span key={p.id} className="font-semibold text-[#111418] dark:text-white">
                    {p.price}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Habitaciones</span>
              <div className="flex gap-4">
                {properties.map((p) => (
                  <span key={p.id} className="font-semibold text-[#111418] dark:text-white">
                    {p.bedrooms}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Baños</span>
              <div className="flex gap-4">
                {properties.map((p) => (
                  <span key={p.id} className="font-semibold text-[#111418] dark:text-white">
                    {p.bathrooms}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Superficie</span>
              <div className="flex gap-4">
                {properties.map((p) => (
                  <span key={p.id} className="font-semibold text-[#111418] dark:text-white">
                    {p.area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default CompareProperties

