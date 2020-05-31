



$(document).ready(function() {
    $.noConflict();
    
    //Thank god for SO: https://stackoverflow.com/questions/48693913/bootstrap-4-activate-bs-scrollspy-event-is-not-firing
    jQuery(window).on('activate.bs.scrollspy', function () {
    var hash = jQuery("#myScrollspy").find("ul li a.active").attr("href");
    jQuery('.nav-link').css({ 'background-color': 'transparent', 'color': 'black'}); //'fontSize':'14px', 
    jQuery('.active').css({ 'background-color': 'white',  'color': 'black' }); //'fontSize':'20px',
    
    //change hrefs on arrow up and arrow down
    switch (hash) {
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
    };
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
                jQuery("#comic").html(JSON.stringify(parsed_json["alt"]));
                jQuery("#comic").append(
                    jQuery("<img/>").attr({
                        src: parsed_json["img"],
                        //jQuery("<img/>").attr({
                        alt: parsed_json["alt"],
                        title: parsed_json["title"]
                    }),
                    jQuery("<h3/>").text(parsed_json["title"] + ", " + parsed_json["num"])
                );
            }
        });
    };

    document.getElementById("randomizer").addEventListener("click", function(){
        var randNum = Math.floor((Math.random() * 2312) + 1);
        updateComic(randNum);
    });

    document.getElementById("s1").style.backgroundColor = "white";
    document.getElementById("s1").style.color = "black";




});

