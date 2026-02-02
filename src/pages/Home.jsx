import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: "url(/images/img1.jpg)" }}
    >
      <div className="home-card">

        <div className="photo-frame">
          <img src="/images/img2.jpg" alt="us" />
        </div>

        <div className="home-text">
          <h1>Happy Galentine Baby🩵</h1>
          <p
  style={{
    fontFamily: "Pacifico, cursive",
    fontSize: "18px",
    color: "#2c2c2c",
  }}
>
  No matter where life takes us,  
  this will always be home.
</p>



          <div className="home-buttons">
            <Link to="/galentine">Next→ 💌</Link>
            <Link to="/letters">Letter Bank</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
