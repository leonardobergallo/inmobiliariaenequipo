import { useNavigate } from 'react-router-dom'

const PropertyCard = ({ property, featured = false, horizontal = false }) => {
  const navigate = useNavigate()

  if (horizontal) {
    return (
      <div 
        onClick={() => navigate(`/property/${property.id}`)}
        className="flex bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden h-28 hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="w-32 shrink-0 bg-gray-200 relative">
          {property.new && (
            <div className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
              NUEVO
            </div>
          )}
          <div 
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${property.image})` }}
          ></div>
        </div>
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-sm text-[#111418] dark:text-white line-clamp-1">
                {property.title}
              </h3>
              <p className="text-primary dark:text-blue-400 font-bold text-sm">
                {property.price}
              </p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 truncate">
              {property.location}
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs mt-2">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">bed</span> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">bathtub</span> {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">straighten</span> {property.area}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => navigate(`/property/${property.id}`)}
      className="group relative flex flex-col min-w-[280px] w-[280px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden snap-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-48 w-full overflow-hidden">
        {featured && (
          <div className="absolute top-3 left-3 z-10 bg-accent-red text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
            Destacado
          </div>
        )}
        <button className="absolute top-3 right-3 z-10 bg-white/80 dark:bg-black/50 p-1.5 rounded-full backdrop-blur-sm text-gray-600 dark:text-gray-200 hover:text-accent-red transition-colors">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
        <div
          className="bg-center bg-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${property.image})` }}
        ></div>
        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
          <p className="text-primary dark:text-blue-400 font-bold text-sm">{property.price}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-base text-[#111418] dark:text-white mb-1 truncate">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3">
          <span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
          <span className="truncate">{property.location}</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined text-[18px]">bed</span>
            <span className="text-xs font-medium">{property.bedrooms} Hab</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined text-[18px]">bathtub</span>
            <span className="text-xs font-medium">{property.bathrooms} Baños</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined text-[18px]">straighten</span>
            <span className="text-xs font-medium">{property.area}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard

