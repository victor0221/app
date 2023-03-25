import LinkItem from "./LinkItem";
import "./Styles/StyleNav.css"
export default function Nav(){
    return(
        <nav>
            <ul>
                <LinkItem to="app/AboutMe">
                    About Me
                </LinkItem>
                <LinkItem to="app/Experience">
                    Experience
                </LinkItem>
                <LinkItem to="app/Projects">
                    Projects
                </LinkItem>
                <LinkItem to="app/VersionLog">
                    Version Log
                </LinkItem>
                <LinkItem to="app/Form">
                    Form
                </LinkItem>
                <LinkItem to="app/Notes">
                    Notes
                </LinkItem>
                <LinkItem to="app/ToDo">
                    To Do
                </LinkItem>
                <LinkItem to="app/Search">
                    Search Bar 
                </LinkItem>
                <LinkItem to="app/Prod">
                    Prod Example 
                </LinkItem>
                <LinkItem to="app/Basket">
                    Basket 
                </LinkItem>
            </ul>
        </nav>
    );
}