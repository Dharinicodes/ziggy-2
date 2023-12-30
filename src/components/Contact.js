import { Link } from "react-router-dom";
import githublogo from "../images/githublogo.svg";
import linkedinlogo from "../images/linkedinlogo.svg";

const Contact = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <input className="contact" type="text" placeholder="name" />
        <input className="contact" type="text" placeholder="message" />
        <button className="contact">Submit</button>
      </form>

      {/* <ul className="contact-socials">
        <li>
          <Link to="https://github.com/Dharinicodes?tab=repositories">
            <img alt="git-img" className="git-img" src={githublogo} />
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/in/dharini0408">
            <img
              alt="linkedin-img"
              className="linkedin-img"
              src={linkedinlogo}
            />
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Contact;
