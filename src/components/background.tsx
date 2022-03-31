const Background = () => {
  return (
    <div className="w-screen h-screen z-0 fixed bg-gradient-to-t from-black to-slate-900">
      <div className="opacity-60">
        <div className="h-80 w-80 rounded-full bg-lime-900 absolute top-20 right-44 blur-3xl" />
        <div className="h-44 w-44 rounded-full bg-orange-900 absolute top-80 right-32 blur-3xl opacity-70" />
        <div className="h-[32rem] w-[32rem] rounded-full bg-lime-200 absolute bottom-[-10rem] left-40 blur-3xl opacity-20" />
      </div>
    </div>
  )
}

export default Background;