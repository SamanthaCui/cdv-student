
let viz = d3.select("#viz-container")
//current selection  <div id="viz-container"> </div>
    .append("svg")
    //current selection <svg>
        .attr("id", "viz") //attr(a,b): a - attribute selected. b - value of attribute
        .attr("width", 800)
        .attr("height", 800)
//let viz = d3.select("#viz-container"); returns the last selection, in this case, its the "svg" 
;

viz.attr("height", 600);

// let myCircle = viz.append("circle")
//     .attr("cx", 100)
//     .attr("cy",400)
//     .attr("r",90)
// ;

// myCircle.attr("fill", "white");

// let myData = [7,6,3,9,4,8,2,5];

// function randomXposition(whatDoessD3pass){
//     console.log(whatDoessD3pass);
//     // return Math.random()*800;
// }

// function xPos(d, i){
//     console.log("D3 passed first", d, "!");
//     console.log("D3 passed second", i, "!");
//     return 50 + i*100;
// }

// function getRadius(d){
//     console.log("D3 passed", d, "intomy xpos position!");
//     return d*5;
// }

// // console.log(randomXposition());

// //              0               5         5          
// viz.selectAll("circle").data(myData).enter().append("circle")
//                         //everything below each run 5 times (also ".append()"):
//                                             .attr("cx", xPos) //we don't call the function, d3 calls it.
//                                             .attr("cy",400)
//                                             .attr("r",getRadius)
// ; //selectAll("circle"): "circle" is empty, but there might be cases with existing circles
// //if there's aleady existing circles, then enter less. 
// //Example, already have 1, data 5, enter 4, loop 4.


//load json file

function xPos(d, i){
    // console.log("D3 passed first", d, "!");
    // console.log("D3 passed second", i, "!");
    return 50 + i*100;
}

function durianRadius(d,i){
    console.log(d);
    return d.durian * 10;
}

function gotData(newData){
    console.log(newData);

    viz.selectAll("circle").data(newData).enter().append("circle")
                        //everything below each run 5 times (also ".append()"):
                                            .attr("cx", xPos) //we don't call the function, d3 calls it.
                                            .attr("cy",400)
                                            .attr("r",durianRadius)
}

d3.json("data.json").then(gotData);