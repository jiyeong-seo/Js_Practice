const listBtn = document.querySelector(".navbar-toggler");
const list = document.querySelector(".list-group");

const handleToggleList = (e) => {
  list.classList.toggle("show");
  //   if (list.classList.contains("show")) {
  //     list.classList.remove("show");
  //   } else {
  //     list.classList.add("show");
  //   }
};

listBtn.addEventListener("click", handleToggleList);
