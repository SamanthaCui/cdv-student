//first thing to do, creating svg first is like creating a canvas
//glabal variable viz for the svg
let viz = d3.select("#viz-container")
                .append("svg")
                    .attr("id", "viz")
                    .attr("width", 600)
                    .attr("height", 400)
                    .style("background-color", "lavender")
;

//data functiono to produce random values
function randomX(d,i){
    return Math.random()*500;
}

function randomY(d,i){
    return Math.random()*400;
}



function gotData(incomingData){
    console.log("the incoming data is:" , incomingData)
    //                     0                 7              7
    viz.selectAll(".blackCircles").data(incomingData).enter().append("circle")
                                                      . attr("class", "blackCircles")
                                                      . attr("cx", randomX) //. attr("cx", () =>  Math.random()*400)
                                                      . attr("cy", randomY)
                                                      . attr("r", 10)
                                                      . attr("fill", "black")
    ;

    viz.selectAll(".redCircles").data(incomingData).enter().append("circle")
                                                             . attr("class", "redCircles")
                                                             . attr("cx", randomX) //. attr("cx", () =>  Math.random()*400)
                                                             . attr("cy", randomY)
                                                             . attr("r", 10)
                                                             . attr("fill", "red")
;

}


d3.json("data.json").then(gotData)

