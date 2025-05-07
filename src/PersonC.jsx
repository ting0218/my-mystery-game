import React from "react";
import "./PersonC.css"; // 等等也一起做CSS
import backgroundC from "./assets/background-c.png"; // 背景（房間）
import characterC from "./assets/character-c.png"; // 人物圖


function PersonC() {
  const handleSolve = () => {
    alert("你已解開人物 欣怡 的謎題！");
  };

  return (
    <div
    className="person-page"
    style={{
      backgroundImage: `url(${backgroundC})`, // 正確使用背景圖
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      position: "relative",
    }}
  >
    <div className="character-container">
      <img src={characterC} alt="人物C" className="character-c-img" />
      <div className="character-text">需要其他人的答案...</div>
    </div>
  
    <div className="person-content">
      <h1>欣怡:我拿到的是數學題
      <p>但上面顯示需要加上第一個人的數字</p>
      <p>才是真正的答案</p>
      <p>2xX+1=7 X是多少?</p>
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
    if (answer === "3") {
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

export default PersonC;
