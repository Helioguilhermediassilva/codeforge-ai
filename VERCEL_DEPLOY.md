# Deploy no Vercel - CodeForge AI

## Repositório GitHub

✅ **Repositório criado com sucesso!**

- **URL**: https://github.com/Helioguilhermediassilva/codeforge-ai
- **Branch principal**: `main`
- **Autor**: Hélio Guilherme Dias Silva

## Como fazer deploy no Vercel

### Opção 1: Via Interface Web (Recomendado)

1. Acesse https://vercel.com/
2. Faça login com sua conta
3. Clique em **"Add New Project"**
4. Selecione **"Import Git Repository"**
5. Autorize o acesso ao GitHub se necessário
6. Selecione o repositório: `Helioguilhermediassilva/codeforge-ai`
7. Configure o projeto:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm run build` (ou deixe o padrão)
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install` (ou deixe o padrão)
8. Clique em **"Deploy"**

### Opção 2: Via Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Na pasta do projeto
cd langchain-coding-platform

# Deploy
vercel --prod
```

## Configurações Recomendadas

### Environment Variables (se necessário no futuro)

Quando integrar com APIs reais, adicione as seguintes variáveis de ambiente no Vercel:

- `VITE_LANGCHAIN_API_KEY` - API key do LangChain
- `VITE_OPENAI_API_KEY` - API key da OpenAI (se usar)
- `VITE_API_URL` - URL da API backend (se houver)

### Build Settings

```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install",
  "devCommand": "pnpm run dev"
}
```

## Verificações Pré-Deploy

✅ Todas as referências ao Manus foram removidas
✅ Favicon personalizado criado
✅ Copyright atualizado com o nome do autor
✅ README.md completo
✅ .gitignore configurado
✅ Build de produção testado e funcionando

## Após o Deploy

Após o deploy ser concluído, o Vercel fornecerá:

1. **URL de produção**: `https://codeforge-ai.vercel.app` (ou similar)
2. **URL de preview**: Para cada commit/branch
3. **Dashboard**: Para monitoramento e analytics

## Domínio Customizado (Opcional)

Se você tiver um domínio próprio:

1. Vá em **Settings** → **Domains** no dashboard do Vercel
2. Adicione seu domínio customizado
3. Configure os DNS records conforme instruções do Vercel

## Próximos Passos

1. Deploy no Vercel
2. Testar a aplicação em produção
3. Compartilhar a URL
4. (Futuro) Integrar backend com API do LangChain
5. (Futuro) Adicionar autenticação de usuários

---

**Pronto para deploy!** 🚀
