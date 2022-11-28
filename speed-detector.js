
document.getElementById("speedButton").onclick = function(){ //HTML DOM button function activation



    let speed = document.getElementById("speedText").value; // HTML DOM element to read speed value in text box
    let points =  Math.floor((speed - 70) / 5) //computation of points with function to round down to the lower or equal integer
if (speed < 70)
    {
        console.log ('OK');
    }
    else if (points <= 12)
    {
        
        console.log(`Points: `+ points)
    }
    else if ( points > 12 )
    {
        console.log ('License suspended')
    }
}

