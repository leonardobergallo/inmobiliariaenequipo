const Logo = ({ size = "default" }) => {
  const sizes = {
    small: "h-8 w-8 text-[20px]",
    default: "h-10 w-10 text-[24px]",
    large: "h-12 w-12 text-[28px]"
  }

  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative flex ${sizes[size] || sizes.default} items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-700 text-white shadow-lg shadow-blue-500/20 overflow-hidden`}>
        <div className="absolute top-0 right-0 h-5 w-5 bg-white/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 h-3 w-3 bg-accent-red/80 rounded-tr-full"></div>
        <span className="material-symbols-outlined relative z-10">real_estate_agent</span>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-display text-[15px] font-black tracking-tight text-[#111418] dark:text-white leading-none">
          INMOBILIARIA
        </h1>
        <span className="text-[10px] font-bold tracking-widest text-accent-red uppercase leading-tight mt-0.5">
          EN EQUIPO
        </span>
      </div>
    </div>
  )
}

export default Logo

