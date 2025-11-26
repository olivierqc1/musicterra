#!/usr/bin/env python3
"""
SCRIPT DE TEST - Corrige seulement les 10 premiers genres
Utilise ce script pour vérifier que tout fonctionne avant de lancer le traitement complet !
"""

import json
import re
from openai import OpenAI

# ============================================
# CONFIGURATION
# ============================================
OPENAI_API_KEY = "ta-clé-ici"  # Remplace par ta clé OpenAI
INPUT_FILE = "src/data/genres.ts"
TEST_LIMIT = 10  # Traite seulement les 10 premiers genres

client = OpenAI(api_key=OPENAI_API_KEY)

# ============================================
# FONCTIONS (identiques au script principal)
# ============================================
def extract_genres_from_ts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'export const genres[^=]*=\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        raise Exception("Impossible de trouver le tableau de genres !")
    
    json_str = match.group(1)
    json_str = re.sub(r'(\w+):', r'"\1":', json_str)
    json_str = re.sub(r',\s*}', '}', json_str)
    json_str = re.sub(r',\s*]', ']', json_str)
    
    genres = json.loads(json_str)
    return genres[:TEST_LIMIT]  # ← Limite aux 10 premiers !

def fix_genre_description(genre):
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
        result = re.sub(r'```json\s*|\s*```', '', result)
        fixed = json.loads(result)
        
        return fixed
        
    except Exception as e:
        print(f"❌ Erreur : {e}")
        return {
            "descriptionEn": genre.get('descriptionEn', ''),
            "descriptionFr": genre.get('descriptionFr', '')
        }

# ============================================
# TEST
# ============================================
def main():
    print("=" * 60)
    print("🧪 TEST - Correction de 10 genres")
    print("=" * 60)
    
    try:
        # Lit les 10 premiers genres
        genres = extract_genres_from_ts(INPUT_FILE)
        print(f"✅ {len(genres)} genres chargés pour le test\n")
        
        # Traite chaque genre
        for i, genre in enumerate(genres, 1):
            print(f"\n[{i}/10] Traitement de : {genre['name']}")
            print(f"  📝 Avant EN : {genre.get('descriptionEn', 'N/A')[:80]}...")
            print(f"  📝 Avant FR : {genre.get('descriptionFr', 'N/A')[:80]}...")
            
            fixed = fix_genre_description(genre)
            
            print(f"  ✅ Après EN : {fixed['descriptionEn'][:80]}...")
            print(f"  ✅ Après FR : {fixed['descriptionFr'][:80]}...")
        
        print("\n" + "=" * 60)
        print("🎉 TEST RÉUSSI !")
        print("\nSi les résultats te plaisent, lance le script complet :")
        print("  python3 fix_genres_auto.py")
        print("=" * 60)
        
    except Exception as e:
        print(f"\n❌ ERREUR : {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()