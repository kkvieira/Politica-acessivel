# Diário de Bordo

| Data | Atividade | Responsável | Observações |
|------|-----------|-------------|-------------|
| 10/11/2026 | Leitura do roteiro da Atividade A2 e definição do tema (sustentabilidade e impacto social com foco em PCD) | Johnathan Victor Fernandes | Tema obrigatório aplicado nas 10 páginas |
| 10/11/2026 | Definição do mapa do site com 10 páginas e padronização de nomes de arquivos | Jonathan De Lima Santos | Nomes em letras minúsculas, sem acentos nem espaços |
| 10/11/2026 | Criação da estrutura de pastas (`css/`, `js/`, `img/`, `assets/`, `docs/`) com `index.html` na raiz | João Vitor Da Silva Maia Domingos | Estrutura compatível com detecção automática do Railway |
| 10/11/2026 | Desenvolvimento do CSS responsivo (`css/estilo.css`), alto contraste, foco visível e skip-link | Daniel Biazotto Michellão | Contraste verificado conforme WCAG 2.2 AA |
| 10/11/2026 | Produção das 10 páginas HTML, ilustrações SVG, favicon, vídeo narrado (`.mp4`) e podcast (`.mp3`) | Kaiky Vieira Dos Santos | Mídia leve com transcrição textual para acessibilidade |
| 10/11/2026 | Elaboração completa da documentação em `/docs` (escopo, diário de bordo, orçamento e testes) | Johnathan Victor Fernandes | 13 itens do escopo preenchidos e orçamento comparativo |
| 10/11/2026 | Validação das 10 páginas no W3C Nu HTML Validator (`validator.w3.org/nu`) | Kaiky Vieira Dos Santos | 0 erros e 0 avisos em todas as 10 páginas (`docs/validacao-w3c.json`) |
| 10/11/2026 | Envio para o repositório GitHub (`kkvieira/Politica-acessivel`) e deploy automático no Railway | Kaiky Vieira Dos Santos | Publicado em `https://politica-acessivel-production.up.railway.app` |

## Dificuldades e aprendizados
- Manter caminhos relativos e nomes estritamente em letras minúsculas evita erros 404 ao publicar em servidores Linux como o Railway.
- Textos alternativos (`alt`) devem descrever o conteúdo e a função comunicativa da imagem para usuários de leitores de tela, enquanto ícones puramente decorativos recebem `alt=""` ou `aria-hidden="true"`.
- A combinação de validação nativa HTML5 (`required`, `type`, `pattern`) com `aria-live="polite"` oferece feedback imediato tanto visualmente quanto para tecnologias assistivas.
