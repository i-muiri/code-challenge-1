/*
Grade Assigner
    
}

*/
   
    

    document.getElementById("marksButton").onclick = function(){



        var points = document.getElementById("marksText").value;
    
        
    // if statement to sort assign points to grade
        if (points>79 && points <=100){
            console.log("You had A of", points)
        }
        else if (points >=60 && points <=79){
            console.log("You had B of", points)
        }
        else if (points >=50 && points <=59){
            console.log("You had C of", points)
        }
        else if (points >=40 && points <=49){
            console.log("You had D of ", points)
        }
        else if (points >=0 && points <=39){
            console.log("You had E of ", points)
        }
        else{
            console.log("invalid")
        }
    }
