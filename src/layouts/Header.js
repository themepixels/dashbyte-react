import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-link"
    >
      {children}
    </a>
  ));

  const toggleSidebar = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("sidebar-hide");
  }

  return (
    <div className="header-main px-3 px-lg-4">
      <a onClick={toggleSidebar} href="#" className="menu-link me-3 me-lg-4"><i className="ri-menu-2-fill"></i></a>

      <div className="form-search me-auto">
        <input type="text" className="form-control" placeholder="Search" />
        <i className="ri-search-line"></i>
      </div>

      <Dropdown className="dropdown-skin" >
        <Dropdown.Toggle as={CustomToggle}>
          <i className="ri-settings-3-line"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <label>Skin Mode</label>
          <nav id="skinMode" className="nav nav-skin">
            <a href="" className="nav-link active">Light</a>
            <a href="" className="nav-link">Dark</a>
          </nav>
          <hr />
          <label>Sidebar Skin</label>
          <nav id="sidebarSkin" class="nav nav-skin">
            <a href="" className="nav-link active">Default</a>
            <a href="" className="nav-link">Prime</a>
            <a href="" className="nav-link">Dark</a>
          </nav>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}