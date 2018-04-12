var svg = d3.select("#vimage");

var width = svg.attr("width");
var height = svg.attr("height");

var genresJSON = document.getElementById("genres").innerHTML;
var genres = JSON.parse(genresJSON);

// Add bands later
var generateNodesLinks = function(genres) {
    var graph = { "nodes": [], "links": [] };
    // Code to modify with genres necessary
    graph["nodes"].push({"name": "Hello", "group": 1});
    graph["nodes"].push({"name": "World", "group": 1});
    graph["links"].push({"source": 0, "target": 1, "value": 1});
    return graph;
}

//Set up the force layout
// Code borrowed from
// http://www.coppelia.io/2014/07/an-a-to-z-of-extra-features-for-the-d3-force-layout/
// Need to comprehend
var setup = function() {
    var graph = generateNodesLinks(genres);
    var color = d3.scale.category20();

    var force = d3.layout.force()
        .charge(-120)
        .linkDistance(30)
        .size([width, height]);

    force.nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("marker-end",  "url(#suit)"); // Modified line 

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 8)
        .style("fill", function (d) {
            return color(d.group);
        })
        .call(force.drag);

    force.on("tick", function () {
        link.attr("x1", function (d) {
            return d.source.x;
        })
        .attr("y1", function (d) {
            return d.source.y;
        })
        .attr("x2", function (d) {
            return d.target.x;
        })
        .attr("y2", function (d) {
            return d.target.y;
        });

        node.attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });
    });

    // For arrows
    svg.append("defs").selectAll("marker")
        .data(["suit", "licensing", "resolved"])
        .enter().append("marker")
        .attr("id", function(d) { return d; })
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 25)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
        .style("stroke", "#4679BD")
        .style("opacity", "0.6");
}

setup();
