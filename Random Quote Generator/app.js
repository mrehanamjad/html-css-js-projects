
let content = document.querySelector(".content");
let author = document.querySelector(".author");
let btn = document.querySelector("button");

const url =
  "https://famous-quotes4.p.rapidapi.com/random?category=success";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key":
      "3692888d4cmsh315053870445bb4p11ba46jsn9a498b532447",
    "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  },
};

async function getQuotes() {
  content.innerHTML =`<span>❝</span> Updating....<span>❞</span>`;
      author.innerHTML = `<p class="author">Updating...</p>`;
      btn.disabled=true;
      btn.innerText = `Loading..` ;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
  content.innerHTML =`<span>❝</span> ${data[0].text} <span>❞</span>`
      author.innerHTML = `<p class="author">~${data[0].author}</p>`
      btn.disabled=false;
      btn.innerText = `Get A New Quote` ;

  } catch (error) {
    console.error(error);
  }
}
getQuotes()