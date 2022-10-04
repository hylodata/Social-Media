// ----------------
// SOCIAL MEDIA USE
// ----------------

// graph dimensions
const margin_graph2 = {
        top: 10,
        right: 30,
        bottom: 250,
        left: 75
    },
    width_graph2 = 850 - margin_graph2.left - margin_graph2.right,
    height_graph2 = 600 - margin_graph2.top - margin_graph2.bottom;

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
        .attr("transform", "translate(-10,0)rotate(-55)")
        .style("font-size", "20px")
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

// --------------------
// SM USE MALE GENDERED
// --------------------

// graph dimensions
const margin_graph2m = {
        top: 10,
        right: 30,
        bottom: 250,
        left: 75
    },
    width_graph2m = 850 - margin_graph2m.left - margin_graph2m.right,
    height_graph2m = 600 - margin_graph2m.top - margin_graph2m.bottom;

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
        .attr("transform", "translate(-10,0)rotate(-55)")
        .style("font-size", "20px")
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

// ----------------------
// SM USE FEMALE GENDERED
// ----------------------

// graph dimensions
const margin_graph2f = {
        top: 10,
        right: 30,
        bottom: 250,
        left: 75
    },
    width_graph2f = 850 - margin_graph2f.left - margin_graph2f.right,
    height_graph2f = 600 - margin_graph2f.top - margin_graph2f.bottom;

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
        .attr("transform", "translate(-10,0)rotate(-55)")
        .style("font-size", "20px")
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

// --------------
// BEST PLATFORMS
// --------------

// set the dimensions and margins of the graph
const margin_graph6 = {
        top: 10,
        right: 30,
        bottom: 250,
        left: 75
    },
    width_graph6 = 850 - margin_graph6.left - margin_graph6.right,
    height_graph6 = 600 - margin_graph6.top - margin_graph6.bottom;

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
            .attr("transform", "translate(-10,0)rotate(-55)")
            .style("font-size", "20px")
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

// ------------------------
// WIDE RANGE OF EXPERIENCE
// ------------------------

// set the dimensions and margins of the graph
const width = 900
const height = 600

// append the svg object to the body of the page
const svg = d3.select("#bubblegraph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Read data
d3.csv("./data/bubble.csv").then(function(data) {

    // Filter a bit the data -> more than 1 million inhabitants
    data = data.filter(function(d) {
        return d.value > 0
    })

    // Color palette
    const color = d3.scaleOrdinal()
        .domain(["one", "two", "three", "four", "five", "six"])
        .range(d3.schemeSet1);

    // Size scale
    const size = d3.scaleLinear()
        .domain([0, 170])
        .range([20, 120]) // circle size

    // create a tooltip
    const Tooltip = d3.select("#bubblegraph")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "relative")
        .style("max-width", "30rem")
    //        .style("margin", "1rem auto 2rem auto")

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function(event, d) {
        Tooltip
            .style("opacity", 1)
    }
    const mousemove = function(event, d) {
        Tooltip
            .html(d.value + " people" + d.key)
            .style("left", (event.x / 1 + 10) + "px")
            .style("top", (event.y / 2 - 500) + "px")
    }
    var mouseleave = function(event, d) {
        Tooltip
            .style("opacity", 0)
    }

    // Initialize the circle: all located at the center of the svg area
    var node = svg.append("g")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("class", "node")
        .attr("r", d => size(d.value))
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", d => color(d.region))
        .style("fill-opacity", 0.8)
        .attr("stroke", "black")
        .style("stroke-width", 1)
        .on("mouseover", mouseover) // What to do when hovered
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .call(d3.drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // Features of the forces applied to the nodes:
    const simulation = d3.forceSimulation()
        .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(.1)) // Nodes are attracted one each other of value is > 0
        .force("collide", d3.forceCollide().strength(.2).radius(function(d) {
            return (size(d.value) + 3)
        }).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
        .nodes(data)
        .on("tick", function(d) {
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
        });

    // What happens when a circle is dragged?
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(.03).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(.03);
        d.fx = null;
        d.fy = null;
    }

})

// -------------------
// EMPLOYMENT OUTCOMES
// -------------------

// set the dimensions and margins of the graph
var margin_employment = {
        top: 10,
        right: 30,
        bottom: 200,
        left: 100
    },
    width_employment = 900 - margin_employment.left - margin_employment.right,
    height_employment = 500 - margin_employment.top - margin_employment.bottom;

// append the svgEarnings object to the body of the page
var svgEmployment = d3.select("#EmploymentTooltip")
    .append("svg")
    .attr("width", width_employment + margin_employment.left + margin_employment.right)
    .attr("height", height_employment + margin_employment.top + margin_employment.bottom)
    .append("g")
    .attr("transform", `translate(${margin_employment.left},${margin_employment.top})`);

// Parse the Data
d3.csv("./data/Employment-Graph4.csv").then(function(data) {

    // List of subgroups = header of the csv files = soil condition here
    var subgroupsEmployment = data.columns.slice(1)

    // List of groupsEarnings = species here = value of the first column called group -> I show them on the X axis
    var groupsEmployment = data.map(d => d.G)

    // Add X axis
    var x = d3.scaleBand()
        .domain(groupsEmployment)
        .range([0, width_employment])
        .padding([0.2])
    svgEmployment.append("g")
        .attr("transform", `translate(0, ${height_employment})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-55)")
        .style("font-size", "20px")
        .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 100])
        .range([height_employment, 0]);
    svgEmployment.append("g")
        .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroupsEmployment)
        .range(['#004c9b', '#ffdc00'])

    //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroupsEmployment)
        (data)

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3.select("#EmploymentTooltip")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "relative")
        .style("max-width", "15rem")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(event, d) {
        var subgroupNameEmployment = d3.select(this.parentNode).datum().key;
        var subgroupValueEmployment = d.data[subgroupNameEmployment];
        tooltip
            .html(subgroupValueEmployment + "" + subgroupNameEmployment)
            .style("opacity", 1)

    }
    var mousemove = function(event, d) {
        tooltip.style("transform", "translateY(-90%)")
            .style("left", (event.x / 1 + 10) + "px")
            .style("top", (event.y / 2 - 500) + "px")
    }
    var mouseleave = function(event, d) {
        tooltip
            .style("opacity", 0)
    }

    // Show the bars
    svgEmployment.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .join("g")
        .attr("fill", d => color(d.key))
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(d => d)
        .join("rect")
        .attr("x", d => x(d.data.G))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth())
        .attr("stroke", "grey")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

})

//---------------------
//----EarningsGraph4---
//---------------------

// set the dimensions and margins of the graph
var margin_earnings = {
        top: 10,
        right: 30,
        bottom: 280,
        left: 100
    },
    width_earnings = 900 - margin_earnings.left - margin_earnings.right,
    height_earnings = 580 - margin_earnings.top - margin_earnings.bottom;

// append the svgEarnings object to the body of the page
var svgEarnings = d3.select("#EarningsTooltip")
    .append("svg")
    .attr("width", width_earnings + margin_earnings.left + margin_earnings.right)
    .attr("height", height_earnings + margin_earnings.top + margin_earnings.bottom)
    .append("g")
    .attr("transform", `translate(${margin_earnings.left},${margin_earnings.top})`);

// Parse the Data
d3.csv("./data/Earnings-Graph4.csv").then(function(data) {

    // List of subgroups = header of the csv files = soil condition here
    var subgroupsEarnings = data.columns.slice(1)

    // List of groupsEarnings = species here = value of the first column called group -> I show them on the X axis
    var groupsEarnings = data.map(d => d.G3)

    // Add X axis
    var x = d3.scaleBand()
        .domain(groupsEarnings)
        .range([0, width_earnings])
        .padding([0.2])
    svgEarnings.append("g")
        .attr("transform", `translate(0, ${height_earnings})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-55)")
        .style("font-size", "20px")
        .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 100])
        .range([height_earnings, 0]);
    svgEarnings.append("g")
        .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroupsEarnings)
        .range([`#004c9b`, `#ffdc00`])

    //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
        .keys(subgroupsEarnings)
        (data)

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip_earnings = d3.select("#EarningsTooltip")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("position", "relative")
        .style("max-width", "15rem")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(event, d) {
        var subgroupName_earnings = d3.select(this.parentNode).datum().key;
        var subgroupValue_earnings = d.data[subgroupName_earnings];
        tooltip_earnings
            .html(subgroupValue_earnings + "" + subgroupName_earnings)
            .style("opacity", 1)

    }
    var mousemove = function(event, d) {
        tooltip_earnings.style("transform", "translateY(-90%)")
            .style("left", (event.x / 1 + 10) + "px")
            .style("top", (event.y / 2 - 500) + "px")
    }
    var mouseleave = function(event, d) {
        tooltip_earnings
            .style("opacity", 0)
    }

    // Show the bars
    svgEarnings.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .join("g")
        .attr("fill", d => color(d.key))
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(d => d)
        .join("rect")
        .attr("x", d => x(d.data.G3))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth())
        .attr("stroke", "grey")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

})

// ----------------
// WORK MATCH DONUT
// ----------------

// set the dimensions and margins of the graph
const width_G4donut = 450,
    height_G4donut = 450,
    margin_G4donut = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width_G4donut, height_G4donut) / 2 - margin_G4donut

// append the svg object to the div called 'donut'
const svg_G4donut = d3.select("#donut")
    .append("svg")
    .attr("width", width_G4donut)
    .attr("height", height_G4donut)
    .append("g")
    .attr("transform", `translate(${width_G4donut / 2},${height_G4donut / 2})`);

// Create data
const data = {
    a: 25.85,
    b: 74.14
}

// set the color scale
const color = d3.scaleOrdinal()
    .range(["#004c9b", "#ffdc00"])

// Compute the position of each group on the pie:
const pie = d3.pie()
    .value(d => d[1])

const data_ready = pie(Object.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg_G4donut
    .selectAll('whatever')
    .data(data_ready)
    .join('path')
    .attr('d', d3.arc()
        .innerRadius(100) // This is the size of the donut hole
        .outerRadius(radius)
    )
    .attr('fill', d => color(d.data[0]))
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

// --------------
// WORK MATCH PIE
// --------------

// // set the dimensions and margins of the graph
// const width_G4pie = 450,
//     height_G4pie = 450,
//     margin_G4pie = 40;

// // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// const radius = Math.min(width_G4pie, height_G4pie) / 2 - margin_G4pie;

// // append the svg object to the div called 'pie'
// const svg_G4pie = d3.select("#pie")
//     .append("svg")
//     .attr("width", width_G4pie)
//     .attr("height", height_G4pie)
//     .append("g")
//      .attr("transform", `translate(${width_G4pie/2}, ${height_G4pie/2})`);

// // Create data
// const data = {
//     a: 25.85,
//     b: 74.14
// }

// // set the color scale
// const color = d3.scaleOrdinal()
//     .range(["#004c9b", "#ffdc00"])

// // Compute the position of each group on the pie:
// const pie = d3.pie()
// .value(function(d) {
//      return d[1]
//  })
// const data_ready = pie(Object.entries(data))

// // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
// svg_G4pie
//     .selectAll('whatever')
//     .data(data_ready)
//     .join('path')
//     .attr('d', d3.arc()
//         .innerRadius(0)
//         .outerRadius(radius)
//     )
//     .attr('fill', function(d) {
//         return (color(d.data[1]))
//     })
//     .attr("stroke", "black")
//     .style("stroke-width", "2px")
//     .style("opacity", 0.7)

// ----------------
// UNUSED
// ----------------

// // ----------------
// // GRAPH 3 - TreeMap
// // ----------------

// // set the dimensions and margins of the graph
// const margin_G3treemap = {
//         top: 50,
//         right: 30,
//         bottom: 100,
//         left: 50
//     },

//     width_G3treemap = 900 - margin_G3treemap.left - margin_G3treemap.right,
//     height_G3treemap = 600 - margin_G3treemap.top - margin_G3treemap.bottom;

// // append the svg object to the body of the page
// const svg_G3treemap = d3.select("#Graph3_Treemap")
//     .append("svg")
//     .attr("width", width_G3treemap + margin_G3treemap.left + margin_G3treemap.right)
//     .attr("height", height_G3treemap + margin_G3treemap.top + margin_G3treemap.bottom)
//     .append("g")
//     .attr("transform",
//         `translate(${margin_G3treemap.left}, ${margin_G3treemap.top})`);

// // Read data
// d3.csv('./data/Experience-Graph3-TreeMap.csv').then(function(data) {

//     // stratify the data: reformatting for d3.js
//     const root = d3.stratify()
//         .id(function(d) {
//             return d.Experience;
//         }) // Name of the entity (column name is name in csv)
//         .parentId(function(d) {
//             return d.parent;
//         }) // Name of the parent (column name is parent in csv)
//     (data);
//     root.sum(function(d) {
//         return +d.value
//     }) // Compute the numeric value for each entity

//     // Then d3.treemap computes the position of each element of the hierarchy
//     // The coordinates are added to the root object above
//     d3.treemap()
//         .size([width_G3treemap, height_G3treemap])
//         .padding(4)
//         (root);

//     // use this information to add rectangles:
//     svg_G3treemap
//         .selectAll("rect")
//         .data(root.leaves())
//         .join("rect")
//         .attr('x', function(d) {
//             return d.x0;
//         })
//         .attr('y', function(d) {
//             return d.y0;
//         })
//         .attr('width', function(d) {
//             return d.x1 - d.x0;
//         })
//         .attr('height', function(d) {
//             return d.y1 - d.y0;
//         })
//         .style("stroke", "black")
//         // .style("fill", function(d) { return colorScale(d.value)});
//         // .style("fill", function(d) { return color(d.data.parent)});
//         .style("fill", "#0077c8");

//     // d3.scaleOrdinal([`#002d72`, `#0077c8`, `#5bc2f4`])

//     // and to add the text labels
//     svg_G3treemap
//         .selectAll("text")
//         .data(root.leaves())
//         .join("text")
//         .attr("x", function(d) {
//             return d.x0 + 20
//         }) // +10 to adjust position (more right)
//         .attr("y", function(d) {
//             return d.y0 + 40
//         }) // +20 to adjust position (lower)
//         .text(function(d) {
//             return d.data.value
//         })
//         .attr("font-size", "20px")
//         .attr("fill", "white")

//     //     // Adding tooltip for info on hover
//     // const tooltip = d3.select('svg#canvas')
//     //                   .append('div')
//     //                   .attr('id', 'tooltip')
//     //                   .attr('width', 60 + 'px')
//     //                   .attr('height', 40 + 'px')
//     //                   .style('z-index', 10)
//     //                   .style('display', 'none')
//     //                   .style('position', 'absolute');
// })


// // ----------------
// // GRAPH 5
// // ----------------

// // set the dimensions and margins of the graph
// const margin_graph5 = {
//         top: 30,
//         right: 30,
//         bottom: 300,
//         left: 140
//     },
//     width_graph5 = 900 - margin_graph5.left - margin_graph5.right,
//     height_graph5 = 600 - margin_graph5.top - margin_graph5.bottom;

// // append the svg object to the body of the page
// const svg_graph5 = d3.select("#Graph5")
//     .append("svg")
//     .attr("width", width_graph5 + margin_graph5.left + margin_graph5.right)
//     .attr("height", height_graph5 + margin_graph5.top + margin_graph5.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin_graph5.left},${margin_graph5.top})`);

// // Parse the Data
// d3.csv("./data/Freq-Graph5.csv").then(function(data) {

//     // X axis
//     const x = d3.scaleBand()
//         .range([0, width_graph5])
//         .domain(data.map(d => d.Parameter))
//         .padding(0.2);
//     svg_graph5.append("g")
//         .attr("transform", `translate(0, ${height_graph5})`)
//         .call(d3.axisBottom(x))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-55)")
//         .style("font-size", "20px")
//         .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear()
//         .domain([0, 60])
//         .range([height_graph5, 0]);
//     svg_graph5.append("g")
//         .call(d3.axisLeft(y));

//     var color = d3.scaleOrdinal([`#002d72`, `#0077c8`, `#5bc2f4`]);

//     // Bars
//     svg_graph5.selectAll("mybar")
//         .data(data)
//         .join("rect")
//         .attr("x", d => x(d.Parameter))
//         .attr("y", d => y(d.Percent))
//         .attr("width", x.bandwidth())
//         .attr("height", d => height_graph5 - y(d.Percent))
//         .attr("fill", function(d, i) {
//             return color(i);
//         })
//     // .attr("fill", "#0099ff")

// })

// // ----------------
// // GRAPH 4 - precarity NOT USED
// // ----------------

// // set the dimensions and margins of graph 2
// const margin_G4Precarity = {
//         top: 10,
//         right: 30,
//         bottom: 300,
//         left: 100
//     },
//     width_G4Precarity = 900 - margin_G4Precarity.left - margin_G4Precarity.right,
//     height_G4Precarity = 600 - margin_G4Precarity.top - margin_G4Precarity.bottom;

// // append the svg object to the body of the page
// const svg_G4Precarity = d3.select("#Graph4_Precarity")
//     .append("svg")
//     .attr("width", width_G4Precarity + margin_G4Precarity.left + margin_G4Precarity.right)
//     .attr("height", height_G4Precarity + margin_G4Precarity.top + margin_G4Precarity.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin_G4Precarity.left},${margin_G4Precarity.top})`);

// // Parse the Data
// d3.csv("./data/Precarity-Graph4.csv").then(function(data) {

//     // List of subgroups = header of the csv files = soil condition here
//     const subgroups_precarity = data.columns.slice(1)

//     // List of groups = species here = value of the first column called group -> I show them on the X axis
//     const groups_precarity = data.map(d => d.G1)

//     // Add X axis
//     const x = d3.scaleBand()
//         .domain(groups_precarity)
//         .range([0, width_G4Precarity])
//         .padding([0.2])
//     svg_G4Precarity.append("g")
//         .attr("transform", `translate(0, ${height_G4Precarity})`)
//         .call(d3.axisBottom(x).tickSizeOuter(0))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-55)")
//         .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear()
//         .domain([0, 100])
//         .range([height_G4Precarity, 0]);
//     svg_G4Precarity.append("g")
//         .call(d3.axisLeft(y));

//     // color palette = one color per subgroup
//     const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//     //stack the data? --> stack per subgroup
//     const stackedData = d3.stack()
//         .keys(subgroups_precarity)
//         (data)

//     // Highlight a specific subgroup when hovered
//     // Show the bars
//     svg_G4Precarity.append("g")
//         .selectAll("g")
//         // Enter in the stack data = loop key per key = group per group
//         .data(stackedData)
//         .join("g")
//         .attr("fill", d => color(d.key))
//         .attr("class", d => "myRect " + d.key) // Add a class to each subgroup: their name
//         .selectAll("rect")
//         // enter a second time = loop subgroup per subgroup to add all rectangles
//         .data(d => d)
//         .join("rect")
//         .attr("x", d => x(d.data.G1))
//         .attr("y", d => y(d[1]))
//         .attr("height", d => y(d[0]) - y(d[1]))
//         .attr("width", x.bandwidth())
//         .attr("stroke", "grey")
//         .on("mouseover", function(event, d) { // What happens when user hover a bar

//             // what subgroup are we hovering?
//             const subGroupName_precarity = d3.select(this.parentNode).datum().key

//             // Reduce opacity of all rect to 0.2
//             d3.selectAll(".myRect").style("opacity", 0.2)

//             // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
//             d3.selectAll("." + subGroupName_precarity).style("opacity", 1)
//         })
//         .on("mouseleave", function(event, d) { // When user do not hover anymore

//             // Back to normal opacity: 1
//             d3.selectAll(".myRect")
//                 .style("opacity", 1)
//         })

// })


// // ----------------
// // GRAPH 3
// // ----------------

// // set the dimensions and margins of the graph
// const margin_graph3 = {
//         top: 30,
//         right: 30,
//         bottom: 500,
//         left: 140
//     },
//     width_graph3 = 900 - margin_graph3.left - margin_graph3.right,
//     height_graph3 = 800 - margin_graph3.top - margin_graph3.bottom;

// // append the svg object to the body of the page
// const svg_graph3 = d3.select("#Graph3")
//     .append("svg")
//     .attr("width", width_graph3 + margin_graph3.left + margin_graph3.right)
//     .attr("height", height_graph3 + margin_graph3.top + margin_graph3.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin_graph3.left},${margin_graph3.top})`);

// // Parse the Data
// d3.csv("./data/Experience-Graph3.csv").then(function(data) {

//     // X axis
//     const x = d3.scaleBand()
//         .range([0, width_graph3])
//         .domain(data.map(d => d.Experience))
//         .padding(0.2);
//     svg_graph3.append("g")
//         .attr("transform", `translate(0, ${height_graph3})`)
//         .call(d3.axisBottom(x))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-55)")
//         .style("font-size", "20px")
//         .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear()
//         .domain([0, 180])
//         .range([height_graph3, 0]);
//     svg_graph3.append("g")
//         .call(d3.axisLeft(y));

//     // Bars
//     svg_graph3.selectAll("mybar")
//         .data(data)
//         .join("rect")
//         .attr("x", d => x(d.Experience))
//         .attr("y", d => y(d.value))
//         .attr("width", x.bandwidth())
//         .attr("height", d => height_graph3 - y(d.value))
//         .attr("fill", "#ffdc00")

// })


// // ----------------
// // GRAPH 4 - JobMatch
// // ----------------

// // set the dimensions and margins of the graph
// const margin_G4jobmatch = {
//         top: 10,
//         right: 30,
//         bottom: 200,
//         left: 100
//     },
//     width_G4jobmatch = 900 - margin_G4jobmatch.left - margin_G4jobmatch.right,
//     height_G4jobmatch = 500 - margin_G4jobmatch.top - margin_G4jobmatch.bottom;

// // append the svg object to the body of the page
// const svg_G4jobmatch = d3.select("#Graph4_JobMatch")
//     .append("svg")
//     .attr("width", width_G4jobmatch + margin_G4jobmatch.left + margin_G4jobmatch.right)
//     .attr("height", height_G4jobmatch + margin_G4jobmatch.top + margin_G4jobmatch.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin_G4jobmatch.left},${margin_G4jobmatch.top})`);

// // Parse the Data
// d3.csv("./data/JobMatch-Graph4.csv").then(function(data) {

//     // List of subgroups = header of the csv files = soil condition here
//     const subgroups_jobmatch = data.columns.slice(1)

//     // List of groups = species here = value of the first column called group -> I show them on the X axis
//     const groups_jobmatch = data.map(d => d.G2)

//     // Add X axis
//     const x = d3.scaleBand()
//         .domain(groups_jobmatch)
//         .range([0, width_G4jobmatch])
//         .padding([0.2])
//     svg_G4jobmatch.append("g")
//         .attr("transform", `translate(0, ${height_G4jobmatch})`)
//         .call(d3.axisBottom(x).tickSizeOuter(0))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-55)")
//         .style("font-size", "20px")
//         .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear()
//         .domain([0, 100])
//         .range([height_G4jobmatch, 0]);
//     svg_G4jobmatch.append("g")
//         .call(d3.axisLeft(y));

//     // color palette = one color per subgroup
//     const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//     //stack the data? --> stack per subgroup
//     const stackedData = d3.stack()
//         .keys(subgroups_jobmatch)
//         (data)

//     // ----------------
//     // Highlight a specific subgroup when hovered
//     // ----------------

//     // Show the bars
//     svg_G4jobmatch.append("g")
//         .selectAll("g")
//         // Enter in the stack data = loop key per key = group per group
//         .data(stackedData)
//         .join("g")
//         .attr("fill", d => color(d.key))
//         .attr("class", d => "myRectJ " + d.key) // Add a class to each subgroup: their name
//         .selectAll("rect")
//         // enter a second time = loop subgroup per subgroup to add all rectangles
//         .data(d => d)
//         .join("rect")
//         .attr("x", d => x(d.data.G2))
//         .attr("y", d => y(d[1]))
//         .attr("height", d => y(d[0]) - y(d[1]))
//         .attr("width", x.bandwidth())
//         .attr("stroke", "grey")
//         .on("mouseover", function(event, d) { // What happens when user hover a bar

//             // what subgroup are we hovering?
//             const subGroupName_jobmatch = d3.select(this.parentNode).datum().key

//             // Reduce opacity of all rect to 0.2
//             d3.selectAll(".myRectJ").style("opacity", 0.2)

//             // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
//             d3.selectAll("." + subGroupName_jobmatch).style("opacity", 1)
//         })
//         .on("mouseleave", function(event, d) { // When user do not hover anymore

//             // Back to normal opacity: 1
//             d3.selectAll(".myRectJ")
//                 .style("opacity", 1)
//         })

// })

// // --------
// // EARNINGS
// // --------

// // set the dimensions and margins of the graph
// const margin_G4earnings = {
//         top: 10,
//         right: 30,
//         bottom: 250,
//         left: 100
//     },
//     width_G4earnings = 900 - margin_G4earnings.left - margin_G4earnings.right,
//     height_G4earnings = 550 - margin_G4earnings.top - margin_G4earnings.bottom;

// // append the svg object to the body of the page
// const svg_G4earnings = d3.select("#Graph4_Earnings")
//     .append("svg")
//     .attr("width", width_G4earnings + margin_G4earnings.left + margin_G4earnings.right)
//     .attr("height", height_G4earnings + margin_G4earnings.top + margin_G4earnings.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin_G4earnings.left},${margin_G4earnings.top})`);

// // Parse the Data
// d3.csv("./data/Earnings-Graph4.csv").then(function(data) {

//     // List of subgroups = header of the csv files = soil condition here
//     const subgroups_earnings = data.columns.slice(1)

//     // List of groups = species here = value of the first column called group -> I show them on the X axis
//     const groups_earnings = data.map(d => d.G3)

//     // Add X axis
//     const x = d3.scaleBand()
//         .domain(groups_earnings)
//         .range([0, width_G4earnings])
//         .padding([0.2])
//     svg_G4earnings.append("g")
//         .attr("transform", `translate(0, ${height_G4earnings})`)
//         .call(d3.axisBottom(x).tickSizeOuter(0))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-55)")
//         .style("font-size", "20px")
//         .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear()
//         .domain([0, 100])
//         .range([height_G4earnings, 0]);
//     svg_G4earnings.append("g")
//         .call(d3.axisLeft(y));

//     // color palette = one color per subgroup
//     const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//     //stack the data? --> stack per subgroup
//     const stackedData = d3.stack()
//         .keys(subgroups_earnings)
//         (data)


//     // ----------------
//     // Highlight a specific subgroup when hovered
//     // ----------------

//     // Show the bars
//     svg_G4earnings.append("g")
//         .selectAll("g")
//         // Enter in the stack data = loop key per key = group per group
//         .data(stackedData)
//         .join("g")
//         .attr("fill", d => color(d.key))
//         .attr("class", d => "myRectE " + d.key) // Add a class to each subgroup: their name
//         .selectAll("rect")
//         // enter a second time = loop subgroup per subgroup to add all rectangles
//         .data(d => d)
//         .join("rect")
//         .attr("x", d => x(d.data.G3))
//         .attr("y", d => y(d[1]))
//         .attr("height", d => y(d[0]) - y(d[1]))
//         .attr("width", x.bandwidth())
//         .attr("stroke", "grey")
//         .on("mouseover", function(event, d) { // What happens when user hover a bar

//             // what subgroup are we hovering?
//             const subGroupName_earnings = d3.select(this.parentNode).datum().key

//             // Reduce opacity of all rect to 0.2
//             d3.selectAll(".myRectE").style("opacity", 0.2)

//             // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
//             d3.selectAll("." + subGroupName_earnings).style("opacity", 1)
//         })
//         .on("mouseleave", function(event, d) { // When user do not hover anymore

//             // Back to normal opacity: 1
//             d3.selectAll(".myRectE")
//                 .style("opacity", 1)
//         })

// })

// // ----------
// // EMPLOYMENT
// // ----------

// // set the dimensions and margins of graph 2
// const margin_G4Employment = {
//         top: 10,
//         right: 30,
//         bottom: 200,
//         left: 100
//     },
//     width_G4Employment = 900 - margin_G4Employment.left - margin_G4Employment.right,
//     height_G4Employment = 500 - margin_G4Employment.top - margin_G4Employment.bottom;

// // append the svg object to the body of the page
// const svg_G4Employment = d3.select("#Graph4_Employment")
//     .append("svg")
//     .attr("width", width_G4Employment + margin_G4Employment.left + margin_G4Employment.right)
//     .attr("height", height_G4Employment + margin_G4Employment.top + margin_G4Employment.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin_G4Employment.left},${margin_G4Employment.top})`);

// // Parse the Data
// d3.csv("./data/Employment-Graph4.csv").then(function(data) {

//     // List of subgroups = header of the csv files = soil condition here
//     const subgroups_Employment = data.columns.slice(1)

//     // List of groups = species here = value of the first column called group -> I show them on the X axis
//     const groups_Employment = data.map(d => d.G)

//     // Add X axis
//     const x = d3.scaleBand()
//         .domain(groups_Employment)
//         .range([0, width_G4Employment])
//         .padding([0.2])
//     svg_G4Employment.append("g")
//         .attr("transform", `translate(0, ${height_G4Employment})`)
//         .call(d3.axisBottom(x).tickSizeOuter(0))
//         .selectAll("text")
//         .attr("transform", "translate(-10,0)rotate(-55)")
//         .style("font-size", "20px")
//         .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear()
//         .domain([0, 100])
//         .range([height_G4Employment, 0]);
//     svg_G4Employment.append("g")
//         .call(d3.axisLeft(y));

//     // color palette = one color per subgroup
//     const color = d3.scaleOrdinal([`#004c9b`, `#ffdc00`])

//     //stack the data? --> stack per subgroup
//     const stackedData = d3.stack()
//         .keys(subgroups_Employment)
//         (data)

//     // Highlight a specific subgroup when hovered
//     // Show the bars
//     svg_G4Employment.append("g")
//         .selectAll("g")
//         // Enter in the stack data = loop key per key = group per group
//         .data(stackedData)
//         .join("g")
//         .attr("fill", d => color(d.key))
//         .attr("class", d => "myRect " + d.key) // Add a class to each subgroup: their name
//         .selectAll("rect")
//         // enter a second time = loop subgroup per subgroup to add all rectangles
//         .data(d => d)
//         .join("rect")
//         .attr("x", d => x(d.data.G))
//         .attr("y", d => y(d[1]))
//         .attr("height", d => y(d[0]) - y(d[1]))
//         .attr("width", x.bandwidth())
//         .attr("stroke", "grey")
//         .on("mouseover", function(event, d) { // What happens when user hover a bar

//             // what subgroup are we hovering?
//             const subGroupName_Employment = d3.select(this.parentNode).datum().key

//             // Reduce opacity of all rect to 0.2
//             d3.selectAll(".myRect").style("opacity", 0.2)

//             // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
//             d3.selectAll("." + subGroupName_Employment).style("opacity", 1)
//         })
//         .on("mouseleave", function(event, d) { // When user do not hover anymore

//             // Back to normal opacity: 1
//             d3.selectAll(".myRect")
//                 .style("opacity", 1)
//         })

// })
