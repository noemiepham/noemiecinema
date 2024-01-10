import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { green } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <p>Formation React-JavaScripts Greta</p>
      <ul>
        <li>
          <LinkedInIcon style={{ color: green[500], fontSize: 40 }} />
        </li>
        <li>
          <GitHubIcon style={{ color: green[500], fontSize: 40 }} />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
