const progressBar = document.querySelector(".steps-progressbar");
const steps = progressBar.querySelectorAll("li");

const nextStep = () => {
  let flag = true;
  steps.forEach((step) => {
    if (step.classList.contains("active")) {
      step.classList.remove("active");
      step.classList.add("previous");
    } else if (flag && !step.classList.contains("previous")) {
      step.classList.add("active");
      flag = false;
    }
  });
};

const prevStep = () => {
  let flag = false;
  for (let i = steps.length - 1; i >= 0; i--) {
    if (flag) {
      steps[i].classList.remove("previous");
      steps[i].classList.add("active");
      break;
    } else if (steps[i].classList.contains("active")) {
      steps[i].classList.remove("active");
      flag = true;
    }
  }
};

export { nextStep, prevStep };
