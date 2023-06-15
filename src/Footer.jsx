import React from "react";
const Footer = () =>{
    const Footerdate = new Date().getFullYear();
    return(
        <>
        <footer className="footer">
        <hi>Copyright © {Footerdate}</hi>
       
        </footer>

        </>
    );

}

export default Footer;