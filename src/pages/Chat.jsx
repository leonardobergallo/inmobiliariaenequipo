import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Chat = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Juan Pérez',
      lastMessage: 'Hola, ¿tienes alguna pregunta sobre la propiedad?',
      time: '10:30 AM',
      unread: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp44XXDSa1JfDAwunEtRaMZ3W6JkGrvzw4FUdKidMrtDrC-w-XJXKBzJgZwal5oWP70Nk-L3AjD2X5Z3HNPMnCb-tNsjR1b1EUb7mdzj-slDAQGHIhIxZqSsLTTQpJ_dAllCySItiRHtlCI4WDV8qA8mHncqsBNLbiZeZvWllHsOu97_AzT4py4hKd8hZQUM9DNYG5egExwP2GF2Wm4hSw9TO2Wr30YsqBmMEPBhhetGtP6g5WrV-oaOkDg6Gphh_AK_mM4DdJiLU'
    },
    {
      id: 2,
      name: 'María González',
      lastMessage: 'La propiedad está disponible para visita',
      time: 'Ayer',
      unread: 0,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNGaVAc5UZjsnWYfqGlr7yUlprTtgE52c0r8PBVufJCkqU4_lE5UITghNgKhSm6cL5eXo7CAP4sQ0d3uYwWGQyme2v1G-25cnp5FUKqo5V3n9TUi8Ly_CFX-J5qD6xC6D7sp4vqrW2uMkqst2hd21u0JjjXL2b2fyCk3JnqWnf7wc7A4tlgKbYxadIgRpCD5hzY3f38kWfw_brnqStc6BTAqAX_ofW3G0L3m89mOJghOK01Kqt-lUoVDl1tFdKS7l3RXj92s1rCR4'
    }
  ]

  const messages = [
    { id: 1, text: 'Hola, ¿tienes alguna pregunta sobre la propiedad?', sender: 'agent', time: '10:30 AM' },
    { id: 2, text: 'Sí, me gustaría saber más sobre el precio y las características', sender: 'user', time: '10:32 AM' },
    { id: 3, text: 'Claro, con gusto te ayudo. La propiedad tiene 3 habitaciones, 2 baños y 120m². El precio es $250,000 USD', sender: 'agent', time: '10:33 AM' }
  ]

  const [selectedChat, setSelectedChat] = useState(null)

  if (selectedChat) {
    return (
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
        <Header showBack={true} />
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="size-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-[#111418] dark:text-white">{selectedChat.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">En línea</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto bg-white dark:bg-[#111a22] border-t border-gray-200 dark:border-gray-800 p-4 pb-safe">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={() => {
                if (message.trim()) {
                  setMessage('')
                }
              }}
              className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#111a22] shadow-xl">
      <Header showBack={true} />

      <main className="flex-1 flex flex-col pb-24">
        <div className="px-4 pt-4 mb-4">
          <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-4">
            Mensajes
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedChat(conversation)}
              className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800"
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="size-12 rounded-full"
                />
                <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-[#111a22]"></div>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-[#111418] dark:text-white">
                    {conversation.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {conversation.time}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                  {conversation.lastMessage}
                </p>
              </div>
              {conversation.unread > 0 && (
                <div className="size-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {conversation.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </main>

      <Navbar />
    </div>
  )
}

export default Chat

