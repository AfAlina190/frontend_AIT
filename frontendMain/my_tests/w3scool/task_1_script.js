"use strict";
// function myFunction() {
//   document.getElementById("demo4").innerHTML = "Paragraph changed.";
// }
// =========================================================================

// function myFunction() {
//   document.getElementById("demo4").classList.toggle("changed");
// }
// ========================================================================
function myFunction() {
  let paragraph = document.getElementById("demo4");
  let newText = "";

  // Проверяем текущий текст абзаца
  if (paragraph.innerHTML === "Paragraph changed.") {
    // Если текущий текст абзаца "Paragraph changed.", меняем его на другой текст
    newText = "New paragraph text.";
  } else {
    // Иначе, если текущий текст абзаца не "Paragraph changed.", меняем его на "Paragraph changed."
    newText = "Paragraph changed.";
  }

  // Устанавливаем новый текст абзаца
  paragraph.innerHTML = newText;
}

// =====================================================================
document.getElementById("demo5").innerHTML = 5 + 6;
// =====================================================================

document.write(5 + 6);
console.log(5 + 6);
// ====================================================================
console.log("Hello World");