import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MysteryPage.css";
import backgroundRoom from "./assets/background-room.jpg";
import characterA from "./assets/character-a.png";
import characterB from "./assets/character-b.png";
import characterC from "./assets/character-c.png";
import characterD from "./assets/character-d.png";

function MysteryPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    if (password === "0138") {
      navigate("/final");
    } else {
      alert("密碼錯誤，再試一次！");
    }
  };

  return (
    <div
      className="mystery-container"
      style={{
        backgroundImage: `url(${backgroundRoom})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="mystery-content">
        <h1>密室逃脫遊戲的謎題</h1>
        <p>在一次週末的聚會中，四個小朋友決定參加一場密室逃脫遊戲...</p>
        <p>請解開每個人手中的謎題，輸入四個數字的密碼，打開密室的門...</p>

        <div className="password-input">
          <input
            type="text"
            placeholder="請輸入密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>確認</button>
        </div>

        <div className="characters">
          <Link to="/personA" className="character-wrapper">
            <p className="character-label-overlay">俊傑:我有一個關於科學的謎題</p>
            <img src={characterA} alt="人物 A" className="character-img character-a-img" />
          </Link>

          <Link to="/personB" className="character-wrapper">
            <p className="character-label-overlay">玉琳:我才不會告訴你真正的數字</p>
            <img src={characterB} alt="人物 B" className="character-img character-b-img" />
          </Link>

          <Link to="/personC" className="character-wrapper">
            <p className="character-label-overlay">欣怡:數學題嗎...</p>
            <img src={characterC} alt="人物 C" className="character-img character-c-img" />
          </Link>

          <Link to="/personD" className="character-wrapper">
            <p className="character-label-overlay">子翔:是英文題...</p>
            <img src={characterD} alt="人物 D" className="character-img character-d-img" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MysteryPage;
