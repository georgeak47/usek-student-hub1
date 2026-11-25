const answers = { q1: "a", q2: "b", q3: "c", q4: "a", q5: "b" };

document.getElementById("submit").addEventListener("click", function () {
  let score = 0;
  for (const q in answers) {
    const chosen = document.querySelector('input[name="' + q + '"]:checked');
    if (chosen && chosen.value === answers[q]) score++;
  }
  document.getElementById("result").textContent = "You scored " + score + " out of 5";
});