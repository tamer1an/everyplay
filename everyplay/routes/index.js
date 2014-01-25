
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', scripts: ['javascripts/app.js'], css: ['stylesheets/reset.css','stylesheets/style.css']} ); //'stylesheets/print.css'
};