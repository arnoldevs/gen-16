$(() => {
  function getHero(id) {
    let base_url = "https://www.superheroapi.com/api.php/4905856019427443";
    $.ajax({
      type: "GET",
      url: `${base_url}/${id}`,
      dataType: "json",
      success: function (data) {
        printHero(data);
      },
      error: function (error) {
        alert(`Error ${error}. Conexión sin éxito a la API`);
      },
    });
  }
  function printHero(data) {
    $("#heroInfo").removeClass("d-none");
    $("#arrow").removeClass("d-none");
    $("#heroImage").attr("src", data.image.url);
    $("#heroName").text(data.name);
    $("#heroPublisher").text(data.biography.publisher);
    $("#heroWork").text(data.work.occupation);
    $("#heroConnections").text(data.connections["group-affiliation"]);

    $("#firstAppearance").text(data.biography["first-appearance"]);
    $("#height").text(
      `${data.appearance.height[0]} - ${data.appearance.height[1]}`,
    );
    $("#weight").text(
      `${data.appearance.weight[0]} - ${data.appearance.weight[1]}`,
    );

    $("#aliases").text(data.biography.aliases.join(" "));

    let powerstatsData = [];
    for (const statName in data.powerstats) {
      // Verificar si la propiedad pertenece al objeto actual (evita propiedades heredadas)
      if (data.powerstats.hasOwnProperty(statName)) {
        let value = data.powerstats[statName];
        powerstatsData.push({ label: statName, y: parseInt(value, 10) });
      }
    }
    var options = {
      // title: {
      //   text: `Estadísticas de poder para ${data.name}`,
      // },
      data: [
        {
          type: "pie",
          startAngle: 45,
          showInLegend: "true",
          legendText: "{label}",
          indexLabel: "{label} ({y})",
          yValueFormatString: "#,##0.#" % "",
          dataPoints: powerstatsData,
        },
      ],
    };
    $("#chartTitle").text(`Estadísticas de poder para ${data.name}`);
    $("#chartContainer").CanvasJSChart(options);
  }

  $("#heroForm").submit((event) => {
    event.preventDefault();
    let heroId = $("#inputId").val().trim();

    if (isNaN(heroId) || heroId <= 0) {
      $("#alert").removeClass("d-none");
      $("#alert").addClass("alert-pulsing");
    } else {
      $("#alert").addClass("d-none");
      $("#alert").removeClass("alert-pulsing");
      getHero(heroId);
    }
  });
});
