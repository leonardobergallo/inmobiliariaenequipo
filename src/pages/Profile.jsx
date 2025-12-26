import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Profile = () => {
  const navigate = useNavigate()

  const menuItems = [
    { icon: 'favorite', label: 'Mis Favoritos', path: '/favorites' },
    { icon: 'search', label: 'Búsquedas Guardadas', path: '/search' },
    { icon: 'notifications_active', label: 'Alertas de Propiedades', path: '/alerts' },
    { icon: 'home', label: 'Mis Propiedades', path: '/publish' },
    { icon: 'calculate', label: 'Calculadora de Hipotecas', path: '/calculator' },
    { icon: 'compare_arrows', label: 'Comparar Propiedades', path: '/compare' },
    { icon: 'article', label: 'Noticias del Mercado', path: '/news' },
    { icon: 'help', label: 'Preguntas Frecuentes', path: '/faq' },
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] md:max-w-7xl mx-auto bg-white dark:bg-[#111a22] shadow-xl md:shadow-none">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 md:pb-8 md:ml-64 px-4 md:px-6 pt-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="size-20 rounded-full bg-gradient-to-br from-primary to-blue-600"></div>
            <div className="absolute bottom-0 right-0 size-6 bg-green-500 rounded-full border-4 border-white dark:border-[#111a22]"></div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#111418] dark:text-white">Alex García</h1>
            <p className="text-gray-500 dark:text-gray-400">alex.garcia@email.com</p>
            <button className="mt-2 text-sm text-primary font-semibold hover:underline">
              Editar perfil
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-background-light dark:bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#111418] dark:text-white">12</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Favoritos</p>
          </div>
          <div className="bg-background-light dark:bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#111418] dark:text-white">3</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Búsquedas</p>
          </div>
          <div className="bg-background-light dark:bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#111418] dark:text-white">5</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Alertas</p>
          </div>
        </div>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 p-4 bg-background-light dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[24px]">
                {item.icon}
              </span>
              <span className="flex-1 text-left font-medium text-[#111418] dark:text-white">
                {item.label}
              </span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </button>
          ))}
        </div>

        <div className="mt-6 mb-4">
          <button
            onClick={() => {
              localStorage.removeItem('isAuthenticated')
              navigate('/login')
            }}
            className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-semibold hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default Profile

