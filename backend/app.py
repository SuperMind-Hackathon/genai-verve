from flask import Flask, request, jsonify
from flask_cors import CORS
import langflowsetup

app = Flask(__name__)
CORS(app)

@app.route("/api/getresponse", methods=['POST'])
def get_response():
    data = request.get_json()

    productDescription = data.get('productDescription')
    customerSegment = data.get('customerSegment')
    adLocation = data.get('adLocation')
    ageGroup = data.get('ageGroup')
    competitor = data.get('competitor')

    print(f"Product Description: {productDescription}")
    print(f"Customer Segment: {customerSegment}")
    print(f"Ad Location: {adLocation}")
    print(f"Age Group: {ageGroup}")
    print(f"Competitor: {competitor}")

    # CTR call 
    # response = langflowsetup.start_flow(message, )

    return jsonify({"response": adLocation})

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)