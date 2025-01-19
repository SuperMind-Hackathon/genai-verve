from firecrawl import FirecrawlApp
import re
from bs4 import BeautifulSoup
import requests

API_KEY_YT = "XXXXXXX"

res = requests.get("https://filestage.io/blog/best-viral-marketing-campaigns/")

soup = BeautifulSoup(res.text, 'html.parser')
for link in soup.find_all('iframe',
                          attrs={'src': re.compile("^https://")}):
    print(link.get('src'))

def get_transcript(url):
    """
    Fetches the transcript of a YouTube video.

    @param {str} url - The URL of the YouTube video.
    @return {list} - A list of dictionaries containing video details.
    """
    arr = []
    vids = ["wqCP0HoUzz0","zWfX5jeF6k4","joTnLPwOLzw","3Wmpe98ZThQ","qQGwQFpby0k","La7B8mBnTXs","yUEY-7gcj_8","ZkL07bNUjts","s4S70rvslCw","XS6ysDFTbLU"]
    res = requests.get("https://www.googleapis.com/youtube/v3/videos", { "id": "wqCP0HoUzz0,zWfX5jeF6k4,joTnLPwOLzw,3Wmpe98ZThQ,qQGwQFpby0k,La7B8mBnTXs,yUEY-7gcj_8,ZkL07bNUjts,s4S70rvslCw,XS6ysDFTbLU", "part": "snippet,statistics", "key": API_KEY_YT})
    for i,item in enumerate(res.json()['items']):
        result = {
        'title': item['snippet']['title'],
        'description': item['snippet']['description'],
        'channelTitle': item['snippet']['channelTitle'],
        # ...existing code...
        }
        arr.append(result)
    return arr