
### 1. Engenharia de Prompt (Entrada): 
 **Ferramenta Utilizada: Claude Sonnet 5.5**


 Prompt: Análise o código HTML e CSS da primeira versão do meu site Total Focus, que aborda a falta de atenção na vida profissional e cotidiana. Identifique os principais erros de programação, problemas de estilização e pontos que podem ser melhorados. E faça uma melhoria de acordo com os erros identificados por você.


**1.1 Resposta Bruta da IA (Código Inicial Gerado):** 



    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Total Focus: entenda como a falta de atenção afeta a rotina profissional e cotidiana.">
    <title>Total Focus | Atenção e concentração</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

    <!-- Navegação principal -->
    <nav class="navbar navbar-expand-lg navbar-dark site-navbar">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#inicio">
                <span class="brand-mark">TF</span>
                Total Focus
            </a>

            <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuPrincipal"
                aria-controls="menuPrincipal"
                aria-expanded="false"
                aria-label="Abrir ou fechar o menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="menuPrincipal">
                <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#sobre">Sobre o tema</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#impactos">Impactos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#estrategias">Estratégias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-cta" href="#reflexao">Reflita</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Apresentação do projeto -->
    <header class="hero" id="inicio">
        <div class="container hero-content">
            <p class="eyebrow">ATENÇÃO • ROTINA • PRODUTIVIDADE</p>

            <h1>
                Seu foco direciona
                <br class="d-none d-md-block">
                os seus resultados.
            </h1>

            <p class="hero-description">
                A falta de atenção pode parecer um detalhe na rotina,
                mas afeta tarefas, decisões e relações. Entender suas
                causas é o primeiro passo para construir hábitos mais
                conscientes no trabalho e no dia a dia.
            </p>

            <a class="btn btn-primary btn-lg hero-button" href="#sobre">
                Entenda o problema ↓
            </a>
        </div>

        <div class="hero-decoration hero-decoration-one" aria-hidden="true"></div>
        <div class="hero-decoration hero-decoration-two" aria-hidden="true"></div>
    </header>

    <main id="conteudo">

        <!-- Seção sobre a falta de atenção -->
        <section class="section-block" id="sobre" aria-labelledby="titulo-sobre">
            <div class="container">
                <div class="section-heading">
                    <p class="eyebrow">01 / COMPREENDER</p>

                    <h2 id="titulo-sobre">O que é falta de atenção?</h2>

                    <p>
                        É a dificuldade de manter a concentração em uma
                        atividade ou de direcionar a atenção para aquilo
                        que precisa ser feito. Isso pode acontecer
                        ocasionalmente e ter diferentes causas, como
                        distrações, excesso de tarefas, cansaço ou
                        interrupções frequentes.
                    </p>
                </div>

                <div class="info-grid">
                    <article class="info-card">
                        <span class="card-number">01</span>
                        <h3>Distrações constantes</h3>
                        <p>
                            Notificações, conversas paralelas e mudanças
                            frequentes de tarefa podem interromper o raciocínio.
                        </p>
                    </article>

                    <article class="info-card">
                        <span class="card-number">02</span>
                        <h3>Sobrecarga de tarefas</h3>
                        <p>
                            Tentar resolver muitas demandas ao mesmo tempo
                            pode dificultar a organização e a priorização.
                        </p>
                    </article>

                    <article class="info-card">
                        <span class="card-number">03</span>
                        <h3>Cansaço e rotina</h3>
                        <p>
                            Descanso insuficiente e uma rotina desorganizada
                            podem tornar mais difícil sustentar a concentração.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Impactos na vida cotidiana -->
        <section class="section-block section-muted"
            id="impactos"
            aria-labelledby="titulo-impactos">

            <div class="container split-layout">
                <div class="section-heading">
                    <p class="eyebrow">02 / RECONHECER</p>

                    <h2 id="titulo-impactos">
                        Como isso afeta a rotina?
                    </h2>

                    <p>
                        Quando a atenção é interrompida repetidamente,
                        tarefas simples podem levar mais tempo, detalhes
                        importantes podem passar despercebidos e a
                        sensação de produtividade pode diminuir.
                    </p>
                </div>

                <div class="impact-list">
                    <article class="impact-item">
                        <span class="impact-icon" aria-hidden="true">↗</span>

                        <div>
                            <h3>No ambiente profissional</h3>
                            <p>
                                Erros por desatenção, retrabalho, atrasos
                                e dificuldade para acompanhar orientações.
                            </p>
                        </div>
                    </article>

                    <article class="impact-item">
                        <span class="impact-icon" aria-hidden="true">⌂</span>

                        <div>
                            <h3>Na vida cotidiana</h3>
                            <p>
                                Esquecimento de compromissos, tarefas
                                incompletas e dificuldade para manter
                                uma rotina organizada.
                            </p>
                        </div>
                    </article>

                    <article class="impact-item">
                        <span class="impact-icon" aria-hidden="true">◎</span>

                        <div>
                            <h3>Na aprendizagem</h3>
                            <p>
                                Mais dificuldade para acompanhar explicações,
                                revisar conteúdos e concluir atividades de estudo.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Estratégias para melhorar a concentração -->
        <section class="section-block"
            id="estrategias"
            aria-labelledby="titulo-estrategias">

            <div class="container">
                <div class="section-heading">
                    <p class="eyebrow">03 / AGIR</p>

                    <h2 id="titulo-estrategias">
                        Pequenas estratégias para recuperar o foco
                    </h2>

                    <p>
                        Não existe uma solução única para todas as pessoas.
                        Estas práticas simples podem ajudar a organizar
                        a atenção ao longo do dia.
                    </p>
                </div>

                <div class="accordion focus-accordion" id="accordionFocus">

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#estrategiaUm"
                                aria-expanded="true"
                                aria-controls="estrategiaUm">
                                1. Defina uma prioridade por vez
                            </button>
                        </h3>

                        <div id="estrategiaUm"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionFocus">

                            <div class="accordion-body">
                                Antes de começar, escolha a tarefa mais
                                importante e divida-a em etapas menores.
                                Termine uma etapa antes de mudar de
                                atividade, sempre que possível.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#estrategiaDois"
                                aria-expanded="false"
                                aria-controls="estrategiaDois">
                                2. Reduza as interrupções
                            </button>
                        </h3>

                        <div id="estrategiaDois"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFocus">

                            <div class="accordion-body">
                                Silencie notificações não essenciais e
                                deixe à mão apenas o que você precisa
                                para a tarefa atual. Reserve momentos
                                específicos para verificar mensagens.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#estrategiaTres"
                                aria-expanded="false"
                                aria-controls="estrategiaTres">
                                3. Planeje pausas e momentos de descanso
                            </button>
                        </h3>

                        <div id="estrategiaTres"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionFocus">

                            <div class="accordion-body">
                                Organize períodos de trabalho ou estudo
                                com pausas adequadas à sua rotina.
                                Observe como o sono, o cansaço e o
                                ambiente influenciam sua concentração.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Encerramento -->
        <section class="reflection-section"
            id="reflexao"
            aria-labelledby="titulo-reflexao">

            <div class="container reflection-content">
                <p class="eyebrow">UM PASSO DE CADA VEZ</p>

                <h2 id="titulo-reflexao">
                    Em qual momento você mais perde o foco?
                </h2>

                <p>
                    Reconhecer as situações que mais distraem você
                    pode ajudar a escolher uma estratégia para
                    testar primeiro.
                </p>

                <a class="btn btn-light btn-lg" href="#inicio">
                    Voltar ao início ↑
                </a>
            </div>
        </section>
    </main>

    <!-- Rodapé no fluxo normal da página -->
    <footer class="site-footer">
        <div class="container footer-content">
            <a class="footer-brand" href="#inicio">Total Focus</a>

            <p>
                Informação e reflexão sobre atenção na vida
                profissional e cotidiana.
            </p>

            <small>
                &copy; 2026 Total Focus. Todos os direitos reservados.
            </small>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
**CSS:**


    :root {
    --color-ink: #172b3a;
    --color-muted: #5d6c78;
    --color-primary: #176b62;
    --color-primary-dark: #104d48;
    --color-accent: #c9f27a;
    --color-surface: #ffffff;
    --color-soft: #f2f7f5;
    --color-border: #dce7e3;
    --shadow-card: 0 14px 36px rgba(23, 43, 58, 0.07);
    }

    html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    }

    body {
    margin: 0;
    background: var(--color-surface);
    color: var(--color-ink);
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    line-height: 1.7;
    }

    a {
    text-underline-offset: 0.2em;
    }

    a:focus-visible,
    button:focus-visible {
    outline: 3px solid var(--color-accent);
    outline-offset: 3px;
    }


    .skip-link {
    position: absolute;
    top: -100px;
    left: 1rem;
    z-index: 2000;
    padding: 0.75rem 1rem;
    background: #ffffff;
    color: var(--color-ink);
    border-radius: 0.5rem;
    }

    .skip-link:focus {
    top: 1rem;
    }



    .site-navbar {
    position: relative;
    z-index: 10;
    background: #132f3b;
    padding: 0.9rem 0;
    }

    .navbar-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    color: #ffffff;
    letter-spacing: -0.02em;
    }

    .navbar-brand:hover,
    .navbar-brand:focus {
    color: var(--color-accent);
    }

    .brand-mark {
    display: inline-grid;
    width: 2.2rem;
    height: 2.2rem;
    place-items: center;
    border-radius: 0.65rem;
    background: var(--color-accent);
    color: #132f3b;
    font-size: 0.8rem;
    font-weight: 800;
    }

    .site-navbar .nav-link {
    color: #e3eceb;
    padding: 0.55rem 0.8rem;
    }

    .site-navbar .nav-link:hover,
    .site-navbar .nav-link:focus {
    color: var(--color-accent);
    }

    .site-navbar .nav-cta {
    border: 1px solid rgba(201, 242, 122, 0.65);
    border-radius: 999px;
    padding-inline: 1rem;
    }

    .hero {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: clamp(5rem, 10vw, 8.5rem) 0;
    background: #eaf4ef;
    }

    .hero-content {
    position: relative;
    z-index: 1;
    max-width: 960px;
    }

    .eyebrow {
    margin-bottom: 1rem;
    color: var(--color-primary);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    }

    .hero h1 {
    max-width: 850px;
    margin: 0 0 1.5rem;
    color: #142f3b;
    font-size: clamp(2.7rem, 7vw, 5.6rem);
    font-weight: 800;
    letter-spacing: -0.055em;
    line-height: 1.03;
    }

    .hero-description {
    max-width: 650px;
    margin-bottom: 2rem;
    color: #435d65;
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    }

    .hero-button,
    .btn-primary {
    border-color: var(--color-primary);
    background: var(--color-primary);
    }

    .hero-button {
    padding: 0.85rem 1.35rem;
    border-radius: 0.75rem;
    font-weight: 700;
    }

    .hero-button:hover,
    .btn-primary:hover {
    border-color: var(--color-primary-dark);
    background: var(--color-primary-dark);
    }

    /* Elementos decorativos feitos somente com CSS */
    .hero-decoration {
    position: absolute;
    z-index: 0;
    border: 1px solid rgba(23, 107, 98, 0.15);
    border-radius: 50%;
    pointer-events: none;
    }

    .hero-decoration-one {
    top: -10rem;
    right: -5rem;
    width: 34rem;
    height: 34rem;
    }

    .hero-decoration-two {
    top: -5rem;
    right: 1rem;
    width: 22rem;
    height: 22rem;
    }


    .section-block {
    padding: clamp(4rem, 8vw, 6.5rem) 0;
    }

    .section-muted {
    background: var(--color-soft);
    }

    .section-heading {
        max-width: 760px;
        margin-bottom: 2.5rem;
    }

    .section-heading h2,
    .reflection-content h2 {
        margin-bottom: 1rem;
        color: var(--color-ink);
        font-size: clamp(2rem, 4vw, 3.25rem);
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1.12;
    }

    .section-heading > p:last-child,
    .reflection-content > p:not(.eyebrow) {
        color: var(--color-muted);
        font-size: 1.05rem;
    }


    .info-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
    }

    .info-card {
        min-height: 230px;
        padding: 1.7rem;
        border: 1px solid var(--color-border);
        border-radius: 1rem;
        background: #ffffff;
        box-shadow: var(--shadow-card);
    }

    .card-number {
        display: inline-block;
        margin-bottom: 1.25rem;
        color: var(--color-primary);
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.1em;
    }

    .info-card h3,
    .impact-item h3 {
        margin-bottom: 0.65rem;
        color: var(--color-ink);
        font-size: 1.2rem;
        font-weight: 750;
    }

    .info-card p,
    .impact-item p {
        margin-bottom: 0;
        color: var(--color-muted);
    }


    .split-layout {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        align-items: start;
        gap: clamp(2rem, 6vw, 5rem);
    }

    .impact-list {
        display: grid;
        gap: 1rem;
    }

    .impact-item {
        display: flex;
        gap: 1rem;
        padding: 1.4rem;
        border: 1px solid var(--color-border);
        border-radius: 1rem;
        background: #ffffff;
    }

    .impact-icon {
        display: grid;
        flex: 0 0 2.8rem;
        width: 2.8rem;
        height: 2.8rem;
        place-items: center;
        border-radius: 0.85rem;
        background: #e2f2e8;
        color: var(--color-primary-dark);
        font-size: 1.35rem;
        font-weight: 800;
    }

    /* =========================================
    ACORDEÃO
    ========================================= */

    .focus-accordion {
        max-width: 900px;
        border: 1px solid var(--color-border);
        border-radius: 1rem;
        overflow: hidden;
    }

    .focus-accordion .accordion-item {
        border-color: var(--color-border);
    }

    .focus-accordion .accordion-button {
        padding: 1.3rem 1.4rem;
        color: var(--color-ink);
        font-size: 1.05rem;
        font-weight: 700;
    }

    .focus-accordion .accordion-button:not(.collapsed) {
        background: #eaf4ef;
        color: var(--color-primary-dark);
        box-shadow: none;
    }

    .focus-accordion .accordion-button:focus {
        border-color: var(--color-primary);
        box-shadow: 0 0 0 0.2rem rgba(23, 107, 98, 0.15);
    }

    .focus-accordion .accordion-body {
        padding: 1.25rem 1.4rem 1.5rem;
        color: var(--color-muted);
    }

    /* =========================================
    SEÇÃO FINAL
    ========================================= */

    .reflection-section {
        padding: clamp(4rem, 8vw, 6rem) 0;
        background: var(--color-primary-dark);
    }

    .reflection-content {
        max-width: 850px;
        text-align: center;
    }

    .reflection-content .eyebrow {
        color: var(--color-accent);
    }

    .reflection-content h2 {
        color: #ffffff;
    }

    .reflection-content > p:not(.eyebrow) {
        max-width: 650px;
        margin: 0 auto 1.8rem;
        color: #dce9e6;
    }

    .reflection-content .btn {
        border-radius: 0.75rem;
        color: var(--color-primary-dark);
        font-weight: 700;
    }

    /* =========================================
    RODAPÉ
    ========================================= */

    .site-footer {
        padding: 2.5rem 0;
        background: #102731;
        color: #d7e3e1;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 0.75rem 2rem;
    }

    .footer-brand {
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: 800;
        text-decoration: none;
    }

    .footer-brand:hover {
        color: var(--color-accent);
    }

    .footer-content p {
        margin: 0;
        color: #d7e3e1;
    }

    .footer-content small {
        grid-column: 1 / -1;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.14);
        color: #b8c9c7;
    }

    /* =========================================
    RESPONSIVIDADE
    ========================================= */

    @media (max-width: 767.98px) {
        .hero {
            padding: 4.5rem 0;
        }

        .hero-decoration-one {
            right: -18rem;
        }

        .hero-decoration-two {
            right: -12rem;
        }

        .info-grid,
        .split-layout {
            grid-template-columns: 1fr;
        }

        .info-card {
            min-height: auto;
        }

        .footer-content {
            grid-template-columns: 1fr;
        }

        .footer-content small {
            grid-column: auto;
        }
    }

    /* Respeita a preferência do usuário por menos movimento */
    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
        }
    }


**1.2 Auditoria Crítica da Dupla (Diagnóstico Técnico de Falhas):** 
Foi necessário verificar se os problemas indicados realmente existiam no código original, evitando considerar como erros elementos que já estavam implementados corretamente. A análise serviu para identificar os pontos que precisavam de correção antes da reescrita.

**1.3 Refatoração Manual e Intervenção da Dupla:** 
Realizamos uma análise inicial do código desenvolvido manualmente, identificando pontos que precisavam de melhorias na estilização e na adaptação do layout a diferentes tamanhos de tela. Essa análise serviu como base para definir os ajustes necessários nas próximas versões do site.






**2. Engenharia de Prompt (Entrada)**
**Ferramenta Utilizada: Claude Sonnet 5.5**
Prompt: Solicitar a análise e melhoria do site Total Focus utilizando HTML5 semântico, CSS3 moderno, Bootstrap 5 e JavaScript, com foco em acessibilidade, responsividade, identidade visual própria e interatividade. O projeto também deveria incluir uma micro aplicação, um gráfico interativo com dados da pesquisa.

**2.1 Resposta Bruta da IA (Código Inicial Gerado)**

**HTML:**

    <!DOCTYPE html>
    <html lang="pt-BR" data-bs-theme="light">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta
        name="description"
        content="Total Focus: conteúdo e ferramentas educativas sobre concentração, distrações e equilíbrio no cotidiano profissional."
    >
    <meta name="theme-color" content="#123047">

    <title>Total Focus | Concentração e bem-estar</title>

    <!-- Fonte externa -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    >

    <!-- Bootstrap 5 -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >

    <!-- CSS do projeto -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js" defer></script>

    <!-- JavaScript do projeto -->
    <script src="js/script.js" defer></script>
    </head>

    <body>
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

    <!-- Navegação -->
    <nav class="navbar navbar-expand-lg navbar-dark site-navbar sticky-top">
        <div class="container">
        <a class="navbar-brand brand" href="#inicio" aria-label="Total Focus, página inicial">
            <span class="brand-mark" aria-hidden="true">TF</span>
            <span>Total Focus</span>
        </a>

      <div class="d-flex align-items-center gap-2 order-lg-2">
        <button
          class="btn theme-toggle"
          id="themeToggle"
          type="button"
          aria-label="Ativar tema escuro"
          aria-pressed="false"
        >
          <span id="themeIcon" aria-hidden="true">☾</span>
          <span class="d-none d-sm-inline" id="themeLabel">Tema escuro</span>
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir ou fechar o menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse order-lg-1" id="menuPrincipal">
        <ul class="navbar-nav ms-auto me-lg-4">
          <li class="nav-item">
            <a class="nav-link" href="#sobre">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#impactos">Impactos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#avaliacao">Avalie seus hábitos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#dados">Dados</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main id="conteudo">
    <!-- Hero -->
    <header class="hero-section" id="inicio">
      <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-two" aria-hidden="true"></div>

      <div class="container hero-content">
        <div class="row align-items-center g-5">
          <div class="col-12 col-lg-8">
            <span class="badge rounded-pill badge-soft mb-3">
              CONCENTRAÇÃO E EQUILÍBRIO
            </span>

            <h1>Recupere o foco. <span>Valorize seu tempo.</span></h1>

            <p class="hero-description">
              Entenda como as distrações afetam sua atenção e descubra
              estratégias práticas para organizar melhor suas atividades.
            </p>

            <div class="d-flex flex-wrap gap-3">
              <a class="btn btn-primary btn-lg" href="#avaliacao">
                Avaliar meus hábitos
              </a>
              <a class="btn btn-outline-light btn-lg" href="#sobre">
                Conhecer o projeto
              </a>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="hero-panel glass-panel">
              <span class="hero-panel-icon" aria-hidden="true">◎</span>
              <p class="eyebrow">UM PASSO DE CADA VEZ</p>
              <h2>Foco é prática, não perfeição.</h2>
              <p>
                Pequenas mudanças na rotina podem ajudar você a perceber
                melhor seus hábitos de atenção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Sobre -->
    <section class="section-space" id="sobre">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">01 / ENTENDA</span>
          <h2>O que interfere na concentração?</h2>
          <p>
            A atenção pode ser afetada por diferentes fatores do ambiente
            e da rotina. Identificá-los é um ponto de partida para agir.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <article class="card focus-card h-100">
              <div class="card-body">
                <span class="card-icon" aria-hidden="true">↗</span>
                <span class="badge text-bg-primary mb-3">Ambiente</span>
                <h3 class="h5">Interrupções constantes</h3>
                <p>
                  Notificações, conversas e mudanças frequentes de tarefa
                  podem dificultar a continuidade do trabalho.
                </p>
              </div>
            </article>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <article class="card focus-card h-100">
              <div class="card-body">
                <span class="card-icon" aria-hidden="true">⌁</span>
                <span class="badge text-bg-success mb-3">Rotina</span>
                <h3 class="h5">Excesso de atividades</h3>
                <p>
                  Muitas demandas simultâneas podem dificultar a definição
                  de prioridades e a organização do tempo.
                </p>
              </div>
            </article>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <article class="card focus-card h-100">
              <div class="card-body">
                <span class="card-icon" aria-hidden="true">◷</span>
                <span class="badge text-bg-warning mb-3">Descanso</span>
                <h3 class="h5">Falta de pausas</h3>
                <p>
                  Uma rotina sem intervalos pode aumentar a sensação de
                  cansaço e tornar a manutenção do foco mais difícil.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Impactos -->
    <section class="section-space section-muted" id="impactos">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">02 / REFLITA</span>
          <h2>Como isso aparece no cotidiano?</h2>
          <p>
            As consequências variam conforme a pessoa, a atividade
            realizada e as condições em que ela trabalha ou estuda.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-4">
            <article class="impact-card h-100">
              <span class="impact-number">01</span>
              <h3 class="h5">No trabalho</h3>
              <p>
                Mais dificuldade para manter a sequência das tarefas,
                acompanhar instruções e organizar entregas.
              </p>
            </article>
          </div>

          <div class="col-12 col-md-4">
            <article class="impact-card h-100">
              <span class="impact-number">02</span>
              <h3 class="h5">Nos estudos</h3>
              <p>
                Interrupções durante a leitura, a prática de exercícios
                ou a revisão de conteúdos.
              </p>
            </article>
          </div>

          <div class="col-12 col-md-4">
            <article class="impact-card h-100">
              <span class="impact-number">03</span>
              <h3 class="h5">Na rotina pessoal</h3>
              <p>
                Dificuldade para concluir atividades planejadas e
                reservar momentos de descanso.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Microaplicação -->
    <section class="section-space" id="avaliacao">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">03 / EXPERIMENTE</span>
          <h2>Como estão seus hábitos de foco?</h2>
          <p>
            Responda às perguntas sobre sua rotina para receber uma
            pontuação orientativa e sugestões personalizadas.
          </p>
        </div>

        <div class="row g-4 align-items-start">
          <div class="col-12 col-lg-7">
            <form class="assessment-panel" id="focusForm">
              <div class="mb-4">
                <label class="form-label" for="focusHours">
                  Quantas horas por dia você costuma realizar atividades
                  que exigem concentração?
                </label>
                <select class="form-select" id="focusHours" name="focusHours" required>
                  <option value="1">Menos de 1 hora</option>
                  <option value="2" selected>De 1 a 3 horas</option>
                  <option value="3">De 3 a 5 horas</option>
                  <option value="4">Mais de 5 horas</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label" for="interruptions">
                  Quantas vezes você costuma ser interrompido por hora?
                </label>
                <select class="form-select" id="interruptions" name="interruptions" required>
                  <option value="0">Raramente</option>
                  <option value="1" selected>De 1 a 2 vezes</option>
                  <option value="2">De 3 a 5 vezes</option>
                  <option value="3">Mais de 5 vezes</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label" for="breaks">
                  Com que frequência você faz pausas?
                </label>
                <select class="form-select" id="breaks" name="breaks" required>
                  <option value="3">Faço pausas regulares</option>
                  <option value="2" selected>Às vezes</option>
                  <option value="1">Raramente</option>
                  <option value="0">Quase nunca</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label" for="afterHours">
                  Com que frequência continua usando telas para trabalho
                  ou estudo no horário em que pretendia descansar?
                </label>
                <select class="form-select" id="afterHours" name="afterHours" required>
                  <option value="0">Raramente ou nunca</option>
                  <option value="1" selected>Às vezes</option>
                  <option value="2">Frequentemente</option>
                  <option value="3">Quase todos os dias</option>
                </select>
              </div>

              <button class="btn btn-primary btn-lg w-100" type="submit">
                Calcular minha avaliação
              </button>

              <p class="form-note mt-3 mb-0">
                A avaliação é educativa e não substitui avaliação
                profissional nem diagnóstico de saúde.
              </p>
            </form>
          </div>

          <div class="col-12 col-lg-5">
            <section
              class="result-panel"
              id="assessmentResult"
              aria-labelledby="resultTitle"
              aria-live="polite"
            >
              <span class="section-kicker">SEU RESULTADO</span>
              <h3 id="resultTitle">Sua avaliação aparecerá aqui</h3>
              <p id="resultDescription">
                Preencha as opções e calcule o resultado para visualizar
                recomendações relacionadas às suas respostas.
              </p>

              <div class="score-track" aria-hidden="true">
                <div class="score-bar" id="scoreBar"></div>
              </div>

              <p class="score-label" id="scoreLabel">Pontuação: —</p>
              <ul class="recommendation-list" id="recommendations">
                <li>Responda ao questionário para receber sugestões.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>

    <!-- Visualização de dados -->
    <section class="section-space section-muted" id="dados">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">04 / EXPLORE OS DADOS</span>
          <h2>Visualização interativa</h2>
          <p>
            O gráfico abaixo demonstra como apresentar categorias de
            pesquisa de maneira interativa. Os valores atuais são
            ilustrativos e não representam resultados reais.
          </p>
        </div>

        <div class="chart-panel">
          <div class="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
            <div>
              <span class="badge rounded-pill badge-soft mb-2">
                EXEMPLO DEMONSTRATIVO
              </span>
              <h3 class="h5 mb-1">Fatores percebidos de distração</h3>
              <p class="form-note mb-0" id="chartDescription">
                Valores fictícios, usados apenas para demonstrar o gráfico.
              </p>
            </div>

            <label class="visually-hidden" for="chartType">Tipo de gráfico</label>
            <select class="form-select chart-select" id="chartType">
              <option value="bar">Gráfico de barras</option>
              <option value="doughnut">Gráfico de rosca</option>
            </select>
          </div>

          <div class="chart-container">
            <canvas
              id="focusChart"
              role="img"
              aria-label="Gráfico demonstrativo sobre fatores de distração"
              aria-describedby="chartDescription"
            >
              Gráfico demonstrativo sobre fatores de distração.
            </canvas>
          </div>

          <p class="form-note mt-3 mb-0">
            Antes de apresentar o gráfico como pesquisa da dupla,
            substitua os valores de exemplo pelos dados coletados e
            informe a quantidade de participantes e a metodologia.
          </p>
        </div>
      </div>
    </section>

    <!-- Estratégias -->
    <section class="section-space" id="estrategias">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">05 / APLIQUE</span>
          <h2>Estratégias para experimentar</h2>
          <p>
            Algumas práticas simples podem ajudar a estruturar períodos
            de concentração e reduzir interrupções evitáveis.
          </p>
        </div>

        <div class="accordion custom-accordion" id="focusAccordion">
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. Defina uma prioridade
              </button>
            </h3>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#focusAccordion"
            >
              <div class="accordion-body">
                Escolha uma tarefa concreta para iniciar. Divida atividades
                grandes em etapas menores e marque o que foi concluído.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Reduza interrupções evitáveis
              </button>
            </h3>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#focusAccordion"
            >
              <div class="accordion-body">
                Silencie notificações não essenciais e reserve períodos
                específicos para verificar mensagens.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Planeje pausas
              </button>
            </h3>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              aria-controls="collapseThree"
              data-bs-parent="#focusAccordion"
            >
              <div class="accordion-body">
                Organize intervalos compatíveis com suas atividades.
                Levante-se, beba água e observe sinais de cansaço.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <section class="section-space section-muted" id="reflexao">
      <div class="container">
        <div class="reflection-panel">
          <div>
            <span class="section-kicker">06 / PRÓXIMO PASSO</span>
            <h2 class="h3">Transforme percepção em ação.</h2>
            <p class="mb-0">
              Escolha uma mudança pequena para experimentar em sua rotina
              e observe se ela ajuda você a manter o foco.
            </p>
          </div>

          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#reflectionModal"
          >
            Ver sugestão prática
          </button>
        </div>
      </div>
    </section>
    </main>

    <!-- Modal acessível pelo Bootstrap -->
    <div
        class="modal fade"
        id="reflectionModal"
        tabindex="-1"
        aria-labelledby="reflectionModalTitle"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-custom">
            <div class="modal-header">
            <h2 class="modal-title fs-5" id="reflectionModalTitle">
                Um experimento para hoje
            </h2>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
            ></button>
            </div>
            <div class="modal-body">
            Escolha uma tarefa, silencie notificações não essenciais e
            trabalhe nela por um período que seja confortável para você.
            Depois, faça uma pausa e avalie como foi a experiência.
            </div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
            >
                Entendi
            </button>
            </div>
        </div>
        </div>
    </div>

    <footer class="site-footer">
        <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <p class="mb-0">© 2026 Total Focus</p>
        <p class="mb-0">Informação, reflexão e hábitos de concentração.</p>
        </div>
    </footer>

    <!-- Bootstrap Bundle inclui o JavaScript necessário para navbar,
        accordion e modal. -->
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    ></script>
    </body>
    </html>

**CSS**

    :root {
    color-scheme: light;

    --color-primary: #123047;
    --color-primary-hover: #1b4966;
    --color-secondary: #16877d;
    --color-secondary-hover: #116d65;
    --color-accent: #b9f2d3;

    --color-background: #f4f7f8;
    --color-surface: #ffffff;
    --color-surface-muted: #eaf0f2;
    --color-text: #243746;
    --color-text-muted: #637481;
    --color-border: #dce5e9;

    --font-body: "DM Sans", sans-serif;
    --font-heading: "Manrope", sans-serif;

    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 3rem;
    --space-8: 5rem;

    --radius-sm: 0.65rem;
    --radius-md: 1rem;
    --radius-lg: 1.5rem;

    --shadow-card: 0 10px 30px rgb(18 48 71 / 7%);
    --shadow-hover: 0 18px 42px rgb(18 48 71 / 13%);

    --transition-fast: 180ms ease;
    --transition-normal: 300ms ease;
    }

    /* Tema escuro */
    html[data-theme="dark"] {
    color-scheme: dark;

    --color-primary: #0b1d2a;
    --color-primary-hover: #18384c;
    --color-secondary: #53c4b5;
    --color-secondary-hover: #7ad8cb;
    --color-accent: #b9f2d3;

    --color-background: #101a22;
    --color-surface: #182630;
    --color-surface-muted: #14212a;
    --color-text: #e7eef2;
    --color-text-muted: #afc0ca;
    --color-border: #31434e;

    --shadow-card: 0 10px 30px rgb(0 0 0 / 18%);
    --shadow-hover: 0 18px 42px rgb(0 0 0 / 30%);
    }

    /* Base */
    * {
    box-sizing: border-box;
    }

    html {
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
    }

    body {
    margin: 0;
    background: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.7;
    transition:
        background-color var(--transition-normal),
        color var(--transition-normal);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    color: var(--color-text);
    font-family: var(--font-heading);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.035em;
    }

    p {
    color: var(--color-text-muted);
    }

    a {
    text-underline-offset: 0.2em;
    }

    button,
    input,
    select,
    textarea {
    font: inherit;
    }

    button,
    a,
    select {
    -webkit-tap-highlight-color: transparent;
    }

    :focus-visible {
    outline: 3px solid var(--color-secondary);
    outline-offset: 4px;
    }

    ::selection {
    background: var(--color-accent);
    color: #123047;
    }

    .skip-link {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 2000;
    padding: 0.75rem 1rem;
    transform: translateY(-160%);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text);
    box-shadow: var(--shadow-card);
    }

    .skip-link:focus {
    transform: translateY(0);
    }

    /* Navbar */
    .site-navbar {
    background: var(--color-primary);
    box-shadow: 0 5px 24px rgb(0 0 0 / 10%);
    }

    .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    font-family: var(--font-heading);
    font-weight: 800;
    letter-spacing: -0.04em;
    }

    .brand-mark {
    display: grid;
    width: 2.35rem;
    height: 2.35rem;
    place-items: center;
    border-radius: 0.75rem;
    background: var(--color-accent);
    color: var(--color-primary);
    font-size: 0.85rem;
    }

    .site-navbar .nav-link {
    margin: 0 0.15rem;
    border-radius: var(--radius-sm);
    color: rgb(255 255 255 / 82%);
    transition:
        color var(--transition-fast),
        background-color var(--transition-fast);
    }

    .site-navbar .nav-link:hover,
    .site-navbar .nav-link:focus-visible {
    background: rgb(255 255 255 / 10%);
    color: #ffffff;
    }

    .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid rgb(255 255 255 / 30%);
    border-radius: 999px;
    color: #ffffff;
    font-size: 0.875rem;
    }

    .theme-toggle:hover,
    .theme-toggle:focus-visible {
    background: rgb(255 255 255 / 12%);
    color: #ffffff;
    }

    /* Hero */
    .hero-section {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: clamp(4rem, 9vw, 8rem) 0;
    background:
        radial-gradient(circle at 80% 20%, rgb(83 196 181 / 16%), transparent 30%),
        var(--color-primary);
    color: #ffffff;
    }

    .hero-content {
    position: relative;
    z-index: 2;
    }

    .hero-section h1 {
    max-width: 850px;
    margin-bottom: 1.5rem;
    color: #ffffff;
    font-size: clamp(2.7rem, 6vw, 5.25rem);
    }

    .hero-section h1 span {
    color: var(--color-accent);
    }

    .hero-description {
    max-width: 670px;
    margin-bottom: 2rem;
    color: rgb(255 255 255 / 78%);
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    }

    .hero-section .btn-primary {
    border-color: var(--color-accent);
    background: var(--color-accent);
    color: #123047;
    }

    .hero-section .btn-primary:hover {
    border-color: #d7f9e6;
    background: #d7f9e6;
    }

    .hero-section .btn-outline-light:hover {
    color: var(--color-primary);
    }

    .hero-orb {
    position: absolute;
    z-index: -1;
    border: 1px solid rgb(185 242 211 / 15%);
    border-radius: 50%;
    pointer-events: none;
    }

    .hero-orb-one {
    top: -150px;
    right: -80px;
    width: 430px;
    height: 430px;
    animation: float-orb 12s ease-in-out infinite;
    }

    .hero-orb-two {
    right: 15%;
    bottom: -230px;
    width: 370px;
    height: 370px;
    animation: float-orb 16s ease-in-out infinite reverse;
    }

    .glass-panel {
    border: 1px solid rgb(255 255 255 / 20%);
    border-radius: var(--radius-lg);
    background: rgb(255 255 255 / 8%);
    box-shadow: 0 18px 50px rgb(0 0 0 / 12%);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    }

    .hero-panel {
    padding: 2rem;
    animation: reveal-up 700ms ease both;
    }

    .hero-panel h2 {
    color: #ffffff;
    font-size: 1.6rem;
    }

    .hero-panel p {
    color: rgb(255 255 255 / 75%);
    }

    .hero-panel-icon {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--color-accent);
    font-size: 2.5rem;
    line-height: 1;
    }

    .eyebrow,
    .section-kicker {
    color: var(--color-secondary);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    }

    .hero-panel .eyebrow {
    color: var(--color-accent);
    }

    /* Seções */
    .section-space {
    padding: var(--space-8) 0;
    }

    .section-muted {
    background: var(--color-surface-muted);
    }

    .section-heading {
    max-width: 760px;
    margin-bottom: 2.5rem;
    }

    .section-heading h2 {
    margin: 0.75rem 0 1rem;
    font-size: clamp(2rem, 4vw, 3.2rem);
    }

    .section-heading > p {
    max-width: 690px;
    margin-bottom: 0;
    font-size: 1.05rem;
    }

    .badge-soft {
    background: rgb(22 135 125 / 12%);
    color: var(--color-secondary);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    }

    /* Cards */
    .focus-card {
    overflow: hidden;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-surface);
    box-shadow: var(--shadow-card);
    color: var(--color-text);
    transition:
        transform var(--transition-normal),
        box-shadow var(--transition-normal),
        border-color var(--transition-normal);
    }

    .focus-card .card-body {
    padding: 1.75rem;
    }

    .focus-card h3 {
    margin-bottom: 0.75rem;
    }

    .focus-card p,
    .impact-card p {
    margin-bottom: 0;
    }

    .focus-card .card-icon {
    display: grid;
    width: 3.2rem;
    height: 3.2rem;
    margin-bottom: 1.25rem;
    place-items: center;
    border-radius: 1rem;
    background: var(--color-surface-muted);
    color: var(--color-secondary);
    font-size: 1.7rem;
    }

    .impact-card {
    padding: 1.8rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-surface);
    box-shadow: var(--shadow-card);
    transition:
        transform var(--transition-normal),
        box-shadow var(--transition-normal);
    }

    .impact-number {
    display: block;
    margin-bottom: 1.4rem;
    color: var(--color-secondary);
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    }

    /* Microaplicação */
    .assessment-panel,
    .result-panel,
    .chart-panel {
    padding: clamp(1.25rem, 3vw, 2rem);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    box-shadow: var(--shadow-card);
    }

    .form-label {
    color: var(--color-text);
    font-weight: 700;
    line-height: 1.5;
    }

    .form-select {
    min-height: 3rem;
    border-color: var(--color-border);
    background-color: var(--color-surface);
    color: var(--color-text);
    }

    .form-select:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 0.25rem rgb(22 135 125 / 15%);
    }

    .btn-primary {
    border-color: var(--color-secondary);
    background: var(--color-secondary);
    color: #ffffff;
    font-weight: 700;
    transition:
        background-color var(--transition-fast),
        border-color var(--transition-fast),
        transform var(--transition-fast);
    }

    .btn-primary:hover {
    border-color: var(--color-secondary-hover);
    background: var(--color-secondary-hover);
    color: #ffffff;
    }

    .btn-primary:active {
    transform: scale(0.98);
    }

    .form-note {
    color: var(--color-text-muted);
    font-size: 0.85rem;
    }

    .result-panel {
    position: sticky;
    top: 6.5rem;
    }

    .result-panel h3 {
    margin: 0.75rem 0;
    }

    .score-track {
    overflow: hidden;
    height: 0.7rem;
    margin: 1.5rem 0 0.75rem;
    border-radius: 999px;
    background: var(--color-surface-muted);
    }

    .score-bar {
    width: 0;
    height: 100%;
    border-radius: inherit;
    background: var(--color-secondary);
    transition: width 600ms ease;
    }

    .score-label {
    font-size: 0.9rem;
    font-weight: 700;
    }

    .recommendation-list {
    display: grid;
    gap: 0.75rem;
    margin: 1.25rem 0 0;
    padding-left: 1.2rem;
    color: var(--color-text);
    }

    .recommendation-list li::marker {
    color: var(--color-secondary);
    }

    /* Gráfico */
    .chart-select {
    width: auto;
    min-width: 12rem;
    }

    .chart-container {
    position: relative;
    width: 100%;
    min-height: 280px;
    max-height: 420px;
    }

    .chart-container canvas {
    max-width: 100%;
    }

    /* Accordion */
    .custom-accordion .accordion-item {
    overflow: hidden;
    margin-bottom: 0.8rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-surface);
    }

    .custom-accordion .accordion-button {
    padding: 1.25rem 1.5rem;
    background: var(--color-surface);
    color: var(--color-text);
    font-family: var(--font-heading);
    font-weight: 700;
    box-shadow: none;
    }

    .custom-accordion .accordion-button:not(.collapsed) {
    background: var(--color-surface-muted);
    color: var(--color-secondary);
    }

    .custom-accordion .accordion-button::after {
    filter: none;
    }

    .custom-accordion .accordion-body {
    color: var(--color-text-muted);
    }

    /* Reflexão e modal */
    .reflection-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: clamp(1.5rem, 4vw, 3rem);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background:
        radial-gradient(circle at 90% 0%, rgb(83 196 181 / 12%), transparent 35%),
        var(--color-surface);
    box-shadow: var(--shadow-card);
    }

    .reflection-panel h2 {
    margin: 0.75rem 0;
    }

    .reflection-panel p {
    max-width: 600px;
    }

    .modal-custom {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-surface);
    color: var(--color-text);
    }

    .modal-custom .modal-header,
    .modal-custom .modal-footer {
    border-color: var(--color-border);
    }

    .modal-custom .modal-title,
    .modal-custom .btn-close {
    color: var(--color-text);
    }

    /* Rodapé */
    .site-footer {
    padding: 1.75rem 0;
    background: var(--color-primary);
    color: #ffffff;
    }

    .site-footer p {
    color: rgb(255 255 255 / 75%);
    font-size: 0.9rem;
    }

    /* Animações */
    @keyframes float-orb {
    0%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    50% {
        transform: translate3d(-15px, 20px, 0);
    }
    }

    @keyframes reveal-up {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    /* Estados de interação */
    @media (hover: hover) and (pointer: fine) {
    .focus-card:hover,
    .impact-card:hover {
        transform: translateY(-5px);
        border-color: rgb(22 135 125 / 35%);
        box-shadow: var(--shadow-hover);
    }
    }

    /* Responsividade */
    @media (max-width: 767.98px) {
    :root {
        --space-8: 3.5rem;
    }

    .hero-section {
        padding: 4rem 0;
    }

    .hero-panel {
        padding: 1.5rem;
    }

    .section-heading {
        margin-bottom: 2rem;
    }

    .result-panel {
        position: static;
    }

    .reflection-panel {
        align-items: flex-start;
        flex-direction: column;
    }

    .chart-select {
        width: 100%;
    }

    .chart-container {
        min-height: 260px;
    }
    }

    /* Respeita a preferência por menos movimento */
    @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    }

**JavaScript**


    "use strict";

    // ---------- 1. Tema claro/escuro ----------

    const themeToggle = document.querySelector("#themeToggle");
    const themeIcon = document.querySelector("#themeIcon");
    const themeLabel = document.querySelector("#themeLabel");

    function applyTheme(theme) {
    const isDark = theme === "dark";

    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.bsTheme = isDark ? "dark" : "light";

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Ativar tema claro" : "Ativar tema escuro"
    );

    themeIcon.textContent = isDark ? "☀" : "☾";
    themeLabel.textContent = isDark ? "Tema claro" : "Tema escuro";

    updateChartTheme();
    }

    function getInitialTheme() {
    try {
        const savedTheme = localStorage.getItem("totalFocusTheme");

        if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
        }
    } catch (error) {
        // O site continua funcionando se o navegador bloquear o armazenamento.
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);

    try {
        localStorage.setItem("totalFocusTheme", nextTheme);
    } catch (error) {
        // A mudança visual continua funcionando sem persistência.
    }
    });


    // ---------- 2. Microaplicação de avaliação ----------

    const focusForm = document.querySelector("#focusForm");
    const resultTitle = document.querySelector("#resultTitle");
    const resultDescription = document.querySelector("#resultDescription");
    const scoreBar = document.querySelector("#scoreBar");
    const scoreLabel = document.querySelector("#scoreLabel");
    const recommendations = document.querySelector("#recommendations");

    function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
    }

    function createRecommendation(text) {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
    }

    function evaluateHabits(formData) {
    const focusHours = Number(formData.get("focusHours"));
    const interruptions = Number(formData.get("interruptions"));
    const breaks = Number(formData.get("breaks"));
    const afterHours = Number(formData.get("afterHours"));

    /*
    * Pontuação educativa, criada para o projeto.
    * Não representa escala psicológica validada.
    * Os pesos são regras demonstrativas, não evidências clínicas.
    */

    const score = clamp(
        40 +
        focusHours * 5 +
        breaks * 10 -
        interruptions * 10 -
        afterHours * 7,
        0,
        100
    );

    let title;
    let description;

    if (score >= 70) {
        title = "Hábitos relativamente favoráveis";
        description =
        "Suas respostas sugerem alguns hábitos favoráveis à organização " +
        "da concentração. Continue observando o que funciona na sua rotina.";
    } else if (score >= 40) {
        title = "Hábitos que podem ser ajustados";
        description =
        "Suas respostas indicam oportunidades de melhoria. Experimente " +
        "modificar um hábito por vez e observe os resultados.";
    } else {
        title = "Vale revisar sua rotina";
        description =
        "Suas respostas apontam fatores que podem dificultar a organização " +
        "do foco. Comece com mudanças pequenas e realistas.";
    }

    const tips = [];

    if (interruptions >= 2) {
        tips.push(
        "Reduza notificações não essenciais e reserve horários para verificar mensagens."
        );
    }

    if (breaks <= 1) {
        tips.push(
        "Experimente planejar pausas regulares, adaptadas à duração das suas atividades."
        );
    }

    if (afterHours >= 2) {
        tips.push(
        "Defina um horário possível para encerrar as atividades e se desconectar."
        );
    }

    if (focusHours <= 2) {
        tips.push(
        "Escolha uma tarefa prioritária e divida-a em etapas menores."
        );
    }

    if (tips.length === 0) {
        tips.push(
        "Mantenha suas estratégias atuais e observe se elas continuam adequadas às suas necessidades."
        );
    }

    return { score, title, description, tips };
    }

    focusForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!focusForm.reportValidity()) {
        return;
    }

    const formData = new FormData(focusForm);
    const result = evaluateHabits(formData);

    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
    scoreBar.style.width = `${result.score}%`;
    scoreLabel.textContent = `Pontuação orientativa: ${result.score}/100`;

    recommendations.replaceChildren(
        ...result.tips.map(createRecommendation)
    );
    });


    // ---------- 3. Gráfico interativo com Chart.js ----------

    const chartCanvas = document.querySelector("#focusChart");
    const chartTypeSelect = document.querySelector("#chartType");

    let focusChart = null;

    /*

    const demonstrationData = {
    labels: [
        "Notificações",
        "Conversas",
        "Excesso de tarefas",
        "Falta de pausas"
    ],
    values: [32, 25, 28, 15]
    };

    function getChartColors() {
    const isDark =
        document.documentElement.dataset.theme === "dark";

    return {
        text: isDark ? "#e7eef2" : "#243746",
        grid: isDark ? "#31434e" : "#dce5e9",
        background: isDark ? "#182630" : "#ffffff"
    };
    }

    function updateChartTheme() {
    if (!focusChart) {
        return;
    }

    const colors = getChartColors();

    focusChart.options.color = colors.text;

    if (focusChart.options.scales?.x) {
        focusChart.options.scales.x.ticks.color = colors.text;
        focusChart.options.scales.x.grid.color = colors.grid;
    }

    if (focusChart.options.scales?.y) {
        focusChart.options.scales.y.ticks.color = colors.text;
        focusChart.options.scales.y.grid.color = colors.grid;
    }

    focusChart.update();
    }

    function buildChart(type) {
    if (typeof Chart === "undefined") {
        const description = document.querySelector("#chartDescription");
        description.textContent =
        "Não foi possível carregar a biblioteca do gráfico. " +
        "Verifique sua conexão com a internet.";
        return;
    }

    if (focusChart) {
        focusChart.destroy();
    }

    const colors = getChartColors();
    const isDoughnut = type === "doughnut";

    focusChart = new Chart(chartCanvas, {
        type,
        data: {
        labels: demonstrationData.labels,
        datasets: [{
            label: "Percentual ilustrativo",
            data: demonstrationData.values,
            backgroundColor: [
            "#16877d",
            "#4f91b8",
            "#8b7bc8",
            "#e2b35b"
            ],
            borderColor: colors.background,
            borderWidth: 2,
            borderRadius: isDoughnut ? 0 : 7,
            hoverOffset: isDoughnut ? 9 : 0
        }]
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        color: colors.text,
        animation: {
            duration: 600
        },
        plugins: {
            legend: {
            display: isDoughnut,
            position: "bottom",
            labels: {
                color: colors.text,
                padding: 18,
                usePointStyle: true
            }
            },
            tooltip: {
            callbacks: {
                label(context) {
                const value = context.parsed;

                if (isDoughnut) {
                    return `${context.label}: ${value}% (ilustrativo)`;
                }

                return `${context.dataset.label}: ${value}%`;
                }
            }
            }
        },
        scales: isDoughnut
            ? {}
            : {
                x: {
                ticks: {
                    color: colors.text
                },
                grid: {
                    display: false
                }
                },
                y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: colors.text,
                    callback(value) {
                    return `${value}%`;
                    }
                },
                grid: {
                    color: colors.grid
                }
                }
            }
        }
    });
    }

    chartTypeSelect.addEventListener("change", () => {
    buildChart(chartTypeSelect.value);
    });


    // ---------- 4. Inicialização ----------

    applyTheme(getInitialTheme());
    buildChart(chartTypeSelect.value);



**2.3 Auditoria Crítica da Dupla (Diagnóstico Técnico de Falhas)**
HTML5 e acessibilidade: era necessário verificar a hierarquia dos títulos, os atributos ARIA e a acessibilidade dos controles.
- CSS3: faltavam variáveis para padronizar tipografia e espaçamentos, além de estados de interação mais completos.
- Bootstrap 5: era necessário ampliar o uso do grid responsivo de 12 colunas e incluir badges e componentes complementares.
- JavaScript: a versão inicial não possuía recursos interativos avançados.
Visualização de dados: não havia gráfico com Chart.js nem dados empíricos da pesquisa da dupla.
- Interface: faltavam alternância persistente entre temas, animações avançadas e modal interativo.



**3.1 Engenharia de Prompt (Entrada)**

**Ferramenta Utilizada: Claude Sonnet 5.5**

**prompt: Aprimore o site Total Focus utilizando HTML5, CSS3, Bootstrap 5 e JavaScript, com foco em acessibilidade, responsividade, teste interativo de hábitos, gráfico de dados e tema claro/escuro.** 

**3.2 Resposta Bruta da IA**

**HTML**

        <!DOCTYPE html>
        <html lang="pt-BR" data-bs-theme="light">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Pesquisa sobre fragmentação da atenção, interrupções e cultura de resposta imediata entre jovens profissionais, no trabalho e no cotidiano.">
        <title>Total Focus | Falta de atenção no trabalho e no dia a dia</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="css/styles.css" rel="stylesheet">
        </head>
        <body>
        <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <header>
        <nav class="navbar navbar-expand-lg sticky-top glass" aria-label="Navegação principal">
            <div class="container">
            <a class="navbar-brand brand" href="#inicio">Total Focus</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Abrir menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li class="nav-item"><a class="nav-link" href="#pesquisa">Pesquisa</a></li>
                <li class="nav-item"><a class="nav-link" href="#facetas">Facetas</a></li>
                <li class="nav-item"><a class="nav-link" href="#dados">Dados</a></li>
                <li class="nav-item"><a class="nav-link" href="#termometro">Termômetro</a></li>
                <li class="nav-item"><a class="nav-link" href="#transparencia">Transparência de IA</a></li>
                <li class="nav-item">
                    <button id="tema" class="btn btn-sm btn-outline-secondary" type="button" aria-pressed="false">Modo escuro</button>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>

            <main id="conteudo">
        <section id="inicio" class="hero py-5" aria-labelledby="titulo">
            <div class="container py-lg-5">
            <div class="row align-items-center g-5">
                <div class="col-lg-7">
                <span class="badge text-bg-primary mb-3">Eixo A: Futuro do Trabalho</span>
                <span class="badge text-bg-warning mb-3">Eixo B: Geração Z</span>
                <h1 id="titulo">Atenção residual: o custo invisível de cada interrupção</h1>
                <p class="lead">Uma notificação dura segundos; voltar ao fio da tarefa leva muito mais. Entre chats de trabalho, abas abertas e o celular na mão, a atenção virou o recurso mais disputado da vida profissional e cotidiana de quem cresceu conectado.</p>
                <a class="btn btn-brand btn-lg" href="#termometro">Medir minha atenção</a>
                </div>
                <aside class="col-lg-5" aria-label="Pergunta central da pesquisa">
                <blockquote class="pergunta glass">
                    <p class="mb-2">Pergunta de pesquisa</p>
                    <p class="mb-0">Em que medida a cultura de resposta imediata e o excesso de notificações fragmentam a atenção de jovens profissionais, e quais arranjos de trabalho devolvem a eles o controle do próprio foco?</p>
                </blockquote>
                </aside>
            </div>
            </div>
        </section>

        <section id="pesquisa" class="py-5" aria-labelledby="t-pesquisa">
            <div class="container">
            <h2 id="t-pesquisa">O recorte: três conceitos</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
                <div class="col"><article class="card h-100 glass"><div class="card-body">
                <h3 class="h5 card-title">Atenção residual</h3>
                <p class="card-text">Sophie Leroy (2009) mostrou que, ao trocar de tarefa, parte da mente continua na anterior e o desempenho na seguinte cai. Cada troca deixa um resíduo.</p>
                <span class="badge text-bg-secondary">Troca de contexto</span></div></article></div>
                <div class="col"><article class="card h-100 glass"><div class="card-body">
                <h3 class="h5 card-title">Custo da interrupção</h3>
                <p class="card-text">Em estudo de campo, Gloria Mark e colegas (2008) observaram que retomar o trabalho após uma interrupção pode levar mais de 20 minutos, e que as pessoas compensam trabalhando mais rápido e com mais estresse.</p>
                <span class="badge text-bg-secondary">Interrupções</span></div></article></div>
                <div class="col"><article class="card h-100 glass"><div class="card-body">
                <h3 class="h5 card-title">Cultura da resposta imediata</h3>
                <p class="card-text">Chats, e-mails e reuniões em sequência transformam disponibilidade em virtude. A pergunta aberta é se o direito à desconexão e os blocos de foco conseguem competir com isso.</p>
                <span class="badge text-bg-secondary">Always-on</span></div></article></div>
            </div>
            </div>
        </section>

        <section id="facetas" class="py-5" aria-labelledby="t-facetas">
            <div class="container">
            <h2 id="t-facetas">Duas faces da mesma geração</h2>
            <div class="accordion mt-3" id="acc">
                <div class="accordion-item">
                <h3 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="true" aria-controls="c1">Facetas positivas <span class="badge text-bg-success ms-2">Potência</span></button></h3>
                <div id="c1" class="accordion-collapse collapse show" data-bs-parent="#acc"><div class="accordion-body">
                    Adaptabilidade a novas interfaces, triagem rápida de informação, colaboração em redes globais e uma cultura de questionar reuniões sem propósito. É também a geração que mais fala em saúde mental e em limites, e por isso pressiona por blocos de foco e dias sem reunião.</div></div>
                </div>
                <div class="accordion-item">
                <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c2" aria-expanded="false" aria-controls="c2">No trabalho: facetas críticas <span class="badge text-bg-danger ms-2">Risco</span></button></h3>
                <div id="c2" class="accordion-collapse collapse" data-bs-parent="#acc"><div class="accordion-body">
                    Ansiedade de produtividade e FOMO profissional, dependência de validação em tempo real, fragmentação da atenção por notificações e fadiga de tela. Com IA respondendo instantaneamente, sobe também a expectativa de ritmo sobre quem trabalha com ela.</div></div>
                </div>
                <div class="accordion-item">
                <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c3" aria-expanded="false" aria-controls="c3">No dia a dia <span class="badge text-bg-info ms-2">Cotidiano</span></button></h3>
                <div id="c3" class="accordion-collapse collapse" data-bs-parent="#acc"><div class="accordion-body">
                    O mesmo celular que traz o chat do trabalho traz a rolagem infinita. O hábito de checar a tela durante conversas e refeições mistura os dois mundos e torna difícil saber onde o expediente termina.</div></div>
                </div>
            </div>
            </div>
        </section>

        <section id="dados" class="py-5" aria-labelledby="t-dados">
            <div class="container">
            <h2 id="t-dados">Os números: a atenção em uma tela encolheu</h2>
            <div class="row g-4 align-items-center">
                <div class="col-lg-8">
                <figure class="glass p-3 mb-0">
                    <div class="grafico"><canvas id="grafico" role="img" aria-label="Gráfico de barras do tempo médio de atenção em uma tela antes de trocar: cerca de 150 segundos em 2004, 75 em 2012 e 47 a partir de 2016."></canvas></div>
                    <figcaption class="small mt-2">Fonte: Gloria Mark, Attention Span (2023). <strong>Dupla: confirmar os valores na fonte e acrescentar outros conjuntos de dados.</strong></figcaption>
                </figure>
                </div>
                <aside class="col-lg-4" aria-label="Como ler o gráfico">
                <p>O dado mede o tempo em uma mesma tela, não a capacidade de concentração das pessoas. Ainda assim, aponta para um ambiente que recompensa a troca rápida, e é nele que o trabalho e o cotidiano acontecem hoje.</p>
                </aside>
            </div>
            </div>
        </section>

        <section id="termometro" class="py-5" aria-labelledby="t-term">
            <div class="container">
            <h2 id="t-term">Termômetro de fragmentação da atenção</h2>
            <p>Responda com base nas últimas quatro semanas de trabalho. Nada é enviado: o cálculo acontece no seu navegador.</p>
            <form id="quiz" class="glass p-3 p-md-4" novalidate>
                <div class="progress mb-4" role="progressbar" aria-label="Progresso do questionário" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div id="barra" class="progress-bar" style="width:0%">0%</div></div>
                <div id="perguntas"></div>
                <button class="btn btn-brand mt-3" type="submit">Ver diagnóstico</button>
                <p id="erro" class="text-danger mt-2 mb-0" role="alert" hidden>Responda todas as perguntas para ver o diagnóstico.</p>
                <div id="diagnostico" class="mt-3" role="status" aria-live="polite"></div>
            </form>
            </div>
        </section>

        </main>

        <footer class="py-4 border-top"> 2026 &copy; Total Focus. Todos os Direitos Reservados</footer>

        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal-t" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered"><div class="modal-content glass">
            <div class="modal-header"><h2 class="modal-title h5" id="modal-t">Seu diagnóstico</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div>
            <div class="modal-body" id="resultado"></div>
        </div></div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.js"></script>
        <script src="js/app.js"></script>
        </body>
        </html>

**CSS**

        :root {
        --cor-primaria: #1f4fd8;
        --cor-secundaria: #d6e84b;
        --cor-superficie: #ffffff;
        --cor-fundo: #f2f4f0;
        --cor-texto: #131a2b;
        --cor-suave: #4b5468;
        --fonte-titulo: "Bricolage Grotesque", system-ui, sans-serif;
        --fonte-corpo: "Instrument Sans", system-ui, sans-serif;
        --esp-1: .5rem;
        --esp-2: 1rem;
        --esp-3: 2rem;
        --raio: 14px;
        --vidro: rgba(255, 255, 255, .65);
        --borda: rgba(19, 26, 43, .12);
        }

    [data-bs-theme="dark"] {
    --cor-primaria: #7c9bff;
    --cor-superficie: #171e31;
    --cor-fundo: #0e1320;
    --cor-texto: #eef1f8;
    --cor-suave: #a9b2c8;
    --vidro: rgba(23, 30, 49, .65);
    --borda: rgba(255, 255, 255, .14);
    }

    body {
    background: var(--cor-fundo);
    color: var(--cor-texto);
    font-family: var(--fonte-corpo);
    font-size: 1.0625rem;
    line-height: 1.65;
    transition: background .3s, color .3s
    }

    h1,
    h2,
    h3,
    .brand {
    font-family: var(--fonte-titulo);
    letter-spacing: -.02em
    }

    h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 800;
    line-height: 1.05;
    max-width: 18ch
    }

    h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: var(--esp-2)
    }

    p,
    .lead {
    max-width: 65ch
    }

    a {
    color: var(--cor-primaria)
    }

    .skip-link {
    position: absolute;
    left: -999px;
    top: 0;
    background: var(--cor-secundaria);
    color: #000;
    padding: .5rem 1rem;
    z-index: 2000
    }

    .skip-link:focus {
    left: 0
    }

    .glass {
    background: var(--vidro);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--borda);
    border-radius: var(--raio)
    }

    .navbar {
    border-radius: 0;
    border-width: 0 0 1px
    }

    .brand {
    font-weight: 800;
    color: var(--cor-texto) !important
    }

    .hero {
    background: radial-gradient(circle at 85% 20%, color-mix(in srgb, var(--cor-secundaria) 35%, transparent), transparent 45%)
    }

    .pergunta {
    padding: var(--esp-3);
    margin: 0;
    border-left: 6px solid var(--cor-secundaria);
    animation: entrada .8s ease both
    }

    .pergunta p:first-child {
    font-weight: 600;
    color: var(--cor-suave);
    font-size: .9rem
    }

    .btn-brand {
    background: var(--cor-primaria);
    color: #fff;
    border: 0;
    border-radius: 999px;
    padding: .6rem 1.5rem;
    transition: transform .2s, box-shadow .2s
    }

    [data-bs-theme="dark"] .btn-brand {
    color: #0e1320
    }

    .btn-brand:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px color-mix(in srgb, var(--cor-primaria) 40%, transparent)
    }

    .btn-brand:active {
    transform: translateY(0)
    }

    :focus-visible {
    outline: 3px solid var(--cor-primaria);
    outline-offset: 3px
    }

    .card {
    transition: transform .25s, box-shadow .25s
    }

    .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, .12)
    }

    .grafico {
    position: relative;
    height: 320px
    }

    .fieldset-q {
    border: 0;
    padding: 0;
    margin: 0 0 var(--esp-3)
    }

    .fieldset-q legend {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: var(--esp-1)
    }

    .opcoes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: var(--esp-1)
    }

    .opcoes label {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    border: 1px solid var(--borda);
    border-radius: 10px;
    cursor: pointer;
    transition: background .2s, border-color .2s
    }

    .opcoes input {
    position: absolute;
    opacity: 0
    }

    .opcoes label.sel {
    background: var(--cor-primaria);
    color: #fff;
    border-color: var(--cor-primaria);
    font-weight: 600
    }

    [data-bs-theme="dark"] .opcoes label.sel {
    color: #0e1320
    }

    .opcoes label:focus-within {
    outline: 3px solid var(--cor-primaria);
    outline-offset: 2px
    }

    .progress-bar {
    background: var(--cor-primaria);
    transition: width .4s
    }

    .accordion-item,
    .accordion-button {
    background: var(--cor-superficie);
    color: var(--cor-texto)
    }

    @keyframes entrada {
    from {
        opacity: 0;
        transform: translateY(24px)
    }

    to {
        opacity: 1;
        transform: none
    }
    }

    @media (prefers-reduced-motion:reduce) {
    * {
        animation: none !important;
        transition: none !important
    }
    }

    footer{
    text-align: center;
    }

**Javascript**

    const html = document.documentElement;
    const btnTema = document.getElementById('tema');

    let grafico;

    function lerTema(){
    try { const t = localStorage.getItem('tema'); if (t) return t; } catch(e){}
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function aplicarTema(t){
    html.setAttribute('data-bs-theme', t);
    btnTema.setAttribute('aria-pressed', String(t === 'dark'));
    btnTema.textContent = t === 'dark' ? 'Modo claro' : 'Modo escuro';
    if (grafico) pintarGrafico();
    }
    btnTema.addEventListener('click', () => {
    const t = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    aplicarTema(t);
    try { localStorage.setItem('tema', t); } catch(e){} // só persiste escolha explícita
    });

    // --- Gráfico: contrato { rotulo: string, valor: number (segundos) } ---
    const dados = [
    { rotulo: '2004', valor: 150 },
    { rotulo: '2012', valor: 75 },
    { rotulo: '2016 em diante', valor: 47 }
    ];
    function pintarGrafico(){
    const css = getComputedStyle(html);
    const texto = css.getPropertyValue('--cor-texto').trim();
    grafico.options.scales.x.ticks.color = texto;
    grafico.options.scales.y.ticks.color = texto;
    grafico.data.datasets[0].backgroundColor = dados.map((_, i) => i === dados.length - 1 ? '#6b7a0a' : css.getPropertyValue('--cor-primaria').trim());
    grafico.update();
    }
    const tabelaFallback = () => {
    document.querySelector('.grafico').innerHTML = '<table class="table"><caption>Dados do gráfico (Chart.js não carregou)</caption><tbody>' +
        dados.map(d => `<tr><td>${d.rotulo}</td><td>${d.valor} s</td></tr>`).join('') + '</tbody></table>';
    };
    try {
    if (typeof Chart === 'undefined') tabelaFallback(); else grafico = new Chart(document.getElementById('grafico'), {
    type: 'bar',
    data: { labels: dados.map(d => d.rotulo),
            datasets: [{ label: 'Segundos em uma tela (Gloria Mark)', data: dados.map(d => d.valor), borderRadius: 8 }] },
    options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false },
        tooltip: { callbacks: { label: c => c.parsed.y + ' s' } } },
        scales: { y: { min: 0, max: 160, ticks: { callback: v => v + ' s' } }, x: { ticks: {} } } }
    });
    } catch (e) { console.error('Gráfico indisponível:', e); tabelaFallback(); } // uma falha no gráfico não pode derrubar o questionário

    // --- Questionário: contrato { id, texto, inverso? }, resposta 0..3 ---
    const perguntas = [
    { id: 'q1', texto: 'Meu celular ou o chat do trabalho me interrompem várias vezes por hora.' },
    { id: 'q2', texto: 'Troco de aba ou de tarefa antes de terminar o que comecei.' },
    { id: 'q3', texto: 'Releio o mesmo parágrafo ou mensagem porque minha mente foi para outro lugar.' },
    { id: 'q4', texto: 'Pego o celular durante conversas, refeições ou reuniões sem perceber.' },
    { id: 'q5', texto: 'Sinto desconforto ou ansiedade quando fico um tempo sem checar notificações.' },
    { id: 'q6', texto: 'Consigo reservar blocos de foco, sem notificações, em que realmente avanço.', inverso: true }
    ];
    const escala = ['Nunca', 'Às vezes', 'Frequentemente', 'Sempre'];
    const form = document.getElementById('quiz');
    const barra = document.getElementById('barra');
    perguntas.forEach(p => {
    const fs = document.createElement('fieldset');
    fs.className = 'fieldset-q';
    const lg = document.createElement('legend');
    lg.textContent = p.texto;
    const grupo = document.createElement('div');
    grupo.className = 'opcoes';
    escala.forEach((e, i) => {
        const lb = document.createElement('label');
        const inp = document.createElement('input');
        inp.type = 'radio'; inp.name = p.id; inp.value = i;
        lb.append(inp, document.createTextNode(e));
        grupo.append(lb);
    });
    fs.append(lg, grupo);
    document.getElementById('perguntas').append(fs);
    });
    form.addEventListener('change', () => {
    form.querySelectorAll('.opcoes label').forEach(l => l.classList.toggle('sel', l.firstChild.checked));
    const resp = perguntas.filter(p => form.elements[p.id].value !== '').length;
    const pct = Math.round(resp / perguntas.length * 100);
    barra.style.width = pct + '%'; barra.textContent = pct + '%';
    barra.parentElement.setAttribute('aria-valuenow', pct);
    });
    const faixas = [
    { max: 5, titulo: 'Atenção bem protegida', txt: 'Seus hábitos protegem o foco. Continue reservando blocos sem notificações e avise o time quando estiver concentrado.' },
    { max: 11, titulo: 'Atenção parcialmente fragmentada', txt: 'Há interrupções frequentes. Experimente silenciar notificações por 50 minutos, ler mensagens em dois horários fixos e deixar o celular fora do alcance durante tarefas importantes.' },
    { max: 18, titulo: 'Atenção muito fragmentada', txt: 'A troca constante de contexto provavelmente cobra um preço alto. Reduza as notificações ao essencial, combine blocos de foco com a liderança e, se a dificuldade de concentração persistir, procure um profissional de saúde.' }
    ];
    form.addEventListener('submit', ev => {
    ev.preventDefault();
    const erro = document.getElementById('erro');
    if (perguntas.some(p => form.elements[p.id].value === '')) { erro.hidden = false; return; }
    erro.hidden = true;
    const total = perguntas.reduce((s, p) => { const v = +form.elements[p.id].value; return s + (p.inverso ? 3 - v : v); }, 0);
    const f = faixas.find(x => total <= x.max);
    const corpo = `<p class="h4">${f.titulo}: ${total}/18</p><p>${f.txt}</p><p class="small text-secondary">Instrumento autoral ilustrativo, sem validade clínica.</p>`;
    const alvo = document.getElementById('diagnostico');
    if (window.bootstrap && bootstrap.Modal) {
        alvo.textContent = '';
        document.getElementById('resultado').innerHTML = corpo;
        bootstrap.Modal.getOrCreateInstance(document.getElementById('modal')).show();
    } else {
        alvo.innerHTML = corpo; // fallback: sem o JS do Bootstrap o resultado aparece abaixo do formulário
        alvo.scrollIntoView({ block: 'nearest' });
    }
    });

    aplicarTema(lerTema());


**3.3 Auditoria Crítica da Dupla**
Nós identificamos a necessidade de corrigir a lógica do questionário, exibir pontuação e recomendações, garantir a renderização do gráfico e organizar os dados. Também verificou a importância da acessibilidade, da responsividade e da distinção entre dados demonstrativos e resultados.
