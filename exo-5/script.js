$(document).ready(() => {

console.log("exercice 5");

var computerChoice = getComputerChoice(0,2)
console.log(computerChoice);


function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    //console.log(userInput);
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) {
        return userInput;
    } else {
        console.log('erreur');
        return 1;
    }
}

function getComputerChoice(min, max) {
    computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(computerChoice);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'tied';
    }

    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'Won';
    }

    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'Won';
    }

    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'Won';
    }

    else if (userChoice === 'bomb') {
        return 'Won';
    }

    else {
        return 'Lost';
    }
}

// function playGame(){
//     let uChoice = getUserChoice('bomb');    
//     console.log(uChoice);

    

//     let resultat = determineWinner(uChoice, computerChoice);
//     console.log(resultat);
// }

// playGame();  

    var imageName;
    

    // 3. l'utilisateur va cliquer sur une image afin de faire son choix. En utilisant des sélecteurs JQuery, faites en sorte que lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console.
    $(".container img").on('click', function () {
        imageName = $(this).attr("id");
        console.log("The user chose " + imageName);
    });



    // 4. maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur;

    $(".container img").on('click', function () {

        $("#userChoice").text("You chose" + " " + imageName);

    });

    // 5. créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur que vous avez obtenu suite à l'appel de la fonction getComputerChoice créée dans le cours précédent;
    $(".btn-primary").on('click', function () {
        $("#computerChoice").text("The computer chose" + " " + computerChoice);
    });




    // 6. ajoutez une div pour afficher le résultat, le texte doit être vert si vous avez gagné, gris en cas d'égalité et rouge si vous avez perdu.
    $(".btn-dark").on('click', function () {
        $("#resultat").text(determineWinner(imageName, computerChoice));
    });

});