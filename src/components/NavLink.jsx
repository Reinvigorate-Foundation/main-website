import React, { useContext, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { UtilContext } from "/src/contexts/UtilContext";

function NavLink({ text, isActive, route, element, external }) {
  const { scrollToElement } = useContext(UtilContext);
  const { pathname } = useLocation();

  const onClick = useCallback(() => {
    if (element) {
      setTimeout(() => {
        scrollToElement(element);
      }, 100);
    }
  });

  const bottomBarClassName = isActive
    ? "w-2/3 h-[0.15rem] rounded bg-accent absolute bottom-[-0.5rem] left-1/2 translate-x-[-50%]"
    : "w-0 h-[0.15rem] rounded bg-accent absolute bottom-[-0.5rem] left-1/2 translate-x-[-50%] transition-[width] group-hover:w-2/3";

  return (
    <>
      {pathname == route ? (
        <p onClick={onClick} className="relative cursor-pointer group">
          <span className={bottomBarClassName}></span>
          {text}
        </p>
      ) : (
        <Link
          target={external ? "_blank" : ""}
          to={route}
          onClick={onClick}
          className="relative cursor-pointer group"
        >
          <span className={bottomBarClassName}></span>
          {text}
        </Link>
      )}
    </>
  );
}

NavLink.defaultProps = {
  isActive: false,
  route: "",
  element: "",
  external: false,
};

export default NavLink;
