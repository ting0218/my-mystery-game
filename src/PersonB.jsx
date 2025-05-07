import React from "react";
import "./PersonB.css"; // 等等也一起做CSS
import backgroundB from "./assets/background-b.png"; // 背景（房間）
import characterB from "./assets/character-b.png"; // 人物圖


function PersonB() {
  const handleSolve = () => {
    alert("你已解開人物 B 的謎題！");
  };

  return (
    <div
    className="person-page"
    style={{
      backgroundImage: `url(${backgroundB})`, // 正確使用背景圖
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      position: "relative",
    }}
  >
    <div className="character-container">
      <img src={characterB} alt="人物B" className="character-b-img" />
      <div className="character-text">需要其他人的答案...</div>
    </div>
  
    <div className="person-content">
      <h1>玉琳:我拿到的是 國文題
      <p>請填入適當數字成為正確成語：</p>
      <p>「＿＿心＿＿意」（形容專心一致）...</p>
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
    if (answer === "1") {
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

export default PersonB;
