console.log("exercice 6");

$(document).ready(() => {

    var mailValue = $("[type='email']").val();
    var passwordValue = $("[type='password']").val();
    var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // $('.mail').hide();
    // $('.mdp').hide();
    // $('.mdpLength').hide();
    // $('.emailSyntax').hide();
    // $('.isConnected').hide();

    $(".connexion-btn").on('click', function () {

        alert("Connexion en cours");

        mailValue = $("[type='email']").val();
        passwordValue = $("[type='password']").val();
        console.log("L'email entré par l'utilisateur est" + " " + mailValue);
        console.log("Le mot de passe entré par l'utilisateur est" + " " + passwordValue);


        console.log(mailValue);
        if (mailValue.length === 0) {
            $('.mail').removeClass('d-none');
        }

        if (passwordValue.length === 0) {
            console.log(passwordValue);
            $('.mdp').removeClass('d-none');
        }

        if (passwordValue.length <= 6) {
            console.log(passwordValue);
            $('.mdpLength').removeClass('d-none');
        };

        if (!filter.test(mailValue) ) {
            $('.emailSyntax').removeClass('d-none');
        }

        if (mailValue === 'hello@me.com' && passwordValue === 'secret8') {
            $('.isConnected').removeClass('d-none');
        }


    });

});





