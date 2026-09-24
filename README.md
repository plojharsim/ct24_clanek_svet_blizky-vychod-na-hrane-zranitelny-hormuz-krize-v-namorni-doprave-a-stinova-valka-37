# ČT24 Web - Blízký východ na hraně

Tento repozitář obsahuje statickou verzi článku webu ČT24 připravenou pro nasazení na GitHub Pages.

## Jak publikovat na GitHub Pages

### Možnost 1: Nahrání přes webové rozhraní GitHubu (nejjednodušší)
1. Vytvořte nový veřejný (Public) repozitář na [GitHub.com](https://github.com/new).
2. Na úvodní stránce repozitáře klikněte na **"uploading an existing file"** (nebo Add file -> Upload files).
3. Přetáhněte do okna veškerý obsah této složky:
   - `index.html`
   - `.nojekyll`
   - celou složku `assets/` (se všemi soubory)
4. Klikněte na zelené tlačítko **Commit changes**.
5. V horní navigaci repozitáře klikněte na **Settings** -> v levém menu zvolte **Pages**.
6. V sekci **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: vyberte **main** a složku **/ (root)**
7. Klikněte na **Save**.
8. Během 1–2 minut se na této stránce objeví odkaz na funkční web: `https://<vase-uzivatelske-jmeno>.github.io/<nazev-repozitare>/`.

---

### Možnost 2: Pomocí Git příkazů v terminálu
Pokud používáte Git v terminálu:
```bash
cd /Users/plojharsim/Downloads/ct24-github-pages
git init
git add .
git commit -m "Initial commit for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<vase-uzivatelske-jmeno>/<nazev-repozitare>.git
git push -u origin main
```
*(Poznámka: Pokud váš macOS v terminálu hlásí požadavek na licenci Xcode před spuštěním gitu, potvrďte ji v terminálu příkazem `sudo xcodebuild -license accept`, nebo použijte Možnost 1 přes web).*
