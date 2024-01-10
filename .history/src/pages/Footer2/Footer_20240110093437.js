import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { green } from "@material-ui/core/colors";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <LinkedInIcon style={{ color: green[500], fontSize: 40 }} />
        </li>
        <li>Github</li>
        <li>Youtube</li>
      </ul>
    </div>
  );
}

export default Footer;
