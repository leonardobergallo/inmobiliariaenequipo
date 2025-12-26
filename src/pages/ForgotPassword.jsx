import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../components/Logo'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#111a22] rounded-2xl shadow-xl p-8 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="large" />
          </div>
          <div className="mb-6">
            <span className="material-symbols-outlined text-6xl text-primary">mark_email_read</span>
          </div>
          <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-2">
            Correo enviado
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Hemos enviado las instrucciones para restablecer tu contraseña a {email}
          </p>
          <Link
            to="/login"
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25 inline-block text-center"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-[#111a22] rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-8">
          <Logo size="large" />
        </div>

        <h1 className="text-2xl font-bold text-[#111418] dark:text-white text-center mb-2">
          Recuperar contraseña
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
          Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="tu@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            Enviar instrucciones
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm text-primary font-semibold hover:underline"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

