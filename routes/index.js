
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { c: "//" });
};

exports.lua = function(req, res){
  res.render('lua', { c: "--" });
};

exports.reference = function (req, res) {

};