import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import Logo from "./Logo";
import CloseIcon from "./icons/CloseIcon";

interface NavLink {
  dir: string;
  title: string;
}

const navArray: NavLink[] = [
  { dir: "#about", title: "about me" },
  { dir: "#skills", title: "skills" },
  { dir: "#experience", title: "Work Experience" },
  { dir: "#projects", title: "projects" },
  { dir: "#interesses", title: "interesses" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <section className="p-5 flex items-center justify-between w-full fixed z-50 top-0 left-0 border border-dashed border-b-white/20 border-transparent bg-black">
      <Logo />
      <nav className=" text-white hidden md:flex md:flex-row gap-4 justify-center uppercase w-[80%] md:w-full mr-20 absolute md:static top-[6rem] left-0 p-2 md:p-0 z-30 bg-slate-900 md:bg-black">
        {navArray.map((navLink, index) => (
          <a
            key={index}
            href={navLink.dir}
            className="hover:text-cyan-400 drop-shadow-xl hover:drop-shadow-2xl shadow-cyan-300 transition-all px-6 py-3 border-transparent hover:bg-cyan-50/20 rounded-md text-center"
          >
            {navLink.title}
          </a>
        ))}
      </nav>
      <button onClick={() => setShowMenu((showMenu) => !showMenu)}>
        {!showMenu ? <MenuIcon /> : <CloseIcon />}
      </button>

      <div
        className={`backdrop-blur-sm text-black text-3xl bg-slate-900/60 rounded-sm overflow-hidden md:hidden transition-all fixed top-0 right-0 z-50 h-screen  ${
          showMenu ? "w-full p-4" : "w-0"
        }`}
      >
        <div className="text-white absolute flex items-center justify-between w-full px-5 pr-10 border-dashed border border-b-white/20 border-transparent pb-2">
          <Logo />
          <button onClick={() => setShowMenu(false)} className=" right-2">
            <CloseIcon />
          </button>
        </div>
        <nav className=" text-white flex flex-col flex-shrink gap-1 justify-center items-center text-center text-xl uppercase pt-14 p-2 w-full h-full">
          {navArray.map((navLink, index) => (
            <div className="w-full border-dashed border border-b-white/20 border-transparent pb-1" key={index}>
              <a
                href={navLink.dir}
                className="hover:text-cyan-400 drop-shadow-xl hover:drop-shadow-2xl shadow-cyan-300 transition-all py-3  hover:bg-cyan-50/20 rounded-md w-full flex flex-shrink justify-center"
              >
                {navLink.title}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
/* hover:text-cyan-400 drop-shadow-xl hover:drop-shadow-2xl shadow-cyan-300 transition-all px-6 py-3 border-transparent hover:bg-cyan-50/20 rounded-md text-center w-full */

{
  /* <script>
  // To assign the value
  let showMenu = false;

  // To generate the function
  const btn = document.querySelector("#btn-menu");

  // To assign the function to any html element
  const menu = document.querySelector("#menu");

  // Toggle the menu's value
  function toggleMenu() {
    if (menu !== undefined) {
      if (menu?.classNameList.contains("close")) {
        showMenu = true;
        menu.classNameList.replace("close", "show");
      } else {
        showMenu = false;
        menu?.classNameList.replace("show", "close");
      }
      console.log(menu?.classNameList.contains("close"));
    }
    return null;
  }

  // Assigning the funtcion in the html element
  btn?.addEventListener("click", toggleMenu);
  console.log(showMenu);
</script> */
}
