// ----------------
// GRAPH 4 Employment
// ----------------

// set the dimensions and margins of graph 4a
const margin_G4Employment = {
        top: 10,
        right: 30,
        bottom: 20,
        left: 50
    },
    width_G4Employment = 900 - margin_G4Employment.left - margin_G4Employment.right,
    height_G4Employment = 400 - margin_G4Employment.top - margin_G4Employment.bottom;

// append the svg object to the body of the page
const svgG4Employment = d3.select("#Graph4_Employment")
    .append("svg")
    .attr("width", width_G4Employment + margin_G4Employment.left + margin_G4Employment.right)
    .attr("height", height_G4Employment + margin_G4Employment.top + margin_G4Employment.bottom)
    .append("g")
    .attr("transform", `translate(${margin_G4Employment.left},${margin_G4Employment.top})`);

// Parse the Data
d3.csv("./data/Employment-Graph4.csv").then(function(data) {
    // List of subgroups = header of the csv files
    const subgroups = data.columns.slice(1)
    // List of groups = species here = value of the first column called group -> show them on the X axis
    const groups = data.map(d => d.group)

    // Add X axis
    const x = d3.scaleBand()
        .domain(groups)
        .range([0, width_G4Employment])
        .padding([0.2])
    svgG4Employment.append("g")
        .attr("transform", `translate(0, ${height_G4Employment})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height_G4Employment, 0]);
    svgG4Employment.append("g")
        .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(d3.schemeSet2);

    //stack the data? --> stack per subgroup
    const stackedData = d3.stack()
        .keys(subgroups)
        (data)

    // Highlight a specific subgroup when hovered
    // Show the bars
    svgG4Employment.append("g")
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
        .attr("x", d => x(d.data.group))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth())
        .attr("stroke", "grey")
        .on("mouseover", function(event, d) { // What happens when user hover a bar

            // what subgroup are we hovering?
            const subGroupName = d3.select(this.parentNode).datum().key

            // Reduce opacity of all rect to 0.2
            d3.selectAll(".myRect").style("opacity", 0.2)

            // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
            d3.selectAll("." + subGroupName).style("opacity", 1)
        })
        .on("mouseleave", function(event, d) { // When user do not hover anymore

            // Back to normal opacity: 1
            d3.selectAll(".myRect")
                .style("opacity", 1)
        })

})

// ----------------
// GRAPH 4 Precarity
// ----------------

// set the dimensions and margins of graph 4b
const margin_G4Precarity = {
        top: 20,
        right: 30,
        bottom: 220,
        left: 50
    },
    width_G4Precarity = 900 - margin_G4Precarity.left - margin_G4Precarity.right,
    height_G4Precarity = 570 - margin_G4Precarity.top - margin_G4Precarity.bottom;

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
    const subgroups = data.columns.slice(1)

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    const groups = data.map(d => d.group)

    // Add X axis
    const x = d3.scaleBand()
        .domain(groups)
        .range([0, width_G4Precarity])
        .padding([0.2])
    svg_G4Precarity.append("g")
        .attr("transform", `translate(0, ${height_G4Precarity})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(30,0)rotate(-35)")
        .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height_G4Precarity, 0]);
    svg_G4Precarity.append("g")
        .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(d3.schemeSet2);

    //stack the data? --> stack per subgroup
    const stackedData = d3.stack()
        .keys(subgroups)
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
        .attr("x", d => x(d.data.group))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth())
        .attr("stroke", "grey")
        .on("mouseover", function(event, d) { // What happens when user hover a bar

            // what subgroup are we hovering?
            const subGroupName = d3.select(this.parentNode).datum().key

            // Reduce opacity of all rect to 0.2
            d3.selectAll(".myRect").style("opacity", 0.2)

            // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
            d3.selectAll("." + subGroupName).style("opacity", 1)
        })
        .on("mouseleave", function(event, d) { // When user do not hover anymore

            // Back to normal opacity: 1
            d3.selectAll(".myRect")
                .style("opacity", 1)
        })

})
