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
            </ul>
        </nav>
    );
}