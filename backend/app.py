from flask import Flask, request, jsonify
import langflowsetup

app = Flask(__name__)

@app.route("/api/getresponse", methods = ['POST'])
def get_response():
    data = request.get_json()

    if not data or 'message' not in data:
        return jsonify({"error": "Message not provided in the request."}), 400

    message = data['message']
    response = langflowsetup.start_flow(message)

    return jsonify({"response": response})    

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)