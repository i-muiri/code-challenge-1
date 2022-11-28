
document.getElementById("speedButton").onclick = function(){



    let speed = document.getElementById("speedText").value;
    let points =  Math.floor((speed - 70) / 5)
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

