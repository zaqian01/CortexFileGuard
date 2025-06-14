from flask import Flask, jsonify
import subprocess
import json

app = Flask(__name__)

@app.route('/scan', methods=['GET'])
def scan_files():
    subprocess.run(["../scanner.exe"], shell=True)
    with open("../output.json", "r") as f:
        data = json.load(f)
    return jsonify({"total": len(data), "files": data})

if __name__ == '__main__':
    app.run(debug=True)
