// sorry about this mess taken from script
var timelineData = [{"times": [{"ending_time": 2018, "starting_time": 1960}], "class": "Neil Young", "label": "Neil Young"}, {"times": [{"ending_time": 2018, "starting_time": 1967}], "class": "Santana", "label": "Santana"}, {"times": [{"ending_time": 1982, "starting_time": 1964}, {"ending_time": 1989, "starting_time": 1989}, {"ending_time": 2018, "starting_time": 1999}], "class": "The Who", "label": "The Who"}, {"times": [{"ending_time": 1995, "starting_time": 1965}], "class": "The Grateful Dead", "label": "The Grateful Dead"}, {"times": [{"ending_time": 2002, "starting_time": 1987}, {"ending_time": 2018, "starting_time": 2005}], "class": "Alice in Chains", "label": "Alice in Chains"}, {"times": [{"ending_time": 2011, "starting_time": 1980}], "class": "REM", "label": "REM"}, {"times": [{"ending_time": 2018, "starting_time": 1964}], "class": "Rod Stewart", "label": "Rod Stewart"}, {"times": [{"ending_time": 2011, "starting_time": 1997}], "class": "The White Stripes", "label": "The White Stripes"}, {"times": [{"ending_time": 1981, "starting_time": 1971}], "class": "Paul McCartney and Wings", "label": "Paul McCartney and Wings"}, {"times": [{"ending_time": 2018, "starting_time": 1969}], "class": "Bruce Springsteen", "label": "Bruce Springsteen"}, {"times": [{"ending_time": 1963, "starting_time": 1948}], "class": "Little Richard", "label": "Little Richard"}, {"times": [{"ending_time": 2018, "starting_time": 1975}], "class": "Kate Bush", "label": "Kate Bush"}, {"times": [{"ending_time": 2018, "starting_time": 1990}], "class": "Pearl Jam", "label": "Pearl Jam"}, {"times": [{"ending_time": 2018, "starting_time": 1970}], "class": "Queen", "label": "Queen"}, {"times": [{"ending_time": 1977, "starting_time": 1935}], "class": "Elvis Presley", "label": "Elvis Presley"}, {"times": [{"ending_time": 1976, "starting_time": 1971}, {"ending_time": 1983, "starting_time": 1979}, {"ending_time": 2011, "starting_time": 2001}], "class": "Roxy Music", "label": "Roxy Music"}, {"times": [{"ending_time": 2018, "starting_time": 1984}], "class": "The Offspring", "label": "The Offspring"}, {"times": [{"ending_time": 2001, "starting_time": 1958}], "class": "George Harrison", "label": "George Harrison"}, {"times": [{"ending_time": 2092, "starting_time": 1981}, {"ending_time": 2012, "starting_time": 2012}], "class": "Run DMC", "label": "Run DMC"}, {"times": [{"ending_time": 1970, "starting_time": 1963}], "class": "The Jimi Hendrix Experience", "label": "The Jimi Hendrix Experience"}, {"times": [{"ending_time": 1973, "starting_time": 1965}, {"ending_time": 1978, "starting_time": 1978}, {"ending_time": 1993, "starting_time": 1993}, {"ending_time": 1997, "starting_time": 1997}, {"ending_time": 2000, "starting_time": 2000}, {"ending_time": 2011, "starting_time": 2011}], "class": "The Doors", "label": "The Doors"}, {"times": [{"ending_time": 1981, "starting_time": 1968}], "class": "Funkadelic", "label": "Funkadelic"}, {"times": [{"ending_time": 1984, "starting_time": 1964}, {"ending_time": 1992, "starting_time": 1992}, {"ending_time": 2001, "starting_time": 2001}, {"ending_time": 2007, "starting_time": 2007}, {"ending_time": 2009, "starting_time": 2009}], "class": "Spinal Tap", "label": "Spinal Tap"}, {"times": [{"ending_time": 2016, "starting_time": 1957}], "class": "The Crickets", "label": "The Crickets"}, {"times": [{"ending_time": 2018, "starting_time": 1996}], "class": "Snow Patrol", "label": "Snow Patrol"}, {"times": [{"ending_time": 1994, "starting_time": 1987}], "class": "Nirvana", "label": "Nirvana"}, {"times": [{"ending_time": 2018, "starting_time": 1972}], "class": "Van Halen", "label": "Van Halen"}, {"times": [{"ending_time": 2018, "starting_time": 1987}], "class": "Green Day", "label": "Green Day"}, {"times": [{"ending_time": 2018, "starting_time": 1973}], "class": "Journey", "label": "Journey"}, {"times": [{"ending_time": 1968, "starting_time": 1965}, {"ending_time": 1972, "starting_time": 1969}, {"ending_time": 2018, "starting_time": 1987}], "class": "Big Brother and the Holding Company", "label": "Big Brother and the Holding Company"}, {"times": [{"ending_time": 1974, "starting_time": 1964}, {"ending_time": 2018, "starting_time": 1977}], "class": "The Moody Blues", "label": "The Moody Blues"}, {"times": [{"ending_time": 1995, "starting_time": 1967}, {"ending_time": 2018, "starting_time": 1997}], "class": "Fleetwood Mac", "label": "Fleetwood Mac"}, {"times": [{"ending_time": 2005, "starting_time": 1994}, {"ending_time": 2018, "starting_time": 2009}], "class": "Limp Bizkit", "label": "Limp Bizkit"}, {"times": [{"ending_time": 1969, "starting_time": 1968}], "class": "July", "label": "July"}, {"times": [{"ending_time": 2015, "starting_time": 1980}], "class": "Motley Crue", "label": "Motley Crue"}, {"times": [{"ending_time": 2016, "starting_time": 1962}], "class": "David Bowie", "label": "David Bowie"}, {"times": [{"ending_time": 2018, "starting_time": 1961}], "class": "Bob Dylan", "label": "Bob Dylan"}, {"times": [{"ending_time": 2009, "starting_time": 1967}], "class": "Joni Mitchell", "label": "Joni Mitchell"}, {"times": [{"ending_time": 1980, "starting_time": 1968}], "class": "Led Zeppelin", "label": "Led Zeppelin"}, {"times": [{"ending_time": 1951, "starting_time": 1951}], "class": "Jackie Brenston and his Delta Cats", "label": "Jackie Brenston and his Delta Cats"}, {"times": [{"ending_time": 1970, "starting_time": 1960}], "class": "The Beatles", "label": "The Beatles"}, {"times": [{"ending_time": 1975, "starting_time": 1957}, {"ending_time": 1980, "starting_time": 1980}], "class": "John Lennon", "label": "John Lennon"}, {"times": [{"ending_time": 1972, "starting_time": 1965}, {"ending_time": 1989, "starting_time": 1989}, {"ending_time": 1996, "starting_time": 1996}], "class": "Jefferson Airplane", "label": "Jefferson Airplane"}, {"times": [{"ending_time": 2018, "starting_time": 1958}], "class": "Carole King", "label": "Carole King"}, {"times": [{"ending_time": 1979, "starting_time": 1965}, {"ending_time": 2018, "starting_time": 2006}], "class": "Quicksilver Messenger Service", "label": "Quicksilver Messenger Service"}, {"times": [{"ending_time": 2017, "starting_time": 1968}], "class": "Black Sabbath", "label": "Black Sabbath"}, {"times": [{"ending_time": 2018, "starting_time": 1976}], "class": "U2", "label": "U2"}, {"times": [{"ending_time": 2018, "starting_time": 1973}], "class": "AC/DC", "label": "AC/DC"}, {"times": [{"ending_time": 2018, "starting_time": 1962}], "class": "Status Quo", "label": "Status Quo"}, {"times": [{"ending_time": 2018, "starting_time": 1963}], "class": "Eric Clapton", "label": "Eric Clapton"}, {"times": [{"ending_time": 1970, "starting_time": 1968}, {"ending_time": 1973, "starting_time": 1973}, {"ending_time": 1974, "starting_time": 1974}, {"ending_time": 1977, "starting_time": 1977}], "class": "Crosby Stills & Nash", "label": "Crosby Stills & Nash"}, {"times": [{"ending_time": 2017, "starting_time": 1955}], "class": "Chuck Berry", "label": "Chuck Berry"}, {"times": [{"ending_time": 2018, "starting_time": 1954}], "class": "Jerry Lee Lewis", "label": "Jerry Lee Lewis"}, {"times": [{"ending_time": 2018, "starting_time": 1962}], "class": "The Rolling Stones", "label": "The Rolling Stones"}, {"times": [{"ending_time": 1971, "starting_time": 1965}], "class": "Country Joe and the Fish", "label": "Country Joe and the Fish"}, {"times": [{"ending_time": 1970, "starting_time": 1963}], "class": "Jimi Hendrix", "label": "Jimi Hendrix"}, {"times": [{"ending_time": 1969, "starting_time": 1963}, {"ending_time": 2008, "starting_time": 1982}], "class": "John Mayall and The Bluesbreakers", "label": "John Mayall and The Bluesbreakers"}, {"times": [{"ending_time": 1983, "starting_time": 1967}, {"ending_time": 2006, "starting_time": 2006}, {"ending_time": 2012, "starting_time": 2012}], "class": "Sly and the Family Stone", "label": "Sly and the Family Stone"}, {"times": [{"ending_time": 1973, "starting_time": 1919}], "class": "Sister Rosetta Tharpe", "label": "Sister Rosetta Tharpe"}, {"times": [{"ending_time": 1995, "starting_time": 1965}], "class": "Pink Floyd", "label": "Pink Floyd"}, {"times": [{"ending_time": 1988, "starting_time": 1977}, {"ending_time": 1995, "starting_time": 1991}], "class": "Dire Straits", "label": "Dire Straits"}, {"times": [{"ending_time": 2006, "starting_time": 2000}, {"ending_time": 2018, "starting_time": 2011}], "class": "The Darkness", "label": "The Darkness"}, {"times": [{"ending_time": 2018, "starting_time": 1985}], "class": "Coldplay", "label": "Coldplay"}, {"times": [{"ending_time": 2018, "starting_time": 1985}], "class": "Radiohead", "label": "Radiohead"}, {"times": [{"ending_time": 2018, "starting_time": 1971}], "class": "Patti Smith", "label": "Patti Smith"}, {"times": [{"ending_time": 1998, "starting_time": 1946}], "class": "Carl Perkins", "label": "Carl Perkins"}, {"times": [{"ending_time": 1968, "starting_time": 1966}], "class": "Cream", "label": "Cream"}]

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