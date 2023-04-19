const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories : ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  const itemsCount = item.querySelectorAll("li").length;

  if (title.textContent === "Products") {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${itemsCount}`);
  }

  if (title.textContent === "Animals") {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${itemsCount}`);
  }
  if (title.textContent === "Technologies") {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${itemsCount}`);
  }
});
