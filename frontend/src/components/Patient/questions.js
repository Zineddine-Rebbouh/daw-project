 const PersonalQuestions = {
  Genre: {
    a: "Masculin",
    b: "Féminin",
  },
  Age: {
    a: "Moins de 18 ans",
    b: "18-25 ans",
    c: "26-35 ans",
    d: "36-45 ans",
    e: "46-55 ans",
    f: "56 ans et plus",
  },
  "Etat civil": {
    a: "Célibataire",
    b: "Marié(e)",
    c: "Divorcé(e)",
    d: "Veuf/Veuve",
  },
  " Niveau d'éducation": {
    a: "Études primaires",
    b: "Études secondaires",
    c: "Études supérieures (Baccalauréat, Licence, Master)",
    d: "Études postdoctorale ( Doctorat)",
  },
  " Situation professionnelle": {
    a: "Étudiant",
    b: "Employé à plein temps",
    c: "Employé à temps partiel",
    d: "Indépendant/Entrepreneur",
    e: "Sans emploi",
    f: "Retraité(e)",
  },
  " Revenu annuel": {
    a: "Moins de 10 000 DA",
    b: "10 000 DA - 30 000 DA",
    c: "30 000 DA - 60 000 DA",
    d: "60 000 DA - 90 000 DA",
    e: "Plus de 90 000 DA",
  },
};

const Evaluation_questions={

  "À quelle fréquence jouez-vous aux jeux vidéo ?":{

    a: "Moins d'une heure par jour",
    b: "1 à 2 heures par jour",
    c: "2 à 4 heures par jour",
    d: "Plus de 4 heures par jour"
  },

  "Quelle importance accordiez-vous aux jeux vidéo par rapport à d'autres activités ?":{

   a: "Moins importante",
   b: "Aussi importante",
   c: "Plus importante",
  },
"Quel est l'impact des jeux vidéo sur vos relations sociales ?":{

  a: "Aucun impact",
  b: "Légère altération (moins de contact)",
  c: "Impact significatif (relations négligées)"
},
" Avez-vous déjà menti à propos du temps passé à jouer aux jeux vidéo ?":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
" Comment réagissez-vous lorsque vous ne pouvez pas jouer aux jeux vidéo ?" :{

  a:" Aucune réaction particulière",
  b:" Légère déception",
  c:" Irritabilité ou frustration",
  d:" Besoin urgent de jouer",
},
" Avez-vous déjà ressenti un besoin croissant de jouer pour obtenir la même sensation de plaisir ou d'excitation ?":{

  a: "Non, jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment"
},
" Dans quelle mesure les jeux vidéo affectent-ils votre sommeil ?":{

  a:" Aucun impact",
  b:" Légère perturbation",
  c:" Insomnie occasionnelle",
  d:" Insomnie fréquente",
},
" Avez-vous déjà négligé des responsabilités professionnelles ou scolaires à cause des jeux vidéo ?":{

  a:" Jamais",
  b:" Rarement",
  c:" Parfois",
  d:" Fréquemment",
},
"Avez-vous essayé de réduire votre temps de jeu sans succès ?":{

  a:" Oui, avec succès",
  b:" Oui, mais sans succès",
  c:" Non, je n'ai pas essayé"
},
"Comment vous sentez-vous lorsque vous ne jouez pas aux jeux vidéo pendant une longue période ? ":{

  a: "Indifférent",
  b: "Ennui léger",
  c: "Irritabilité ou agitation",
  d: "Dépression ou anxiété"
},
"Avez-vous déjà emprunté de l'argent pour acheter des jeux vidéo ou du contenu lié aux jeux ?":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Comment décririez-vous votre niveau de concentration pendant que vous jouez aux jeux vidéo ?":{

  a:" Excellente",
  b:" Bonne",
  c:" Moyenne",
  d:" Faible",
},
"Avez-vous déjà ressenti des symptômes physiques tels que des maux de tête, des douleurs musculaires ou des troubles de la vision à cause d'une session de jeu prolongée ?":{

  a:" Jamais",
  b:" Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Les jeux vidéo ont-ils eu un impact négatif sur votre productivité au travail ou à l'école ?":{

  a: "Aucun impact",
  b: "Léger impact",
  c: "Impact modéré",
  d: "Impact significatif",
},
"Combien de fois avez-vous négligé des activités importantes pour jouer aux jeux vidéo (ex : hygiène personnelle, tâches ménagères) ?":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Avez-vous déjà eu des disputes familiales ou des conflits avec des amis à cause de votre temps passé à jouer aux jeux vidéo ?":{
  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Quel est votre état émotionnel après avoir joué à des jeux vidéo pendant de longues périodes ?":{

  a: "Énergisé et heureux",
  b: "Fatigué mais satisfait",
  c: "Irrité ou déprimé",
  d: "Anxieux ou stressé",
},
"Avez-vous déjà manqué des événements sociaux pour jouer aux jeux vidéo ?":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Avez-vous développé des routines spécifiques ou des rituels avant ou pendant le jeu vidéo (ex : superstitions, préparation spécifique) ?":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Ressentez-vous le besoin constant de vérifier les mises à jour, les nouvelles versions ou les annonces de jeux vidéo ? ":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Combien de temps par jour passez-vous à penser aux jeux vidéo lorsque vous ne jouez pas ?":{

  a: "Quasiment jamais",
  b: "Moins d'une heure",
  c: "1 à 2 heures",
  d: "Plus de 2 heures",
},
"Avez-vous déjà caché ou minimisé la quantité de temps que vous passez à jouer aux jeux vidéo à vos proches ?":{
  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Ressentez-vous souvent de la culpabilité après avoir joué aux jeux vidéo pour une longue période":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Avez-vous déjà manqué des engagements personnels ou professionnels en raison de sessions de jeu   prolongées ?":{


  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Avez-vous eu des problèmes de mémoire ou de concentration en dehors du jeu après une session de jeu prolongée ?":{

  a: "Jamais",
  b: "Rarement",
   c: "Parfois",
   d: "Fréquemment",
  },
"Les jeux vidéo ont-ils eu un impact négatif sur votre vie sentimentale ?":{

  a: "Aucun impact",
  b: "Léger impact",
  c: "Impact modéré",
  d: "Impact significatif",
},
"Avez-vous déjà sacrifié des activités physiques ou sportives pour jouer aux jeux vidéo ?":{

  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Ressentez-vous le besoin de jouer aux jeux vidéo pour échapper à des problèmes ou à des sentiments négatifs ?":{

  
  a: "Jamais",
  b: "Rarement",
  c: "Parfois",
  d: "Fréquemment",
},
"Avez-vous déjà ressenti des sautes d'humeur importantes lorsque vous ne pouviez pas jouer aux jeux vidéo ?":{

  a :"Jamais",
  b :"Rarement",
  c :"Parfois",
  d :"Fréquemment",
},
"Comment évalueriez-vous votre niveau de dépendance ou d'attachement émotionnel aux jeux vidéo ? ":{

  
  a :"Faible",
  b :"Modéré",
  c :"Élevé",
  d :"Très élevé",
},
};
  export { PersonalQuestions , Evaluation_questions}