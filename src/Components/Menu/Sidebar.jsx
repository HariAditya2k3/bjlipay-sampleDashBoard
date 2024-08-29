import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { RiDashboard3Fill } from "react-icons/ri";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Sidebar = ({ children, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <RiDashboard3Fill />
        },
        {
            path: "/transaction",
            name: "Transaction Report",
            icon: <GrTransaction />
        },
        // {
        //     path: "/Settlement",
        //     name: "Settlement Report",
        //     icon: <HiDocumentReport />
        // },
        {
            path: "/Download",
            name: "Download Center",
            icon: <FaDownload />
        },
        
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Bijlipay</h1>
                    <div style={{ marginLeft: isOpen ? "100px" : "1px" }} className="bars">
                        <BsFillMenuButtonWideFill onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
                {/* Logout button */}
                <div className="link" onClick={handleLogout}>
                    <div className="icon"><FaSignOutAlt /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Logout</div>
                    
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
