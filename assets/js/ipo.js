function showNextForm() {
  document.getElementById("ipo-registration").style.display = "none";
  document.getElementById("company-legislation").style.display = "block";
}

function submitForm() {
  document.getElementById("company-legislation").style.display = "none";
  document.getElementById("register-process").style.display = "block";

  // Hide the main title and subtitle
  document.querySelector(".ipo-container > h1").style.display = "none";
  document.querySelector(".ipo-container > .subtitle").style.display = "none";

  const steps = document.querySelectorAll(".step");
  const progressBar = document.querySelector(".process-steps::after");

  // Reset all steps
  steps.forEach((step) => step.classList.remove("active"));

  // Animate steps sequence
  let currentStep = 0;

  function animateNextStep() {
    if (currentStep < steps.length) {
      // Activate current step
      steps[currentStep].classList.add("active");

      // Update progress bar
      progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;

      // Show checkmark and hide number
      const stepNumber = steps[currentStep].querySelector(".step-number");
      stepNumber.querySelector("span").style.display = "none";
      stepNumber.querySelector("i").style.display = "block";

      currentStep++;

      if (currentStep < steps.length) {
        setTimeout(animateNextStep, 1000); // 1 second between steps
      } else {
        // After all steps complete, show welcome screen
        setTimeout(() => {
          document.getElementById("register-process").style.display = "none";
          document.getElementById("welcome-screen").style.display = "block";
        }, 1000);
      }
    }
  }

  // Start the animation sequence
  setTimeout(animateNextStep, 500);
}
