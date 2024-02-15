let container = document.querySelector(".img-container");

function getPhoto() {
  let x = Math.floor(Math.random() * 8) + 9;
  for (let i = 0; i <= x; i++) {
    let n = Math.floor(Math.random() * 1001);
    container.innerHTML =
      container.innerHTML +
      `<img src="https://picsum.photos/id/${n}/300" alt="">`;
  }
}