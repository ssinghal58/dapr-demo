from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    name = data.get("name", "Guest")
    return jsonify({"message": f"Processed data for {name} in Python!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8082)
