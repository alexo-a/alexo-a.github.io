import $ from "jquery"
import github_logo from "../assets/images/github.svg"
import arduino_logo from "../assets/images/arduino_logo.png"
import cpp_logo from "../assets/images/C++_logo.png"
import javascript_logo from "../assets/images/javascript_logo.png"
import jquery_logo from "../assets/images/jquery_logo.png"
import labview_logo from "../assets/images/labview_logo.png"
import mongo_logo from "../assets/images/mongo_logo.png"
import mysql_logo from "../assets/images/mysql_logo.png"
import node_logo from "../assets/images/node_logo.png"
import python_logo from "../assets/images/python_logo.png"
import react_logo from "../assets/images/react_logo.svg"

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
        <div className="row">
            <div className="col p-3 pt-5">
                <p>I'm Alex Ostrowski, an engineer with five years of test engineering experience looking to utilize my software engineering skills more.</p>

                <p>I've spent nearly five years using LabVIEW to automate automotive sensor manufacturing processes as well as to control lab test equipment. I used VBA to create dozens of Excel macros, some of which saved nearly four hours per day for our technicians and made data analysis easier. On my lunch breaks I taught myself some Python, which I used to create graphing scripts.</p>

                <p>I completed the UW-Extended Campus Coding Bootcamp, which taught me how to be a full-stack MERN web developer.</p>
            </div>
            <div className="col-md m-3">
                <h4>Technical Proficiencies</h4>
                <div className="p-4 d-flex flex-wrap justify-content-around bg-secondary rounded language-box">
                    <img src={github_logo} alt="" />
                    <img src={arduino_logo} className="wide" alt="" />
                    <img src={cpp_logo} alt="" />
                    <img src={javascript_logo} alt="" />
                    <img src={jquery_logo} className="wide" alt="" />
                    <img src={labview_logo} alt="" />
                    <img src={mongo_logo} className="wide" alt="" />
                    <img src={mysql_logo} alt="" />
                    <img src={node_logo} alt="" />
                    <img src={python_logo} className="wide" alt="" />
                    <img src={react_logo} alt="" />
                </div>
            </div>
        </div>


            <p className="hide-on-mobile">Feel free to check out some comics from <a href="https://xkcd.com/"
                    target="_blank" rel="noopener noreferrer">xkcd</a>. These hilarious comics often contain references
                to both engineering and programming, so I particularly enjoy them!</p>
            <section className="comic-section hide-on-mobile">
                <button id="randomizer" onClick={function () {
                    updateComic(Math.floor((Math.random() * 2312) + 1));
                }}>Get Random xkcd comic</button>
                <div id="comic">No Comic</div>
            </section>
            </>
    );
}
export default Home;