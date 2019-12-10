BigQuery Analytics Parser

Use this repo to group devices based on
- brand
- name
- hardware model
- os
- os version
- language

To use
1. Log onto big query and make a query
2. Download data and place it in data/android-data.json
3. Run script: `node index.js`
4. Maybe pipe it to a file `node index.js > myData.json`
