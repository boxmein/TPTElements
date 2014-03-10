var fs = require('fs')
  , md = require('markdown').markdown
  , path = require('path')
  // regexes
  , namerx = /^NAME (.+)\s*$/
  , descrx = /^DESCRIPTION (.+)\s*$/
  , linkrx = /^LINK (.+)\s*$/
  , detailsrx = /^DETAILS\s*$/
  , commentrx = /^#/
  , entryrx = /\.entry$/i

  , entries = {stuff: []};

// parse .entry files to objects

var parsetoobj = function (file) {
  var data = fs.readFileSync(file, 'UTF8').replace('\r', '').split('\n');
  
  var obj = {};
  // console.log(data);

  // parse the first few lines
  for (var i=0;i<data.length;i++) {

    // # comments
    if (commentrx.test(data[i])) 
      continue; 

    // NAME nil tpt.test () 
    if (namerx.test(data[i])) {
      obj.name = data[i].match(namerx)[1];
    }

    // DESCRIPTION A test function. Doesn't really do anything.
    else if (descrx.test(data[i])) {
      obj.description = data[i].match(descrx)[1];
    }

    // LINK #tpt.test
    else if (linkrx.test(data[i])) {
      obj.link = data[i].match(linkrx)[1];
    }

    // DETAILS \n .....
    // parse the rest of the lines as markdown
    else if (detailsrx.test(data[i])) {
      break;
    }
  }
  obj.details = md.toHTML(data.slice(i+1).join('\n'));
  entries.stuff.push(obj);
  // console.log(obj);
};

// entry point
if (!process.argv[2] || process.argv[2] == '--help') {
  console.log('entry file -> JSON processor\nfile format:\nNAME <function signature>\\r\\n\nDESCRIPTION <function description\\r\\n\nLINK #anchor-to-lua-reference.html\\r\\n\nDETAILS\\r\\nmarkdown text for details until end of file\nusage: ' + process.argv[1] + ' <path to lua script entry files>');
  process.exit(0);
}

// inb5 race conditions
if (!fs.existsSync(process.argv[2])) {
  console.log('directory ' + process.argv[2] + ' does not exist! see --help for help.');
}

var directory = path.resolve(process.argv[2]);
fs.readdirSync(directory).map(function(each) {
  if (entryrx.test(each)) {
    parsetoobj( path.join(directory, each) );
  }
});

process.stdout.write(JSON.stringify(entries));