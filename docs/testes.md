# Relatório de Testes e Validação W3C

## 1. Checklist de Acessibilidade (WCAG 2.2 AA)

| Teste | Método | Resultado |
|-------|--------|-----------|
| Declaração de idioma `lang="pt-BR"` nas 10 páginas | Verificação automatizada (`check.py`) e W3C Validator | **Aprovado (10/10 páginas)** |
| Todas as imagens (`<img>`) possuem atributo `alt` adequado | Verificação automatizada e revisão semântica | **Aprovado (100% das imagens)** |
| Todos os campos do formulário possuem `<label for="...">` vinculado ao `id` | Verificação automatizada em `contato.html` | **Aprovado (8/8 campos)** |
| Link de salto "Pular para o conteúdo principal" (`skip-link`) | Teste de teclado (`Tab` logo ao abrir a página) | **Aprovado nas 10 páginas** |
| Navegação completa por teclado (`Tab`, `Shift+Tab`, `Enter`) e `:focus-visible` | Teste manual nas 10 páginas, menu, mídia e formulário | **Aprovado (contorno âmbar `#ffab00` de 3px visível)** |
| Contraste de cores (WCAG 2.2 nível AA — mínimo 4,5:1) | Texto `#1a1a1a` sobre `#ffffff` (17,4:1); `#ffffff` sobre `#1b5e20` (8,3:1) | **Aprovado (nível AAA alcançado)** |
| Estrutura de títulos (`h1` único por página e hierarquia `h2`/`h3` sem saltos) | Verificação automatizada e leitura de cabeçalhos | **Aprovado nas 10 páginas** |
| Leitor de tela e regiões semânticas (`header`, `nav`, `main`, `footer`, `aria-live`) | Revisão de árvore de acessibilidade e anúncio de alerta do formulário | **Aprovado** |
| Transcrição textual para vídeo e áudio | Conferência em `midia.html` | **Aprovado (transcrições completas incluídas)** |

## 2. Testes Funcionais e Responsividade

| Teste | Página / Alvo | Resultado |
|-------|---------------|-----------|
| Links internos do menu principal e rodapé (sem erro 404) | Todas as 10 páginas (`index.html` a `orcamento_hospedagem.html`) | **Aprovado (0 links quebrados)** |
| Vídeo HTML5 com `controls`, `poster="img/poster-video.jpg"` e `.mp4` | `midia.html` (`assets/video-sustentabilidade.mp4`) | **Aprovado** |
| Áudio HTML5 com `controls` e arquivo `.mp3` | `midia.html` (`assets/podcast-futuro-verde.mp3`) | **Aprovado** |
| `iframe` de mapa incorporado com atributo `title` descritivo | `midia.html` (OpenStreetMap — Parque Ecológico do Tietê) | **Aprovado** |
| Validação nativa do formulário (`required`, `email`, `tel`, `date`, `number`, `pattern`) | `contato.html` | **Aprovado** |
| Tabelas com `<caption>` e cabeçalhos `<th scope="col">` | `impacto.html`, `contato.html`, `orcamento_hospedagem.html` | **Aprovado** |
| Layout responsivo em celular (`360px`), tablet (`768px`) e desktop (`1280px+`) | `css/estilo.css` (`@media (max-width: 640px)`) | **Aprovado** |

## 3. Validação Oficial no W3C Nu HTML Validator

Todas as 10 páginas foram submetidas à API oficial do validador W3C (`https://validator.w3.org/nu/?out=json`).
O relatório bruto completo encontra-se salvo em [`docs/validacao-w3c.json`](validacao-w3c.json) e o selo visual de evidência em [`docs/evidencia-w3c.svg`](evidencia-w3c.svg).

| # | Página | Status W3C | Erros | Avisos |
|---|--------|------------|-------|--------|
| 1 | `index.html` | Válido (HTML5) | 0 | 0 |
| 2 | `sobre.html` | Válido (HTML5) | 0 | 0 |
| 3 | `projetos.html` | Válido (HTML5) | 0 | 0 |
| 4 | `impacto.html` | Válido (HTML5) | 0 | 0 |
| 5 | `acessibilidade.html` | Válido (HTML5) | 0 | 0 |
| 6 | `galeria.html` | Válido (HTML5) | 0 | 0 |
| 7 | `midia.html` | Válido (HTML5) | 0 | 0 |
| 8 | `noticias.html` | Válido (HTML5) | 0 | 0 |
| 9 | `contato.html` | Válido (HTML5) | 0 | 0 |
| 10 | `orcamento_hospedagem.html` | Válido (HTML5) | 0 | 0 |
