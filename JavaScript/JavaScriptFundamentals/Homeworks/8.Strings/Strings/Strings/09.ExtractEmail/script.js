function main() {   
    var text =
'Pellentesque Impad1945@superrito.com consectetur elementum sem Broure256@armyspy.com, sed vehicula sapien.fermentum ZThaters32@rhyta.com nulla nec, Vestibulum RArly1960@gustr.com bibendum  Aread101@cuvox.de Nunc volutpatre. dered1934@superrito.com Suspendisse, QMances6060@einrot.com dictum et turpis ac, lacinia SDaunt1960@gustr.com suscipit purus.';
    extractEmails(text);
}

main();

function extractEmails(text) {  
    var pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;      
    var result = text.match(pattern);
    for (var i = 0; i < result.length; i++) {
        jsConsole.writeLine(result[i]);
    }
        
}