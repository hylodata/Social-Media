// ------------------------------------------
// GRAPH 1 - Social Media Use and Connections
// ------------------------------------------

// graph dimensions
const margin_graph2 = {
        top: 10,
        right: 30,
        bottom: 200,
        left: 100
    },
    width_graph2 = 900 - margin_graph2.left - margin_graph2.right,
    height_graph2 = 500 - margin_graph2.top - margin_graph2.bottom;

// append the svg object to the body of the page
const svg_graph2 = d3.select("#Graph2")
    .append("svg")
    .attr("width", width_graph2 + margin_graph2.left + margin_graph2.right)
    .attr("height", height_graph2 + margin_graph2.top + margin_graph2.bottom)
    .append("g")
    .attr("transform", `translate(${margin_graph2.left},${margin_graph2.top})`);

// parse the data
d3.csv("./data/sm_use.csv").then(function(data) {

    // X axis
    const x = d3.scaleBand()
        .range([0, width_graph2])
        .domain(data.map(d => d.Method))
        .padding(0.2);
    svg_graph2.append("g")
        .attr("transform", `translate(0, ${height_graph2})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleLinear()
        .domain([0, 180])
        .range([height_graph2, 0]);
    svg_graph2.append("g")
        .call(d3.axisLeft(y));

    // add bars
    svg_graph2.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.Method))
        .attr("y", d => y(d.Value))
        .attr("width", x.bandwidth())
        .attr("height", d => height_graph2 - y(d.Value))
        .attr("fill", "#004c9b")

})

// ------------------------------------------
// GRAPH 2m - Male Gendered
// ------------------------------------------

// graph dimensions
const margin_graph2m = {
        top: 10,
        right: 30,
        bottom: 200,
        left: 100
    },
    width_graph2m = 900 - margin_graph2m.left - margin_graph2m.right,
    height_graph2m = 500 - margin_graph2m.top - margin_graph2m.bottom;

// append the svg object to the body of the page
const svg_graph2m = d3.select("#Graph2m")
    .append("svg")
    .attr("width", width_graph2m + margin_graph2m.left + margin_graph2m.right)
    .attr("height", height_graph2m + margin_graph2m.top + margin_graph2m.bottom)
    .append("g")
    .attr("transform", `translate(${margin_graph2m.left},${margin_graph2m.top})`);

// parse the data
d3.csv("./data/sm_use_gender.csv").then(function(data) {

    // X axis
    const x = d3.scaleBand()
        .range([0, width_graph2m])
        .domain(data.map(d => d.PLAT))
        .padding(0.2);
    svg_graph2m.append("g")
        .attr("transform", `translate(0, ${height_graph2m})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleLinear()
        .domain([0, 90])
        .range([height_graph2m, 0]);
    svg_graph2m.append("g")
        .call(d3.axisLeft(y));

    // add bars
    svg_graph2m.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.PLAT))
        .attr("y", d => y(d.Male))
        .attr("width", x.bandwidth())
        .attr("height", d => height_graph2m - y(d.Male))
        .attr("fill", "#00a9ef")

})

// ------------------------------------------
// GRAPH 2f - Female Gendered
// ------------------------------------------

// graph dimensions
const margin_graph2f = {
        top: 10,
        right: 30,
        bottom: 200,
        left: 100
    },
    width_graph2f = 900 - margin_graph2f.left - margin_graph2f.right,
    height_graph2f = 500 - margin_graph2f.top - margin_graph2f.bottom;

// append the svg object to the body of the page
const svg_graph2f = d3.select("#Graph2f")
    .append("svg")
    .attr("width", width_graph2f + margin_graph2f.left + margin_graph2f.right)
    .attr("height", height_graph2f + margin_graph2f.top + margin_graph2f.bottom)
    .append("g")
    .attr("transform", `translate(${margin_graph2f.left},${margin_graph2f.top})`);

// parse the data
d3.csv("./data/sm_use_gender.csv").then(function(data) {

    // X axis
    const x = d3.scaleBand()
        .range([0, width_graph2f])
        .domain(data.map(d => d.PLAT))
        .padding(0.2);
    svg_graph2f.append("g")
        .attr("transform", `translate(0, ${height_graph2f})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleLinear()
        .domain([0, 90])
        .range([height_graph2f, 0]);
    svg_graph2f.append("g")
        .call(d3.axisLeft(y));

    // add bars
    svg_graph2f.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.PLAT))
        .attr("y", d => y(d.Female))
        .attr("width", x.bandwidth())
        .attr("height", d => height_graph2f - y(d.Female))
        .attr("fill", "#ffa300")

})

// ----------------
// GRAPH 5
// ----------------

// set the dimensions and margins of the graph
const margin_graph5 = {
        top: 30,
        right: 30,
        bottom: 300,
        left: 140
    },
    width_graph5 = 900 - margin_graph5.left - margin_graph5.right,
    height_graph5 = 600 - margin_graph5.top - margin_graph5.bottom;

// append the svg object to the body of the page
const svg_graph5 = d3.select("#Graph5")
    .append("svg")
    .attr("width", width_graph5 + margin_graph5.left + margin_graph5.right)
    .attr("height", height_graph5 + margin_graph5.top + margin_graph5.bottom)
    .append("g")
    .attr("transform", `translate(${margin_graph5.left},${margin_graph5.top})`);

// Parse the Data
d3.csv("./data/Freq-Graph5.csv").then(function(data) {

    // X axis
    const x = d3.scaleBand()
        .range([0, width_graph5])
        .domain(data.map(d => d.Parameter))
        .padding(0.2);
    svg_graph5.append("g")
        .attr("transform", `translate(0, ${height_graph5})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, 60])
        .range([height_graph5, 0]);
    svg_graph5.append("g")
        .call(d3.axisLeft(y));

    var color = d3.scaleOrdinal([`#002d72`, `#0077c8`, `#5bc2f4`]);

    // Bars
    svg_graph5.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.Parameter))
        .attr("y", d => y(d.Percent))
        .attr("width", x.bandwidth())
        .attr("height", d => height_graph5 - y(d.Percent))
        .attr("fill", function(d, i) {
            return color(i);
        })
    // .attr("fill", "#0099ff")

})

// ----------------
// GRAPH 6
// ----------------

// set the dimensions and margins of the graph
const margin_graph6 = {
        top: 10,
        right: 30,
        bottom: 200,
        left: 100
    },
    width_graph6 = 900 - margin_graph6.left - margin_graph6.right,
    height_graph6 = 500 - margin_graph6.top - margin_graph6.bottom;

// append the svg object to the body of the page
const svg_graph6 = d3.select("#Graph6")
    .append("svg")
    .attr("width", width_graph6 + margin_graph6.left + margin_graph6.right)
    .attr("height", height_graph6 + margin_graph6.top + margin_graph6.bottom)
    .append("g")
    .attr("transform", `translate(${margin_graph6.left},${margin_graph6.top})`);

// Initialize the X axis
const x = d3.scaleBand()
    .range([0, width_graph6])
    .padding(0.2);
const xAxis = svg_graph6.append("g")
      .attr("transform", `translate(0,${height_graph6})`);

// Initialize the Y axis
const y = d3.scaleLinear()
    .range([height_graph6, 0]);
const yAxis = svg_graph6.append("g")
    .attr("class", "myYaxis");


// A function that create / update the plot for a given variable:
function update(selectedVar) {

    // Parse the Data
    d3.csv("./data/Graph6.csv").then(function(data) {

        // X axis
        x.domain(data.map(d => d.SM));
        xAxis.transition().duration(1000).call(d3.axisBottom(x))
	        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

        // Add Y axis
        y.domain([0, d3.max(data, d => +d[selectedVar])]);
        yAxis.transition().duration(1000).call(d3.axisLeft(y));

        // variable u: map data to existing bars
        const u = svg_graph6.selectAll("rect")
            .data(data)

        // update bars
        u.join("rect")
            .transition()
            .duration(1000)
            .attr("x", d => x(d.SM))
            .attr("y", d => y(d[selectedVar]))
            .attr("width", x.bandwidth())
            .attr("height", d => height_graph6 - y(d[selectedVar]))
            .attr("fill", "#ffdc00")
    })

}

// Initialize plot
update('Occupational Licencing requirements')


// ----------------
// GRAPH 3
// ----------------

// set the dimensions and margins of the graph
const margin_graph3 = {
        top: 30,
        right: 30,
        bottom: 500,
        left: 140
    },
    width_graph3 = 900 - margin_graph3.left - margin_graph3.right,
    height_graph3 = 800 - margin_graph3.top - margin_graph3.bottom;

// append the svg object to the body of the page
const svg_graph3 = d3.select("#Graph3")
    .append("svg")
    .attr("width", width_graph3 + margin_graph3.left + margin_graph3.right)
    .attr("height", height_graph3 + margin_graph3.top + margin_graph3.bottom)
    .append("g")
    .attr("transform", `translate(${margin_graph3.left},${margin_graph3.top})`);

// Parse the Data
d3.csv("./data/Experience-Graph3.csv").then(function(data) {

    // X axis
    const x = d3.scaleBand()
        .range([0, width_graph3])
        .domain(data.map(d => d.Experience))
        .padding(0.2);
    svg_graph3.append("g")
        .attr("transform", `translate(0, ${height_graph3})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, 180])
        .range([height_graph3, 0]);
    svg_graph3.append("g")
        .call(d3.axisLeft(y));

    // Bars
    svg_graph3.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.Experience))
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => height_graph3 - y(d.value))
        .attr("fill", "#ffdc00")

})

// ----------------
// GRAPH 3 - TreeMap
// ----------------

    // set the dimensions and margins of the graph
    const margin_G3treemap = {top: 10, right: 50, bottom: 200, left: 22},
    width_G3treemap = 900 - margin_G3treemap.left - margin_G3treemap.right,
    height_G3treemap = 500 - margin_G3treemap.top - margin_G3treemap.bottom;
  
  // append the svg object to the body of the page
  const svg_G3treemap = d3.select("#Graph3_Treemap")
  .append("svg")
    .attr("width", width_G3treemap + margin_G3treemap.left + margin_G3treemap.right)
    .attr("height", height_G3treemap + margin_G3treemap.top + margin_G3treemap.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin_G3treemap.left}, ${margin_G3treemap.top})`);

  // Read data
  d3.csv('./data/Experience-Graph3-TreeMap.csv').then(function(data) {
  
    // stratify the data: reformatting for d3.js
    const root = d3.stratify()
      .id(function(d) { return d.Experience; })   // Name of the entity (column name is name in csv)
      .parentId(function(d) { return d.parent; })   // Name of the parent (column name is parent in csv)
      (data);
    root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity
  
    // Then d3.treemap computes the position of each element of the hierarchy
    // The coordinates are added to the root object above
    d3.treemap()
      .size([width_G3treemap, height_G3treemap])
      .padding(6)
      (root)
  
    // use this information to add rectangles:
    svg_G3treemap
      .selectAll("rect")
      .data(root.leaves())
      .join("rect")
        .attr('x', function (d) { return d.x0; })
        .attr('y', function (d) { return d.y0; })
        .attr('width', function (d) { return d.x1 - d.x0; })
        .attr('height', function (d) { return d.y1 - d.y0; })
          .style("stroke", "black")
       .style("fill", "#69b3a2");
  
    // and to add the text labels
    svg_G3treemap
      .selectAll("text")
      .data(root.leaves())
      .join("text")
        .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
        .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
        .text(function(d){ return d.data.Experience})
        .attr("font-size", "15px")
        .attr("fill", "white")
  })

// ----------------
// GRAPH 4 - Employment  
// ----------------

// set the dimensions and margins of graph 2
const margin_G4Employment = {
    top: 10,
    right: 30,
    bottom: 300,
    left: 100
  },
  width_G4Employment = 900 - margin_G4Employment.left - margin_G4Employment.right,
  height_G4Employment = 600 - margin_G4Employment.top - margin_G4Employment.bottom;
  
  // append the svg object to the body of the page
  const svg_G4Employment = d3.select("#Graph4_Employment")
  .append("svg")
  .attr("width", width_G4Employment + margin_G4Employment.left + margin_G4Employment.right)
  .attr("height", height_G4Employment + margin_G4Employment.top + margin_G4Employment.bottom)
  .append("g")
  .attr("transform", `translate(${margin_G4Employment.left},${margin_G4Employment.top})`);
  
  // Parse the Data
  d3.csv("../data/Employment-Graph4.csv").then(function(data) {
  
  // List of subgroups = header of the csv files = soil condition here
  const subgroups_Employment = data.columns.slice(1)
  
  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups_Employment = data.map(d => d.G)
  
  // Add X axis
  const x = d3.scaleBand()
    .domain(groups_Employment)
    .range([0, width_G4Employment])
    .padding([0.2])
  svg_G4Employment.append("g")
    .attr("transform", `translate(0, ${height_G4Employment})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height_G4Employment, 0]);
  svg_G4Employment.append("g")
    .call(d3.axisLeft(y));
  
  // color palette = one color per subgroup
  const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])
  
  //stack the data? --> stack per subgroup
  const stackedData = d3.stack()
    .keys(subgroups_Employment)
    (data)
  
  // Highlight a specific subgroup when hovered
  // Show the bars
  svg_G4Employment.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", d => color(d.key))
    .attr("class", d => "myRect " + d.key) // Add a class to each subgroup: their name
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data(d => d)
    .join("rect")
    .attr("x", d => x(d.data.G))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .attr("stroke", "grey")
    .on("mouseover", function(event, d) { // What happens when user hover a bar
  
        // what subgroup are we hovering?
        const subGroupName_Employment = d3.select(this.parentNode).datum().key
  
        // Reduce opacity of all rect to 0.2
        d3.selectAll(".myRect").style("opacity", 0.2)
  
        // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
        d3.selectAll("." + subGroupName_Employment).style("opacity", 1)
    })
    .on("mouseleave", function(event, d) { // When user do not hover anymore
  
        // Back to normal opacity: 1
        d3.selectAll(".myRect")
            .style("opacity", 1)
    })
  
  })



// ----------------
// GRAPH 4 - precarity 
// ----------------

// set the dimensions and margins of graph 2
const margin_G4Precarity = {
    top: 10,
    right: 30,
    bottom: 300,
    left: 100
},
width_G4Precarity = 900 - margin_G4Precarity.left - margin_G4Precarity.right,
height_G4Precarity = 600 - margin_G4Precarity.top - margin_G4Precarity.bottom;

// append the svg object to the body of the page
const svg_G4Precarity = d3.select("#Graph4_Precarity")
.append("svg")
.attr("width", width_G4Precarity + margin_G4Precarity.left + margin_G4Precarity.right)
.attr("height", height_G4Precarity + margin_G4Precarity.top + margin_G4Precarity.bottom)
.append("g")
.attr("transform", `translate(${margin_G4Precarity.left},${margin_G4Precarity.top})`);

// Parse the Data
d3.csv("../data/Precarity-Graph4.csv").then(function(data) {

// List of subgroups = header of the csv files = soil condition here
const subgroups_precarity = data.columns.slice(1)

// List of groups = species here = value of the first column called group -> I show them on the X axis
const groups_precarity = data.map(d => d.G1)

// Add X axis
const x = d3.scaleBand()
    .domain(groups_precarity)
    .range([0, width_G4Precarity])
    .padding([0.2])
svg_G4Precarity.append("g")
    .attr("transform", `translate(0, ${height_G4Precarity})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height_G4Precarity, 0]);
svg_G4Precarity.append("g")
    .call(d3.axisLeft(y));

// color palette = one color per subgroup
const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//stack the data? --> stack per subgroup
const stackedData = d3.stack()
    .keys(subgroups_precarity)
    (data)

// Highlight a specific subgroup when hovered
// Show the bars
svg_G4Precarity.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", d => color(d.key))
    .attr("class", d => "myRect " + d.key) // Add a class to each subgroup: their name
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data(d => d)
    .join("rect")
    .attr("x", d => x(d.data.G1))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .attr("stroke", "grey")
    .on("mouseover", function(event, d) { // What happens when user hover a bar

        // what subgroup are we hovering?
        const subGroupName_precarity = d3.select(this.parentNode).datum().key

        // Reduce opacity of all rect to 0.2
        d3.selectAll(".myRect").style("opacity", 0.2)

        // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
        d3.selectAll("." + subGroupName_precarity).style("opacity", 1)
    })
    .on("mouseleave", function(event, d) { // When user do not hover anymore

        // Back to normal opacity: 1
        d3.selectAll(".myRect")
            .style("opacity", 1)
    })

})

// ----------------
// GRAPH 4 - JobMatch
// ----------------

// set the dimensions and margins of the graph
const margin_G4jobmatch = {
    top: 10,
    right: 30,
    bottom: 200,
    left: 100
},
width_G4jobmatch = 900 - margin_G4jobmatch.left - margin_G4jobmatch.right,
height_G4jobmatch = 500 - margin_G4jobmatch.top - margin_G4jobmatch.bottom;

// append the svg object to the body of the page
const svg_G4jobmatch = d3.select("#Graph4_JobMatch")
.append("svg")
.attr("width", width_G4jobmatch + margin_G4jobmatch.left + margin_G4jobmatch.right)
.attr("height", height_G4jobmatch + margin_G4jobmatch.top + margin_G4jobmatch.bottom)
.append("g")
.attr("transform", `translate(${margin_G4jobmatch.left},${margin_G4jobmatch.top})`);

// Parse the Data
d3.csv("../data/JobMatch-Graph4.csv").then(function(data) {

// List of subgroups = header of the csv files = soil condition here
const subgroups_jobmatch = data.columns.slice(1)

// List of groups = species here = value of the first column called group -> I show them on the X axis
const groups_jobmatch = data.map(d => d.G2)

// Add X axis
const x = d3.scaleBand()
    .domain(groups_jobmatch)
    .range([0, width_G4jobmatch])
    .padding([0.2])
svg_G4jobmatch.append("g")
    .attr("transform", `translate(0, ${height_G4jobmatch})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height_G4jobmatch, 0]);
svg_G4jobmatch.append("g")
    .call(d3.axisLeft(y));

// color palette = one color per subgroup
const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//stack the data? --> stack per subgroup
const stackedData = d3.stack()
    .keys(subgroups_jobmatch)
    (data)




// ----------------
// Highlight a specific subgroup when hovered
// ----------------

// Show the bars
svg_G4jobmatch.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", d => color(d.key))
    .attr("class", d => "myRectJ " + d.key) // Add a class to each subgroup: their name
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data(d => d)
    .join("rect")
    .attr("x", d => x(d.data.G2))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .attr("stroke", "grey")
    .on("mouseover", function(event, d) { // What happens when user hover a bar

        // what subgroup are we hovering?
        const subGroupName_jobmatch = d3.select(this.parentNode).datum().key

        // Reduce opacity of all rect to 0.2
        d3.selectAll(".myRectJ").style("opacity", 0.2)

        // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
        d3.selectAll("." + subGroupName_jobmatch).style("opacity", 1)
    })
    .on("mouseleave", function(event, d) { // When user do not hover anymore

        // Back to normal opacity: 1
        d3.selectAll(".myRectJ")
            .style("opacity", 1)
    })

})

// ----------------
// GRAPH 4 - Earnings
// ----------------

// set the dimensions and margins of the graph
const margin_G4earnings = {
    top: 10,
    right: 30,
    bottom: 200,
    left: 100
},
width_G4earnings = 900 - margin_G4earnings.left - margin_G4earnings.right,
height_G4earnings = 500 - margin_G4earnings.top - margin_G4earnings.bottom;

// append the svg object to the body of the page
const svg_G4earnings = d3.select("#Graph4_Earnings")
.append("svg")
.attr("width", width_G4earnings + margin_G4earnings.left + margin_G4earnings.right)
.attr("height", height_G4earnings + margin_G4earnings.top + margin_G4earnings.bottom)
.append("g")
.attr("transform", `translate(${margin_G4earnings.left},${margin_G4earnings.top})`);

// Parse the Data
d3.csv("../data/Earnings-Graph4.csv").then(function(data) {

// List of subgroups = header of the csv files = soil condition here
const subgroups_earnings = data.columns.slice(1)

// List of groups = species here = value of the first column called group -> I show them on the X axis
const groups_earnings = data.map(d => d.G3)

// Add X axis
const x = d3.scaleBand()
    .domain(groups_earnings)
    .range([0, width_G4earnings])
    .padding([0.2])
svg_G4earnings.append("g")
    .attr("transform", `translate(0, ${height_G4earnings})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height_G4earnings, 0]);
svg_G4earnings.append("g")
    .call(d3.axisLeft(y));

// color palette = one color per subgroup
const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//stack the data? --> stack per subgroup
const stackedData = d3.stack()
    .keys(subgroups_earnings)
    (data)


// ----------------
// Highlight a specific subgroup when hovered
// ----------------

// Show the bars
svg_G4earnings.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", d => color(d.key))
    .attr("class", d => "myRectE " + d.key) // Add a class to each subgroup: their name
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data(d => d)
    .join("rect")
    .attr("x", d => x(d.data.G3))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .attr("stroke", "grey")
    .on("mouseover", function(event, d) { // What happens when user hover a bar

        // what subgroup are we hovering?
        const subGroupName_earnings = d3.select(this.parentNode).datum().key

        // Reduce opacity of all rect to 0.2
        d3.selectAll(".myRectE").style("opacity", 0.2)

        // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
        d3.selectAll("." + subGroupName_earnings).style("opacity", 1)
    })
    .on("mouseleave", function(event, d) { // When user do not hover anymore

        // Back to normal opacity: 1
        d3.selectAll(".myRectE")
            .style("opacity", 1)
    })

})