from flask import Flask, jsonify
from mock_data import contacts


app = Flask(__name__)

# App routes
@app.route("/data", methods=['GET'])
def get_contacts():
    return jsonify({"contacts": contacts})

if __name__ == "__main__":
    app.run(debug=True)