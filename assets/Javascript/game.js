$(document).ready(function() {

    
    var diamond = Math.floor(Math.random() * 11 + 1);
    var ruby = Math.floor(Math.random() * 11 + 1);
    var sapphire = Math.floor(Math.random() * 11 + 1);
    var topaz = Math.floor(Math.random() * 11 + 1);
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var random;

   
    var random = Math.floor(Math.random() * 101 + 19)

  
    $('#randomNumber').html(random);


    $('#numWins').html(wins);
    $('#numLosses').html(losses);
    
   
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $('#randomNumber').html(random);
        diamond = Math.floor(Math.random() * 11 + 1);
        ruby = Math.floor(Math.random() * 11 + 1);
        sapphire = Math.floor(Math.random() * 11 + 1);
        topaz = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#totalScore').html(userTotal);
    }


    function huzzah() {
        alert("You won!");
        wins++;
        $('#numWins').html(wins);
        reset();
    }
   
    function loser() {
        alert("You lose!");
        losses++;
        $('#numLosses').html(losses);
        reset()
    }

    function endGame() {
     if (userTotal === random) {
            huzzah();
        } else if (userTotal > random) {
            loser();
        }
    }

    
    $('#diamond').on('click', function() {
        userTotal = userTotal + diamond;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);
         
         endGame();
     })

    $('#ruby').on('click', function() {
        userTotal = userTotal + ruby;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);

        endGame();
    })

    $('#sapphire').on('click', function() {
        userTotal = userTotal + sapphire;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);

        endGame();
    })

    $('#topaz').on('click', function() {
        userTotal = userTotal + topaz;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);

        endGame();

    });
});