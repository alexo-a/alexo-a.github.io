import $ from "jquery"

function Home() {


   $("#comic").on("load", updateComic(1));

    // This section largely borrowed from a couple of the links mentioned
    // in this site: https://bioresearch.byu.edu/cs260/jsonp/jsonp.html
    function updateComic(number) {
        var myurl = "https://dynamic.xkcd.com/api-0/jsonp/comic/" + number;
        $.ajax({
            url: myurl,
            crossDomain: true,
            dataType: "jsonp",
            success: function (parsed_json) {
                console.log(parsed_json);
                $("#comic").html("");
                $("#comic").append(
                    $("<h3/>").text(parsed_json["title"] + ", #" + parsed_json["num"]),
                    $("<img/>").attr({
                        src: parsed_json["img"],  //add image
                        alt: parsed_json["alt"],  //add alt text
                        title: parsed_json["title"]
                    }),
                    $("<p/>").text(JSON.stringify(parsed_json["alt"]))
                );
            }
        });
    };
    return (
        <>
                    <p>Welcome!</p>
            <p>I'm Alex Ostrowski and I'm a test-engineer-turned-web-developer.</p>
            <p class="hide-on-mobile">Feel free to check out some comics from <a href="https://xkcd.com/"
                    target="_blank" rel="noopener noreferrer">xkcd</a>. These hilarious comics often contain references
                to both engineering and programming, so I particularly enjoy them!</p>
            <section class="comic-section hide-on-mobile">
                <button id="randomizer" onClick={function () {
                    updateComic(Math.floor((Math.random() * 2312) + 1));
                }}>Get Random xkcd comic</button>
                <div id="comic">No Comic</div>
            </section>
            </>
    );
}
export default Home;