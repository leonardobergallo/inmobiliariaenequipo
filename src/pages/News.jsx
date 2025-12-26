import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const News = () => {
  const navigate = useNavigate()

  const news = [
    {
      id: 1,
      title: 'Tendencias del mercado inmobiliario 2024',
      description: 'Descubre las tendencias que están marcando el mercado inmobiliario este año...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYAUUzwn1_LUTQkn1x0yIobFAzBHJJT6qejhkiDcqPkb59dLqKLD020qDMPLogrUd6d8KdyQXn_aB11ecOaRYPY7SNgxawhRO_rSyF3CpwYbYOB1ViQ2nbEJdP0I9OOqRanWGsaGcA7OGnCqiXzA2_gUjP6vAj3Mk_S28lI-cVaTGWSdK6c-Q7mZcJX3gWjjj0QKVoF0GwD6vX_yM-c1yfp7EZOqHYfv1nicyfoNhkObCUxEiOJlT-mAK-4kBWj1pXQoyDaCTOJu4',
      date: '15 Ene 2024'
    },
    {
      id: 2,
      title: 'Cómo financiar tu primera propiedad',
      description: 'Guía completa sobre opciones de financiamiento disponibles para compradores primerizos...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkc5ITNlvLnDxm7EGo0tJfnx-lnGK301DMSjU8GFNIayJpQEnJyRm4hTBya7vwgGwoagIOYQK1zuYtNMDMGEZPwzZKE4hzlchybodv2kpjbl2--mG_oayPCQWfQ2d4GYJ0XRMdsWS-qIRYYlggXYwOcDNuXtq-Lo8Xii-vN4i5p6kiQ0lTWpw_nGXr1TQlMWVwH2d-GfsV5ZOZ7fKrTN4b5Os7GpnDFMq819Fgejv9sfJJBljrJfOFNQ1nC1ljQZc1xjOf5MOguMU',
      date: '12 Ene 2024'
    },
    {
      id: 3,
      title: 'Zonas con mayor crecimiento en CDMX',
      description: 'Conoce las áreas que están experimentando mayor desarrollo y valorización...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN2fiNJvdAVzbujGy1KbuouFnq0MLZHQ5L3UE_amlQfxF2tr77ZMPb48qygDRdI1ZqxOEXQbqXXFg1tvjg5QsJpTSe-PCBGOJ4mCIRXLsIi7ejc48qH64_VLsVjY57eLYtHZqb4ht3D13lh8sHUzNeg1IAFyNEq6d4MLIlbMcn_WTmWcmZbbqSQVbuCHWWvYYkDdvvrFfIWRENL2lrIv6-WuVrtmFDb4xLNLZXAjHkvaGEXVHaxhjaZ0z6l2PT517rnT1U7GTIieQ',
      date: '10 Ene 2024'
    }
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-4">
          Noticias del Mercado
        </h1>

        <div className="space-y-4">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => {}}
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{article.date}</p>
                <h3 className="font-bold text-lg text-[#111418] dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {article.description}
                </p>
                <button className="mt-3 text-primary text-sm font-semibold hover:underline">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default News

