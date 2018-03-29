# History of Rock Visulization by The Geologists

D3 Project by Alessando Cartegni, Karina Ionkina, Shannon Lau, and Helen Ye

## Data

1. [This link](https://adammarxsmind.com/2015/03/29/almost-every-rock-poster-sticker-reference-and-list-in-school-of-rock/) is a page that lists all the genres and artists in the School of Rock blackboard, which displays a web of genres, with artists listed under each. This displays the evolution and progress of rock music.
2. [This dataset](https://docs.google.com/spreadsheets/d/1mwATkBV2e_JT3FUEJtcGNU9QrYYMWvhFutpzk0dlP2E/edit?hl=en_US&hl=en_US#gid=0) contains the title, release date, and artist of 100 songs that are representative of rock, since the mid-1900s. We will be using this to create a timeline of the music of certain bands and what type of rock was prevalent during certain time periods.
3. [This dataset](https://github.com/fivethirtyeight/data/blob/master/classic-rock/classic-rock-song-list.csv) gives titles, artists, release years, and play counts on the radio of rock songs. This will be used to give more data in the timeline and web of genres for specific artists.
4. [This website](https://web.archive.org/web/20170106110227/http://musicbloodline.info/) gives information about the who has influenced an artist and who they influenced. This may be used to draw relationships between artists of similar and varying genres, time permitting.

## Overall Visualization

The user will be presented with two main parts: the web of genres and a timeline of band activity. The web of genres will start with a default genre clicked, thus showing its relationship with other artists. The timeline will have peak times for specific bands. 

The user can interact with the visualization in a few ways. In the web of genres, genres can be selected and will display artists that represent that genre. Artists can also be selected, revealing related artists, genres and also highlighting their corresponding peak times on the timeline. Timeline peaks can be selected, which will highlight the corresponding artist in the web and any other peaks of the same artist on the timeline.

## The Purpose

This visualization will allow the user to explore the evolution of rock bands and songs, and examine relationships between artists that they may have never considered previously. This interface will prompt the user to consider the complexity of rock music and how it has shaped music today.

## D3 Features

Using enter, a node on the web will be generated for every dataset point on genres as well as on the timeline. The project may resemble [another d3 project](http://mbostock.github.io/d3/talk/20111116/force-collapsible.html). This visualization will resemble a web diagram similar to this (without the bounce). Related nodes are connected (artists connected to a genre, artists influencing each other). Nodes will be static upon entering the page.

## Sketch

![sketch](/softdev.png)
