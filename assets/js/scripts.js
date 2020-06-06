



$(document).ready(function() {
    $.noConflict();
    document.getElementById("ope").load();
    //document.getElementById("sorry").load();
    var boxStyle = document.getElementById("box").style;
    var rotationAngle = 0;
    var transformArray;
    //var gameModeOn = false;
    if (boxStyle.transform.length == 0){
        transformArray = [0,0];
        } else {
        transformArray = boxStyle.transform.split(",");
    };
    var xPos = parseFloat(transformArray[0]);
    var yPos = parseFloat(transformArray[1]);

    document.getElementById("s1").style.backgroundColor = "white";
    document.getElementById("s1").style.color = "black";

    //Thank god for SO: https://stackoverflow.com/questions/48693913/bootstrap-4-activate-bs-scrollspy-event-is-not-firing
    jQuery(window).on('activate.bs.scrollspy', function () {
        if (document.getElementById("myScrollspy").style.display != "none") {
            var hash = jQuery("#myScrollspy").find("ul li a.active").attr("href");
            jQuery('.nav-link').css({ 'background-color': 'white', 'color': 'black'});  
            jQuery('.active').css({ 'background-color': 'black',  'color': 'white'}); 
        
            //change hrefs on arrow up and arrow down
/*             switch (hash) {
                case "#introduction":
                    document.getElementById("upArrow").href="";
                    document.getElementById("downArrow").href="#about-me";
                    break;
                case "#about-me":
                    document.getElementById("upArrow").href="#introduction";
                    document.getElementById("downArrow").href="#work-examples";
                    break;
                case "#work-examples":
                    document.getElementById("upArrow").href="#about-me";
                    document.getElementById("downArrow").href="#hobbies";
                    break;
                case "#hobbies":
                    document.getElementById("upArrow").href="#work-examples";
                    document.getElementById("downArrow").href="#contact-me";
                    break;
                case "#contact-me":
                    document.getElementById("upArrow").href="#hobbies";
                    document.getElementById("downArrow").href="#contact-me";
                    break;
            }; */
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
                jQuery("#comic").html("");//JSON.stringify(parsed_json["alt"])"");//add alt text
                jQuery("#comic").append(
                    jQuery("<h3/>").text(parsed_json["title"] + ", #" + parsed_json["num"]),
                    jQuery("<img/>").attr({
                        src: parsed_json["img"],  //add image
                        //jQuery("<img/>").attr({
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
            //document.getElementById("ope").play();
            //if (Math.round(Math.random())==1){play('ope')} else {play('sorry')};
            play('ope');
        }
    });
    function AssembleTransformString(x, y, r){
        //formats the style.transform string necessary to move the box.
        return "translate(" + x.toString() + "px, " + y.toString() + "px) rotate(" + rotationAngle + "deg)"
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
}