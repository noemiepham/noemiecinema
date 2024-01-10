import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { green } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <p>Noémie Cinéma</p>
      <p>Formation React-JavaScripts Greta</p>
      <ul>
        <li>
          <Link
            href="https://github.com/noemiepham/noemiecinema"
            rel="noopener"
          >
            <LinkedInIcon style={{ color: green[500], fontSize: 40 }} />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/noemiehuynh/">
            <GitHubIcon style={{ color: green[500], fontSize: 40 }} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
