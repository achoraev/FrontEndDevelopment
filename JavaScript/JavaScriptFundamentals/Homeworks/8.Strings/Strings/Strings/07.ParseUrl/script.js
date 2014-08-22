function main() {
    // tests	
    //var link = "http://www.devbg.org/forum/index.php";
    var link = "https://telerikacademy.com/Users/Auth/Login";
    var extractedURL = parseURL(link);
    jsConsole.writeLine("Protocol: " + extractedURL.protocol);
    jsConsole.writeLine("Server: " + extractedURL.server);
    jsConsole.writeLine("Resource: " + extractedURL.resource);
}

main();

// first solution from forums
//function parseURL(input) {
//    var url = document.createElement('a');
//    url.href = input;

//    return { protocol: url.protocol,
//			server: url.hostname,
//			resource: url.pathname };  
//}

function parseURL(input) {
    var object = {
        protocol: '',
        server: '',
        resource: ''
    };
    var startIndexServer = 0;
    var endIndexServer = 0;
    var isInServer = false;

    for (var i = 0; i < input.length; i++) {
        if (input[i] === ':') {
            startIndexServer = i + 3;
            for (var j = 0; j <= i; j++) {
                object.protocol += input[j];
            }
            i += 3;
            isInServer = true;
        }
        if (input[i] === '/' && isInServer) {
            endIndexServer = i;
            break;
        }
    }

    for (var h = startIndexServer; h < endIndexServer; h++) {
        object.server += input[h];
    }

    for (var t = endIndexServer; t < input.length; t++) {
        object.resource += input[t];
    }

    return object;
}