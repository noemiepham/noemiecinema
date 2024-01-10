import "./footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <LinkedInIcon />
        </li>
        <li>Github</li>
        <li>Youtube</li>
      </ul>
    </div>
  );
}

export default Footer;
