import { useNavigate } from "react-router-dom";

function NavFoot() {
    const navigate = useNavigate ()
        const navFoot = () => {
            return (
                <nav>
                    <div class="logo">
                        <h4>App Name</h4>
                    </div>
                    <ul class="navlinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Add Blog</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <div class="menubtn">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </nav>
                //<footer className="footer">Resume | Portfolio | Linkedin | <span className='author'>Author : Albert | Elka | Estaben | Yash </span></footer> 
            )
        }
        
    }



export default NavFoot