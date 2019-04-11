console.log("exercice 4");
$(document).ready(() => {
    // 1. si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";
    $(".btn-danger").click(function () {
        alert('Merci nous vous tiendrons informé des différentes offres');
    });

    // 2. récupérer maintenant le contenu de l'input pour adapter votre message : "Merci `adresse email rentrée`, nous vous tiendrons informé des différentes offres`;

    $(".btn-danger").click(function () {
        var mail = $("[type='email']").val()
        alert('Merci ' + mail + ' nous vous tiendrons informé des différentes offres');
    });

    // 3. si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits';
    $('.navbar-nav li:eq(1)').dblclick(function () {
        $(this).hide()
    });

    // 4. si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour marquer le fait qu'un produit a été ajouté au panier. S'il clique deux fois on doit avoir le texte Cart(2);
    var counter = 0;

    $("img").click(function () {
        counter++;
        $('#myNavbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a > span').text(counter);

    });

    // 5. un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. Vous pouvez ajouter des ids sur les images dans la page HTML. *Bonus*: faire de même sans utiliser les ids;

    $("img").on('mouseenter', function () {
        var imageName = $("img").attr("src");
        console.log("L'utilisateur regarde " + imageName);
    });


    // 6. maintenant, traquer si un utilisateur est en train de remplir le champ pour la newsletter. Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans ?;
        $("[type='email']").on('click', function(){
            console.log("L'utilisateur a cliqué sur le champ de la newsletter");
        });

        $("[type='email']").on('keypress', function(){
            console.log("L'utilisateur remplit le champ pour la newsletter");
        });


    // 5. *Bonus ++* : récupérer le nombre de produits que l'utilisateur a achetés. Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)' puisque l'offre correspond à 25 ipads...

    


});
