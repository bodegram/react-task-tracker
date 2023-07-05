import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
             <div className="row">
                <div className="col">
                      <div>
                        <h4>TASK TRACKER</h4>
                      </div>
                </div>
                <div className="col">
                    <div className="footer-title">Quick Links</div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Tasks</li>
                    </ul>
                </div>
                <div className="col">
                    <div className="footer-title">Company</div>
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policies</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                    </ul>
                </div>

             </div>
 
             <div className="footer-bottom">
                <hr />
                <div>Copyright 2023. All Rights Reserved.</div>
             </div>
            </div>
        </footer>
    )
}

export default Footer