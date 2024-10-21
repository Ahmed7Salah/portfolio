import NavItem from "./NavBar/NavItem"


const NavBar = () => {
  return (
    <div className="sticky top-0 z-40 flex justify-center w-full h-12 text-gray-300 bg-black">
      <div className="grid items-center w-5/6 grid-cols-3 border-b-2 border-gray-700/50 ">
        {/* logo and handle container */}
        <div className="flex items-center justify-center col-start-2 space-x-3">
          {/* <img src={require("../assets/logo.png")} alt="logo"
          className="h-11" /> */}
          <h1 className="text-2xl font-bold">Ahmed Salah</h1>
        </div>

        {/* Right side Icons container*/}
        <div className="flex col-start-3 justify-end space-x-3.5">
          {/* <NavItem
            name={"Youtube"}
            img={require("../assets/navbar/youtube.png")}
            url={"https://www.youtube.com/@DigitalTurbulence"} /> */}
          <NavItem
            name={"GitHub"}
            img={require("../assets/navbar/github.png")}
            url={"https://github.com/Ahmed7Salah"} />
          <NavItem
            name={"LinkedIn"}
            img={require("../assets/navbar/linkedin.png")}
            url={"www.linkedin.com/in/ahmed7salah"} />
            <NavItem
              name={"upwork.com"}
              img={require("../assets/navbar/upwork.png")}
              url={"https://www.upwork.com/freelancers/~01bc9a54adbdd47f4c?mp_source=share"} />
          {/* <NavItem
            name={"Medium"}
            img={require("../assets/navbar/medium.png")}
            url={"https://medium.com/@ahmadelhifny"} /> */}
          {/* <NavItem
            name={"x.com"}
            img={require("../assets/navbar/x.png")}
            url={"https://x.com/Ahmad7Salah"} /> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar
