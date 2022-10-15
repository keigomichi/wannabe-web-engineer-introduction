let count = 0;
const countElement = document.querySelector("#count");

const countUp = () => {
  count++;
  countElement.innerText = "回数: " + count;
};

const reset = () => {
  count = 0;
  countElement.innerText = "回数: " + count;
}
