const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    hideAllContents();
    hideAllItems();
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
