import React from "react";
import { useNavigate } from "react-router-dom";
import "./PersonA.css"; // 等等也一起做CSS
import backgroundA from "./assets/background-a.png"; // 背景（房間）
import characterA from "./assets/character-a.png"; // 人物圖


function PersonA() {
  const navigate = useNavigate();

  const handleSolve = () => {
    alert("你已解開人物 A 的謎題！");
  };

  return (
    <div
    className="person-page"
    style={{
      backgroundImage: `url(${backgroundA})`, // 正確使用背景圖
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      position: "relative",
    }}
  >
    <button
      className="back-button"
      onClick={() => navigate(-1)}
      style={{ position: "absolute", top: 20, left: 20 }}
    >
      返回
    </button>
    <div className="character-container">
      <img src={characterA} alt="人物A" className="character-a-img" />
      <div className="character-text">需要其他人的答案...</div>
    </div>
  
    <div className="person-content">
      <h1>俊傑:我拿到的是科學題
      <p>水的冰點（攝氏溫度）是多少度？...</p>
      </h1>
      
      <input
  type="text"
  placeholder="輸入你的答案"
  className="answer-input"
/>
<button
  className="solve-button"
  onClick={() => {
    const answer = document.querySelector(".answer-input").value;
    if (answer === "0") {
      alert("答對了，回到主畫面！");
      window.location.href = "/";
    } else {
      alert("答案錯誤，請再試一次！");
    }
  }}
>
  確認答案
</button>

    </div>
  </div>
  
  );
}

export default PersonA;
