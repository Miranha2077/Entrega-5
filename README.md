# Total Focus

> Atenção residual: o custo invisível de cada interrupção.

Site de pesquisa e interação sobre **fragmentação da atenção no trabalho e no dia a dia**, desenvolvido em dupla para a atividade prática avaliativa **"Frontend & Copilotagem com IA"** (Prof. Diego Marques de Carvalho).

- **Tema geral:** Futuro do Trabalho e características socioemocionais da geração atual
- **Recorte escolhido:** falta de atenção no meio profissional e no cotidiano
- **Eixo A:** Futuro do Trabalho · **Eixo B:** Geração Z

🔗 **Site publicado:** _https://miranha2077.github.io/Entrega-5/#termometro_
📄 **Auditoria de uso de IA:** [`AUDITORIA_IA.md`](AUDITORIA_IA.md)

---

## Sumário

1. [Pergunta de pesquisa](#pergunta-de-pesquisa)
2. [Conteúdo do site](#conteúdo-do-site)
3. [Funcionalidades](#funcionalidades)
4. [Tecnologias](#tecnologias)
5. [Estrutura do projeto](#estrutura-do-projeto)
6. [Como executar](#como-executar)
7. [Publicação no GitHub Pages](#publicação-no-github-pages)
8. [Identidade visual](#identidade-visual)
9. [Acessibilidade](#acessibilidade)
10. [Dados e fontes](#dados-e-fontes)
11. [Uso de IA e evolução do projeto](#uso-de-ia-e-evolução-do-projeto)
12. [Limitações e pendências](#limitações-e-pendências)
13. [Autores](#autores)

---

## Pergunta de pesquisa

> Em que medida a cultura de resposta imediata e o excesso de notificações fragmentam a atenção de jovens profissionais, e quais arranjos de trabalho devolvem a eles o controle do próprio foco?

## Conteúdo do site

Página única (_single page_) com navegação por âncoras:

| Seção | Âncora | O que apresenta |
|---|---|---|
| Início | `#inicio` | Título, resumo do tema e a pergunta de pesquisa em destaque |
| Pesquisa | `#pesquisa` | Três conceitos: **atenção residual** (Sophie Leroy, 2009), **custo da interrupção** (Gloria Mark et al., 2008) e **cultura da resposta imediata** |
| Facetas | `#facetas` | Acordeão "Duas faces da mesma geração": facetas positivas, facetas críticas no trabalho e impacto no dia a dia |
| Dados | `#dados` | Gráfico de barras do tempo médio de atenção em uma tela (Gloria Mark) |
| Termômetro | `#termometro` | Questionário interativo de fragmentação da atenção |

## Funcionalidades

### Termômetro de fragmentação da atenção (microaplicação)

- 6 afirmações respondidas em escala de 4 pontos: _Nunca, Às vezes, Frequentemente, Sempre_ (valores 0 a 3).
- A pergunta 6 ("Consigo reservar blocos de foco…") é **invertida** (`3 - valor`), pois mede um hábito protetor.
- Pontuação total de **0 a 18**, dividida em três faixas:

| Pontuação | Resultado |
|---|---|
| 0 a 5 | Atenção bem protegida |
| 6 a 11 | Atenção parcialmente fragmentada |
| 12 a 18 | Atenção muito fragmentada |

- Barra de progresso que acompanha as respostas, validação de campos obrigatórios e resultado exibido em **modal** do Bootstrap (com _fallback_ abaixo do formulário caso o JS do Bootstrap não carregue).
- Todo o cálculo acontece no navegador; nenhum dado é enviado.
- Instrumento **autoral e ilustrativo, sem validade clínica**.

### Gráfico interativo

- Gráfico de barras com **Chart.js**: tempo médio em uma mesma tela antes de trocar (2004, 2012 e 2016 em diante).
- _Tooltips_ com unidade em segundos e cores que acompanham o tema claro/escuro.
- _Fallback_ em tabela HTML caso o Chart.js não carregue, para que uma falha no gráfico não derrube o questionário.

### Tema claro/escuro

- Alternância por botão na barra de navegação, com `aria-pressed` atualizado.
- Respeita `prefers-color-scheme` na primeira visita e **persiste só a escolha explícita** da pessoa em `localStorage` (com `try/catch` para navegadores que bloqueiam o armazenamento).

### Outros recursos

- Barra de navegação fixa (`sticky-top`) com efeito de vidro (_glassmorphism_) e menu recolhível em telas pequenas.
- Cartões com animação de elevação ao passar o mouse e animação de entrada na pergunta de pesquisa.
- Layout responsivo com o grid de 12 colunas do Bootstrap.

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`) |
| CSS3 | — | Variáveis CSS, `clamp()`, `color-mix()`, grid, _backdrop-filter_, `prefers-reduced-motion` |
| [Bootstrap](https://getbootstrap.com/) | 5.3.3 (CDN) | Grid, navbar, cards, acordeão, modal, badges, barra de progresso |
| [Chart.js](https://www.chartjs.org/) | 4.4.1 (CDN) | Gráfico de barras |
| JavaScript (ES6+) | — | Tema, questionário, gráfico |
| Google Fonts | — | **Bricolage Grotesque** (títulos) e **Instrument Sans** (corpo) |

> Projeto 100% estático: não há _build_, _bundler_ nem dependências locais para instalar.

## Estrutura do projeto

```
total-focus/
├── index.html          # Página única
├── css/
│   └── styles.css      # Estilos próprios e variáveis de tema
├── js/
│   └── app.js          # Tema, gráfico e questionário
├── AUDITORIA_IA.md     # Registro de prompts, respostas da IA e auditoria da dupla
└── README.md
```

## Como executar

Não é necessária nenhuma instalação.

**Opção 1: abrir direto**
Dê dois cliques em `index.html` (as bibliotecas vêm de CDN, então é preciso estar conectado à internet).


## Publicação no GitHub Pages

1. Envie os arquivos para um repositório no GitHub (com `index.html` na raiz).
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde alguns minutos. O link do site aparecerá na mesma tela.

## Identidade visual

Paleta definida por variáveis CSS em `:root` e redefinida em `[data-bs-theme="dark"]`:

| Variável | Claro | Escuro | Uso |
|---|---|---|---|
| `--cor-primaria` | `#1f4fd8` | `#7c9bff` | Botões, links, barra de progresso |
| `--cor-secundaria` | `#d6e84b` | `#d6e84b` | Destaques e borda da pergunta de pesquisa |
| `--cor-fundo` | `#f2f4f0` | `#0e1320` | Fundo da página |
| `--cor-superficie` | `#ffffff` | `#171e31` | Acordeão e superfícies |
| `--cor-texto` | `#131a2b` | `#eef1f8` | Texto principal |
| `--cor-suave` | `#4b5468` | `#a9b2c8` | Texto secundário |

Também há variáveis para fontes (`--fonte-titulo`, `--fonte-corpo`), espaçamentos (`--esp-1` a `--esp-3`), raio de borda (`--raio`), efeito de vidro (`--vidro`) e bordas (`--borda`).

## Acessibilidade

- _Skip link_ "Ir para o conteúdo" visível ao receber foco.
- Hierarquia de títulos coerente e regiões com `aria-labelledby` / `aria-label`.
- Questionário com `fieldset` + `legend`, navegação por teclado e foco visível (`:focus-visible` e `:focus-within`).
- Barra de progresso com `role="progressbar"` e `aria-valuenow` atualizado.
- Mensagem de erro com `role="alert"` e resultado com `aria-live="polite"`.
- Gráfico com `role="img"` e descrição textual em `aria-label`, além de tabela alternativa.
- Botão de tema com `aria-pressed`.
- Respeito a `prefers-reduced-motion`, que desativa animações e transições.
- Largura de texto limitada a 65 caracteres para leitura confortável.

## Dados e fontes

| Dado | Valor | Fonte |
|---|---|---|
| Tempo médio de atenção em uma tela, 2004 | ~150 s | Gloria Mark, _Attention Span_ (2023) |
| Tempo médio de atenção em uma tela, 2012 | ~75 s | idem |
| Tempo médio de atenção em uma tela, 2016 em diante | ~47 s | idem |

O dado mede o tempo em **uma mesma tela**, e não a capacidade de concentração das pessoas.


## Uso de IA e evolução do projeto

A ferramenta usada foi o **Claude Sonnet 5.5**. Todo o processo está registrado em [`AUDITORIA_IA.md`](AUDITORIA_IA.md), com o prompt, a resposta bruta da IA e a auditoria crítica da dupla em cada etapa.

| Versão | O que mudou |
|---|---|
| **1. Primeira versão** | Site informativo com navbar escura, hero, cartões, acordeão e seção final. Paleta verde, fonte do sistema e Bootstrap 5.3.8. A IA analisou erros de código e estilização e propôs melhorias. |
| **2. Segunda versão** | Foco em HTML5 semântico, acessibilidade e responsividade. Entraram o tema claro/escuro, o questionário de hábitos com selects, o gráfico com Chart.js e o modal. Fontes DM Sans e Manrope. |
| **3. Versão final** | Nova identidade visual (azul e amarelo-limão, Bricolage Grotesque e Instrument Sans) e novo recorte de pesquisa com pergunta central. Questionário reescrito em escala de 0 a 3 com pergunta invertida, gráfico com dados reais citados (Gloria Mark), _fallbacks_ para falhas de CDN e modal de diagnóstico. |

**Principais pontos da auditoria da dupla**

- Verificar se os problemas apontados pela IA existiam de fato antes de aceitá-los.
- Corrigir a lógica do questionário, exibir pontuação e recomendações e garantir a renderização do gráfico.
- Distinguir dados demonstrativos de resultados reais de pesquisa.
- Reforçar acessibilidade, responsividade e alternância de tema.

## Limitações e pendências

- [ ] O menu de navegação tem o link **"Transparência de IA" (`#transparencia`)**, mas a seção ainda não existe no `index.html`. Criar a seção (por exemplo, resumindo o `AUDITORIA_IA.md`) ou remover o link.
- [ ] Remover do rodapé do gráfico o aviso interno _"Dupla: confirmar os valores na fonte e acrescentar outros conjuntos de dados"_ depois de conferir os números.
- [ ] Conferir os valores do gráfico (150 s, 75 s e 47 s) diretamente na obra de Gloria Mark e acrescentar outros conjuntos de dados.
- [ ] Adicionar um cartão de conclusão ou fontes no próprio site, se a atividade exigir.
- [ ] O questionário é ilustrativo: não tem validação psicométrica nem substitui avaliação profissional.
- [ ] O rodapé começa com um espaço antes de "2026 ©" e pode ser revisado.
- [ ] Os arquivos `README (1).md` e `main.js` enviados estavam vazios e não fazem parte da versão final.

## Autores

Atividade realizada em dupla:

- _Eduardo Alcantara Dias da Silva RGM:47180196_
- _Guilherme Pereira da Silva Franco RGM: 46769137_

**Professor:** Diego Marques de Carvalho

---

© 2026 Total Focus. Projeto acadêmico, sem fins comerciais.
