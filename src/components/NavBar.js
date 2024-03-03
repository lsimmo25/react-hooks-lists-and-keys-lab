import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  links.map(link => <a key={link} href={link}>{link}</a>)

  return (
    <nav>
      <NavBar />
    </nav>
  )
}

export default NavBar;
