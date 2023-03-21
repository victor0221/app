import LinkItem from "./LinkItem";
import "./Styles/StyleNav.css"
export default function Nav(){
    return(
        <nav>
            <ul>
                <LinkItem to="/AboutMe">
                    About Me
                </LinkItem>
                <LinkItem to="/Experience">
                    Experience
                </LinkItem>
                <LinkItem to="/Projects">
                    Projects
                </LinkItem>
                <LinkItem to="/VersionLog">
                    Version Log
                </LinkItem>
            </ul>
        </nav>
    );
}