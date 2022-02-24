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
    
    viz.selectAll("circle").data(incomingData).enter().append("circle")
                                                      . attr("cx", randomX)
                                                      . attr("cy", randomY)
                                                      . attr("r", 10)
                                                      . attr("fill", "black")
    ;

}


d3.json("data.json").then(gotData)

