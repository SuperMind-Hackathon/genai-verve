from flask import Flask, request, jsonify
from flask_cors import CORS
import langflowsetup
import os

app = Flask(__name__)
CORS(app)
import json


@app.route("/api/getresponse", methods=["POST"])
def get_response():
    """
    @api {post} /api/getresponse Get Response
    @apiName GetResponse
    @apiGroup Response
    @apiVersion 1.0.0

    @apiDescription This endpoint processes the input data and returns the response from various flows.

    @apiParam {String} productDescription Description of the product.
    @apiParam {String} customerSegment Segment of the customer.
    @apiParam {String} adLocation Location of the advertisement.
    @apiParam {String} competitor Competitor information.

    @apiSuccess {Object} ctr Response from the CTR flow.
    @apiSuccess {Object} hooks Response from the Hooks flow.
    @apiSuccess {Object} analysis Response from the Analysis flow.

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        "ctr": { ... },
        "hooks": { ... },
        "analysis": { ... }
    }

    @apiError {String} error Error message.

    @apiErrorExample {json} Error-Response:
    HTTP/1.1 400 Bad Request
    {
        "error": "Invalid input data"
    }

    """
    data = request.get_json()

    productDescription = data.get("productDescription")
    customerSegment = data.get("customerSegment")
    adLocation = data.get("adLocation")
    competitor = data.get("competitor")

    message = json.dumps(
        {
            "productDescription": productDescription,
            "customerSegment": customerSegment,
            "adLocation": adLocation,
            "competitor": competitor,
        },
        indent=4,
    )

    ctr = langflowsetup.start_flow(
        message, endpoint=os.getenv("CTR_URL"), passcode=os.getenv("CTR_TOKEN")
    )

    hooks = langflowsetup.start_flow(
        message, endpoint=os.getenv("HOOKS_URL"), passcode=os.getenv("HOOKS_TOKEN")
    )

    analysis = langflowsetup.start_flow(
        message,
        endpoint=os.getenv("ANALYSIS_URL"),
        passcode=os.getenv("ANALYSIS_TOKEN"),
    )
    return jsonify({"ctr": ctr, "hooks": hooks, "analysis": analysis})


@app.route("/api/gethooks", methods=["POST"])
def get_hooks():
    data = request.get_json()
    message = json.dumps(data, indent=4)
    hooks = langflowsetup.start_flow(
        message, endpoint=os.getenv("CTR_URL_NEW"), passcode=os.getenv("CTR_TOKEN_NEW")
    )

    return jsonify({"newHooks": hooks})


@app.route("/api/getctr", methods=["POST"])
def get_ctrs():
    data = request.get_json()
    message = json.dumps(data, indent=4)
    ctrs = langflowsetup.start_flow(
        message, endpoint=os.getenv("CTR_URL_NEW"), passcode=os.getenv("CTR_TOKEN_NEW")
    )

    return jsonify({"newCtrs": ctrs})


@app.route("/")
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(debug=True)
