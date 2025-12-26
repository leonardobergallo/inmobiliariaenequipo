import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Contact = () => {
  const navigate = useNavigate()
  const { agentId } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const agent = {
    name: agentId || 'Juan Pérez',
    title: 'Agente Premium',
    phone: '+54 11 1234-5678',
    email: 'juan.perez@inmobiliaria.com',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp44XXDSa1JfDAwunEtRaMZ3W6JkGrvzw4FUdKidMrtDrC-w-XJXKBzJgZwal5oWP70Nk-L3AjD2X5Z3HNPMnCb-tNsjR1b1EUb7mdzj-slDAQGHIhIxZqSsLTTQpJ_dAllCySItiRHtlCI4WDV8qA8mHncqsBNLbiZeZvWllHsOu97_AzT4py4hKd8hZQUM9DNYG5egExwP2GF2Wm4hSw9TO2Wr30YsqBmMEPBhhetGtP6g5WrV-oaOkDg6Gphh_AK_mM4DdJiLU'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensaje enviado exitosamente')
    navigate(-1)
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">
          Contactar Agente
        </h1>

        <div className="bg-background-light dark:bg-gray-800 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={agent.image}
              alt={agent.name}
              className="size-16 rounded-full"
            />
            <div className="flex-1">
              <p className="font-bold text-lg text-[#111418] dark:text-white">{agent.name}</p>
              <p className="text-sm text-primary font-semibold uppercase tracking-wide">{agent.title}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span className="text-sm">{agent.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span className="text-sm">{agent.email}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+54 11 1234-5678"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            Enviar Mensaje
          </button>
        </form>
      </main>

      <Navbar />
    </div>
  )
}

export default Contact

