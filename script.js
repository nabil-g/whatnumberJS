// Utilisation de JavaScript
function nombreHas() {
//On va créer un nombre au hasard entre 0 et 100.
	var hasard = Math.random() * 100;
	var hasard2 = Math.floor(hasard); // On convertit la variable hasard vers l'entier naturel le plus proche.
}

var compteur = 0;
var message; //variable message


function questions(msg){  //paramètre msg
	nombreHas();
	var reponse = prompt(msg + "Choisissez un nombre entre 0 et 99 inclus");
	compteur = ++;
	reponse = Math.floor(reponse) //On fait passer la reponse de l'utilisateur dans la fonction math floor pour en tirer l'entier naturel le plus proche
	// dans le cas où il aurait entrer un nombre décimal, et on le réenregistre dans la variable reponse (ecrasement)
	if(isNaN(reponse))
	{
		message = "Veuillez entrer un nombre !";
		questions(message);
	}
	else if (reponse < 0 || reponse > 99)
	{
		message "Veuillez entrer un nombre ";
		questions(message);
	}
	else if (reponse < hasard2)
	{
		message "C'est plus";
		questions(message);
	}
	else if (reponse > hasard2)
	{
		message "C'est moins";
		questions(message);
	}
	else
	{
		alert("Bien joué ! Le bon nombre était en effet " + hasard2 + ". Vous l'avez trouvé en " + compteur + " coups.");
	}
}