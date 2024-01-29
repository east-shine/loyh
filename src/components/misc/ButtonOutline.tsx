const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-500 text-green-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-lg ">
      {children}
    </button>
  )
}

export default ButtonOutline