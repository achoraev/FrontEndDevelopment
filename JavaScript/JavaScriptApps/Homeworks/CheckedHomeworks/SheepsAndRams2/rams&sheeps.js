var gameContainer;
var starter;
var submitter;
var Game;
var numberInput;
var gameLog;
var leaderBoard;

window.onload = function(){

    var HighScore;
    HighScore = (function(){
        function HighScore(nickName, score){
            this.setNickName(nickName);
            this.setScore(score);

        }

        HighScore.prototype.setNickName = function(value){
            if((typeof value) != 'string'){
                throw new Error('NickName must be a string');
            }

            this._nickName = value;
        }

        HighScore.prototype.getNickName = function(){
            return this._nickName;
        }

        HighScore.prototype.setScore = function(value){
            if((typeof value) != 'number'){
                throw new Error('Score must be a number');
            }

            if(value<=0){
                throw new Error('Score must be a positive number');
            }

            this._score = value;
        }

        HighScore.prototype.getScore = function(){
            return this._score;
        }

        return HighScore;

    }());

    HighScores = (function(){

        var SCORES_LIMIT=10;
        var scores = JSON.parse(localStorage.getItem('high scores')) || [];
        //parse all the objects to HighScore
        scores = scores.map(function(item){
            return new HighScore(item._nickName, item._score);
        })

        function getHighScores(){
            return scores.slice();
        }

        function addHighScore(highScore){
            if(!(highScore instanceof HighScore)){
                throw new Error('Not an instance of highScore')
            }

            scores.push(highScore);
            scores.sort(function(x, y){
                return x.getScore() - y.getScore();
            })

            if(scores.length > SCORES_LIMIT){
                scores.pop();
            }
        }

        return{
            getHighScores: getHighScores,
            addHighScore: addHighScore
        }

    }());

    function loadOnLeaderBoard(){
        leaderBoard=document.getElementById('leader-board');
        clearList(leaderBoard)
        var fragment=document.createDocumentFragment();
        var score = document.createElement('li');
        for(var i= 0, len=HighScores.getHighScores().length; i<len ;i++){
            score.innerHTML='NickName: ' + HighScores.getHighScores()[i].getNickName() +
                ' / Score: '+ HighScores.getHighScores()[i].getScore() + ' turns';
            fragment.appendChild(score.cloneNode(true));
        }
        leaderBoard.appendChild(fragment);
    }

    loadOnLeaderBoard();


    function clearList(listNode){
        while(listNode.firstChild){
            listNode.removeChild(listNode.firstChild);
        }
    }

    function saveToLocalStorage(score){
        var nickName=prompt('Input your nickname');
        var newScore= new HighScore(nickName, score);
        HighScores.addHighScore(newScore);
        localStorage.setItem('high scores', JSON.stringify(HighScores.getHighScores()));
    }

    gameContainer = document.getElementById('game-container');
    gameLog=document.getElementById('game-log');
    numberInput=document.getElementById('input-number');
    gameContainer.style.display='none';
    starter = document.getElementById('starter');
    starter.addEventListener('click', function(){
        Game.startGame();
        clearList(gameLog);
        gameContainer.style.display='block';
        submitter.disabled = '';
    })
    
    submitter = document.getElementById('submit-number');
    submitter.addEventListener('click', function(){
        var input=parseInt(numberInput.value);
        var gameResponce = Game.guessNumber(input);
        var printedText;

        if(gameResponce.rams === numberInput.value.length){
            printedText='You won! The number was '+ input + '. Score: ' + gameResponce.turnsPassed + ' turns'
            saveToLocalStorage(gameResponce.turnsPassed);
            loadOnLeaderBoard();
            submitter.disabled = 'disabled';
        }
        else{
            printedText = 'Turn ' + gameResponce.turnsPassed + ': Input: ' + input +
                ' Rams: ' + gameResponce.rams + ' Sheeps: ' + gameResponce.sheeps;
        }

        var liItem=document.createElement('li');
        liItem.innerHTML=printedText;
        gameLog.appendChild(liItem);

    })


}

Game = (function(){

    var secretNumber;
    var turnsPassed;
    var LOWER_BOUND=1000;
    var HIGHER_BOUND=9999;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function startGame(){
        turnsPassed=0;
        secretNumber=getRandomInt(LOWER_BOUND, HIGHER_BOUND);
        //uncomment to see the secret number on the console
        //console.log(secretNumber);
        return secretNumber;
    }

    function validateGuess(guess){
        if(typeof guess != 'number')
        {
            throw new Error('The passed value must be a number')
        }

        if(guess != parseInt(guess)){
            throw new Error('The passed value must be an integer');
        }

        if(guess < LOWER_BOUND || HIGHER_BOUND < guess){
            throw new Error('The number is not in the allowed range');
        }
    }

    function guessNumber(guess){

        validateGuess(guess);

        var ramsCount=0;
        var sheepsCount=0;

        turnsPassed++;
        var secretString=secretNumber.toString();
        var guessString=guess.toString();

        var exploredGuess = [];
        var exploredSecret = [];

        for(var i= 0, len = secretString.length; i<len; i++){
            if(guessString[i] === secretString[i]){
                ramsCount++;
                exploredGuess[i]=true;
                exploredSecret[i]=true;
            }
            else{
                exploredGuess[i]=false;
                exploredSecret[i]=false;
            }
        }

        for(var i= 0, len=secretString.length; i<len; i++){

            for(j=0 ; j<len; j++){
                if(guessString[i] === secretString[j] && !exploredGuess[i] && !exploredSecret[j]){
                    sheepsCount++;
                    exploredGuess[i]=true;
                    exploredSecret[j]=true;
                }
            }
        }

        return {
            rams:ramsCount,
            sheeps: sheepsCount,
            turnsPassed: turnsPassed
        }
    }

    return{
        startGame: startGame,
        guessNumber:guessNumber
    }

}());
