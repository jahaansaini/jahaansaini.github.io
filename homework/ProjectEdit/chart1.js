d3.select("#chart1")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("Graph of traveling trends");
    tooltip.select("#value").html("__ passengers travelled through __ in the year ___");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });
