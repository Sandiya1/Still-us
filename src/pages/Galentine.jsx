import { useState } from "react";
import "../styles/galentine.css";
import BackButton from "../components/BackButton";


export default function Galentine() {
  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({ top: "58%", left: "55%" });

  const moveNo = () => {
    const top = Math.random() * 60 + 20;
    const left = Math.random() * 60 + 20;
    setPos({ top: `${top}%`, left: `${left}%` });
  };

  return (
    <div
      className="galentine"
      style={{ backgroundImage: "url(/images/img1.jpg)" }}
    >
      <div className="hearts" />
      <BackButton />

      {!yes ? (
        <div className="gal-card">
          <p className="gal-sub">Just Asking…</p>
          <h1>Will you be my Galentine? 💙</h1>

          <div className="gal-buttons">
            <button className="yes-btn" onClick={() => setYes(true)}>
              YES 💘
            </button>

            <button
              className="no-btn"
              style={{ top: pos.top, left: pos.left }}
              onMouseEnter={moveNo}
              onTouchStart={moveNo}
            >
              NO 🙄
            </button>
          </div>
        </div>
      ) : (
        <div className="gal-card success">
          <h2>I Already Know.But, Yeah I Love You 🥹🩵</h2>
        </div>
      )}
    </div>
  );
}
