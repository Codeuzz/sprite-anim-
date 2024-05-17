# TP 5

## Rendu

Fournir les sources du projet soit sur github, ide ou via une archive. Le projet peut être réalisé en groupe de 2. 

## Objectif

Réaliser une animation de plusieurs images à l'aide de canvas et des promesses.

## Instructions

### Récupérer les informations en json

Effectuer une requête vers le fichier json pour récupérer les informations. Pour cela on peut utiliser la fonction *fetch* pour récupérer le contenu de ce fichier.

[Documentation de fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)

### Charger la spritesheet

Charger l'image correspondante à la spritesheet à l'aide de la classe Image en JS.

### Afficher une image de la spritesheet

Utiliser la fonction *drawImage* de l'API canvas pour dessiner un des 4 sprites de la spritesheet. Il faut les différentes informations comme la position (x, y) de l'image source et la dimension (width et height) de l'image source. Ces informations ont été récupérées avec le fichier json.

[Documentation de drawImage](https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage)

### Réaliser l'animation

Afficher les 4 sprites successivement. Utiliser les fonctions *requestAnimationFrame* et *setInterval* pour changer le sprite.

CF correction de l'atelier 2 "Animer une balle".

Exemple :
Affichage du sprite n°1 puis au bout de 100ms, passer au sprite n°2 et ainsi de suite.

### [BONUS] Déplacer l'image sur le canvas

Mettre en place l'événement "keydown". Lorsque l'on appuie sur les flèches directionnelles du clavier, déplacer l'image sur le canvas.

## Contraintes

### Bonne organisation du code

Penser à bien organiser votre code (en créant des fonctions et des classes). Par exemple vous pouvez créer des fonctions *loadJson* et *loadImg* pour le chargement des fichiers.

### Promesses

Utiliser les promesses et/ou les mots-clé *async/await* pour gérer les traitements asynchrones (chargements de fichers).