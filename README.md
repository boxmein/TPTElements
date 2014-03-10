tptelements
===========

  A website that helps Powder Toy developers do their thing: develop.
  Contains many interesting things: an API search, element templates
  in all three major languages for TPT, a gigantic Lua API reference
  and much much more. Runs entirely client-side via Backbone.js and 
  many other fancy internet things.


API search
----------

  The API search engine is a combination of 
  (1) a HTML page that displays the results and sifts through them,  
  (2) a Javascript back-end that fetches data from the server in a
      compressed JSON file, and
  (3) a bunch of entry files that a few Node.js tools transform into 
      the compressed JSON file. 

  You can add new search entries by adding a file under luatree/
  and modifying it according to this syntax: 

    # comment
    NAME <method pseudo-signature> \r\n
    DESCRIPTION <one-liner description of the method> \r\n
    DETAILS \r\n
    <markdown contents of the details box>
    <end of file>

  The database is incomplete and many are missing descriptions. You can 
  send them to me via pull requests, it'd be super appreciated :)

<todo>