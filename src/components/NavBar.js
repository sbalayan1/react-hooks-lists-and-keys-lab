import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let mapLinks = links.map((links) => {
      console.log(links)
      return <a href={'#'+ links} key={links}>{links}</a>
  })

  return <nav>{mapLinks}</nav>;
}

export default NavBar;
