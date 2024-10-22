const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//基础的promise版本，存在回调地狱的问题
/*
alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
  alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
    alice3.animate(aliceTumbling, aliceTiming).finished.then(() => {
      console.log("All animations completed");
    });
  });
});
*/

//promise链式调用版本，分别是单行箭头函数，多行箭头函数和带有返回值的箭头函数
/*
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming));

  alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => {
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  })
  .then(() => {
    return alice3.animate(aliceTumbling, aliceTiming);
  });

alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => {
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  })
  .then(() => {
    return alice3.animate(aliceTumbling, aliceTiming).finished;
  })
  .then(() => {
    console.log("All animations completed");
  });
*/

//使用async和await的promise版本
async function runAnimations() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
  console.log("All animations completed");
}

runAnimations();