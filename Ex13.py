chaine = "Pierre, Julien, Anne, Marie, Lucien"

# 1. Diviser la chaîne en une liste de prénoms
liste_prenoms = chaine.split(", ")

# 2. Trier la liste de prénoms
liste_triee = sorted(liste_prenoms)

# 3. Rejoindre la liste triée en une seule chaîne
chaine_en_ordre = ", ".join(liste_triee)

print(chaine_en_ordre)  # Affichera : Anne, Julien, Lucien, Marie, Pierre