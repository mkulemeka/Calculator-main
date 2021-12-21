/*
    Code is property of Mtendere Kulemeka
    Reference: JavaScript Academy.
*/

$(document).ready(function () {
  //Theme Switch code
  $("#first").click(function () {
    let theme = $("body");
    if (theme.hasClass("theme-2")) {
      theme.removeClass("theme-2");
    } else if (theme.hasClass("theme-3")) {
      theme.removeClass("theme-3");
    }
  });

  $("#second").click(function () {
    let theme = $("body");
    if (theme.hasClass("theme-3")) {
      theme.removeClass("theme-3");
      theme.addClass("theme-2");
    }
    theme.addClass("theme-2");
  });

  $("#third").click(function () {
    let theme = $("body");
    if (theme.hasClass("theme-2")) {
      theme.removeClass("theme-2");
      theme.addClass("theme-3");
    }
    theme.addClass("theme-3");
  });

  //Calculator Calculations
  let display = document.getElementById("display_panel");
  let buttons = Array.from($("button"));

  buttons.map((btn) => {
    btn.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "Reset":
          display.innerText = "";
          break;
        case "Del":
          if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case "=":
          try {
            let expression = new String(display.innerText);
            let result = Function("return " + expression)();
            display.innerText = result;
          } catch {
            display.innerText = "Invalid!";
          }
          break;
        default:
          display.innerText += e.target.innerText;
      }
    });
  });
});
