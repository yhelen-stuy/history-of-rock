var svg = d3.select("#vimage");
var svg2 = d3.select("#vimage2");

var width = svg.attr("width");
var height = svg.attr("height");

var genresJSON = document.getElementById("genres").innerHTML;
var genres = JSON.parse(genresJSON);

// Add bands later
var generateNodesLinks = function(genres) {
    var graph = { "nodes": [], "links": [] };
    // Code to modify with genres necessary
    /*graph["nodes"].push({"name": "Hello", "group": 1});
    graph["nodes"].push({"name": "World", "group": 1});
    graph["links"].push({"source": 0, "target": 1, "value": 1});*/
    var counter = 0;
    for (var genre in genres){
        genres[genre]["id"] = counter;
        counter++;
        graph["nodes"].push({"name": genre, "id": genre, "group": 1, "radius": genres[genre]["influenced_artists"].length + 5});
    }
    for (var genre in genres){
        influenced = genres[genre]["influenced_genres"];
        for (var i = 0; i < influenced.length; i++) {
            graph["links"].push({"source": genres[genre]["id"], "target": genres[influenced[i]]["id"],"group": 1}); 
        }
    }
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

        .charge(-620)
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
        .enter().append("g")
        .attr("class", "node")



    
    node.append("circle")
        .attr("r", function (d) {
	    console.log(d.radius);
	    return d.radius;
	})
        .style("fill", function (d) {
            return color(d.group);
        });

    var select = function(e){
    console.log(this.innerHTML.text);
    }

    node.on("click", select)

    
    

    node.append("text")
        .attr("dx", 10)
        .attr("dy", ".35em")
        .text(function(d) { return d.name })
        .style("stroke", "gray");



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
        d3.selectAll("circle").attr("cx", function (d) {
            return d.x;
        })
	
        .attr("cy", function (d) {
            return d.y;
        });
        d3.selectAll("text").attr("x", function (d) {
            return d.x;
        })
        .attr("y", function (d) {
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

var timelineSetup = function() {
    // found in timeline_data.js
    timelineDataSetup();
    var chart = d3.timeline()
                .tickFormat(
                    {
                        format: d3.time.format("%Y"),
                        tickTime: d3.time.years,
                        tickInterval: 10,
                        tickSize: 1
                    })
                .beginning(new Date(1919, 0))
                .ending(new Date())
                // remove once we figure out the stuff about only showing up on click
                .stack()

    svg2.attr("height", 2000)
        .attr("width", 1000)
        .datum(timelineData)
        .call(chart)
}

setup();
timelineSetup();




