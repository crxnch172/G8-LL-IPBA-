const questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      const allAnswers = document.getElementsByClassName("answer");
      for (let j = 0; j < allAnswers.length; j++) {
        allAnswers[j].style.maxHeight = null;
        allAnswers[j].previousElementSibling.classList.remove("active");
      }
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

// Selecting all sections with class of section
const sections = document.querySelectorAll(".section");

// On click event for each section
sections.forEach((section) => {
  section.addEventListener("click", () => {
    // remove active class from all another section
    // and add it to the selected section
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    section.classList.add("active");
  });
});

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {

        removeActiveClasses();
        
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
