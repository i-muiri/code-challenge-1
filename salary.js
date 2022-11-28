document.getElementById("grossButton").onclick = function(){ //HTML DOM element to activate button function
 

    
    let salary = parseInt(document.getElementById("salaryText").value)//HTML DOM method to read textbox conetent
    let allowance = parseInt(document.getElementById("allowanceText").value) //HTML DOM method to read textbox conetent
    let gross = (salary + allowance)
    console.log("Your gross salary is", gross)

    function computeNet(NHIF, NSSF, PAYE, netSalary){ //function to compute net salary after deductions
        function computeNHIF(){ //function to compute NHIF
            if(gross<6000){
                NHIF = 150;
            }
            else if(gross>=6000 && gross<8000){
                NHIF = 300;
            }
            else if(gross>=8000 && gross<12000){
                NHIF = 400;
            }
            else if(gross>=12000 && gross<15000){
                NHIF = 500;
            }
            else if(gross>=15000 && gross<20000){
               NHIF = 600;
            }
            else if(gross>=20000 && gross<25000){
               NHIF = 750;
            }
            else if(gross>=25000 && gross<30000){
               NHIF = 850;
            }
            else if(gross>=30000 && gross<35000){
               NHIF = 900;
            }
            else if(gross>=35000 && gross<40000){
                NHIF = 950;
            }
            else if(gross>=40000 && gross<45000){
                NHIF = 1000;
            }
            else if(gross>=45000 && gross<50000){
                NHIF = 1100;
            }
            else if(gross>=50000 && gross<60000){
                NHIF = 1200;
            }
            else if(gross>=60000 && gross<70000){
                NHIF = 1300
            }else if(gross>=70000 && gross<80000){
                NHIF = 1400
            }
            else if(gross>=80000 && gross<90000){
                NHIF = 1500
            }else if(gross>=90000 && gross<100000){
                NHIF = 1600
            }
            else {
                NHIF = 1700
            }
           console.log("Your NHIF is", NHIF) 
        }
        function computeNSSF(){ //function to compute NSSF
          
             
            NSSF = 0.06 *gross
            if (NSSF>=2160){
                
            }
            console.log("Your NSSF is", NSSF) 
        }

        function computePAYE(taxable){ //function to compute PAYE
            taxable = gross - (NHIF+NSSF)
            console.log("Your taxable is",taxable)
            if (taxable<=24000){
                PAYE = taxable * 0.1;
            }
            else if (taxable>24000 && taxable <=32333){
                PAYE= taxable * 0.25;
            }
            else{
                PAYE = taxable * 0.3;
            }
            console.log("Your PAYE is", PAYE) 
        }
        // Call all functions to execute
        computeNHIF()
        computeNSSF()
        computePAYE()
        netSalary= gross - (NHIF+NSSF+PAYE)
        console.log("Your net is",netSalary)
    }
 computeNet()  
}

