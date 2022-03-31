import getMusic from "../assets/logo.png"

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-center py-4 z-20 sticky top-0 bg-black/50 backdrop-blur-md">
      <img src={getMusic} alt="GetMusic Logo" width={150} />
    </header>
  )
}

export default Header;