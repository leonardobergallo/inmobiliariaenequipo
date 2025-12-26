import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const MortgageCalculator = () => {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12
    const payments = parseFloat(loanTerm) * 12

    if (principal && rate && payments) {
      const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1)
      const totalInterest = monthlyPayment * payments - principal
      const totalPayment = monthlyPayment * payments

      setResult({
        monthlyPayment: monthlyPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalPayment: totalPayment.toFixed(2)
      })
    }
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24 px-4 pt-4">
        <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">
          Calculadora de Hipotecas
        </h1>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monto del préstamo
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="250000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tasa de interés anual (%)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="5.5"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Plazo del préstamo (años)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="30"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            Calcular
          </button>
        </div>

        {result && (
          <div className="bg-gradient-to-br from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/20 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">
              Resultados
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">Pago mensual:</span>
                <span className="text-2xl font-bold text-primary">${result.monthlyPayment}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">Interés total:</span>
                <span className="text-lg font-semibold text-[#111418] dark:text-white">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-gray-600 dark:text-gray-400">Pago total:</span>
                <span className="text-lg font-semibold text-[#111418] dark:text-white">
                  ${result.totalPayment}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Navbar />
    </div>
  )
}

export default MortgageCalculator

