import "./topbar.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Topbar({ menu, setMenu }) {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <h1 className="logo">Cars.</h1>
                    <div className="icons">
                        <FacebookOutlinedIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>
                </div>
                <div className="right" onClick={() => setMenu(!menu)}>
                    {menu ? (
                        <CloseIcon className="icon" />
                    ) : (
                        <MenuIcon className="icon" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Topbar;
