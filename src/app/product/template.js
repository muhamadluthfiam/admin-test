export default function Template({ children }) {
  return (
    <div className="container">
      <div className="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row">
        <div className="flex items-center justify-between gap-4">
          <div className="text-[32px] font-semibold text-dark">
            Produk
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#"
            className="flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] relative notification-dot">
            <img src="../assets/svgs/ic-bell.svg" alt=""/>
          </a>
        </div>
      </div>
      <div className="pt-[20px]">
        {children}
      </div>
    </div>
  )
}