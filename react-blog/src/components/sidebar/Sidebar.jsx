import axios from "axios";
import {useEffect, useState} from "react"
import "./sidebar.css";
import {Link} from "react-router-dom"

export default function  Sidebar(){

    const[cats, setCats] = useState([]);

    useEffect( ()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className=""
                    src="https://cdn.pixabay.com/photo/2017/08/07/20/21/still-2607434_960_720.jpg"
                    alt=""
                />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    {cats.map( (c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}