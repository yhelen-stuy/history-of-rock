from flask import Flask, render_template
import json
app = Flask(__name__)

f = open("./active-years.json", 'rU')
bands = json.loads(f.read())
f.close()

@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    # print bands
    app.debug = True
    app.run()
