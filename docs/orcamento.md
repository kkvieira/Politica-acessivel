# Orçamento de Hospedagem e Domínio

Valores consultados na documentação oficial dos provedores (`docs.railway.com/pricing`, GitHub Docs, Netlify Pricing e `registro.br`).

## Hospedagem (3 opções pesquisadas)

| Critério | Railway | GitHub Pages | Netlify |
|----------|---------|--------------|---------|
| **Preço mensal** | Trial: US$ 0 (US$ 5 de crédito único por 30 dias); Free: US$ 0 (US$ 1 de crédito/mês); Hobby: US$ 5/mês | US$ 0 (gratuito para repositórios públicos) | Free: US$ 0/mês; Pro: US$ 19/mês |
| **Preço anual** | Free: US$ 0/ano; Hobby: US$ 60/ano (mais consumo excedente) | US$ 0/ano | Free: US$ 0/ano; Pro: US$ 228/ano |
| **Recursos** | Deploy contínuo via GitHub, HTTPS automático, suporte a sites estáticos, back-end (Node, Python, PHP) e banco de dados (MySQL/PostgreSQL), logs e métricas | Hospedagem de arquivos estáticos (HTML, CSS, JS), HTTPS gratuito, integração direta com repositório GitHub | Hospedagem estática, CDN global, HTTPS automático, deploy por Git e funções serverless |
| **Limites** | Free: até 0,5 GB RAM e 0,5 vCPU por serviço (consumo descontado do crédito mensal de US$ 1) | Apenas sites estáticos (sem back-end ou banco de dados); limite de 1 GB de armazenamento e 100 GB/mês de banda | Plano Free: 100 GB de banda/mês e 300 minutos de build/mês; sem banco de dados relacional nativo |
| **Sustentabilidade / Hospedagem verde** | Infraestrutura em nuvem (GCP/AWS) com metas de 100% de energia renovável e alocação sob demanda (menor ociosidade de servidores) | Data centers da Microsoft/GitHub com compromisso carbono negativo até 2030 e compra de energia 100% renovável | Execução em CDN distribuída (AWS/GCP) com otimização de cache na borda para reduzir transferência de dados e consumo energético |

## Domínios (3 opções pesquisadas no Registro.br)

| Domínio pesquisado | Registrador | Registro (1º ano) | Renovação anual | Adequação ao projeto |
|--------------------|-------------|-------------------|-----------------|----------------------|
| `futuroverde.org.br` | Registro.br | R$ 40,00 | R$ 40,00 / ano | **Recomendado** — identifica organizações e iniciativas do terceiro setor e impacto socioambiental |
| `futuroverde.com.br` | Registro.br | R$ 40,00 | R$ 40,00 / ano | Alternativa nacional de fácil memorização para divulgação geral |
| `futuroverde.eco.br` | Registro.br | R$ 40,00 | R$ 40,00 / ano | Alternativa voltada especificamente a projetos ecológicos e ambientais |

## Justificativa da escolha da equipe

A equipe escolheu o **Railway** para a hospedagem porque:
1. Permite **deploy automático via GitHub** a cada `git push` na branch `main`, mantendo o site sempre atualizado sem custo nos planos Trial/Free.
2. Fornece **subdomínio gratuito com HTTPS automático** (`https://politica-acessivel-production.up.railway.app`).
3. Diferentemente do GitHub Pages (restrito a arquivos estáticos), o Railway suporta **evolução futura do projeto** com back-end e banco de dados MySQL/PostgreSQL no mesmo ambiente.
4. Opera sobre data centers com **compromisso de energia renovável** e cobrança por uso real de CPU/RAM, alinhando-se ao princípio de sustentabilidade digital do projeto (arquivos leves em SVG e HTML/CSS puro consomem frações mínimas de energia e recursos).

Para registro de domínio próprio, a recomendação é `futuroverde.org.br` no **Registro.br** (R$ 40,00/ano), por representar com transparência o propósito comunitário e sem fins lucrativos da iniciativa.
