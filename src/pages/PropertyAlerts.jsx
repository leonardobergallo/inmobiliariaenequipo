import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const PropertyAlerts = () => {
  const navigate = useNavigate()
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      name: 'Casas en Polanco',
      type: 'Casa',
      minPrice: '200000',
      maxPrice: '500000',
      bedrooms: 3,
      location: 'Polanco, CDMX',
      active: true
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    type: 'Casa',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    location: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAlert = {
      id: alerts.length + 1,
      ...formData,
      active: true
    }
    setAlerts([...alerts, newAlert])
    setFormData({
      name: '',
      type: 'Casa',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      location: ''
    })
    setShowForm(false)
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-[#111418] dark:text-white">
            Alertas de Propiedades
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-background-light dark:bg-gray-800 rounded-xl p-4 mb-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre de la alerta
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white"
                placeholder="Ej: Casas en Polanco"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white"
              >
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Precio mínimo
                </label>
                <input
                  type="number"
                  value={formData.minPrice}
                  onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white"
                  placeholder="200000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Precio máximo
                </label>
                <input
                  type="number"
                  value={formData.maxPrice}
                  onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white"
                  placeholder="500000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Habitaciones
              </label>
              <input
                type="number"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white"
                placeholder="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ubicación
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white"
                placeholder="Polanco, CDMX"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-lg bg-primary text-white hover:bg-blue-600"
              >
                Crear Alerta
              </button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="bg-background-light dark:bg-gray-800 rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-[#111418] dark:text-white mb-1">{alert.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{alert.location}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded-full">
                  {alert.type}
                </span>
                {alert.minPrice && alert.maxPrice && (
                  <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded-full">
                    ${alert.minPrice} - ${alert.maxPrice}
                  </span>
                )}
                {alert.bedrooms && (
                  <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded-full">
                    {alert.bedrooms} Hab
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className={`size-2 rounded-full ${alert.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {alert.active ? 'Activa' : 'Inactiva'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default PropertyAlerts

