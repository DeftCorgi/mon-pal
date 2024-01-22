from bs4 import BeautifulSoup
from pprint import pprint
import requests
import sqlite3

# DB 
connection = sqlite3.connect("../../../db/mhw.db")
db = connection.cursor()

db_items = db.execute("""
    SELECT name, icon_name, icon_color 
    FROM item 
    JOIN item_text 
        ON item.id = item_text.item_id
    WHERE lang_id = "en"
    """).fetchall()

# HTML parsing
HTMLFile = open("icons-page.html", "r")
index = HTMLFile.read()
soup = BeautifulSoup(index, "html.parser")

# Create list of all the links
links = []
for a in soup.findAll("a"):
    img = a.find("img").get("src")
    text = a.find("span").text
    links.append({ 'name': text, 'url': img })

# Downloading icons
not_found = 0
for link in links:
    # Find how the file should be named
    result = list(filter(lambda x: x[0] == link['name'], db_items))
    if not result: 
        print(f'not found: {link["name"]}')
        continue

    # download file
    db_item = result[0]
    img_data = requests.get(link['url']).content
    file_name = f'{db_item[1].lower()}_{db_item[2].lower()}.webp'
    with open(file_name, 'wb') as handler:
        handler.write(img_data)
    print(f'Saved icon: {file_name}')

# cleaup
connection.close()