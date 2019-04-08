console.log('exercice 2');

//1. Il existe trois principaux types de sélecteurs en JQuery, lesquels ?
//Les trois principaux types de sélecteurs en jQuery sont:
  //  - the element selector
  //  - the #id selector
  //  - the .class selector.


$(document).ready(function(){



  //1. Sélectionner le titre du blog : "John's Blog".
  
  $("#title");

 // 2. Sélectionner tous les éléments du sidemenu de gauche.
  $(".col-sm-3 sidenav");

 // 3. Sélectionner le footer.
  $("footer");

 // 4. Sélectionner l'élément qui permet de faire la barre de recherche. 
  $(."input-group");

 // 5. Sélectionner tous les glyphicons de la page.
  $("glyphicon");

 // 6. Sélectionner tous les labels verts.
  $("label label-success");

  //7. Sélectionner tous les paragraphes qui ont comme classe 'intro'.
  $("p.intro")

 // 8. Sélectionner toutes les images avec toutes les icones dont la classe est 'glyphicon-time'
  $("glyphicon glyphicon-time");

 // 9. Sélectionner le premier élément du sidemenu.
  $("sidenav ul li:first")

//	10. Bonus : sélectionner un paragraphe sur deux.
  $("p.even");


});
