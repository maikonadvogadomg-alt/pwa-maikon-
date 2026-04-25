# Meu App — PWA Instalável

## O que é PWA?

Progressive Web App (PWA) é um site que pode ser **instalado como aplicativo** no celular ou desktop, funcionando **offline** e com ícone na tela inicial.

## Como rodar localmente

Abra o `index.html` no Preview (botão ▶) ou use um servidor local:
```bash
npx serve .
# Acesse http://localhost:3000
```

## Como publicar GRÁTIS 🚀

### Opção 1 — Netlify (mais fácil)
1. Acesse [netlify.com](https://netlify.com) e crie conta grátis
2. Clique em **"Add new site" → "Deploy manually"**
3. Baixe este projeto como ZIP (menu ··· → Exportar ZIP)
4. Arraste a pasta descompactada para o Netlify
5. Pronto! URL gerada automaticamente (ex: `meuapp.netlify.app`)

### Opção 2 — Vercel
1. Acesse [vercel.com](https://vercel.com) → crie conta com GitHub
2. Faça upload dos arquivos ou conecte repositório
3. Deploy automático com HTTPS

### Opção 3 — GitHub Pages (grátis com repositório público)
1. Crie um repositório no [github.com](https://github.com)
2. Faça upload dos arquivos
3. Settings → Pages → Source: "main" branch
4. URL: `seuusuario.github.io/nome-do-repo`

### Opção 4 — Cloudflare Pages
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Upload direto ou conecte GitHub
3. Domínio customizado grátis (`meuapp.pages.dev`)

## Após publicar

Acesse pelo celular via HTTPS e o Chrome vai mostrar:
**"Adicionar à tela inicial"** — toque e o app vira um ícone!

## Estrutura
```
index.html    ← Página principal
style.css     ← Estilos
app.js        ← Lógica do app + install prompt + offline
sw.js         ← Service Worker (cache offline)
manifest.json ← Metadados do PWA (nome, ícone, cor)
```
