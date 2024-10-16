Les opérateurs mathématiques avancés avec le module math
Si vous avez besoin d'effectuer des calculs mathématiques plus complexes, vous devrez utiliser le module math car pour ne pas trop surcharger les fonctions disponibles par défaut, Python ne charge pas toutes ces fonctions de base quand vous lancez un interpréteur.

Pour utiliser le module math, il faut l'importer comme ceci :

import math
Une fois le module importé, vous pouvez utiliser toutes les fonctions contenues à l'intérieur du module, en préfixant la fonction du nom du module. Par exemple pour calculer une racine carrée :

>>> racine = math.sqrt(16)
>>> print(racine)
4.0
Ci-dessous, vous trouverez une liste non-exhaustive des fonctions les plus utilisés et disponibles dans le module math :

math.ceil(-4.7) : entier immédiatement supérieur, donne ici -4.

math.exp(2) : exponentielle.

math.factorial(5) : factorielle 5, donc 120 ici (fonctionne uniquement pour les entiers positifs).

math.floor(-4.7) : partie entière, donne ici -5.

math.isinf(x) : teste si x est infini (inf) et renvoie True si c'est le cas.

math.log(2) : logarithme en base naturelle.

math.log(8, 2) : log de 8 en base 2.

math.log10(2) : logarithme en base 10.

math.pow(2, 3) : 2 puissance 3 (peut aussi s'écrire 2 ** 3).

math.sqrt(16) : racine carrée, donne ici 4.

fonctions trigonométriques : math.sin, math.cos, math.tan, math.asin, math.acos, math.atan (argument en radians).

fonctions hyperboliques : math.sinh, math.cosh, math.tanh, math.asinh, math.acosh, math.atanh.

math.degrees(x) : convertit de radians en degrés.

math.radians(x) : convertit de degrés en radians.

Les constantes :

math.pi (3.14159...)

math.e (2.71828...)

Si vous devez utiliser une fonctionnalité que vous ne trouvez pas ici, n'hésitez pas à poser la question dans les questions et réponses du cours que l'on puisse vous aider à trouver la fonction dont vous avez besoin ;)

