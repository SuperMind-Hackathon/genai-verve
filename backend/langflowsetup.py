import json
import os
import requests
from typing import Optional

# Retrieve configuration from environment variables
BASE_API_URL = os.getenv("BASE_API_URL") if not None else ''
LANGFLOW_ID = os.getenv("LANGFLOW_ID") if not None else ''
FLOW_ID = os.getenv("FLOW_ID") if not None else ''
APPLICATION_TOKEN = os.getenv("APPLICATION_TOKEN") if not None else ''
ENDPOINT = os.getenv("ENDPOINT") if not None else ''

TWEAKS = {
    "ChatInput-LHXvo": {},
    "ParseData-ky5qO": {},
    "Prompt-jTpSM": {},
    "ChatOutput-xmthY": {},
    "AstraDB-Vs39Y": {},
    "GoogleGenerativeAIModel-TNst9": {},
    "AzureOpenAIEmbeddings-kjFM2": {},
    "File-D15VC": {},
    "SplitText-q7NLv": {},
    "AzureOpenAIEmbeddings-Es3Fd": {},
    "AstraDB-SItgZ": {}
}


def run_flow(
    message: str,
    endpoint: str = ENDPOINT,
    output_type: str = "chat",
    input_type: str = "chat",
    tweaks: Optional[dict] = None,
    application_token: Optional[str] = APPLICATION_TOKEN
) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param endpoint: The ID or the endpoint name of the flow
    :param output_type: The output type (default is 'chat')
    :param input_type: The input type (default is 'chat')
    :param tweaks: Optional tweaks to customize the flow
    :param application_token: Application Token for authentication
    :return: The JSON response from the flow
    """
    api_url = endpoint

    payload = {
        "input_value": message,
        "output_type": output_type,
        "input_type": input_type,
    }
    headers = {"Authorization": f"Bearer {application_token}", "Content-Type": "application/json"}

    if tweaks:
        payload["tweaks"] = tweaks

    response = requests.post(api_url, json=payload, headers=headers)
    response.raise_for_status()  # Raise an error for HTTP issues
    return response.json()


def start_flow(message: str, endpoint: str = ENDPOINT, tweaks: Optional[dict] = TWEAKS, passcode = ''):
    """
    Main function to call the flow.

    :param message: The message to send
    :param endpoint: The endpoint or flow ID
    :param tweaks: Custom flow tweaks
    """
    try:
        # Run the flow
        response = run_flow(
            message=message,
            endpoint=endpoint,
            tweaks=tweaks,
            application_token=passcode
        )
        # Extract the response message
        response_message = response["outputs"][0]["outputs"][0]["results"]["message"]["text"]
        print(response_message)
        return response_message
    except Exception as e:
        print(f"Error: {e}")
        return {"error": str(e)}

