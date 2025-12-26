import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const PublishProperty = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Casa',
    price: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    address: '',
    city: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Propiedad publicada exitosamente')
    navigate('/')
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4 overflow-y-auto">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">
          Publicar Propiedad
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Ej: Casa moderna en centro"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Descripción
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Describe la propiedad..."
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tipo de propiedad
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option>Casa</option>
              <option>Departamento</option>
              <option>Terreno</option>
              <option>Oficina</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Precio
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="250000"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Habitaciones
              </label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Baños
              </label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Área (m²)
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="120"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Av. Reforma 123"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ciudad
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Ciudad de México"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Fotos
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">image</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Arrastra fotos aquí o haz clic para seleccionar
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            Publicar Propiedad
          </button>
        </form>
      </main>

      <Navbar />
    </div>
  )
}

export default PublishProperty

