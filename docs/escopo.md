# Escopo do Projeto — Futuro Verde

## 1. Identificação
- **Projeto:** Futuro Verde — site sobre sustentabilidade e impacto social
- **Disciplina:** Desenvolvimento Front-End para Web (Atividade A2) — UNICID
- **Professor:** Paulo Fratta
- **Equipe:**
  - Johnathan Victor Fernandes (RA: 47789299)
  - Jonathan De Lima Santos (RGM: 47421819)
  - João Vitor Da Silva Maia Domingos (RGM: 47685786)
  - Daniel Biazotto Michellão (RGM: 47506253)
  - Kaiky Vieira Dos Santos (RGM: 1747419288)

## 2. Contexto e justificativa
Questões ambientais e sociais estão ligadas: quem sofre mais com a degradação do ambiente costuma ser quem tem menos acesso a serviços e informação. Um site simples, leve e acessível divulga boas práticas de sustentabilidade e aproxima a comunidade, garantindo acesso pleno a pessoas com deficiência (PCD).

## 3. Objetivos
- **Geral:** publicar um site de 10 páginas sobre sustentabilidade e impacto social com acessibilidade como prioridade.
- **Específicos:** apresentar projetos e resultados em tabelas acessíveis; garantir conformidade com WCAG 2.2 e W3C HTML Validator; oferecer canal de contato validado; documentar todo o processo; publicar no Railway com deploy contínuo pelo GitHub.

## 4. Público-alvo
Estudantes, moradores da comunidade e voluntários, com prioridade para **pessoas com deficiência** (visual, auditiva, motora e intelectual).

## 5. Escopo funcional
- Navegação entre 10 páginas interligadas por menu principal comum e indicador de página atual (`aria-current="page"`).
- Formulário de contato com validação nativa HTML5 (`required`, `type="email"`, `type="tel"`, `type="date"`, `type="number"`, `pattern`) e mensagem de retorno acessível (`aria-live="polite"`).
- Vídeo com `controls`, `poster` e transcrição textual completa; áudio de podcast com `controls` e transcrição; `iframe` de mapa com `title`.
- Tabelas acessíveis (`<caption>` e `<th scope>`) de indicadores de impacto e de orçamento de hospedagem/domínio.

## 6. Escopo não funcional
- Acessibilidade (WCAG 2.2 nível AA): `alt` descritivo em todas as imagens, contraste mínimo de 8:1, navegação completa por teclado com `:focus-visible`, link de salto (`skip-link`), `lang="pt-BR"`, semântica HTML5 e atributos ARIA.
- Responsividade para celular, tablet e desktop (`@media`).
- Desempenho e sustentabilidade digital: ilustrações SVG leves e mídia comprimida.
- Sem dependência de back-end ou banco de dados nesta entrega.

## 7. Mapa do site
`index.html` → `sobre.html`, `projetos.html`, `impacto.html`, `acessibilidade.html`, `galeria.html`, `midia.html`, `noticias.html`, `contato.html`, `orcamento_hospedagem.html` (menu principal presente em todas as 10 páginas).

## 8. Conteúdo e identidade visual
- Paleta em tons de verde (`#1b5e20`, `#2e7d32`, `#e8f5e9`) com destaque âmbar (`#ffab00`) para foco de teclado.
- Fonte do sistema (`Segoe UI`, `Arial`, `sans-serif`) para carregamento instantâneo e alta legibilidade.
- Ícone institucional (`img/favicon.png`), ilustrações originais da equipe em SVG (`img/*.svg`), vídeo (`assets/video-sustentabilidade.mp4`) e áudio (`assets/podcast-futuro-verde.mp3`) produzidos pela equipe.

## 9. Tecnologias e ferramentas
HTML5, CSS3, JavaScript, Git, GitHub, Railway, W3C Nu HTML Validator (`validator.w3.org/nu`) e ferramentas de inspeção de acessibilidade.

## 10. Cronograma e divisão de tarefas
| Etapa | Responsável | Prazo | Status |
|-------|-------------|-------|--------|
| Escopo, orçamento e documentação em `/docs` | Johnathan Victor Fernandes | Semana 1 | Concluído |
| Estrutura HTML5 semântica e navegação (páginas 1 a 5) | Jonathan De Lima Santos | Semana 2 | Concluído |
| Estrutura HTML5 semântica, galeria, notícias e contato (páginas 6 a 10) | João Vitor Da Silva Maia Domingos | Semana 2 | Concluído |
| Folha de estilo CSS3, responsividade e recursos de acessibilidade PCD | Daniel Biazotto Michellão | Semana 3 | Concluído |
| Produção de mídia (vídeo, áudio, ilustrações), validação W3C e deploy no Railway | Kaiky Vieira Dos Santos | Semana 4 | Concluído |

## 11. Riscos e restrições
- `index.html` fora da raiz impede o Railway de detectar o site automaticamente (mitigado mantendo `index.html` na raiz do repositório).
- Diferença entre maiúsculas e minúsculas em nomes de arquivos quebra links em servidores Linux (mitigado padronizando todos os arquivos em letras minúsculas, sem espaços ou acentos).
- Limites do plano gratuito do Railway (US$ 5 no Trial / US$ 1 mensal no Free, suficiente para site estático leve).

## 12. Critérios de aceitação
- 10 páginas interligadas, com `index.html` na raiz do repositório.
- Código HTML5 sem erros nem avisos no W3C Validator (`0 erros, 0 avisos` nas 10 páginas).
- Formulário validado com todos os tipos exigidos; vídeo, áudio e iframe funcionando com transcrições.
- `README.md`, escopo, diário de bordo, orçamento e testes documentados em `/docs`.
- Site publicado no Railway com endereço público ativo (`https://politica-acessivel-production.up.railway.app`).

## 13. Aprovação
| Nome | Data | Assinatura |
|------|------|------------|
| Equipe Futuro Verde | 10/11/2026 | Aprovado pela equipe |
| Prof. Paulo Fratta | 10/11/2026 | Avaliação Atividade A2 |
