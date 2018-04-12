from flask import Flask, render_template
import json
app = Flask(__name__)

@app.route("/")
def home():
    f = open("data/bands.json", 'rU')
    bands = json.loads(f.read())
    f.close()
    f = open("data/genres.json", 'rU')
    genres = json.loads(f.read())
    f.close()
    return render_template("home.html", bands=bands, genres=genres)

if __name__ == "__main__":
    app.debug = True
    app.run()
