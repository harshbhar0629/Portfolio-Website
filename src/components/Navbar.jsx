import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles.js";
import { NavLink } from 'react-router-dom';
import { logo, menu, close } from "../assets";
import { px } from 'framer-motion';


const Navbar = () => {

  const [active, setActive] = useState('"')

  return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<img
						src={logo}
            alt="logo"
            width={'36px'}
						className=" object-contain"></img>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar