#!/usr/bin/env python3
"""
Script AUTOMATIQUE pour corriger 3000 genres musicaux
- Lit genres.ts
- Utilise OpenAI GPT-4o-mini pour corriger/améliorer chaque description
- Sauvegarde le nouveau fichier
- ZÉRO intervention manuelle requise !
"""

import json
import re
import os
from openai import OpenAI
from tqdm import tqdm
import time

# ============================================
# CONFIGURATION
# ============================================
OPENAI_API_KEY = "ta-clé-ici"  # Remplace par ta clé OpenAI
INPUT_FILE = "src/data/genres.ts"
OUTPUT_FILE = "src/data/genres_fixed.ts"
MAX_RETRIES = 3
BATCH_SIZE = 10  # Traite 10 genres à la fois

client = OpenAI(api_key=OPENAI_API_KEY)

# ============================================
# ÉTAPE 1 : LIRE LE FICHIER TYPESCRIPT
# ============================================
def extract_genres_from_ts(filepath):
    """
    Parse le fichier genres.ts et extrait tous les genres
    """
    print(f"📖 Lecture de {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Trouve le tableau d'objets entre [ et ]
    match = re.search(r'export const genres[^=]*=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        raise Exception("Impossible de trouver le tableau de genres !")
    
    json_str = match.group(1)
    
    # Nettoie le TypeScript pour le rendre JSON-compatible
    json_str = re.sub(r'(\w+):', r'"\1":', json_str)  # Ajoute quotes aux clés
    json_str = re.sub(r',\s*}', '}', json_str)  # Retire virgules finales
    json_str = re.sub(r',\s*]', ']', json_str)
    
    genres = json.loads(json_str)
    print(f"✅ {len(genres)} genres trouvés !")
    return genres

# ============================================
# ÉTAPE 2 : CORRIGER UN GENRE AVEC GPT
# ============================================
def fix_genre_description(genre):
    """
    Utilise GPT-4o-mini pour corriger et améliorer une description
    """
    prompt = f"""Tu es un expert en musique. Améliore cette fiche de genre musical :

Genre : {genre['name']}
Description EN actuelle : {genre.get('descriptionEn', 'N/A')}
Description FR actuelle : {genre.get('descriptionFr', 'N/A')}

Tâches :
1. Corrige les fautes d'orthographe et de grammaire
2. Améliore la qualité de la description (2-3 phrases max)
3. Rends-la engaging et précise
4. Si une traduction manque ou est mauvaise, crée-la
5. Garde le même ton informatif mais passionné

Réponds UNIQUEMENT avec un JSON :
{{
  "descriptionEn": "...",
  "descriptionFr": "..."
}}
"""

    for attempt in range(MAX_RETRIES):
        try:
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "Tu es un expert en musique qui corrige et améliore des descriptions de genres musicaux. Réponds toujours en JSON valide."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=300
            )
            
            result = response.choices[0].message.content.strip()
            
            # Parse le JSON
            # Nettoie les backticks markdown si présents
            result = re.sub(r'```json\s*|\s*```', '', result)
            fixed = json.loads(result)
            
            return fixed
            
        except Exception as e:
            print(f"⚠️ Tentative {attempt + 1}/{MAX_RETRIES} échouée pour {genre['name']}: {e}")
            if attempt < MAX_RETRIES - 1:
                time.sleep(2)
            else:
                # Fallback : garde les descriptions originales
                return {
                    "descriptionEn": genre.get('descriptionEn', ''),
                    "descriptionFr": genre.get('descriptionFr', '')
                }

# ============================================
# ÉTAPE 3 : TRAITER TOUS LES GENRES
# ============================================
def process_all_genres(genres):
    """
    Traite TOUS les genres automatiquement avec barre de progression
    """
    print(f"\n🤖 Correction automatique de {len(genres)} genres...")
    print("⏳ Temps estimé : ~5-10 minutes\n")
    
    fixed_genres = []
    
    # Barre de progression
    for i, genre in enumerate(tqdm(genres, desc="Progression")):
        # Corrige avec GPT
        fixed_descriptions = fix_genre_description(genre)
        
        # Met à jour le genre
        genre_fixed = {**genre}
        genre_fixed['descriptionEn'] = fixed_descriptions['descriptionEn']
        genre_fixed['descriptionFr'] = fixed_descriptions['descriptionFr']
        
        fixed_genres.append(genre_fixed)
        
        # Petite pause pour éviter rate limiting
        if (i + 1) % BATCH_SIZE == 0:
            time.sleep(1)
    
    return fixed_genres

# ============================================
# ÉTAPE 4 : SAUVEGARDER LE FICHIER
# ============================================
def save_genres_to_ts(genres, output_file):
    """
    Sauvegarde les genres corrigés dans un fichier TypeScript
    """
    print(f"\n💾 Sauvegarde dans {output_file}...")
    
    # Génère le contenu TypeScript
    ts_content = """// genres.ts - VERSION CORRIGÉE AUTOMATIQUEMENT PAR IA
export interface Genre {
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  subgenres?: string[];
  artists: string[];
  spotify?: string;
  image?: string;
}

export const genres: Genre[] = [
"""
    
    for i, genre in enumerate(genres):
        ts_content += "  {\n"
        ts_content += f'    name: "{genre["name"]}",\n'
        ts_content += f'    descriptionFr: "{genre["descriptionFr"]}",\n'
        ts_content += f'    descriptionEn: "{genre["descriptionEn"]}",\n'
        
        if 'subgenres' in genre and genre['subgenres']:
            subgenres_str = ', '.join([f'"{s}"' for s in genre['subgenres']])
            ts_content += f'    subgenres: [{subgenres_str}],\n'
        
        artists_str = ', '.join([f'"{a}"' for a in genre.get('artists', [])])
        ts_content += f'    artists: [{artists_str}],\n'
        
        if genre.get('spotify'):
            ts_content += f'    spotify: "{genre["spotify"]}",\n'
        
        if genre.get('image'):
            ts_content += f'    image: "{genre["image"]}",\n'
        
        ts_content += "  }" + ("," if i < len(genres) - 1 else "") + "\n"
    
    ts_content += "];\n"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Fichier sauvegardé avec succès !")

# ============================================
# MAIN
# ============================================
def main():
    print("=" * 60)
    print("🎵 CORRECTION AUTOMATIQUE DES GENRES MUSICAUX")
    print("=" * 60)
    
    try:
        # 1. Lit le fichier
        genres = extract_genres_from_ts(INPUT_FILE)
        
        # 2. Traite tous les genres automatiquement
        fixed_genres = process_all_genres(genres)
        
        # 3. Sauvegarde le résultat
        save_genres_to_ts(fixed_genres, OUTPUT_FILE)
        
        print("\n" + "=" * 60)
        print("🎉 TERMINÉ !")
        print(f"📁 Nouveau fichier : {OUTPUT_FILE}")
        print(f"✅ {len(fixed_genres)} genres corrigés")
        print("\nProchaines étapes :")
        print("1. Vérifie le nouveau fichier")
        print("2. Si tout est OK, remplace l'ancien :")
        print(f"   mv {OUTPUT_FILE} {INPUT_FILE}")
        print("=" * 60)
        
    except Exception as e:
        print(f"\n❌ ERREUR : {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()