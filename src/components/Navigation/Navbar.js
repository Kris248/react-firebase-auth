import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { auth } from "../../firebase";


function Home(props) {

  return (
    <nav>
      <div className={styles.navbar}>
        <h5>{props.name ? `You're Logged In as, ${props.name}` : "Please, Login/Signup First!"}</h5>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/" onClick={()=>{auth.signOut()}}>Signout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
