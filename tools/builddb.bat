:: Run this to create the lzw file from the articles
node generatesearchjson.js ../luatree > search.json.tmp
node jsonpack.js search.json.tmp > ../search-min.lzw
:: del search.json.tmp