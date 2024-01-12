import "./footer.css";
/* import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { green } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "@material-ui/core";
 */
function Footer() {
  return (
    <div className="footer">
      <p>Noémie HUYNH</p>
      <p>Formation React-JavaScripts Greta</p>
      <ul>
        <li>
          <link
            href="https://github.com/noemiepham/noemiecinema"
            rel="noopener"
            target="_blank"
          />

       
        </li>
        <li>
          <link
            href="https://www.linkedin.com/in/noemiehuynh/"
            rel="noopener"
            target="_blank"
          />

        </li>
      </ul>
    </div>
  );
}

export default Footer;
