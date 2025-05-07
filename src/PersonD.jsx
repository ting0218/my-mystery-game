import React from "react";
import "./PersonD.css"; // 等等也一起做CSS
import backgroundD from "./assets/background-d.png"; // 背景（房間）
import characterD from "./assets/character-d.png"; // 人物圖


function PersonD() {
  const handleSolve = () => {
    alert("你已解開人物 子翔 的謎題！");
  };

  return (
    <div
    className="person-page"
    style={{
      backgroundImage: `url(${backgroundD})`, // 正確使用背景圖
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      position: "relative",
    }}
  >
    <div className="character-container">
      <img src={characterD} alt="人物D" className="character-d-img" />
      <div className="character-text">需要其他人的答案...</div>
    </div>
  
    <div className="person-content">
      <h1>子翔:我拿到的是英文題
      <p>How many letters are there in the word "elephant"?</p>
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
    if (answer === "8") {
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

export default PersonD;
