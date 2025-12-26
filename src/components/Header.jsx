import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Header = ({ showBack = false, showNotifications = true, showProfile = true }) => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#111a22]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300 md:ml-64">
      <div className="flex items-center justify-between px-4 py-3 max-w-[480px] md:max-w-full mx-auto">
        <div className="flex items-center gap-2.5">
          {showBack ? (
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center size-9 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300 mr-2"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          ) : (
            <Logo />
          )}
        </div>
        <div className="flex items-center gap-3">
          {showNotifications && (
            <button className="relative flex items-center justify-center size-9 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-accent-red border-2 border-white dark:border-[#111a22] rounded-full"></span>
            </button>
          )}
          {showProfile && (
            <button 
              onClick={() => navigate('/profile')}
              className="size-9 rounded-full border border-gray-200 dark:border-gray-700 p-0.5"
            >
              <div className="h-full w-full rounded-full bg-gradient-to-br from-primary to-blue-600"></div>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

