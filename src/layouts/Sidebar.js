import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import userAvatar from "../assets/img/img1.jpg";
import { 
    dashboardMenu, 
    applicationsMenu, 
    pagesMenu, 
    uiElementsMenu 
} from "../data/Menu";

export default class Sidebar extends Component {
    toggleFooterMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest('.sidebar');
        parent.classList.toggle('footer-menu-show');
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-header">
                    <a href="./" className="sidebar-logo">dashport</a>
                </div>
                <PerfectScrollbar className="sidebar-body" ref = {ref => this._scrollBarRef = ref}>
                    <SidebarMenu onUpdateSize = {() => this._scrollBarRef.updateScroll() } />
                </PerfectScrollbar>
                <div className="sidebar-footer">
                    <div className="sidebar-footer-top">
                        <div className="sidebar-footer-thumb">
                            <img src={userAvatar} alt="" />
                        </div>
                        <div className="sidebar-footer-body">
                            <h6><a href="../pages/profile.html">Shaira Diaz</a></h6>
                            <p>Premium Member</p>
                        </div>
                        <a onClick={this.toggleFooterMenu} href="" className="dropdown-link"><i className="ri-arrow-down-s-line"></i></a>
                    </div>
                    <div className="sidebar-footer-menu">
                        <nav className="nav">
                            <a href=""><i className="ri-edit-2-line"></i> Edit Profile</a>
                            <a href=""><i className="ri-profile-line"></i> View Profile</a>
                        </nav>
                        <hr />
                        <nav className="nav">
                            <a href="#"><i className="ri-question-line"></i> Help Center</a>
                            <a href="#"><i className="ri-lock-line"></i> Privacy Settings</a>
                            <a href="#"><i className="ri-user-settings-line"></i> Account Settings</a>
                            <a href="#"><i className="ri-logout-box-r-line"></i> Log Out</a>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

class SidebarMenu extends Component {
    populateMenu = (m) => {
        const menu = m.map((m, key) => {
            let sm;
            if (m.submenu) {
                sm = m.submenu.map((sm, key) => {
                    return (
                        <a href={sm.link} className="nav-sub-link" key={key}>{sm.label}</a>
                    )
                })
            }
    
            return (
                <li key={key} className="nav-item">
                    <a href={(!sm)? m.link : ""} onClick={(sm)? this.toggleSubMenu : ""} className={(sm)? "nav-link has-sub" : "nav-link"}><i className={m.icon}></i> <span>{m.label}</span></a>
                    {m.submenu && <nav className="nav nav-sub">{sm}</nav> }
                </li>
            )
        });
    
        return (
            <ul className="nav nav-sidebar">
                {menu}
            </ul>
        );
    }

    // Toggle menu group
    toggleMenu = (e) => {
        e.preventDefault();
        
        let parent = e.target.closest('.nav-group');
        parent.classList.toggle('show');

        this.props.onUpdateSize();
    }

    // Toggle submenu while closing siblings' submenu
    toggleSubMenu = (e) => {
        e.preventDefault();
        let parent = e.target.closest('.nav-item');
        let node = parent.parentNode.firstChild;

        while (node) {
        if (node !== parent && node.nodeType === Node.ELEMENT_NODE)
            node.classList.remove('show');
            node = node.nextElementSibling || node.nextSibling;
        }

        parent.classList.toggle('show');

        this.props.onUpdateSize();
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav-group show">
                    <a href="#" className="nav-label" onClick={this.toggleMenu}>Dashboard</a>
                    {this.populateMenu(dashboardMenu)}
                </div>
                <div className="nav-group show">
                    <a href="#" className="nav-label" onClick={this.toggleMenu}>Applications</a>
                    {this.populateMenu(applicationsMenu)}
                </div>
                <div className="nav-group show">
                    <a href="#" className="nav-label" onClick={this.toggleMenu}>Pages</a>
                    {this.populateMenu(pagesMenu)}
                </div>
                <div className="nav-group show">
                    <a href="#" className="nav-label" onClick={this.toggleMenu}>UI Elements</a>
                    {this.populateMenu(uiElementsMenu)}
                </div>
            </React.Fragment>
        )
    }
}

// Close sidebar footer menu when clicked outside of it
window.addEventListener("click", function(e){
    console.log(e.target);
    let tar = e.target;
    if (!tar.closest('.sidebar-footer')) {
        this.document.querySelector('.sidebar').classList.remove('footer-menu-show');
    }
});