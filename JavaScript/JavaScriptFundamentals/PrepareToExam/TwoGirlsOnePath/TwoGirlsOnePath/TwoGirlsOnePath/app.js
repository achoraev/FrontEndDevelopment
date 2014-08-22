var params = ['4', '17', '4', '2', '7', '11', '3', '2'];

Solve(params);

function Solve(params) {   
    var fullPath = params.map(Number);    
    var len = fullPath.length;

    // solution
    var mollyVisitZero = false;   
    var MollyResult = fullPath[0];
    var DollyResult = fullPath[len - 1];
    var mollyNextPos = fullPath[0];  
    var dollysNextPos = fullPath[len - 1];  
    var oldPositionMolly = 0;
    var oldPositionDolly = 0;                 
    fullPath[0] = 0;        
    fullPath[len - 1] = 0;
          
    while (true)
    {                        
        //mollys moves
        if (mollyNextPos > len){
            mollyNextPos = mollyNextPos % len;
        }
        if (dollysNextPos > len){
            dollysNextPos = dollysNextPos % len;
        }
        if (fullPath[mollyNextPos] === 0){                
            mollyVisitZero = true;
        }
        if (fullPath[(len - dollysNextPos - 1)] === 0){
            break;
        } else {
            if (mollyNextPos == dollysNextPos){
                MollyResult += mollyNextPos / 2;
                DollyResult += mollyNextPos / 2;
                oldPositionMolly = mollyNextPos;
                oldPositionDolly = len - dollysNextPos - 1;
                mollyNextPos += fullPath[mollyNextPos];
                dollysNextPos += fullPath[oldPositionDolly];
                if (mollyNextPos % 2 === 0) {
                    fullPath[oldPositionMolly] = 0;
                    fullPath[oldPositionDolly] = 0;  
                } else {
                    fullPath[oldPositionMolly] = 1;
                    fullPath[oldPositionDolly] = 1;    
                }
            } else {
                MollyResult += fullPath[mollyNextPos];
                DollyResult += fullPath[(len - dollysNextPos - 1)]; 	            
                oldPositionMolly = mollyNextPos;
                oldPositionDolly = len - dollysNextPos - 1;
                mollyNextPos += fullPath[mollyNextPos];
                dollysNextPos += fullPath[oldPositionDolly];
                fullPath[oldPositionMolly] = 0;
                fullPath[oldPositionDolly] = 0; 
            }
        }
        if (mollyVisitZero) {
            break;
        }                        
    }

    //print result
    if (MollyResult > DollyResult) {
        console.log("Molly");
        console.log(MollyResult + " " + DollyResult);
    } else if (MollyResult < DollyResult) {
        console.log("Dolly");
        console.log(MollyResult + " " + DollyResult);           
    } else {
        console.log("Draw");
        console.log(MollyResult + " " + DollyResult);
    }
}