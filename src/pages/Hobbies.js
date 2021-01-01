import fungeonCrawler from "../assets/images/fungeon-crawler.PNG"

function Hobbies() {
    return (
        <>
        <div className="contentPage h6 mx-5 mt-3">Outside of work, my time is most enjoyably spent cooking stonefire pizzas, woodworking, learning about and doing vehicle maintenance, and tinkering with electronics.
        I also enjoy kicking butt on the cornhole boards while grilling some brats.</div>
            <div className="h6 mx-5 mt-3">
                <p>
                    I've also begun working on a dungeon-crawler-style browser game (cleverly) called&nbsp;
                <a className="text-reset underline" href="https://github.com/alexo-a/fungeon-crawler"><u>fungeon-crawler</u></a>
                . Hopefully I get time to get it to a publishable state; I've really enjoyed working on it. Here's a screenshot, but be warned: I did all the artwork and I am obviously not artistic...
                </p>
                <img src={fungeonCrawler} alt="fungeon-crawler screenshot" className="my-4 img-fluid" />
                <p>My goal is to work out much of the logic first before doing much more interface beautification</p>
                
        </div>
        <div></div>
</>
    );
}
export default Hobbies;