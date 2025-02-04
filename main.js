const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

function makeCounter() {
  let count = 0;
  function changeBy(val) {
    count += val;
  }

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return count;
    },
  };
}

makeCounter = makeCounter();

incrementBtn.addEventListener("click", function () {
  makeCounter.increment();
  counter.innerHTML = makeCounter.value();
});

decrementBtn.addEventListener("click", () => {
  makeCounter.decrement();
  counter.innerHTML = makeCounter.value();
});
