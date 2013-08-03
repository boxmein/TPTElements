
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { c: "//" });
};

exports.lua = function(req, res){
  res.render('lua', { c: "--" });
};

exports.referenceLua = function (req, res) {
  res.render('reference-lua');
};

exports.reference = function (req, res) {
  res.render('reference'); 
}