var svg = d3.select("#vimage");
var svg2 = d3.select("#timeline1");

var width = svg.attr("width");
var height = svg.attr("height");

var song_info = [];
var rows = data.split("\n");

for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].split(",");
    song_info.push( cells );
}

//----------------------------------------------------------------------------
var div = null;

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
        .charge(-680)
        .linkDistance(55)
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
            return d.radius;
        })
    .style("fill", function (d) {
        return color(d.group);
    });


    //NOTE: What we need to do for this to look good is place every band in 
    //bands.json into the lists in genres.json
    //That way we will have more info appear when each node is clicked!

    var select = function(e){
        var genre = this.textContent;
        var inf_bands = genres[genre]["influenced_artists"]
            var new_data = []
            d3.selectAll("#vimage2").remove();
        for (var i = 0; i < timelineData.length; i++){
            if  (inf_bands.indexOf(timelineData[i]["label"]) > -1){
                new_data.push(timelineData[i]);
            }
        }
        timelineSetup(new_data);
        svg2.selectAll("rect").on("click", function(d,i) {
            //collecting band name from selection attributes
            var band_name = d3.select(this).attr("band").trim();
            console.log("THIS.X:");
            var circle_x = d3.select(this).attr("x");
            var circle_y = d3.select(this).attr("y");
            console.log(circle_x);
            console.log(circle_y);
            ind = [];
            //parsing through csv to see if it contains this band's song
            for (var i = 0; i < song_info.length; i++){
                console.log(i);
                var parse_band = song_info[i][2].trim();
                if (parse_band == band_name) {
                    ind.push(song_info[i][1]);
                }
            }
            //songs are collected in array
            console.log(ind);
            for (var p = 0; p < ind.length; p++){
                console.log("parseInt circle x");
                console.log(parseInt(circle_x));
                svg2.append("circle")
                    .style("fill", "yellow")
                    .attr("r", 10)
                    .attr("cy", parseInt(circle_y) + 40*p)
                    .attr("cx", parseInt(circle_x));
                svg2.append("text")
                    .attr("x", parseInt(circle_x))
                    .attr("y", parseInt(circle_y) + 40*p)
                    .text(function() {return ind[p];});

            }
        });
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
        .attr("refX", 30)
        .attr("refY", 0)
        .attr("markerWidth", 10)
        .attr("markerHeight", 10)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
        .style("stroke", "#999")
        .style("opacity", "0.9");
}

var timelineSetup = function(data) {

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

        svg2 = d3.select("#timeline1").append("svg")
        .attr("id", "vimage2")
        .attr("height", 1000)
        .attr("width", 1000)
        .datum(data)
        .call(chart)
}

var tooltipSetup = function() {
    div = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        div.append("ul").append("li");
}

var timelineDataSetup = function() {
    for (var i = 0; i < timelineData.length; i++) {
        times = timelineData[i]["times"]
            for (var j = 0; j < times.length; j++) {
                // Set every year to a javascript date so it works
                // well with our timeline
                start = timelineData[i]["times"][j]["starting_time"]
                    end = timelineData[i]["times"][j]["ending_time"]
                    timelineData[i]["times"][j]["starting_time"] = new Date(start, 0)
                    timelineData[i]["times"][j]["ending_time"] = new Date(end, 0)
            }
    }
}

tooltipSetup();
setup();

//to restore older version:
//timelineSetup();

// found in timeline_data.js
timelineDataSetup();
