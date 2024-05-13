import { Link, useLocation } from "react-router-dom";


export const NavBar = () => {
    const pages = [
        {
            path: "/",
            linkName: "Events",
        },
        {
            path: "/myevents",
            linkName: "My Events",
        },
    ];
    const location = useLocation();

  return (
      <nav className=" mt-[200px] md:m-0">
          <ul className=" flex flex-col gap-3 items-center md:flex-row">
              {pages.map((item) => (
                  <li key={item.linkName} className=" font-medium text-white md:text-prim-black xl:text-lg">
                      <Link to={item.path} className={`${location.pathname === item.path && "text-prim-black md:text-prim-green"}`}>{item.linkName}</Link>
                  </li>
              ))}
          </ul>
    </nav>
  )
}
