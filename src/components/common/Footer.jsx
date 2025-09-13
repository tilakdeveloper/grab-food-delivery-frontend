const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()}  Grab Food. All Rights Reserved.</p>
                <div className="footer-links">
                        <a href="/home" className="footer-link">Terms of Service</a>
                        <a href="/home" className="footer-link">Privacy Policy</a>
                        <a href="/home" className="footer-link">Contact US</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;