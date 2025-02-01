import './menu.scss'

function Menu({menu, setMenu}){
    return (
        <div className={"menu " + (menu && "active" )}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu