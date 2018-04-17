import json
import datetime
from pprint import pprint

data = json.load(open('timeline.json'))

pprint(data)

print data["AC/DC"]["start"]

def timeline_data(data):
    ret = []
    for key in data:
        d = {}
        d["label"] = key
        times = []
        times_d = {}
        times_d["starting_time"] = datetime.date(data[key]["start"][0])
        times_d["ending_time"] = datetime.date(data[key]["end"][-1])
        times["times"] = times_d
    ret.append(d)
        
    
