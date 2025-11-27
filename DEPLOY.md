# Instruções de Deploy na Vercel

Este projeto está pronto para ser implantado na Vercel como uma aplicação Single Page (SPA).

## Como fazer o deploy

1.  **Crie um repositório** (GitHub, GitLab ou Bitbucket) e envie o código deste projeto.
2.  **Acesse a Vercel** (https://vercel.com) e clique em "Add New..." > "Project".
3.  **Importe o repositório** que você acabou de criar.
4.  **Configure o Projeto**:
    *   **Framework Preset**: A Vercel deve detectar `Vite` automaticamente. Se não, selecione `Vite`.
    *   **Root Directory**: Deixe como `./` (padrão).
    *   **Build Command**: `npx vite build` (Configurado no `vercel.json`, mas bom conferir).
    *   **Output Directory**: `dist/public` (IMPORTANTE: O padrão do Vite é `dist`, mas este projeto está configurado para `dist/public`).
    *   **Install Command**: `npm install` (padrão).

5.  Clique em **Deploy**.

## Configurações Adicionais

*   O arquivo `vercel.json` incluído na raiz já configura as rotas para funcionar como SPA (redirecionando tudo para `index.html`).
*   A imagem de compartilhamento social (OG Image) foi copiada para `client/public/og-image.png` para garantir que apareça corretamente nas redes sociais.

## Solução de Problemas

Se o build falhar por causa de tipos do servidor, certifique-se de que o comando de build esteja rodando apenas `npx vite build` e não o script de build completo do projeto (`npm run build` roda o build do servidor também, o que pode ser desnecessário para o frontend).
