import "./header.css";

export default function  Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg"> Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://cdn.pixabay.com/photo/2020/04/19/21/25/field-5065671_960_720.jpg"
                alt=""/>
        </div>
    )
}