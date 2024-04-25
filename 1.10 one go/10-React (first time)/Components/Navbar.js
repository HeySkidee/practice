import Link from 'next/link';
import React from 'react';
import "@/app/globals.css"

const Navbar = () => {
    return ( 
        <>
        <div className='navbar'>
            <h3>
                <Link href="/" style={{ textDecoration: 'none', paddingTop: 2, color: 'black' }}>Skidee</Link>
            </h3>
            <Link href="/About" style={{ textDecoration: 'none', paddingTop: 2, color: 'black' }}>About</Link>
            <Link href="/Blog" style={{ textDecoration: 'none', paddingTop: 2, color: 'black' }}>Blog</Link>
        </div>
        </>
     );
}
 
export default Navbar;