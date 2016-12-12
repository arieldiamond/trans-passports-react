# Trans-Passports API

Objective: To smooth the path to getting a correctly-gendered passport for transgender Americans.

## Local Installation
- `git clone` repo at [`https://github.com/arieldiamond/trans-passports-react`](https://github.com/arieldiamond/trans-passports-react)
- `npm install`
- `npm start`
- Visit [localhost:8080](http://localhost:8080)

## To Update Data
- From Google spreadsheets, `File > Download As > CSV`
- Open CSV file in code editor like Sublime, copy text
- Use CSV to JSON converter like [csvjson](http://www.csvjson.com/csv2json)
- Select `Output: Hash` and click `Convert`
- Copy output into `data/trans_passports_data.json`
