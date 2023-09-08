import MyCss from "./base.css.js";

export default class {
  static getHtml() {
    return `<style>${MyCss.getHtml()}</style>
    <nav class="navbar">
      <div class="container">
        <a class="navbar__logo" href="./">
          <img src="src/static/img/logo.png" srcset="src/static/img/logo.png 1x" width='80' height='42' alt="Logo ECS">
        </a>
        <ul class="navbar__list">
          <li class="navbar__list__item navbar__list__item--link">
            <a href="https://ecs.com.br/" title="INÍCIO">INÍCIO</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/quem-somos" title="QUEM SOMOS">QUEM SOMOS</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link navbar__list__item--hover">
            <a href="#" title="ÁREAS DE ATUAÇÃO">ÁREAS DE ATUAÇÃO</a>
            <div class="navbar__list__item__hover">
              <a href="https://ecs.com.br/servicos/fabrica-de-software/" title="Fábrica de Software">Fábrica de Software</a>
              <a href="https://ecs.com.br/servicos/data-analytics/" title="Data &amp; Analytics">Data &amp; Analytics</a>
              <a href="https://ecs.com.br/servicos/gerenciamento-do-canal-indireto/" title="Gerenciamento do Canal Indireto">Gerenciamento do Canal Indireto</a>
            </div>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/blog" title="BLOG">BLOG</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/trabalhe-conosco" title="TRABALHE CONOSCO">TRABALHE CONOSCO</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/contato" title="CONTATO">CONTATO</a>
          </li>
        </ul>
        <div class="navbar__mob">
          <div class="navbar__mob__media">
            <a href="https://www.facebook.com/ecs.inovacao" target="_blank">
              <img loading="lazy" src="src/static/img/facebook.png" srcset="src/static/img/facebook.png 1x" alt="Facebook" width='24' height='24'>
            </a>
            <a target="_blank" href="https://www.instagram.com/ecs.inovacao/" title="Nosso perfil no Instagram">
              <img loading="lazy" src="src/static/img/instagram.png" srcset="src/static/img/instagram.png 1x" alt="Instagram" width='24' height='24'>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/ecs-consultoria-e-software/" title="Nosso perfil no Linkedin">
              <img loading="lazy" src="src/static/img/linkedin.png" srcset="src/static/img/linkedin.png 1x" alt="Linkedin" width='24' height='24'>
            </a>
          </div>
          <button type="button" class="navbar__mob__menu-icon">
            <span class="navbar__mob__menu-icon__bar"></span>
            <span class="navbar__mob__menu-icon__bar"></span>
            <span class="navbar__mob__menu-icon__bar"></span>
          </button>
        </div>
      </div>
    </nav>
    <nav class="navbar fixo">
      <div class="container">
        <a class="navbar__logo" href="https://ecs.com.br/">
          <img src="src/static/img/logo.png" srcset="src/static/img/logo.png 1x" alt="Logo ECS" width='80' height='42'>
        </a>
        <ul class="navbar__list">
          <li class="navbar__list__item navbar__list__item--link">
            <a href="https://ecs.com.br/" title="INÍCIO">INÍCIO</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/quem-somos" title="QUEM SOMOS">QUEM SOMOS</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link navbar__list__item--hover">
            <a href="#" title="ÁREAS DE ATUAÇÃO">ÁREAS DE ATUAÇÃO</a>
            <div class="navbar__list__item__hover">
              <a href="https://ecs.com.br/servicos/fabrica-de-software/" title="Fábrica de Software">Fábrica de Software</a>
              <a href="https://ecs.com.br/servicos/data-analytics/" title="Data &amp; Analytics">Data &amp; Analytics</a>
              <a href="https://ecs.com.br/servicos/gerenciamento-do-canal-indireto/" title="Gerenciamento do Canal Indireto">Gerenciamento do Canal Indireto</a>
            </div>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/blog" title="BLOG">BLOG</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/trabalhe-conosco" title="TRABALHE CONOSCO">TRABALHE CONOSCO</a>
          </li>
          <li class="navbar__list__item navbar__list__item--link">
            <a href="/contato" title="CONTATO">CONTATO</a>
          </li>
        </ul>
        <div class="navbar__mob">
          <div class="navbar__mob__media">
            <a href="https://www.facebook.com/ecs.inovacao" target="_blank">
              <img loading="lazy" src="src/static/img/facebook.png" srcset="src/static/img/facebook.png 1x" alt="Facebook" width='24' height='24'>
            </a>
            <a target="_blank" href="https://www.instagram.com/ecs.inovacao/" title="Nosso perfil no Instagram">
              <img loading="lazy" src="src/static/img/instagram.png" srcset="src/static/img/instagram.png 1x" alt="Instagram" width='24' height='24'>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/ecs-consultoria-e-software/" title="Nosso perfil no Linkedin">
              <img loading="lazy" src="src/static/img/linkedin.png" srcset="src/static/img/linkedin.png 1x" alt="Linkedin" width='24' height='24'>
            </a>
          </div>
          <button type="button" class="navbar__mob__menu-icon">
            <span class="navbar__mob__menu-icon__bar"></span>
            <span class="navbar__mob__menu-icon__bar"></span>
            <span class="navbar__mob__menu-icon__bar"></span>
          </button>
        </div>
      </div>
    </nav>
    <section class="banner">
      <div class="banner__carrossel slick-initialized slick-slider slick-dotted">
        <div class="slick-list draggable">
          <div class="slick-track" style="opacity: 1; width: 1996px; transform: translate3d(0px, 0px, 0px);">
            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
              <div style='width:90%'>
                <img id='bg_desktop' src="src/static/img/ecs-demanda-online-scaled.jpg" srcset="src/static/img/ecs-demanda-online-scaled.jpg 1x" alt="Banner"/>
                <img id='bg_mobile' src="src/static/img/ecs-demanda-online-1.jpg" srcset="src/static/img/ecs-demanda-online-1.jpg 1x" alt="Banner"/>
              </div>
            </div>
          </div>
        </div>
        <ul class="slick-dots" role="tablist">
          <li class="slick-active" role="presentation">
            <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 1" tabindex="0" aria-selected="true">1</button>
          </li>
        </ul>
      </div>
    </section>
    <aside class="media-bar">
      <a href="https://www.facebook.com/ecs.inovacao" target="_blank" title="Nosso perfil no Facebook">
        <img loading="lazy" src="src/static/img/facebook-branco.svg" srcset="src/static/img/facebook-branco.svg 1x" alt="Facebook" width='29' height='29'>
      </a>
      <a target="_blank" href="https://www.instagram.com/ecs.inovacao/" title="Nosso perfil no Instagram">
        <img loading="lazy" src="src/static/img/instagram-branco.svg" srcset="src/static/img/instagram-branco.svg 1x" alt="Instagram" width='29' height='29'>
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/ecs-consultoria-e-software/" title="Nosso perfil no Linkedin">
        <img loading="lazy" src="src/static/img/linkedin-branco.svg" srcset="src/static/img/linkedin-branco.svg 1x" alt="Linkedin" width='29' height='29'>
      </a>
    </aside>
    <aside class="arrow-fixed">
      <img loading="lazy" src="src/static/img/arrow-baixo.svg" srcset="src/static/img/arrow-baixo.svg 1x" alt="seta para baixo" width='27' height='63'>
    </aside>
    <section class="bolotas">
      <div class="container">
        <div class="bolotas__bolota bolotas__bolota--blue b1">
          <span>Mais de</span>
          <h3>30 anos</h3>
          <span>de Experiência</span>
        </div>
        <div class="bolotas__bolota bolotas__bolota--red b2">
          <span>Atuação</span>
          <h3>Brasil</h3>
          <h3>Latam</h3>
          <h3>EUA</h3>
        </div>
        <div class="bolotas__bolota bolotas__bolota--blue b3 ">
          <h3>40</h3>
          <span>Mercados</span>
          <span>Diferentes</span>
        </div>
        <div class="bolotas__bolota bolotas__bolota--red b4">
          <span>Mais de</span>
          <h3>100</h3>
          <span>Operações</span>
        </div>
      </div>
    </section>

    <section>
      <style>
        .carouselx-container { position: relative; overflow: hidden; width: 1300px; margin: 0 auto; }
        .carouselx-slides { display: flex; transition: transform 0.3s ease-in-out; }
        .carouselx-slides img { margin-right: 10px; }
        .carouselx-button { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0, 0, 0, 0.5); border: none; cursor: pointer; }
        .leftx { left: 0; }
        .rightx { right: 0; }
      </style>
      <table width='100%'>
        <tr>
          <td align='right'>
            <img loading="lazy" onclick='prevSlide()' src="src/static/img/left-arrow-black.svg" srcset="src/static/img/left-arrow-black.svg 1x" alt="Seta esquerda" width='16' height='26' style='cursor:pointer'/>
          </td>
          <td align='left' style='width:78%'>
            <div align='left' style='width:100%'>
              <div class="carouselx-container" id='carouselx-container'>
                <div class="carouselx-slides" id='carouselx-slides'>
                    <img loading="lazy" src="src/static/img/ecs-cliente-pfizer.jpg" srcset="src/static/img/ecs-cliente-pfizer.jpg 1x" alt="Logos" width="257" height="120" />
                    <img loading="lazy" src="src/static/img/ecs-cliente-sopafe.jpg" srcset="src/static/img/ecs-cliente-sopafe.jpg 1x" alt="Logos" width="257" height="120" />
                    <img loading="lazy" src="src/static/img/ecs-cliente-underskin.jpg" srcset="src/static/img/ecs-cliente-underskin.jpg 1x" alt="Logos" width="257" height="120" />
                    <img loading="lazy" src="src/static/img/ecs-cliente-unilever.jpg" srcset="src/static/img/ecs-cliente-unilever.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-villares.jpg" srcset="src/static/img/ecs-cliente-villares.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-abb-1.jpg" srcset="src/static/img/ecs-cliente-abb-1.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-ache.jpg" srcset="src/static/img/ecs-cliente-ache.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-akzonoebl.jpg" srcset="src/static/img/ecs-cliente-akzonoebl.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-alcon.jpg" srcset="src/static/img/ecs-cliente-alcon.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-astrazeneca.jpg" srcset="src/static/img/ecs-cliente-astrazeneca.jpg 1x" width='257' height='120' alt="Logos" />
                    <img loading="lazy" src="src/static/img/ecs-cliente-bayer.jpg" srcset="src/static/img/ecs-cliente-bayer.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-gauge.jpg" srcset="src/static/img/ecs-cliente-gauge.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-boehringer.jpg" srcset="src/static/img/ecs-cliente-boehringer.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-arezzo.jpg" srcset="src/static/img/ecs-cliente-arezzo.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-convatec.jpg" srcset="src/static/img/ecs-cliente-convatec.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-hypera.jpg" srcset="src/static/img/ecs-cliente-hypera.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-iguacu.jpg" srcset="src/static/img/ecs-cliente-iguacu.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-interplayers.jpg" srcset="src/static/img/ecs-cliente-interplayers.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-kspg.jpg" srcset="src/static/img/ecs-cliente-kspg.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-menphis.jpg" srcset="src/static/img/ecs-cliente-menphis.jpg 1x" alt="Logos" width='257' height='120' />
                    <img loading="lazy" src="src/static/img/ecs-cliente-novartis.jpg" srcset="src/static/img/ecs-cliente-novartis.jpg 1x" alt="Logos" width='257' height='120' />
                </div>
              </div>
            </div>
          </td>
          <td align='left'>
            <img loading="lazy" onclick='nextSlide()' src="src/static/img/right-arrow-black.svg" srcset="src/static/img/right-arrow-black.svg 1x" alt="Seta direita" width='16' height='26' style='cursor:pointer'/>
          </td>
        </tr>
      </table>
      <br><br>

    </section>

    <section class="escolher">
      <div class="container">
        <div class="escolher__texto">
          <h2>Por que escolher a ECS?</h2>
          <p>Atuamos há mais de 30 anos nas áreas de Tecnologia e Data &amp; Analytics, com importantes cases que atestam nossa efetividade.</p>
          <p>Temos expertise em oferecer soluções de acordo com as necessidades de cada negócio, realizando entregas personalizadas conforme os objetivos de nossos clientes. Por meio da inovação alcançamos meios diferenciados de colaborar para o desenvolvimento dos mercados em que atuamos.</p>
          <p>Conheça mais detalhes de cada serviço e saiba como podemos contribuir com o seu negócio.</p>
        </div>
        <img loading="lazy" src="src/static/img/escolher-ecs.jpg" srcset="src/static/img/escolher-ecs.jpg 1x" width='586' height='404' alt="Por que escolher a ECS?">
      </div>
    </section>
    <iframe allow="join-ad-interest-group" data-tagging-id="AW-400050842" data-load-time="1693692009877" height="0" width="0" style="display: none; visibility: hidden;" src="https://td.doubleclick.net/td/rul/400050842?random=1693692009872&amp;cv=11&amp;fst=1693692009872&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45He38u0&amp;u_w=2048&amp;u_h=864&amp;url=https%3A%2F%2Fecs.com.br%2F&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=Home%20-%20ECS%20-%20Solu%C3%A7%C3%B5es%20que%20entregam%20resultados&amp;auid=831544443.1693608192&amp;fledge=1&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B116.0.5845.141%7CNot)A%253BBrand%3B24.0.0.0%7CGoogle%2520Chrome%3B116.0.5845.141&amp;uamb=0&amp;uap=Windows&amp;uapv=15.0.0&amp;uaw=0"></iframe>
    <section class="sec-blue">
      <section class="servicos">
        <div class="container">
          <div class="servicos__card">
            <figure>
              <img loading="lazy" src="src/static/img/fabrica-software.svg" srcset="src/static/img/fabrica-software.svg 1x" alt="ícone" width='96' height='96'>
            </figure>
            <h4>Fábrica de Software</h4>
            <p>Temos equipes especializadas desde a especificação (Product Discovery) até o gerenciamento de infraestrutura em SaaS.</p>
            <a href="https://ecs.com.br/servicos/fabrica-de-software/">Entenda mais</a>
          </div>
          <div class="servicos__card">
            <figure>
              <img loading="lazy" src="src/static/img/data-analytics.svg" srcset="src/static/img/data-analytics.svg 1x" width='112' height='112' alt="ícone" width='96' height='96'>
            </figure>
            <h4>Data e Analytics</h4>
            <p>Trabalhamos desde a consolidação e verificação de dados até a personalização de dashs e indicadores com a aplicação de Machine Learning / IA.</p>
            <a href="https://ecs.com.br/servicos/data-analytics/">Entenda mais</a>
          </div>
          <div class="servicos__card">
            <figure>
              <img loading="lazy" src="src/static/img/modelo-negocio.svg" srcset="src/static/img/modelo-negocio.svg 1x" alt="ícone" width='96' height='96'>
            </figure>
            <h4>Gerenciamento do Canal Indireto</h4>
            <p>Atuamos na gestão de Marketplaces e Lojas Virtuais, alocando, sempre que necessário, equipes presenciais e remotas para abrir canais de vendas e melhorar a efetividade no canal distribuição / varejo.</p>
            <a href="https://ecs.com.br/servicos/gerenciamento-do-canal-indireto/">Entenda mais</a>
          </div>
        </div>
      </section>
      <section class="blog-sec">
        <h3 class="blog-sec__title container">Blog</h3>
        <div class="container">
          <div class="blog-sec__card">
            <figure>
              <img loading="lazy" src="src/static/img/integracao-de-dados-por-que-e-importante.jpg" srcset="src/static/img/integracao-de-dados-por-que-e-importante.jpg 1x" width='570' height='430' alt="Integração de dados: por que é importante?">
            </figure>
            <div>
              <h5>
                <a href="https://ecs.com.br/integracao-de-dados-por-que-e-importante/"> Integração de dados: por que é importante? </a>
              </h5>
              <p>A integração de dados visa reunir todas as informações em um só lugar, facilitando as tomadas de decisões. Descubra agora a sua relevância. </p>
              <br>
              <button type="button">
                <a href="https://ecs.com.br/integracao-de-dados-por-que-e-importante/" title="Integração de dados: por que é importante?">Acesse</a>
              </button>
            </div>
          </div>
          <div class="blog-sec__card">
            <figure>
              <img loading="lazy" src="src/static/img/mapeamento-de-demanda-por-que-e-essencial-para-o-seu-negocio.jpg" srcset="src/static/img/mapeamento-de-demanda-por-que-e-essencial-para-o-seu-negocio.jpg 1x" width='570' height='430' alt="Mapeamento de Demanda: por que é essencial para o seu negócio?">
            </figure>
            <div>
              <h5>
                <a href="https://ecs.com.br/mapeamento-de-demanda-por-que-e-essencial-para-o-seu-negocio/"> Mapeamento de Demanda: por que é essencial para o seu negócio? </a>
              </h5>
              <p>O mapeamento de demanda ajuda os negócios a baterem suas metas de forma mais prática e ágil. Descubra por que ele é importante para atingir suas metas. </p>
              <br><br>
              <button type="button">
                <a href="https://ecs.com.br/mapeamento-de-demanda-por-que-e-essencial-para-o-seu-negocio/" title="Mapeamento de Demanda: por que é essencial para o seu negócio?">Acesse</a>
              </button>
            </div>
          </div>
          <div class="blog-sec__card">
            <figure>
              <img loading="lazy" src="src/static/img/data-quality-e-demanda-online-a-dupla-para-aplicar-no-negocio.jpg" srcset="src/static/img/data-quality-e-demanda-online-a-dupla-para-aplicar-no-negocio.jpg 1x" width='570' height='430' alt="Data Quality e Demanda Online: a dupla para aplicar no negócio">
            </figure>
            <div>
              <h5>
                <a href="https://ecs.com.br/data-quality-e-demanda-online-a-dupla-para-aplicar-no-negoci/"> Data Quality e Demanda Online: a dupla para aplicar no negócio </a>
              </h5>
              <p>Data Quality é uma metodologia de verificação de consistência de dados que garante ainda mais acurácia para o Demanda Online, serviço ECS voltado a oferecer as informações sobre seus clientes, do jeito que você precisa.</p>
              <br><br><br>
              <button type="button">
                <a href="https://ecs.com.br/data-quality-e-demanda-online-a-dupla-para-aplicar-no-negoci/" title="Data Quality e Demanda Online: a dupla para aplicar no negócio">Acesse</a>
              </button>
            </div>
          </div>
        </div>
        <a class="blog-sec__mais" href="https://ecs.com.br/blog">Veja mais artigos</a>
      </section>
    </section>
    <script type="text/javascript" id="">
      ! function(b, e, f, g, a, c, d) {
        b.fbq || (a = b.fbq = function() {
          a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
        }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d))
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      fbq("init", "130898617583476");
      fbq("track", "PageView");
    </script>
    <noscript>
      <img loading="lazy" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=130898617583476&amp;ev=PageView&amp;noscript=1">
    </noscript>
    <section class="depoimentos">
      <h3 class="depoimentos__title container">Depoimentos</h3>
      <div class="container">
        <div class="depoimentos__carrossel slick-initialized slick-slider">
          <button type="button" class="depoimentos__left-arrow slick-arrow" style="">
            <img loading="lazy" src="src/static/img/left-arrow.svg" srcset="src/static/img/left-arrow.svg 1x" width='16' height='25' alt="Seta direita">
          </button>
          <div class="slick-list draggable">
            <div class="slick-track" style="opacity: 1; width: 8680px; transform: translate3d(-1240px, 0px, 0px);">
              <div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Gostaria de deixar uma nota rápida sobre o Demanda On-Line. A nova ferramenta é fantástica. Mudou o jogo na forma como equipe e distribuidores AkzoNobel gerenciam o canal de distribuição. Agora temos as principais informações disponíveis nas pontas dos dedos, todas vinculadas à política comercial. Além disso, temos a visibilidade do preço médio, mínimo e máximo que os distribuidores estão vendendo no mercado, todos os detalhes por SKU e por cliente. Coincidentemente (ou não) batemos recorde de vendas no 2º Trimestre 2020, crescendo as vendas em mais de 50% em todo o canal”.</p>
                  <h5>Marco Soares - Inteligência Comercial e de Marketing da AkzoNobel</h5>
                </div>
              </div>
              <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Desde 2016 trabalhamos com a ECS. Estávamos em busca de uma ferramenta de cotação para os produtos e soluções da ABB Eletrificação. Encontramos na ECS a experiência e o conhecimento para desenvolver o projeto, com uma equipe capacitada para a personalização da ferramenta de acordo com a nossa necessidade do negócio. Com a ferramenta ganhamos em agilidade e padronização, melhorando o atendimento ao cliente e o controle de informação. A parceria rendeu novos projetos e a confiança permite melhorias constantes. Agradecemos o empenho de todo o time ECS!”</p>
                  <h5>Fernando Leonardis - Gerente Geral de Vendas da ABB</h5>
                </div>
              </div>
              <div class="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Minha experiência com a ECS foi fantástica, não só pela qualidade do sistema e do serviço prestado, mas também pelo atendimento de alto padrão. Nunca faltaram profissionalismo e ideias novas para tornar o nosso trabalho ainda mais completo. Recomendo a ECS para quem valoriza o trabalho com o foco no cliente final, pois este foi o fator diferencial para mim.”</p>
                  <h5>Gustavo Costa - Regional Trade Marketing Manager da Bayer Crop Science</h5>
                </div>
              </div>
              <div class="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Gostaria de deixar uma nota rápida sobre o Demanda On-Line. A nova ferramenta é fantástica. Mudou o jogo na forma como equipe e distribuidores AkzoNobel gerenciam o canal de distribuição. Agora temos as principais informações disponíveis nas pontas dos dedos, todas vinculadas à política comercial. Além disso, temos a visibilidade do preço médio, mínimo e máximo que os distribuidores estão vendendo no mercado, todos os detalhes por SKU e por cliente. Coincidentemente (ou não) batemos recorde de vendas no 2º Trimestre 2020, crescendo as vendas em mais de 50% em todo o canal”.</p>
                  <h5>Marco Soares - Inteligência Comercial e de Marketing da AkzoNobel</h5>
                </div>
              </div>
              <div class="slick-slide slick-cloned" data-slick-index="3" id="" aria-hidden="true" tabindex="-1" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Desde 2016 trabalhamos com a ECS. Estávamos em busca de uma ferramenta de cotação para os produtos e soluções da ABB Eletrificação. Encontramos na ECS a experiência e o conhecimento para desenvolver o projeto, com uma equipe capacitada para a personalização da ferramenta de acordo com a nossa necessidade do negócio. Com a ferramenta ganhamos em agilidade e padronização, melhorando o atendimento ao cliente e o controle de informação. A parceria rendeu novos projetos e a confiança permite melhorias constantes. Agradecemos o empenho de todo o time ECS!”</p>
                  <h5>Fernando Leonardis - Gerente Geral de Vendas da ABB</h5>
                </div>
              </div>
              <div class="slick-slide slick-cloned" data-slick-index="4" id="" aria-hidden="true" tabindex="-1" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Minha experiência com a ECS foi fantástica, não só pela qualidade do sistema e do serviço prestado, mas também pelo atendimento de alto padrão. Nunca faltaram profissionalismo e ideias novas para tornar o nosso trabalho ainda mais completo. Recomendo a ECS para quem valoriza o trabalho com o foco no cliente final, pois este foi o fator diferencial para mim.”</p>
                  <h5>Gustavo Costa - Regional Trade Marketing Manager da Bayer Crop Science</h5>
                </div>
              </div>
              <div class="slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true" tabindex="-1" style="width: 1240px;">
                <div class="depoimentos__carrossel__depoimento">
                  <p>“Gostaria de deixar uma nota rápida sobre o Demanda On-Line. A nova ferramenta é fantástica. Mudou o jogo na forma como equipe e distribuidores AkzoNobel gerenciam o canal de distribuição. Agora temos as principais informações disponíveis nas pontas dos dedos, todas vinculadas à política comercial. Além disso, temos a visibilidade do preço médio, mínimo e máximo que os distribuidores estão vendendo no mercado, todos os detalhes por SKU e por cliente. Coincidentemente (ou não) batemos recorde de vendas no 2º Trimestre 2020, crescendo as vendas em mais de 50% em todo o canal”.</p>
                  <h5>Marco Soares - Inteligência Comercial e de Marketing da AkzoNobel</h5>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="depoimentos__right-arrow slick-arrow" style="">
            <img loading="lazy" src="src/static/img/right-arrow.svg" srcset="src/static/img/right-arrow.svg 1x" width='16' height='25' alt="Seta direita">
          </button>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container">
        <aside class="news__texto">
          <h3>News</h3>
          <p>Deseja receber conteúdo exclusivo sobre tecnologia e Inovação? Assine nosssa newsletter.</p>
          <form method="post" action="https://ecs.com.br/wp-content/themes/ecs-orbita/enviarmsg.php">
            <input type="hidden" name="cap-cop" value="5">
            <input type="text" name="nome" required="" placeholder="Nome*">
            <input type="text" name="email" required="" placeholder="E-mail*">
            <button type="submit">Inscreva-se</button>
          </form>
        </aside>
        <figure class="news__imagem">
          <img loading="lazy" src="src/static/img/ilust-news.svg" srcset="src/static/img/ilust-news.svg 1x" width='738' height='427' alt="Ilustração">
        </figure>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <h3 class="footer__title"></h3>
        <div class="footer__cols">
          <div class="footer__cols__infos">
            <div class="footer__cols__infos__info">
              <img loading="lazy" src="src/static/img/mail.png" srcset="src/static/img/mail.png 1x" width='26' height='20' alt="ícone e-mail">
              <div style="">
                <span> marketing@ecs.com.br - (11) 93938-0930 </span>
              </div>
            </div>
            <div class="footer__cols__infos__info">
              <img loading="lazy" src="src/static/img/mail.png" srcset="src/static/img/mail.png 1x" width='26' height='20' alt="ícone e-mail">
              <div style="">
                <span> rh@ecs.com.br - (51) 98572-7686 </span>
              </div>
            </div>
            <div class="footer__cols__infos__info">
              <img loading="lazy" src="src/static/img/map-pin.png" srcset="src/static/img/map-pin.png 1x" width='21' height='25' alt="ícone mapa">
              <div>
                <span>
                  <strong>Local:</strong> Av. Engenheiro Eusébio Stevaux, n° 1566 <br>CEP 04696-060 - São Paulo/SP <br> Av. Cristóvão Colombo, nº 2955, sala 701 <br>CEP 90560-005 - Porto Alegre/RS </span>
              </div>
            </div>
            <div class="social-rodape">
              <a href="https://www.facebook.com/ecs.inovacao" target="_blank">
                <img loading="lazy" src="src/static/img/facebook.png" srcset="src/static/img/facebook.png 1x" alt="Facebook" width='24' height='24'>
              </a>
              <a target="_blank" href="https://www.instagram.com/ecs.inovacao/" title="Nosso perfil no Instagram">
                <img loading="lazy" src="src/static/img/instagram.png" srcset="src/static/img/instagram.png 1x" alt="Instagram" width="100%" width='24' height='24'>
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/ecs-consultoria-e-software/" title="Nosso perfil no Linkedin">
                <img loading="lazy" src="src/static/img/linkedin.png" srcset="src/static/img/linkedin.png 1x" alt="Linkedin" width="100%" width='24' height='24'>
              </a>
            </div>
          </div>
          <div class="footer__cols__links">
            <ul>
              <li>
                <a href="https://ecs.com.br/">Início</a>
              </li>
              <li>
                <a href="https://ecs.com.br/quem-somos">Quem somos</a>
              </li>
              <li>
                <a href="https://ecs.com.br/#">Áreas de Atuação</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://ecs.com.br/blog">Blog</a>
              </li>
              <li>
                <a href="https://ecs.com.br/trabalhe-conosco">Trabalhe conosco</a>
              </li>
              <li>
                <a href="https://ecs.com.br/contato">Contato</a>
              </li>
              <li>
                <a href="https://ecs.com.br/politicas-de-privacidade/">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          <div class="footer__cols__logos">
            <figure>
              <img loading="lazy" src="src/static/img/ecs-branco.png" srcset="src/static/img/ecs-branco.png 1x" width='120' height='56' alt="Logo ecs">
            </figure>
            <figure>
              <img loading="lazy" src="src/static/img/inter-players-1.png" srcset="src/static/img/inter-players-1.png 1x" width='203' height='94' alt="Uma empresa do Grupo InterPlayers">
            </figure>
          </div>
        </div>
        <h6 class="footer__copyright">Copyright 2023.</h6>
      </div>
    </footer>
    <script type="text/javascript">
      ! function(i) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
      }(function(i) {
          "use strict";
          var e = window.Slick || {};
          (e = function() {
              var e = 0;
              return function(t, o) {
                var s, n = this;
                n.defaults = {
                  accessibility: !0,
                  adaptiveHeight: !1,
                  appendArrows: i(t),
                  appendDots: i(t),
                  arrows: !0,
                  asNavFor: null,
                  prevArrow: ' < button class = "slick-prev"
                  aria - label = "Previous"
                  type = "button" > Previous < /button>',nextArrow:' < button class = "slick-next"
                  aria - label = "Next"
                  type = "button" > Next < /button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i(' < button type = "button" / > ').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t < 0 || t >= s.slideCount) return !1;
                s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
                  i(t).attr("data-slick-index", e)
                }), s.$slidesCache = s.$slides, s.reinit()
              }, e.prototype.animateHeight = function() {
                var i = this;
                if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                  var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                  i.$list.animate({
                    height: e
                  }, i.options.speed)
                }
              }, e.prototype.animateSlide = function(e, t) {
                var o = {},
                  s = this;
                s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                  left: e
                }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                  top: e
                }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
                  animStart: s.currentLeft
                }).animate({
                  animStart: e
                }, {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function(i) {
                    i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
                  },
                  complete: function() {
                    t && t.call()
                  }
                })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
                  s.disableTransition(), t.call()
                }, s.options.speed))
              }, e.prototype.getNavTarget = function() {
                var e = this,
                  t = e.options.asNavFor;
                return t && null !== t && (t = i(t).not(e.$slider)), t
              }, e.prototype.asNavFor = function(e) {
                var t = this.getNavTarget();
                null !== t && "object" == typeof t && t.each(function() {
                  var t = i(this).slick("getSlick");
                  t.unslicked || t.slideHandler(e, !0)
                })
              }, e.prototype.applyTransition = function(i) {
                var e = this,
                  t = {};
                !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
              }, e.prototype.autoPlay = function() {
                var i = this;
                i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
              }, e.prototype.autoPlayClear = function() {
                var i = this;
                i.autoPlayTimer && clearInterval(i.autoPlayTimer)
              }, e.prototype.autoPlayIterator = function() {
                var i = this,
                  e = i.currentSlide + i.options.slidesToScroll;
                i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
              }, e.prototype.buildArrows = function() {
                var e = this;
                !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                  "aria-disabled": "true",
                  tabindex: "-1"
                }))
              }, e.prototype.buildDots = function() {
                var e, t, o = this;
                if (!0 === o.options.dots) {
                  for (o.$slider.addClass("slick-dotted"), t = i(" < ul / > ").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i(" < li / > ").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("
                      li ").first().addClass("
                      slick - active ")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+": not(.slick - cloned)
                      ").addClass("
                      slick - slide "),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("
                      data - slick - index ",e).data("
                      originalStyling ",i(t).attr("
                      style ")||"
                      ")}),e.$slider.addClass("
                      slick - slider "),e.$slideTrack=0===e.slideCount?i(' < div class = "slick-track" / > ').appendTo(e.$slider):e.$slides.wrapAll(' < div class = "slick-track" / > ').parent(),e.$list=e.$slideTrack.wrap(' < div class = "slick-list" / > ').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i < s; i++) {
                      var d = document.createElement("div");
                      for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                          var c = i * r + (e * l.options.slidesPerRow + t);
                          n.get(c) && a.appendChild(n.get(c))
                        }
                        d.appendChild(a)
                      }
                      o.appendChild(d)
                    }
                    l.$slider.empty().append(o), l.$slider.children().children().children().css({
                      width: 100 / l.options.slidesPerRow + "%",
                      display: "inline-block"
                    })
                  }
                }, e.prototype.checkResponsive = function(e, t) {
                  var o, s, n, r = this,
                    l = !1,
                    d = r.$slider.width(),
                    a = window.innerWidth || i(window).width();
                  if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                    s = null;
                    for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                    null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
                  }
                }, e.prototype.changeSlide = function(e, t) {
                  var o, s, n, r = this,
                    l = i(e.currentTarget);
                  switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                    case "previous":
                      s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                      break;
                    case "next":
                      s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                      break;
                    case "index":
                      var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                      r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                      break;
                    default:
                      return
                  }
                }, e.prototype.checkNavigable = function(i) {
                  var e, t;
                  if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
                  else
                    for (var o in e) {
                      if (i < e[o]) {
                        i = t;
                        break
                      }
                      t = e[o]
                    }
                  return i
                }, e.prototype.cleanUpEvents = function() {
                  var e = this;
                  e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
                }, e.prototype.cleanUpSlideEvents = function() {
                  var e = this;
                  e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
                }, e.prototype.cleanUpRows = function() {
                  var i, e = this;
                  e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
                }, e.prototype.clickHandler = function(i) {
                  !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
                }, e.prototype.destroy = function(e) {
                  var t = this;
                  t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    i(this).attr("style", i(this).data("originalStyling"))
                  }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
                }, e.prototype.disableTransition = function(i) {
                  var e = this,
                    t = {};
                  t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
                }, e.prototype.fadeSlide = function(i, e) {
                  var t = this;
                  !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                    zIndex: t.options.zIndex
                  }), t.$slides.eq(i).animate({
                    opacity: 1
                  }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
                    opacity: 1,
                    zIndex: t.options.zIndex
                  }), e && setTimeout(function() {
                    t.disableTransition(i), e.call()
                  }, t.options.speed))
                }, e.prototype.fadeSlideOut = function(i) {
                  var e = this;
                  !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                  }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                  }))
                }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
                  var e = this;
                  null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
                }, e.prototype.focusHandler = function() {
                  var e = this;
                  e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function() {
                      e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
                    }, 0)
                  })
                }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
                  return this.currentSlide
                }, e.prototype.getDotCount = function() {
                  var i = this,
                    e = 0,
                    t = 0,
                    o = 0;
                  if (!0 === i.options.infinite)
                    if (i.slideCount <= i.options.slidesToShow) ++o;
                    else
                      for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                  else if (!0 === i.options.centerMode) o = i.slideCount;
                  else if (i.options.asNavFor)
                    for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
                  else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
                  return o - 1
                }, e.prototype.getLeft = function(i) {
                  var e, t, o, s, n = this,
                    r = 0;
                  return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
                }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
                  return this.options[i]
                }, e.prototype.getNavigableIndexes = function() {
                  var i, e = this,
                    t = 0,
                    o = 0,
                    s = [];
                  for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                  return s
                }, e.prototype.getSlick = function() {
                  return this
                }, e.prototype.getSlideCount = function() {
                  var e, t, o = this;
                  return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                    if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
                  }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
                }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
                  this.changeSlide({
                    data: {
                      message: "index",
                      index: parseInt(i)
                    }
                  }, e)
                }, e.prototype.init = function(e) {
                  var t = this;
                  i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
                }, e.prototype.initADA = function() {
                  var e = this,
                    t = Math.ceil(e.slideCount / e.options.slidesToShow),
                    o = e.getNavigableIndexes().filter(function(i) {
                      return i >= 0 && i < e.slideCount
                    });
                  e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                  }).find("a, input, button, select").attr({
                    tabindex: "-1"
                  }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                    var s = o.indexOf(t);
                    i(this).attr({
                      role: "tabpanel",
                      id: "slick-slide" + e.instanceUid + t,
                      tabindex: -1
                    }), -1 !== s && i(this).attr({
                      "aria-describedby": "slick-slide-control" + e.instanceUid + s
                    })
                  }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
                    var n = o[s];
                    i(this).attr({
                      role: "presentation"
                    }), i(this).find("button").first().attr({
                      role: "tab",
                      id: "slick-slide-control" + e.instanceUid + s,
                      "aria-controls": "slick-slide" + e.instanceUid + n,
                      "aria-label": s + 1 + " of " + t,
                      "aria-selected": null,
                      tabindex: "-1"
                    })
                  }).eq(e.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                  }).end());
                  for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
                  e.activateADA()
                }, e.prototype.initArrowEvents = function() {
                  var i = this;
                  !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                  }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                  }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
                }, e.prototype.initDotEvents = function() {
                  var e = this;
                  !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                    message: "index"
                  }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
                }, e.prototype.initSlideEvents = function() {
                  var e = this;
                  e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
                }, e.prototype.initializeEvents = function() {
                  var e = this;
                  e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                  }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                  }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                  }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                  }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
                }, e.prototype.initUI = function() {
                  var i = this;
                  !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
                }, e.prototype.keyHandler = function(i) {
                  var e = this;
                  i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                    data: {
                      message: !0 === e.options.rtl ? "next" : "previous"
                    }
                  }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                    data: {
                      message: !0 === e.options.rtl ? "previous" : "next"
                    }
                  }))
                }, e.prototype.lazyLoad = function() {
                  function e(e) {
                    i("img[data-lazy]", e).each(function() {
                      var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                      r.onload = function() {
                        e.animate({
                          opacity: 0
                        }, 100, function() {
                          o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                          }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                          }), n.$slider.trigger("lazyLoaded", [n, e, t])
                        })
                      }, r.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                      }, r.src = t
                    })
                  }
                  var t, o, s, n = this;
                  if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
                    for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
                  e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
                }, e.prototype.loadSlider = function() {
                  var i = this;
                  i.setPosition(), i.$slideTrack.css({
                    opacity: 1
                  }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
                }, e.prototype.next = e.prototype.slickNext = function() {
                  this.changeSlide({
                    data: {
                      message: "next"
                    }
                  })
                }, e.prototype.orientationChange = function() {
                  var i = this;
                  i.checkResponsive(), i.setPosition()
                }, e.prototype.pause = e.prototype.slickPause = function() {
                  var i = this;
                  i.autoPlayClear(), i.paused = !0
                }, e.prototype.play = e.prototype.slickPlay = function() {
                  var i = this;
                  i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
                }, e.prototype.postSlide = function(e) {
                  var t = this;
                  t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
                }, e.prototype.prev = e.prototype.slickPrev = function() {
                  this.changeSlide({
                    data: {
                      message: "previous"
                    }
                  })
                }, e.prototype.preventDefault = function(i) {
                  i.preventDefault()
                }, e.prototype.progressiveLazyLoad = function(e) {
                  e = e || 1;
                  var t, o, s, n, r, l = this,
                    d = i("img[data-lazy]", l.$slider);
                  d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                    s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
                  }, r.onerror = function() {
                    e < 3 ? setTimeout(function() {
                      l.progressiveLazyLoad(e + 1)
                    }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
                  }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
                }, e.prototype.refresh = function(e) {
                  var t, o, s = this;
                  o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
                    currentSlide: t
                  }), s.init(), e || s.changeSlide({
                    data: {
                      message: "index",
                      index: t
                    }
                  }, !1)
                }, e.prototype.registerBreakpoints = function() {
                  var e, t, o, s = this,
                    n = s.options.responsive || null;
                  if ("array" === i.type(n) && n.length) {
                    s.respondTo = s.options.respondTo || "window";
                    for (e in n)
                      if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                      } s.breakpoints.sort(function(i, e) {
                      return s.options.mobileFirst ? i - e : e - i
                    })
                  }
                }, e.prototype.reinit = function() {
                  var e = this;
                  e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
                }, e.prototype.resize = function() {
                  var e = this;
                  i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                    e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
                  }, 50))
                }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
                  var o = this;
                  if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
                  o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
                }, e.prototype.setCSS = function(i) {
                  var e, t, o = this,
                    s = {};
                  !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
                }, e.prototype.setDimensions = function() {
                  var i = this;
                  !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                    padding: "0px " + i.options.centerPadding
                  }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
                    padding: i.options.centerPadding + " 0px"
                  })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
                  var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
                  !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
                }, e.prototype.setFade = function() {
                  var e, t = this;
                  t.$slides.each(function(o, s) {
                    e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                      position: "relative",
                      right: e,
                      top: 0,
                      zIndex: t.options.zIndex - 2,
                      opacity: 0
                    }) : i(s).css({
                      position: "relative",
                      left: e,
                      top: 0,
                      zIndex: t.options.zIndex - 2,
                      opacity: 0
                    })
                  }), t.$slides.eq(t.currentSlide).css({
                    zIndex: t.options.zIndex - 1,
                    opacity: 1
                  })
                }, e.prototype.setHeight = function() {
                  var i = this;
                  if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                    var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                    i.$list.css("height", e)
                  }
                }, e.prototype.setOption = e.prototype.slickSetOption = function() {
                  var e, t, o, s, n, r = this,
                    l = !1;
                  if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
                  else if ("multiple" === n) i.each(o, function(i, e) {
                    r.options[i] = e
                  });
                  else if ("responsive" === n)
                    for (t in s)
                      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                      else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[t])
                      } l && (r.unload(), r.reinit())
                }, e.prototype.setPosition = function() {
                  var i = this;
                  i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
                }, e.prototype.setProps = function() {
                  var i = this,
                    e = document.body.style;
                  i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
                }, e.prototype.setSlideClasses = function(i) {
                  var e, t, o, s, n = this;
                  if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
                    var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                    e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
                  } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                  "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
                }, e.prototype.setupInfinite = function() {
                  var e, t, o, s = this;
                  if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
                    for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                      i(this).attr("id", "")
                    })
                  }
                }, e.prototype.interrupt = function(i) {
                  var e = this;
                  i || e.autoPlay(), e.interrupted = i
                }, e.prototype.selectHandler = function(e) {
                  var t = this,
                    o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
                    s = parseInt(o.attr("data-slick-index"));
                  s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
                }, e.prototype.slideHandler = function(i, e, t) {
                  var o, s, n, r, l, d = null,
                    a = this;
                  if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
                    if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                      a.postSlide(o)
                    }) : a.postSlide(o));
                    else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                  }) : a.postSlide(o));
                  else {
                    if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                      a.postSlide(s)
                    })) : a.postSlide(s), void a.animateHeight();
                    !0 !== t ? a.animateSlide(d, function() {
                      a.postSlide(s)
                    }) : a.postSlide(s)
                  }
                }, e.prototype.startLoad = function() {
                  var i = this;
                  !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
                }, e.prototype.swipeDirection = function() {
                  var i, e, t, o, s = this;
                  return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
                }, e.prototype.swipeEnd = function(i) {
                  var e, t, o = this;
                  if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
                  if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
                  if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                    switch (t = o.swipeDirection()) {
                      case "left":
                      case "down":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                        break;
                      case "right":
                      case "up":
                        e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                    }
                    "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
                  } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
                }, e.prototype.swipeHandler = function(i) {
                  var e = this;
                  if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
                    case "start":
                      e.swipeStart(i);
                      break;
                    case "move":
                      e.swipeMove(i);
                      break;
                    case "end":
                      e.swipeEnd(i)
                  }
                }, e.prototype.swipeMove = function(i) {
                  var e, t, o, s, n, r, l = this;
                  return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
                }, e.prototype.swipeStart = function(i) {
                  var e, t = this;
                  if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
                  void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
                }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                  var i = this;
                  null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
                }, e.prototype.unload = function() {
                  var e = this;
                  i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                }, e.prototype.unslick = function(i) {
                  var e = this;
                  e.$slider.trigger("unslick", [e, i]), e.destroy()
                }, e.prototype.updateArrows = function() {
                  var i = this;
                  Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                }, e.prototype.updateDots = function() {
                  var i = this;
                  null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
                }, e.prototype.visibility = function() {
                  var i = this;
                  i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
                }, i.fn.slick = function() {
                  var i, t, o = this,
                    s = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    r = o.length;
                  for (i = 0; i < r; i++)
                    if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
                  return o
                }
              });
    </script>
    <script type="text/javascript">
      const menu = document.querySelector(".navbar__list"),
        menuIcon = document.querySelector(".navbar__mob__menu-icon");
      menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("open"), menu.classList.toggle("open"), document.documentElement.classList.toggle("o-hidden")
      });
      const circles = document.querySelectorAll(".bolotas__bolota");
      circles.forEach(e => {
        window.addEventListener("scroll", () => {
          let t = e.getBoundingClientRect().top;
          t < 800 ? e.classList.add("active") : e.classList.remove("active")
        })
      });
      const numbers = document.querySelectorAll(".number");
      numbers.forEach(e => {
        let t = +e.textContent,
          n = Math.floor(t / 30),
          o = 0,
          c = setInterval(() => {
            o += n, e.innerText = o, o > t && (e.innerText = t, clearInterval(c))
          }, 32)
      });
    </script>
    <script type="text/javascript">
      jQuery(document).ready(function($) {
        var entreiAnimateNumber = 0;
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll < 450) {
            $("nav.navbar.fixo").css("top", "-200%");
          }
          if (scroll > 450) {
            $("nav.navbar.fixo").css("top", "0%");
          }
        });
      });
      $(document).ready(function() {
        $(".banner__carrossel").slick({
          infinite: true,
          dots: true,
          nextArrow: '<button type="button"
          class = "banner__carrossel__right-arrow"><img loading="lazy"
          src="src/static/img/right-arrow.svg"
          srcset="src/static/img/right-arrow.svg 1x"
          width="16" height="26"
          alt="Seta direita"></button>',
          prevArrow: '<button type="button"
          class="banner__carrossel__left-arrow"><img loading="lazy"
          src="src/static/img/left-arrow.svg"
          srcset="src/static/img/left-arrow.svg 1x"
          width="16" height="26"
          alt="Seta direita"></button>'
        });
        $(".parceiros__carrossel").slick({
          infinite: true,
          dots: false,
          slidesToShow: 5,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            }
          }],
          nextArrow: '<button type="button"
          class="parceiros__right-arrow"> <img loading="lazy"
          src="src/static/img/right-arrow-black.svg"
          srcset="src/static/img/right-arrow-black.svg 1x"
          width="16" height="26"
          alt="Seta direita"></button>',
          prevArrow: '<button type="button"
          class="parceiros__left-arrow"> <img loading="lazy"
          src="src/static/img/left-arrow-black.svg"
          srcset="src/static/img/left-arrow-black.svg 1x"
          width="16" height="26"
          alt="Seta direita"></button>'
        });
        $(".depoimentos__carrossel").slick({
          infinite: true,
          dots: false,
          nextArrow: '<button type="button"
          class="depoimentos__right-arrow"><img loading="lazy"
          src="src/static/img/right-arrow.svg"
          srcset="src/static/img/right-arrow.svg 1x"
          width="16" height="26"
          alt="Seta direita"></button>',
          prevArrow: '<button type = "button"
          class="depoimentos__left-arrow"><img loading="lazy"
          src="src/static/img/left-arrow.svg"
          srcset="src/static/img/left-arrow.svg 1x"
          width="16" height="26"
          alt="Seta direita"></button>'
        });
      });
    </script>
    <!--googleoff: all-->
    <div id="cookie-law-info-bar" data-nosnippet="true">
      <span>
        <div class="cli-bar-message">Esse website captura os dados, para melhorar a sua experiência, tornando a comunicação sempre clara e objetiva. <br>Descubra mais sobre como nós utilizamos e gerenciamos esses dados lendo nossa <a href="https://ecs.com.br/politicas-de-privacidade/" data-cli_action="accept" id="CONSTANT_OPEN_URL" target="_blank" class="cli-plugin-main-button cookie_action_close_header cli_action_button wt-cli-accept-btn">Política de Privacidade</a>
          <a id="wt-cli-accept-all-btn" role='button' data-cli_action="accept_all" class="wt-cli-element medium cli-plugin-button wt-cli-accept-all-btn cookie_action_close_header cli_action_button">ACEITAR</a>
        </div>
    </div>
    </span>
    </div>
    <!--googleon: all-->
    <a href="https://wa.me/5511939380930?text=Olá." rel="noreferrer" title="Fale conosco!" alt="Fale conosco!" target="_blank" class="wayra-coc-floating-button wayra-coc-floating-style2  wayra-coc-floating">
      <svg xmlns="http://www.w3.org/2000/svg" alt="WhatsApp logo" viewbox="0 0 24 24" width="30px" height="30px">
        <path fill="#fff" d="M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 01-13.754 2.299l-5.814.735a.392.392 0 01-.438-.44l.748-5.788A12.002 12.002 0 013.517 3.517zm3.61 17.043l.3.158a9.846 9.846 0 0011.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 00-1.747 11.554l.16.303-.51 3.942a.196.196 0 00.219.22l3.961-.501zm6.534-7.003l-.933 1.164a9.843 9.843 0 01-3.497-3.495l1.166-.933a.792.792 0 00.23-.94L9.561 6.96a.793.793 0 00-.924-.445 1291.6 1291.6 0 00-2.023.524.797.797 0 00-.588.88 11.754 11.754 0 0010.005 10.005.797.797 0 00.88-.587l.525-2.023a.793.793 0 00-.445-.923L14.6 13.327a.792.792 0 00-.94.23z" />
      </svg>
      <div class="wayra-coc-floating-label">
        <div class="wayra-coc-floating-label-text">Fale conosco!</div>
      </div>
    </a>
    `
  }
}
