function Card({ children, reverse }) {
  return (
    <div className="text-2xl rounded-md bg-slate-50 p-5 mt-6 mr-5 inline-block">{children}</div>
  )
}

export default Card