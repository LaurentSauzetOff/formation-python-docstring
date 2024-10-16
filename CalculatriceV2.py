def demander_nombre(prompt):
    while True:
        try:
            valeur = float(input(prompt))
            return valeur
        except ValueError:
            print("Veuillez entrer un nombre valide !")
            
nombre1 = demander_nombre("Entrez un premier nombre : ")
nombre2 = demander_nombre("Entrez un second nombre : ")

resultat = nombre1 + nombre2
print(f"Le résultat de l'addition de {nombre1} avec {nombre2} est égal à {resultat}")