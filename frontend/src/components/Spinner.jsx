
const Spinner = () => {
  return (
    <div className="flex align-middle justify-center h-full">
      <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-800" ></div>
      <div className="animate-bounce w-16 h-16 m-8 rounded-full bg-sky-700" ></div>
      <div className="animate-pulse w-16 h-16 m-8 rounded-full bg-sky-950" ></div>
      <div className="animate-none w-16 h-16 m-8 rounded-full bg-sky-500" ></div>
      <div className="animate-pulse w-16 h-16 m-8 rounded-full bg-sky-950" ></div>
      <div className="animate-bounce w-16 h-16 m-8 rounded-full bg-sky-700" ></div>
      <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-800" ></div>
    </div>
  )
}

export default Spinner