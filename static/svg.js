var svg = d3.select("#vimage");
var svg2 = d3.select("#timeline1");

var width = svg.attr("width");
var height = svg.attr("height");

var genresJSON = document.getElementById("genres").innerHTML;
var genres = JSON.parse(genresJSON);


//------------------------PARSING CSV-----------------------------------------

var data = "Number,Song title,Artist,Release year\n" +
"1,Strange Things Happening Every Day ,Sister Rosetta Tharpe ,1944\n" +
"2,Rocket 88, Jackie Brenston and his Delta Cats ,1951\n" +
"3,Tutti Frutti ,Little Richard,1955\n"+
"4,Mystery Train ,Elvis Presley,1955\n" +
"5,Blue Suede Shoes ,Carl Perkins ,1955\n" +
"6,Whole Lotta Shakin' Goin On ,Jerry Lee Lewis,1957\n" +
"7,Oh Boy!, The Crickets ,1957\n" +
"8,Rave On ,Buddy Holly ,1958\n" +
"9,Johnny B Goode ,Chuck Berry,1958\n" +
"10,No Particular Place to Go, Chuck Berry,1964\n" +
"11,The Last Time ,The Rolling Stones ,1965\n" +
"12,Get Off of My Cloud ,The Rolling Stones ,1965\n"+
"18,Like a Rolling Stone, Bob Dylan ,1965\n" +
"19,Desolation Row ,Bob Dylan ,1965\n" +
"13,Steppin' Out ,John Mayall and The Bluesbreakers with Eric Clapton ,1966\n" +
"15,She Said She Said, The Beatles ,1966\n" +
"16,Tomorrow Never Knows ,The Beatles ,1966\n" +
"17,A Day in the Life ,The Beatles ,1967\n" +
"20,Are You Experienced? ,The Jimi Hendrix Experience,1967\n" +
 "26,Break on Through (to the Other Side) ,The Doors ,1967\n" +  
"29,Nights in White Satin, The Moody Blues ,1967\n" + 
"45,Ball and Chain (live at Monterey) ,Big Brother and the Holding Company ,1967\n" + 
"14,Steppin' Out ,Cream ,1968\n" + 
"21,Crosstown Traffic ,The Jimi Hendrix Experience,1968\n" + 
"22,My Clown ,July ,1968\n" + 
"23,Pictures of Matchstick Men ,Status Quo ,1968\n" + 
"24,Communication Breakdown ,Led Zeppelin ,1969\n" + 
"28,I'm Free ,The Who,1969\n" + 
"30,Stand!, Sly and the Family Stone,1969\n" + 
"31,I Want to Take You Higher, Sly and the Family Stone,1969\n" + 
"33,Live at Woodstock ,Jimi Hendrix ,1969\n" + 
"34,Soul Sacrifice (live at Woodstock) ,Santana ,1969\n" + 
"35,I-Feel-Like-I'm-Fixin-To-Die-Rag (live at Woodstock), Country Joe and the Fish,1969\n" + 
"38,Suite: Judy Blue Eyes ,Crosby Stills & Nash ,1969\n" + 
"51,Dark Star (live) ,The Grateful Dead ,1969\n" + 
"52,Who Do You Love? ,Quicksilver Messenger Service,1969\n" + 
"53,Wooden Ships ,Jefferson Airplane ,1969\n" + 
"32,Iron Man, Black Sabbath ,1970\n" + 
"36,Jumpin' Jack Flash (live) ,The Rolling Stones ,1970\n" + 
"37,Midnight Rambler (live) ,The Rolling Stones,1970\n" + 
"39,Big Yellow Taxi ,Joni Mitchell ,1970\n" + 
"40,After the Gold Rush, Neil Young ,1970\n" + 
"41,Let it Be ,The Beatles,1970\n" + 
"42,Mother ,John Lennon ,1970\n" + 
"43,My Sweet Lord ,George Harrison ,1970\n" + 
"27,LA Woman, The Doors ,1971\n" + 
"46,I Feel the Earth Move ,Carole King,1971\n" + 
"47,It's Too Late ,Carole King ,1971\n" + 
"48,Maggot Brain, Funkadelic,1971\n" + 
"49,Maggie May, Rod Stewart ,1971\n" + 
"50,Mandolin Wind ,Rod Stewart ,1971\n" + 
"54,Virginia Plain, Roxy Music ,1972\n" + 
"44,Band on the Run ,Paul McCartney and Wings,1973\n" + 
"55,Do the Strand ,Roxy Music ,1973\n" + 
"56,Us and Them, Pink Floyd ,1973\n" + 
"60,Hey Joe, Patti Smith ,1974\n" + 
"25,Kashmir, Led Zeppelin ,1975\n" + 
"57,Shine on You Crazy Diamond Parts I-V ,Pink Floyd ,1975\n" + 
"58,Born to Run, Bruce Springsteen ,1975\n" + 
"61,Land ,Patti Smith ,1975\n" + 
"62,Bohemian Rhapsody, Queen,1975\n" + 
"66,Be My Wife ,David Bowie ,1977\n" + 
"67,Heroes ,David Bowie,1977\n" + 
"68,Go Your Own Way, Fleetwood Mac,1977\n" + 
"59,Racing in the Street, Bruce Springsteen,1978\n" + 
"63,Don't Stop Me Now, Queen ,1978\n" + 
"70,Wuthering Heights ,Kate Bush ,1978\n" + 
"72,Down Payment Blues, AC/DC ,1978\n" + 
"69,Tusk ,Fleetwood Mac ,1979\n" + 
"73,Back in Black ,AC/DC ,1980\n" + 
"76,Romeo and Juliet, Dire Straits ,1980\n" + 
"97,Don't Stop Believing, Journey ,1980\n" + 
"64,Unchained, Van Halen,1981\n" + 
"78,Gloria ,U2 ,1981\n" + 
"74,Tonight I'm Gonna Rock You Tonight ,Spinal Tap,1984\n" + 
"79,Bad ,U2 ,1984\n" + 
"77,Money for Nothing, Dire Straits,1985\n" + 
"81,Walk This Way ,Run DMC ,1986\n" + 
"65,Kickstart My Heart,Motley Crue,1989\n" + 
"71,This Woman's Work ,Kate Bush ,1989\n" + 
"80,One ,U2 ,1991\n" + 
"85,Smells Like Teen Spirit, Nirvana ,1991\n" + 
"86,Alive ,Pearl Jam ,1991\n" + 
"88,Country Feedback ,REM ,1991\n" + 
"87,Them Bones, Alice in Chains ,1992\n" + 
"89,Everybody Hurts ,REM,1992\n" + 
"90,Basket Case ,Green Day ,1994\n" + 
"98,Street Spirit (Fade Out) ,Radiohead ,1995\n" + 
"99,Paranoid Android ,Radiohead,1997\n" + 
"91,Pretty Fly (For a White Guy) ,The Offspring,1998\n" + 
"82,Break Stuff ,Limp Bizkit,2000\n" + 
"83,Things Have Changed ,Bob Dylan,2000\n" + 
"92,Yellow ,Coldplay,2000\n" + 
"84,Sugar Baby ,Bob Dylan ,2001\n" + 
"95,Hotel Yorba  ,The White Stripes,2001\n" + 
"93,Clocks ,Coldplay,2002\n" + 
"75,I Believe in a Thing Called Love,The Darkness ,2003\n" + 
"96,Seven Nation Army  ,The White Stripes,2003\n" + 
"94,Chasing Cars  ,Snow Patrol,2006\n" + 
"100,House of Cards  ,Radiohead,2007"



var song_info = [];
var rows = data.split("\n");

for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].split(",");
    song_info.push( cells );
}

console.log(song_info[1][2]);

//----------------------------------------------------------------------------

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
            console.log(inf_bands.indexOf(timelineData[i]["label"]) > -1);
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
		    /*
		    console.log(parse_band);
		    console.log(band_name);
		    console.log(parse_band == band_name);
		    */
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
        .attr("height", 3000)
        .attr("width", 1000)
        .datum(data)
        .call(chart)
}

setup();

//to restore older version:
//timelineSetup();

// found in timeline_data.js
timelineDataSetup();
