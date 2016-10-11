// Utilisation de JavaScript
function nombreHas() {
//On va créer un nombre au hasard entre 0 et 100.
	var has = Math.random() * 100;
 	return Math.floor(has); // On convertit la variable hasard vers l'entier naturel le plus proche.

}




function questions(){  //paramètre msg
	var nb = nombreHas();
	var compteur = 0;
	var message; //variable message


	do{
		var reponse = prompt(message + "Choisissez un nombre entre 0 et 99 inclus");
		reponse = Math.floor(reponse) //On fait passer la reponse de l'utilisateur dans la fonction math floor pour en tirer l'entier naturel le plus proche
		// dans le cas où il aurait entrer un nombre décimal, et on le réenregistre dans la variable reponse (ecrasement)

		if(reponse == null || isNan(reponse))
			return false;
			message = "veuillez entrer un nombre !";
			elseif (reponse > nb)
				message = "C'est moins !";
				compteur++;
			elseif (reponse < nb)
				message = "C'est plus";
				compteur++;
			else
				alert("Bien joué ! Le bon nombre était en effet " + hasard2 + ". Vous l'avez trouvé en " + compteur + " coups.");

	}
	while (reponse != nb);






}
