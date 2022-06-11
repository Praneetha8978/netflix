import React from 'react'
import "./Nav.css"



function Nav() {
    // const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY > 100){
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);

    return (
        <div className='nav'>
            <img 
                className="nav_logo"
                alt="Netflix Logo"
            />
            <img 
                className="nav_avatar"
                src={require(`./avatar.png`)}
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav