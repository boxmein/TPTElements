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

  The database is incomplete and many are missing descriptions. You can 
  send them to me via pull requests, it'd be super appreciated :)

  The search thing is meant to be a very quick review of what to expect
  from a function. More detailed results can be found in the newly
  created local wiki.

Lua reference
-------------

  There is a gigantic tree with a sort of reference to see Lua 
  function signatures and what objects they're under. It's huge!

Wiki
----

  There's also a wiki (work in progress), because the TPT wiki used to 
  suck, and it links back and forth with the Lua reference. Aside that
  I don't let the wiki be edited freely online.



How to set up your own TPTElements 
----------------------------------

  You can set up your own TPTElements clone running on your local web
  server by doing this: 

  1. Configure LionWiki to add a password, or not.
  2. Run the builddb script under tools/ to generate the database for 
     the search thing.
  3. Run your web server! I've made this thing as client-side as 
     possible.

<todo>
