/*var color1 = "#0066ff";
var color2 = "#FCF97A";

$(document).ready(function() {
    $.noConflict();
    document.getElementById("ope").load();

    var boxStyle = document.getElementById("box").style;
    var rotationAngle = 0;
    var transformArray;

    if (boxStyle.transform.length == 0){
        transformArray = [0,0];
        } else {
        transformArray = boxStyle.transform.split(",");
    };
    var xPos = parseFloat(transformArray[0]);
    var yPos = parseFloat(transformArray[1]);

    document.getElementById("s1").style.backgroundColor = color2;
    document.getElementById("s1").style.color = color1; //blue

    //Thank god for SO: https://stackoverflow.com/questions/48693913/bootstrap-4-activate-bs-scrollspy-event-is-not-firing
    jQuery(window).on('activate.bs.scrollspy', function () {
        if (document.getElementById("myScrollspy").style.display != "none") {
            var hash = jQuery("#myScrollspy").find("ul li a.active").attr("href");
            jQuery('.nav-link').css({ 'background-color': color2, 'color': color1});  
            jQuery('.active').css({ 'background-color': color1,  'color': color2}); 
        }
    });
  
    document.getElementById("comic").addEventListener("load", updateComic(1));
    
    // This section largely borrowed from a couple of the links mentioned
    // in this site: https://bioresearch.byu.edu/cs260/jsonp/jsonp.html
    function updateComic(number){
        var myurl= "https://dynamic.xkcd.com/api-0/jsonp/comic/"+number;
        console.log(myurl);
        jQuery.ajax({
            url : myurl,
            crossDomain: true,
            dataType : "jsonp",
            success : function(parsed_json) {
                console.log(parsed_json);
                jQuery("#comic").html("");
                jQuery("#comic").append(
                    jQuery("<h3/>").text(parsed_json["title"] + ", #" + parsed_json["num"]),
                    jQuery("<img/>").attr({
                        src: parsed_json["img"],  //add image
                        alt: parsed_json["alt"],  //add alt text
                        title: parsed_json["title"]  
                    }),
                    jQuery("<p/>").text(JSON.stringify(parsed_json["alt"]))
                );
            }
        });
    };

    document.getElementById("randomizer").addEventListener("click", function(){
        var randNum = Math.floor((Math.random() * 2312) + 1);
        updateComic(randNum);
    });
    
    //Clicked inside the box
    document.getElementById("box").addEventListener("click", function(){ 
        alert("Damn, that wasn't supposed to happen. Try again?");
    });

    document.getElementById("game-mode").addEventListener("click", function(){ 
        boxStyle.transform = AssembleTransformString(0,0,rotationAngle-rotationAngle);
    });
        
    document.getElementById("box").addEventListener("mousemove", function(){  //hover over box and it moves
        if (document.getElementById("game-mode").checked){ //game mode on
            
            var xmax = parseInt(document.getElementById("game-area").offsetWidth) * 0.9;
            var ymax = parseInt(document.getElementById("game-area").offsetHeight) * 0.9;
            
            //make sure new xpos and ypos put the box at least 100 pixels away. It's more fun that way.
            var xPossible = Math.floor((Math.random() * xmax));
            var yPossible = Math.floor((Math.random() * ymax));
            while (Math.abs(xPossible-xPos) < 100 ) {
                xPossible = Math.floor((Math.random() * xmax));
            };
            while (Math.abs(yPossible-yPos) < 100 ) {
                yPossible = Math.floor((Math.random() * ymax));
            };
            xPos = xPossible;
            yPos = yPossible;
            rotationAngle = Math.floor(((Math.random()-.5)*360));
            boxStyle.transform = AssembleTransformString(xPos,yPos,rotationAngle);
            play('ope');
        }
    });

    function AssembleTransformString(x, y, r){
        //formats the style.transform string necessary to move the box.
        return "translate(" + x.toString() + "px, " + y.toString() + "px) rotate(" + r + "deg)"
    };

   //This beauty from https://github.com/twbs/bootstrap/issues/12852#issuecomment-36163121
    jQuery(".topnav #myLinks a").click(function(event) {
        document.getElementById("myLinks").style.display = "none";
    });

});



function play(track) {
    //Thanks to the answer here: https://stackoverflow.com/a/17636398
    var audio = document.getElementById(track);
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
}

function expandNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}*/