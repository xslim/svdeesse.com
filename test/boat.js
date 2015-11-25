
function draw() {
  var s = Snap("#svg").attr({
    viewBox: "0 0 1300 500",
    width: "300"
  });


  var hull = s.path(
    "M 0,100 Q 500,-120,1190,200" // Port side
  + "M 0 100 L 0 300"
  + "M 0,300 Q 500,520,1190,200"  // Starboard side

  + "M 100,60 l 0,280" // Back bulkhead
  + "M 400,15 l 0 370"

  + "M 100,200 l 200,0" // Middle line

  //+ "l 0,-60 l 100,0 l 0,120 l -100,0 l 0,-60" // Engine

  // + "M 450 10 L 450 390"

  + "M 750 45 L 750 140 M 750 220 L 750 355" // Front bulkhead
  + "M 1080 150 L 1080 250" // Anchor bulkhead
  ).attr({fill: 'none', stroke: 'black'});

  s.rect(300,140,100,120).attr({fill: 'grey', stroke: 'black'});

  var cAttr = {fill: 'blue', stroke: 'none'}
  var c1 = s.path("M 550,60 l 200,0 l 0,60 l -200,0 Z").attr(cAttr);
  var c2 = s.path("M 550,345 l 200,0 l 0,-120 l -60,0 l 0,60 l -140,0 Z").attr(cAttr);

  var c3 = s.path("M 105,65 q 180,-60,190,0 l 0,120 l -190,0 Z").attr(cAttr);

  var c4 = s.path("M 105,335 q 180,60,190,0 l 0,-120 l -190,0 Z").attr(cAttr);

  // Navigation table
  // var navDesk = Snap.Paper;//.svg(300,300)
  // console.log(navDesk.toString());
  var nd = s.group(
    s.rect(0,40,50,60).attr(cAttr),
    s.rect(52,0,60,100).attr({fill: 'brown', stroke: 'black'})
  );
  nd.transform("t435,280")

  console.log(s.toString());

}

window.onload = function() {
  draw();
};
