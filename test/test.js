var snap = Snap(912,912);

var p_line1 = snap.paper.line(0,0, 8,8).attr({stroke: '#00ADEF'});
var p_line2 = snap.paper.line(8,0, 0,8).attr({stroke: '#00ADEF'});
var p_rect = snap.paper.rect(0,0, 8,8).attr({fill: '#3A54A4', opacity: 0.9});

var pattern = snap.paper.g(p_line1, p_line2, p_rect).pattern(0,0, 8,8);

var background = snap.paper.rect(0,0, 912,912).attr({fill: pattern});

var headline = snap.paper.text(56,100, ['The Three Layers','of','Every Web Page']).attr({fill: '#FBAF3F', fontFamily: 'Impact'});

    headline.select('tspan:first-of-type').attr({fontSize: '2.8em'})
    headline.select('tspan:nth-of-type(2)').attr({fill: 'none', stroke: '#FBAF3F', fontSize: '2.2em', dx: '15px', dy: '5px'});
    headline.select('tspan:last-of-type').attr({fontSize: '3.6em', x: '56px', y: '160px'});

var f_Shadow = snap.paper.filter(Snap.filter.shadow(-2, 4, 4));

var html_layer = snap.paper.rect(490,110, 200,30).attr({fill: '#00ADEF'}).transform('skewX(45)');
var css_layer = snap.paper.rect(500,100, 200,30).attr({fill: '#8CC63E', filter: f_Shadow}).transform('skewX(45)');
var js_layer = snap.paper.rect(510,90, 200,30).attr({fill: '#ED1C24', filter: f_Shadow}).transform('skewX(45)');

var underline = snap.paper.line(56,180, 856,180).attr({stroke: '#FBAF3F', strokeWidth: '5px'});

// Grid

var arrow = snap.paper.polygon([0,10, 4,10, 2,0, 0,10]).attr({fill: '#FFF'}).transform('r270');
var marker = arrow.marker(0,0, 10,10, 0,5);

var grid_hl1 = snap.paper.line(56,380, 856,380).attr({stroke: '#FFF', strokeWidth: '2px'});
var grid_hl2 = grid_hl1.clone().transform('t0,200');
var grid_hl3 = grid_hl1.clone().transform('t0,400');
var grid_vl1 = snap.paper.line(256,200, 256,800).attr({stroke: '#FFF', strokeWidth: '2px', markerStart: marker});
var grid_vl2 = grid_vl1.clone().transform('t330,0');

// Shapes

var html_square = snap.paper.rect(96,620, 120,120).attr({fill: '#00ADEF', stroke: '#FFF', strokeWidth: '2px', filter: f_Shadow});
var html_square_text = snap.paper.text(110,693, 'HTML').attr({fill: '#FFF', fontFamily: 'Comic Sans MS', fontSize: '2em', fontWeight: 'bold'});

var css_circle = snap.paper.circle(156,480, 60).attr({fill: '#8CC63E', stroke: '#FFF', strokeWidth: '2px', filter: f_Shadow});
var css_circle_text = snap.paper.text(124,493, 'CSS').attr({fill: '#FFF', fontFamily: 'Comic Sans MS', fontSize: '2em', fontWeight: 'bold'});

var js_triangle = snap.paper.polygon([96,325, 216,325, 156,235]).attr({fill: '#ED1C24', stroke: '#FFF', strokeWidth: '2px', filter: f_Shadow});
var js_triangle_text = snap.paper.text(132,306, 'JS').attr({fill: '#FFF', fontFamily: 'Comic Sans MS', fontSize: '2em', fontWeight: 'bold'});

// Ribbons & Text Areas

var html_ribbon = snap.paper.polygon([296,798, 546,798, 526,780, 546,762, 296,762, 316,780, 296,798]).attr({fill: '#00ADEF', filter: f_Shadow});
var css_ribbon = html_ribbon.clone().attr({fill: '#8CC63E'}).transform('t0,-200');
var js_ribbon = html_ribbon.clone().attr({fill: '#ED1C24'}).transform('t0,-400');

var html_ribbon_text = snap.paper.text(355,790, 'STRUCTURE').attr({fill: '#FFF', fontFamily: 'Comic Sans MS', fontSize: '1.4em'});
var css_ribbon_text = snap.paper.text(333,590, 'PRESENTATION').attr({fill: '#FFF', fontFamily: 'Comic Sans MS', fontSize: '1.4em'});
var js_ribbon_text = snap.paper.text(330,390, 'INTERACTIVITY').attr({fill: '#FFF', fontFamily: 'Comic Sans MS', fontSize: '1.4em'});

var html_textarea = snap.paper.text(300,630, ['HTML adds structure to a website\'s', 'content (text, images, and so on).', 'You can think of it as the anatomy', 'of the web pages.']).attr({fill: '#FFF', fontFamily: 'Trebuchet MS', fontStyle: 'italic'});
var css_textarea = snap.paper.text(300,430, ['CSS adds style to the content.', 'It makes the web page\'s components', 'to appear in different colors, sizes,', 'and so on.']).attr({fill: '#FFF', fontFamily: 'Trebuchet MS', fontStyle: 'italic'});
var js_textarea = snap.paper.text(300,230, ['JavaScript adds behavior', 'to the content. It makes the latter', 'responsive to user\'s actions.', 'Click the first post\'s image to see', 'an interactive example.']).attr({fill: '#FFF', fontFamily: 'Trebuchet MS', fontStyle: 'italic'});

var textareas = [html_textarea, css_textarea, js_textarea];

for (var i = 0; i < textareas.length; i++) {

  textareas[i].selectAll('tspan').attr({x: '300px', dy: '1.2em'});

};

// Wireframes

var page = snap.paper.rect(610,400, 230,160).attr({fill: '#DFEDCC', filter: f_Shadow});
var logo = snap.paper.rect(625,410, 70,30).attr({fill: '#BDD1EC'});
var nav = snap.paper.line(620,450, 830,450).attr({stroke: '#652C90', strokeWidth: '6px', strokeDasharray: '25 5'});

var post_img = snap.paper.rect(625,464, 50,50).attr({fill: '#1B75BB'});
var post_txt = snap.paper.line(650,520, 650,550).attr({stroke: '#939597', strokeWidth: '50px', strokeDasharray: '3 7'});

var post = snap.paper.g(post_img, post_txt);
var post_2 = post.clone().transform('t70,0');
var post_3 = post.clone().transform('t140,0');

var f_Saturate = snap.paper.filter(Snap.filter.saturate(1));

var css_wireframe = snap.paper.g(page, logo, nav, post, post_2, post_3);
var html_wireframe = css_wireframe.clone().transform('t0,200').attr({filter: f_Saturate});
var js_wireframe = css_wireframe.clone().transform('t0,-200');

var panel = snap.paper.rect(650,200, 150,100, 3,3).attr({fill: '#1C98BA'});

var circle = snap.paper.circle(800,200, 10).attr({fill: '#1B75BB', stroke: '#DFEDCC', strokeWidth: '2px'});
var close_icon = snap.paper.text(796,204, 'x').attr({fill: '#FFF', fontFamily: 'Verdana'});
var close_button = snap.paper.g(circle, close_icon);

var lightbox = snap.paper.g(panel, close_button).attr({opacity: 0}).insertBefore(js_wireframe);

var ipost = js_wireframe.select('g:first-of-type>rect').attr({fill: '#1B75BB'})
                        .mouseover(function(){
                          this.attr({fill: '#003EBA', cursor: 'pointer'});
                        })
                        .mouseout(function(){
                          this.attr({fill: '#1B75BB'});
                        });

ipost.click(function(){

  lightbox.animate({transform: 't0,30', opacity: 1}, 400)
          .insertAfter(js_wireframe);

});

close_button.mouseover(function(){

  this.attr({cursor: 'pointer'});

}).click(function(){

  lightbox.animate({transform: 't0,0', opacity: 0}, 400, function(){

      lightbox.insertBefore(js_wireframe);

  });

});

var footer_text = snap.paper.text(543,872, ['Made with','for SitePoint.com']).attr({fill: '#B5DD25', fontFamily: 'Comic Sans MS', fontSize: '1.2em'});
    footer_text.select('tspan:nth-child(2)').attr({dx: '45px'});

Snap.select('#heart').appendTo(snap);
Snap.select('path').attr({fill: '#EC008B', stroke: '#FFF'}).transform('t645,850').insertAfter(background);
