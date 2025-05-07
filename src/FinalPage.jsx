import React from "react";
import "./FinalPage.css";
import finalBackground from "./assets/background-final.jpg"; // 你可以放一張二樓或成功逃脫的背景圖

function FinalPage() {
  return (
    <div className="final-page" style={{ backgroundImage: `url(${finalBackground})` }}>
      <div className="final-content">
        <h1>成功逃脫！</h1>
        <p>你和朋友們成功破解了所有謎題，逃出了破舊的房間！</p>
        <p>感謝你的勇氣與智慧！</p>
      </div>
    </div>
  );
}

export default FinalPage;
