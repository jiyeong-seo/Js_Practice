const alertBox = document.getElementById("alert-box");
const alert = document.getElementById("alert");
const closeBtn = document.getElementById("closeBtn");
const idBtn = document.getElementById("id");
const pwBtn = document.getElementById("pw");

const handelAlert = (e) => {
  if (e.target === closeBtn) {
    alertBox.style.display = "none";
  } else if (e.target === idBtn) {
    alert.textContent = "아이디를 입력해주세요";
    alertBox.style.display = "block";
  } else if (e.target === pwBtn) {
    alert.textContent = "비밀번호를 입력해주세요";
    alertBox.style.display = "block";
  }
};

closeBtn.addEventListener("click", handelAlert);
idBtn.addEventListener("click", handelAlert);
pwBtn.addEventListener("click", handelAlert);
