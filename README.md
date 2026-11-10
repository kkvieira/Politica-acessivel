# Futuro Verde — Sustentabilidade e Impacto Social

Site da **Atividade A2** (Desenvolvimento Front-End para Web — Curso Superior de Informática, UNICID — Prof. Paulo Fratta).

Tema obrigatório em todas as páginas: **sustentabilidade e impacto social**, com **acessibilidade para pessoas com deficiência (PCD)** como público prioritário.

## Endereço do site (Railway)

- **Site no ar (Railway):** https://politica-acessivel-production.up.railway.app
- **Repositório no GitHub:** https://github.com/kkvieira/Politica-acessivel

## Equipe

- **Johnathan Victor Fernandes** — RA: 47789299
- **Jonathan De Lima Santos** — RGM: 47421819
- **João Vitor Da Silva Maia Domingos** — RGM: 47685786
- **Daniel Biazotto Michellão** — RGM: 47506253
- **Kaiky Vieira Dos Santos** — RGM: 1747419288

## Páginas

| # | Arquivo | Conteúdo |
|---|---------|----------|
| 1 | `index.html` | Resumo do tema, apresentação e menu principal |
| 2 | `sobre.html` | História, missão, visão e valores |
| 3 | `projetos.html` | Projetos de sustentabilidade e impacto social |
| 4 | `impacto.html` | Dados, tabelas e resultados |
| 5 | `acessibilidade.html` | Medidas de inclusão para PCD |
| 6 | `galeria.html` | Imagens com legendas (`<figure>`/`<figcaption>`) e fontes |
| 7 | `midia.html` | Vídeo (`controls` e `poster`), áudio (`controls`) e `iframe` |
| 8 | `noticias.html` | Notícias, artigos e blog |
| 9 | `contato.html` | Formulário validado (`required`, `email`, `tel`, `date`, `number`, `pattern`) e membros da equipe |
| 10 | `orcamento_hospedagem.html` | Comparativo de 3 hospedagens e 3 domínios com tabela e justificativa |

## Estrutura do repositório

```
index.html              ← na raiz, para o Railway detectar o site
*.html                  ← demais 9 páginas em letras minúsculas
css/estilo.css          ← folha de estilo responsiva e acessível
js/script.js            ← retorno acessível do formulário (aria-live)
img/                    ← ícone (favicon.png), ilustrações SVG leves e poster do vídeo
assets/                 ← vídeo (mp4) com narração e áudio de podcast (mp3)
docs/                   ← escopo, diário de bordo, orçamento, testes e evidências W3C
```

## Como publicar (GitHub + Railway)

1. Enviar os arquivos para a raiz do repositório no GitHub (`index.html` na raiz):
   ```bash
   git add -A
   git commit -m "Publica site Futuro Verde (Atividade A2)"
   git push origin main
   ```
2. O serviço no **Railway** conectado ao repositório GitHub realiza o deploy automático a cada push na branch `main`.
3. O domínio público gerado em **Settings → Networking → Public Networking** está ativo em:
   `https://politica-acessivel-production.up.railway.app`

## Documentação

Veja a pasta [`docs/`](docs/):
- [Escopo do Projeto (`docs/escopo.md`)](docs/escopo.md)
- [Diário de Bordo (`docs/diario-de-bordo.md`)](docs/diario-de-bordo.md)
- [Orçamento de Hospedagem e Domínio (`docs/orcamento.md`)](docs/orcamento.md)
- [Relatório de Testes e Validação W3C (`docs/testes.md`)](docs/testes.md)
- [Evidência JSON do W3C Nu Validator (`docs/validacao-w3c.json`)](docs/validacao-w3c.json)
