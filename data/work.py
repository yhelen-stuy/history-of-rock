import json
import datetime
import time
from pprint import pprint

data = json.load(open('timeline.json'))

def timeline_data(data):
    ret = []
    for key in data:
        d = {}
        d["label"] = key
        d["class"] = key
        times = []
        for i in range(len(data[key]["start"])):
            times_d = {}
            # start = datetime.date(data[key]["start"][i], 1, 1)
            start = int(data[key]["start"][i])
            # Get current year if the band is presently active
            if data[key]["end"][i] == "present":
                end = int(time.strftime("%Y"))
            else:
                end = int(data[key]["end"][i])
            times_d["starting_time"] = start
            times_d["ending_time"] = end
            times.append(times_d)
        d["times"] = times
        ret.append(d)
    return ret

with open("../static/timeline_data.js", "w") as f:
    f.write("var timelineData = " + json.dumps(timeline_data(data)))
