console.log("exercice 3");


$(document).ready(() => {
	

// 1. changez le titre "My portfolio" par votre prénom.;
    $("h1").text("Sophie");

////2. changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant;
    $("#tagline").text("Looking hardcore but has a sweet heart...");

//3. votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar mais laissez le bouton Login;
    $("#myNavbar ul:first").remove();

//4. changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie, choisissez en une dans  la [liste possible de bootstrap](https://getbootstrap.com/docs/3.3/components/#glyphicons-glyphs);
    $("span").removeClass("glyphicon-log-in").addClass("glyphicon-arrow-right");
    

//5. changez votre footer en mettant **Copyright 2017** ( respecter le gras );
    $("footer").html("<b> Copyright 2017</b>");

//6. modifiez le texte des paragraphes de la première ligne d'images. Tous les textes "Some text..." doivent être remplacés par "Mon projet";
//*Bonus*: ajouter le numéro du projet c'est à dire 'Mon projet 1' 'Mon projet 2'...
    $("#work1 p").text("Mon projet");

//7. choisissez une image sur internet et changez toutes les images du projet par cette image. *Bonus*: personnalisez chacune des images;
    $("div img").attr("src", "http://starrtours.co.nz/gallery/images/a/Fantail%20on%20Flax.jpg");

//8. vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. De plus, comme c'est le dernier, vous souhaitez qu'il apparaisse au dessus des autres et qu'il soit plus grand pour être mis en valeur. Choisissez une image et un texte et ajoutez le au-dessous de "Some of my work". Ajustez la taille de l'image pour être de 250px de haut;
    var $newProjectImg = $("<img>").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQsxVptRIf611rbOb2KDbRVtAsv7mhefme9AmlubQ8LqpKOYzcQ" );
    var $newProjectDiv = $("<div></div>");
    var $newProjectPara = $("<p></p>");
    $newProjectDiv.append($newProjectPara, $newProjectImg );
    $("#work1").prepend($newProjectDiv);
    $newProjectImg.attr("height", "250px");
    $newProjectPara.text("Mon nouveau projet");

//9. la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe au footer afin de changer l'affichage en rouge.
    $("footer").addClass("intro");


});