lorem = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."""

# Compter le nombre de phrases en séparant la chaîne de caractères par le point
phrases = lorem.split(".")
# Filtrer les éléments vides (pouvant être dus aux espaces ou lignes vides après les points)
phrases = [phrase for phrase in phrases if phrase.strip()]
resultat = len(phrases)

print(resultat)  # Affichera 4