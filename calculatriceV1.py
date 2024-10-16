# Demander à l'utilisateur de saisir deux nombres
nombre1 = input("Veuillez entrer un premier nombre : ")
nombre2 = input("Veuillez entrer un deuxième nombre : ")

# Convertir les saisies en nombres entiers
nombre1 = int(nombre1)
nombre2 = int(nombre2)

# Calculer l'addition
resultat = nombre1 + nombre2

# Afficher le résultat
print(f"Le résultat de l'addition du nombre {nombre1} avec le nombre {nombre2} est égal à {resultat}")