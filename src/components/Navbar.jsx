import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Button } from "@mui/material";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (nav) => {
    setActive(nav.title);
    if (nav.id === "meet-bree" || nav.id === "story" || nav.id === "contact") {
      navigate(`/${nav.id}`);
    } else if (nav.id === "/") {
      navigate(`/`);
    } else {
      window.location.hash = `#${nav.id}`;
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-500 ${
        scrolled ? "bg-white bg-opacity-100" : "bg-white bg-opacity-100"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer flex ">
            BREE &nbsp;
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black" : "text-black"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavigation(nav)}
            >
              {nav.id === "meet-bree" ? (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#F5EADC",color:'black',fontWeight:'bold'}}
                >
                  {nav.title}
                </Button>
              ) : (
                nav.title
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#FFFEF2] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavigation(nav);
                  }}
                >
                  {nav.id === "meet-bree" ? (
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ color: "#ffff",borderColor:'#ffff', backgroundColor: "#DED3C5" }}
                    >
                      {nav.title}
                    </Button>
                  ) : (
                    nav.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
