# NeuroRace

Site institucional do **NeuroRace**, um protótipo de jogo de corrida controlado por ondas cerebrais (EEG), apresentado no **FIAP NEXT**. Quanto mais o jogador se concentra, mais rápido o carro anda — a interface é a própria mente.

🔗 Site: [www.neurorace.com.br](https://www.neurorace.com.br)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript

## Seções do site

- **Hero** — vídeo de fundo em loop com a chamada principal
- **Conheça o Projeto** — como funciona o jogo (EEG → foco → velocidade)
- **Trailer** — vídeo do YouTube com o NeuroRace em ação
- **Equipe** — integrantes do grupo
- **Contato** — Instagram, YouTube e GitHub

## Equipe

- Ester Santos da Silva
- Pedro Henrique Pedrosa Tavares
- Rodrigo Brasileiro
- Nikolas Rodrigues Moura dos Santos
- Guilherme Rocha Bianchini
- Thiago Jardim de Oliveira
- Matheus Barbosa da Silva
- João Victor Moreira

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
npm run build   # build de produção
npm run start   # sobe o build de produção localmente
npm run lint    # checagem de lint
```

## Configuração de conteúdo

Links de redes sociais, itens de menu e o vídeo do trailer ficam centralizados em [`src/lib/site.ts`](src/lib/site.ts) — não é necessário mexer nos componentes para trocá-los.

## Deploy

O site é publicado na [Vercel](https://vercel.com), com deploy automático a partir da branch `main`, e o domínio customizado `neurorace.com.br` (com redirecionamento de `neurorace.com.br` para `www.neurorace.com.br`).
