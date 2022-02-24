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

function translateGroup(d, i ){
    let x = Math.random() * 300;
    let y = Math.random() * 300;
    return "translate("+x+","+y+")"; //"+x+" is the correct syntax to use variables
}


function gotData(incomingData){
    console.log("the incoming data is:" , incomingData)
    //                     0                 7              7
//     viz.selectAll(".blackCircles").data(incomingData).enter().append("circle")
//                                                       . attr("class", "blackCircles")
//                                                       . attr("cx", randomX) //. attr("cx", () =>  Math.random()*400)
//                                                       . attr("cy", randomY)
//                                                       . attr("r", 10)
//                                                       . attr("fill", "black")
//     ;

//     viz.selectAll(".redCircles").data(incomingData).enter().append("circle")
//                                                              . attr("class", "redCircles")
//                                                              . attr("cx", randomX) //. attr("cx", () =>  Math.random()*400)
//                                                              . attr("cy", randomY)
//                                                              . attr("r", 10)
//                                                              . attr("fill", "red")
// ;
               //                     0                 7              7   
let datagroups = viz.selectAll(".datagroup").data(incomingData).enter().append("g") //"g" doesn't have x pos and y pos
                                                        . attr("class", "datagroup")
;

datagroups.append("circle")
          . attr("cx", 0) //. attr("cx", () =>  Math.random()*400)
          . attr("cy", 0)
          . attr("r", 30)
          . attr("fill", "black")
;

datagroups.append("circle")
          . attr("cx", 30) //. attr("cx", () =>  Math.random()*400)
          . attr("cy", 0)
          . attr("r", 30)
          . attr("fill", "red")
;

datagroups.append("text")
            .text("hello")
            . attr("x", 0) //positions for text is just "x" & "y"
            . attr("y", 50)
;

datagroups.attr("transform", translateGroup)
;

}


d3.json("data.json").then(gotData)

