// Functie om de datum en dag te tonen
function toonDatum() {
  const dagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
  var vandaag = new Date();
  var dagIndex = vandaag.getDay(); // 0 = zondag, 1 = maandag, ..., 6 = zaterdag
  var huidigeDagInDeWeek = dagen[dagIndex];

  var dag = vandaag.getDate();
  var maand = vandaag.toLocaleString("nl-NL", { month: "long" });
  var jaar = vandaag.getFullYear();

  var datumTekst = `${huidigeDagInDeWeek}, ${dag}-${maand}-${jaar}`;
  document.getElementById("huidigeDatum").textContent = datumTekst;

  return huidigeDagInDeWeek; 
}

// Bij laden van de pagina
$(document).ready(function () {
  const huidigeDag = toonDatum(); // Haal dagnaam op via functie

  $("#startknop").click(function () {
    $("#schema tbody tr").each(function () {
      const dagcel = $(this).find("td:first").text().trim().toLowerCase();

      if (dagcel.includes(huidigeDag.toLowerCase())) {
        $(this).fadeIn();

        if (!$(this).find(".statuscel").hasClass("gevuld")) {
          $(this)
            .find(".statuscel")
            .html(`Gedaan ? <input type="radio" name="klaar">`)
            .addClass("gevuld");
        }
      } else {
        $(this).fadeOut();
      }
    });

$("#resetknop").click(function () {
  location.reload();
});

// Zet de radio permanent aan en vergrendel hem
$(this).prop("checked", true).prop("disabled", true);

// De startknop uitschakelen
$("#startknop").prop("disabled", true).css({
  opacity: 0.5,
  cursor: "not-allowed"
});

    $("#todo-knipper").fadeIn().addClass("knipper");
  });

  $(document).on("change", "input[type='radio'][name='klaar']", function () {
    $(".statuscel").each(function () {
      const inhoud = $(this).html();
      $(this).html(inhoud.replace("?", "")).css("color", "green");
    });

    $("#todo-knipper").fadeOut();

    if ($("#bedankje").length === 0) {
      $("<div id='bedankje'>Bedankt en tot morgen!</div>")
        .css({
          color: "red",
          "font-family": "'Brush Script MT', cursive",
          "font-size": "24px",
          "text-align": "center",
          margin: "20px"
        })
        .appendTo("main");
    }
  });
});
