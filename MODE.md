Claro! Aqui está o seu HTML com os atributos `aria-label` e `role` adicionados para melhorar a acessibilidade:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="src/css/styles.css" />
    <link rel="stylesheet" href="src/css/media-query.css" />
    <link rel="stylesheet" href="src/css/scroll-effects.css">
    <link rel="shortcut icon" href="src/image/favicon.ico" type="image/x-icon">
    <title>Jessíca | Planilhas</title>
  </head>
  <body>
    <div class="groupHeader">
      <header class="header" id="header" role="banner">
        <div class="groupNav">
          <nav class="nav" role="navigation">
            <a href="#" aria-label="Página inicial">
              <img loading="lazy" src="src/image/favicon-32x32.png" alt="logo" />
            </a>
            <button class="btn-menu" aria-label="Abrir menu">
              <a href="#" id="btn-menu-link">
                <i class="bi bi-list" id="icon-btn-menu"></i>
              </a>
            </button>
            <ul id="listMenu" role="list">
              <li><a class="link-menu" id="link-inicio" href="#header">Início</a></li>
              <li><a class="link-menu" id="link-sobre" href="#sobre">Sobre</a></li>
              <li><a class="link-menu" id="link-servico" href="#servico">Serviço</a></li>
              <li><a class="link-menu" id="link-youtube" href="#youtube">YouTube</a></li>
              <li><a class="link-menu" id="link-beneficios" href="#beneficios">Benefícios</a></li>
              <li><a class="link-menu" id="link-duvida" href="#duvidas">Dúvidas</a></li>
              <li><a class="link-menu" id="link-contato" href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
        <div class="groupHeader-elements">
          <section class="groupHeader-primary">
            <p class="titleHeader-primary hidden-inicio">jessica | planilhas</p>
            <h1 class="titleHeader-secundary hidden-i hidden-inicio">
              Soluções para <wbr /> você através de <wbr /> planilhas
            </h1>
            <a target="_blank" href="https://linktr.ee/jessicaplanilhasdashs">
              <button class="btn hidden-i hidden-inicio" aria-label="Ver planilhas">Ver planilhas</button>
            </a>
          </section>
          <section class="groupHeader-secundary">
            <div class="circle" role="img" aria-label="Ilustração decorativa"></div>
            <img
              loading="lazy"
              class="img hidden-i hidden-inicio-img"
              src="http://www.oorders.com/images/6105fbb0f558a2ba7589ea492afa4331.jpg"
              alt="moça sorrindo"
              role="img"
              aria-label="Mulher sorrindo"
            />
          </section>
        </div>
      </header>
    </div>
    <main>
      <div class="groupSobre">
        <section class="sobre" id="sobre" role="region" aria-labelledby="sobre">
          <div class="groupSobre-primary">
            <img
              class="hidden-sobre"
              loading="lazy"
              src="https://i.pinimg.com/564x/b4/b4/0a/b4b40ac2cbe20814b8649afe3ecf584f.jpg"
              alt="Imagem sobre"
            />
          </div>
          <div class="groupSobre-secundary">
            <div class="groupSobre-secundary-texts">
              <h2 class="titleSobre hidden-sobre">Procura planilhas para agilizar sua produtividade? Conte conosco.</h2>
              <p class="textSobre hidden-sobre">
                Write a paragraph that talks about your company here. You can
                talk about your company's background, history, mission, vision,
                or philosophy. Anything that will introduce your brand's persona
                to your clients. This will help build a connection between you
                and them, that hopefully leads into a working relationship.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div class="groupServiceExcel">
        <section class="service-excel" id="servico" role="region" aria-labelledby="servico">
          <div class="groupServiceExcel-primary">
            <h2 class="titleServiceExcel-primary">Planilhas que ofereço:</h2>
          </div>
          <div class="groupServiceExcel-secundary">
            <h3 class="titleService-secundary">Excel</h3>
          </div>
          <section class="groupServiceExcel-terciary">
            <a
              href="https://go.hotmart.com/E87078060R"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha Baseada na Regra 50/30/20"
            >
              <article class="data">
                <div class="groupData-img-1" role="img" aria-label="Imagem da planilha baseada na regra 50/30/20"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha Baseada na Regra 50/30/20</h3>
                  <p class="data-descricao">Gerencie suas finanças de acordo com a regra 50/30/20 no Excel.</p>
                </div>
              </article>
            </a>

            <a
              href="https://go.hotmart.com/I86610424W"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha para controle de gastos"
            >
              <article class="data">
                <div class="groupData-img-2" role="img" aria-label="Imagem da planilha para controle de gastos"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha para controle de gastos</h3>
                  <p class="data-descricao">Monitore e controle seus gastos mensais no Excel.</p>
                </div>
              </article>
            </a>

            <a
              href="https://go.hotmart.com/T86923742R"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha de controle financeiro personalizável"
            >
              <article class="data">
                <div class="groupData-img-3" role="img" aria-label="Imagem da planilha de controle financeiro personalizável"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha de controle financeiro personalizável</h3>
                  <p class="data-descricao">Personalize seu controle financeiro de acordo com suas necessidades no Excel.</p>
                </div>
              </article>
            </a>

            <a
              href="https://youtu.be/TUVI1RCD7iE"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha de controle financeiro simples"
            >
              <article class="data">
                <div class="groupData-img-4" role="img" aria-label="Imagem da planilha de controle financeiro simples"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha de controle financeiro simples</h3>
                  <p class="data-descricao">Mantenha suas finanças organizadas com uma planilha simples no Excel.</p>
                </div>
              </article>
            </a>
          </section>
        </section>
      </div>

      <div class="groupServiceGoogle">
        <section class="service-google-sheets" role="region" aria-labelledby="servico-google-sheets">
          <div class="groupServiceGoogle-primary">
            <h3 class="titleService-secundary">Google Sheets</h3>
          </div>
          <div class="groupServiceGoogle-secundary">
            <a
              href="https://go.hotmart.com/U89372251L"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha Baseada na Regra 50/30/20 no Google Sheets"
            >
              <article class="data">
                <div class="groupData-img-5" role="img" aria-label="Imagem da planilha baseada na regra 50/30/20 no Google Sheets"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha Baseada na Regra 50/30/20</h3>
                  <p class="data-descricao">Administre suas finanças seguindo a regra 50/30/20 no Google Sheets.</p>
                </div>
              </article>
            </a>

            <a
              href="https://go.hotmart.com/X89372640G"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha para

 controle de gastos no Google Sheets"
            >
              <article class="data">
                <div class="groupData-img-6" role="img" aria-label="Imagem da planilha para controle de gastos no Google Sheets"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha para controle de gastos</h3>
                  <p class="data-descricao">Controle seus gastos mensais de forma eficaz no Google Sheets.</p>
                </div>
              </article>
            </a>

            <a
              href="https://go.hotmart.com/O89373010P"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha de controle financeiro personalizável no Google Sheets"
            >
              <article class="data">
                <div class="groupData-img-7" role="img" aria-label="Imagem da planilha de controle financeiro personalizável no Google Sheets"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha de controle financeiro personalizável</h3>
                  <p class="data-descricao">Customize seu controle financeiro no Google Sheets conforme suas preferências.</p>
                </div>
              </article>
            </a>

            <a
              href="https://youtu.be/TUVI1RCD7iE"
              class="link-planilha"
              target="_blank"
              aria-label="Planilha de controle financeiro simples no Google Sheets"
            >
              <article class="data">
                <div class="groupData-img-8" role="img" aria-label="Imagem da planilha de controle financeiro simples no Google Sheets"></div>
                <div class="groupData-text">
                  <h3 class="data-title">Planilha de controle financeiro simples</h3>
                  <p class="data-descricao">Mantenha suas finanças em ordem com uma planilha simples no Google Sheets.</p>
                </div>
              </article>
            </a>
          </div>
        </section>
      </div>

      <div class="groupBeneficios">
        <section class="beneficios" id="beneficios" role="region" aria-labelledby="beneficios">
          <h2 class="titleBeneficios">Benefícios</h2>
          <div class="groupBeneficios-cards">
            <div class="card">
              <div class="card-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <h3 class="card-title">Acesso Online</h3>
              <p class="card-description">Acesse suas planilhas de qualquer lugar, a qualquer hora.</p>
            </div>
            <div class="card">
              <div class="card-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <h3 class="card-title">Segurança</h3>
              <p class="card-description">Suas informações são protegidas e seguras.</p>
            </div>
            <div class="card">
              <div class="card-icon">
                <i class="bi bi-gear"></i>
              </div>
              <h3 class="card-title">Customização</h3>
              <p class="card-description">Adapte as planilhas conforme suas necessidades.</p>
            </div>
          </div>
        </section>
      </div>

      <div class="groupDuvidas">
        <section class="duvidas" id="duvidas" role="region" aria-labelledby="duvidas">
          <h2 class="titleDuvidas">Dúvidas</h2>
          <p class="textDuvidas">
            Se você tiver dúvidas, entre em contato conosco para mais informações.
          </p>
        </section>
      </div>

      <div class="groupContato">
        <section class="contato" id="contato" role="region" aria-labelledby="contato">
          <h2 class="titleContato">Contato</h2>
          <p class="textContato">
            Entre em contato para obter suporte ou esclarecer qualquer dúvida.
          </p>
          <a href="mailto:contato@jessicaplanilhas.com" class="email" aria-label="Enviar e-mail para contato@jessicaplanilhas.com">
            contato@jessicaplanilhas.com
          </a>
        </section>
      </div>
    </main>

    <footer class="footer" role="contentinfo">
      <p>&copy; 2024 Jessíca Planilhas. Todos os direitos reservados.</p>
    </footer>

    <script src="src/js/main.js"></script>
  </body>
</html>
```

### Melhorias feitas:
1. **`aria-label`**: Adicionado a elementos interativos e imagens para descrever suas funções ou conteúdo.
2. **`role`**: Adicionado para definir claramente o tipo de conteúdo, como `banner`, `navigation`, `region`, etc.
3. **Texto Alternativo**: Melhorado para fornecer uma descrição mais clara e útil das imagens.

Essas adições devem ajudar a tornar o site mais acessível para pessoas que usam leitores de tela e outros dispositivos de assistência. Se precisar de mais ajustes ou tiver outras dúvidas, é só me avisar!