import { useState } from "react";
import "../styles/letters.css";
import BackButton from "../components/BackButton";


export default function Letters() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="letters"
      style={{ backgroundImage: "url(/images/img1.jpg)" }}
    >
      <BackButton />
      <div
        className={`postcard ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {/* FRONT */}
        <div className="postcard-front">
          <p className="stamp">💌</p>
          <h2>To You</h2>
          <p className="hint">Click to open</p>
        </div>

        {/* INSIDE */}
        <div className="postcard-inside">
          <h1>For you, always</h1>
          <p className="from">— Me</p>
          <p className="message">
            No matter where life takes us, I hope you always remember that
            you were never just a part of my life — you were a place I
            belonged to. Ilove you and always will.
          </p>
        </div>
      </div>
    </div>
  );
}
