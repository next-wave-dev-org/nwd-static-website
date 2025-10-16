import {Link} from "react-router-dom";
import NSCADLOGO from '../images/nextwavedev.png';
import {WhiteSpacing} from "./microComponents/navbar/whiteSpacing";
import {Item} from "./microComponents/navbar/item";

const Navbar =()=>{
    return (
        <div className="navbar" style={{
            display: "flex",
            flexDirection: "row",
            height: "95px",
            gap: "1rem",
            backgroundColor: "#004da8",
            alignItems: "center"
        }}>
            <Link to={"/"}>
                <img src={NSCADLOGO} alt="Next Wave Dev Logo" style={{width: "4rem", height: "4rem", marginLeft: "1rem", marginRight: ".5rem"}} />
            </Link>
            <Item name={"Contact"} />
            <WhiteSpacing />
            <Item name={"About"} />
            <WhiteSpacing />
            <Item name={"Developers"} />
            <WhiteSpacing />
            <Item name={"Portfolio"} />
        </div>
    )
}

export default Navbar;