# CodeForge AI - Plataforma de Coding com LangChain

## Visão Geral

O **CodeForge AI** é uma plataforma de desenvolvimento de código assistida por inteligência artificial, inspirada no Lovable.dev e construída com a identidade visual do NowGo AI Insight Forge. A plataforma permite que usuários criem aplicações e agentes inteligentes através de conversação natural com IA, utilizando o poder do framework LangChain.

## Características Principais

### Design Visual

A identidade visual combina elementos modernos e tecnológicos com uma paleta de cores profissional:

- **Paleta de Cores**: Azul marinho escuro (#0f172a), ciano (#06b6d4), verde neon (#10b981)
- **Gradientes**: Transições suaves entre ciano e verde para elementos de destaque
- **Efeitos**: Glassmorphism, blur backdrop, sombras com glow, animações sutis
- **Tipografia**: Sans-serif moderna com hierarquia clara

### Componentes Implementados

#### 1. Header (Navegação)
- Logo com ícones animados (Code2 + Sparkles)
- Menu de navegação responsivo
- Botões de ação (Sign In, Get Started)
- Fundo semi-transparente com blur

#### 2. Hero Section
- Gradiente de fundo com padrão de grid animado
- Orbs luminosos com animação pulse
- Badge de anúncio destacado
- Título impactante com gradiente de texto
- Cards de estatísticas com ícones (300% Productivity, 100% Data Protected, 24/7 Support)
- Interface de chat principal com textarea expansível
- Botão de geração de código com gradiente

#### 3. Features Section
- Grid responsivo de 6 features
- Cards com hover effects e animações
- Ícones do Lucide React
- Descrições detalhadas das funcionalidades
- Badge "Powered by LangChain"

#### 4. Templates Section
- Galeria de templates da comunidade
- Filtros por categoria
- Cards com preview e informações
- Contador de remixes
- Tags de tecnologia
- Botões de preview e favoritar

#### 5. Footer
- Informações da marca
- Links de navegação organizados
- Ícones de redes sociais
- Links legais (Privacy, Terms, Security)
- Badge "Built with LangChain"

## Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca principal para construção da UI
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework de estilização utility-first
- **shadcn/ui**: Componentes UI acessíveis e customizáveis
- **Lucide React**: Biblioteca de ícones moderna

### Conceitos do LangChain Integrados

O site apresenta e contextualiza os principais conceitos do ecossistema LangChain:

1. **LangChain Core**: Framework base para desenvolvimento com LLMs
2. **LangGraph**: Orquestração de agentes stateful
3. **LangSmith**: Debugging e monitoring de aplicações
4. **Integrações**: Suporte a centenas de provedores de LLM

## Estrutura do Projeto

```
langchain-coding-platform/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegação principal
│   │   ├── Hero.jsx            # Seção hero com chat
│   │   ├── Features.jsx        # Grid de features
│   │   ├── Templates.jsx       # Galeria de templates
│   │   ├── Footer.jsx          # Rodapé
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos globais e tema
│   └── main.jsx                # Entry point
├── dist/                       # Build de produção
├── index.html                  # HTML base
└── package.json                # Dependências
```

## Funcionalidades Destacadas

### Interface de Chat Inteligente
- Textarea expansível para prompts longos
- Placeholder sugestivo com exemplo de uso
- Botão de exemplos para inspiração
- Botão de geração com gradiente e ícone
- Feedback visual com hover states

### Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Grid system flexível
- Componentes que se reorganizam em telas menores
- Tipografia escalável

### Micro-interações
- Hover effects em todos os elementos clicáveis
- Transições suaves entre estados
- Animações de pulse nos orbs de fundo
- Scale transforms em ícones
- Glow effects em botões primários

### Acessibilidade
- Componentes shadcn/ui com ARIA labels
- Contraste adequado de cores
- Foco visível em elementos interativos
- Estrutura semântica HTML

## Próximos Passos (Roadmap)

### Fase 1: Backend Integration
- [ ] Implementar API backend com Flask
- [ ] Integrar LangChain Python SDK
- [ ] Conectar com modelos LLM (OpenAI, Gemini, etc.)
- [ ] Implementar geração de código real

### Fase 2: Funcionalidades Avançadas
- [ ] Sistema de autenticação de usuários
- [ ] Salvamento de projetos
- [ ] Histórico de conversas
- [ ] Export de código para GitHub
- [ ] Preview ao vivo do código gerado

### Fase 3: Community Features
- [ ] Sistema de templates compartilháveis
- [ ] Contador de remixes funcional
- [ ] Sistema de favoritos
- [ ] Comentários e avaliações
- [ ] Perfis de usuário

### Fase 4: Enterprise Features
- [ ] Ambientes privados
- [ ] Controle de acesso por equipe
- [ ] Auditoria e compliance
- [ ] Integrações com CI/CD
- [ ] Suporte a custom models

## Como Executar Localmente

### Desenvolvimento
```bash
cd langchain-coding-platform
pnpm install
pnpm run dev
```

### Build de Produção
```bash
pnpm run build
```

### Preview do Build
```bash
pnpm run preview
```

## Deployment

O projeto está configurado para deployment automático. O build de produção é gerado na pasta `dist/` e pode ser implantado em qualquer plataforma de hosting estático (Vercel, Netlify, Cloudflare Pages, etc.).

## Inspirações e Referências

- **Lovable.dev**: Estrutura de interface de chat, sistema de templates, funcionalidade de geração de código
- **NowGo AI Insight Forge**: Paleta de cores, estilo visual, gradientes, efeitos de glassmorphism
- **LangChain Documentation**: Conceitos técnicos, arquitetura, casos de uso

## Licença

Este é um projeto demonstrativo criado para fins educacionais e de portfólio.

---

**Desenvolvido com ❤️ usando React, Tailwind CSS e conceitos do LangChain**
