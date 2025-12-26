import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const FAQ = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿Cómo puedo buscar una propiedad?',
      answer: 'Puedes usar la barra de búsqueda en la página principal para buscar por ubicación, precio o características. También puedes usar los filtros avanzados para refinar tu búsqueda.'
    },
    {
      question: '¿Cómo contacto a un agente?',
      answer: 'Puedes contactar a un agente directamente desde la página de detalle de la propiedad haciendo clic en el botón "Contactar Agente" o desde la sección de chat.'
    },
    {
      question: '¿Puedo programar una visita?',
      answer: 'Sí, puedes programar una visita contactando directamente al agente asignado a la propiedad. El agente coordinará la fecha y hora más conveniente para ti.'
    },
    {
      question: '¿Cómo funciona la calculadora de hipotecas?',
      answer: 'La calculadora te permite estimar tus pagos mensuales ingresando el monto del préstamo, la tasa de interés y el plazo. Es una herramienta de referencia, los términos finales los determinará el banco.'
    },
    {
      question: '¿Puedo guardar propiedades en favoritos?',
      answer: 'Sí, puedes guardar propiedades en favoritos haciendo clic en el ícono de corazón en cualquier propiedad. Puedes ver todas tus propiedades guardadas en la sección "Favoritos".'
    },
    {
      question: '¿Cómo creo una alerta de propiedades?',
      answer: 'Ve a la sección "Alertas de Propiedades" en tu perfil, haz clic en el botón "+" y completa los criterios de búsqueda. Recibirás notificaciones cuando haya propiedades que coincidan con tus criterios.'
    },
    {
      question: '¿Puedo publicar mi propiedad?',
      answer: 'Sí, si eres un agente registrado, puedes publicar propiedades desde la sección "Publicar Propiedad" en tu perfil. Completa el formulario con todos los detalles y fotos de la propiedad.'
    },
    {
      question: '¿Cómo funciona el tour virtual?',
      answer: 'El tour virtual 360° te permite explorar la propiedad desde cualquier dispositivo. Simplemente haz clic en "Tour Virtual" en la página de detalle de la propiedad para comenzar.'
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-4">
          Preguntas Frecuentes
        </h1>

        <div className="mb-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-gray-400">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar preguntas..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background-light dark:bg-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-[#111418] dark:text-white flex-1 pr-4">
                  {faq.question}
                </span>
                <span className={`material-symbols-outlined text-primary transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">
              search_off
            </span>
            <p className="text-gray-500 dark:text-gray-400">
              No se encontraron resultados
            </p>
          </div>
        )}
      </main>

      <Navbar />
    </div>
  )
}

export default FAQ

