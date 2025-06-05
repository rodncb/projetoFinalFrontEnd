import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../utils/constants";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Descubra seus filmes favoritos</h1>
          <p className="hero__description">
            Busque por milhares de filmes e séries usando nossa ferramenta de
            pesquisa avançada. Encontre informações detalhadas, ratings e muito
            mais.
          </p>
          <Link to={ROUTES.SEARCH} className="hero__cta">
            <Button variant="primary">Começar a buscar</Button>
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="features__container">
          <h2 className="features__title">Por que usar nosso buscador?</h2>

          <div className="features__grid">
            <article className="feature">
              <div className="feature__icon">🔍</div>
              <h3 className="feature__title">Busca Avançada</h3>
              <p className="feature__description">
                Encontre filmes por título com resultados precisos e rápidos.
              </p>
            </article>

            <article className="feature">
              <div className="feature__icon">📊</div>
              <h3 className="feature__title">Informações Completas</h3>
              <p className="feature__description">
                Veja detalhes como ano de lançamento, gênero e classificações.
              </p>
            </article>

            <article className="feature">
              <div className="feature__icon">📱</div>
              <h3 className="feature__title">Design Responsivo</h3>
              <p className="feature__description">
                Funciona perfeitamente em todos os dispositivos e tamanhos de
                tela.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about__container">
          <h2 className="about__title">Sobre o Projeto</h2>
          <p className="about__text">
            Este é um projeto desenvolvido com React que utiliza a OMDb API para
            buscar informações sobre filmes e séries. Foi criado como parte de
            um estudo sobre desenvolvimento front-end moderno, implementando
            boas práticas de código, acessibilidade e design responsivo.
          </p>
          <div className="about__tech">
            <h3 className="about__tech-title">Tecnologias utilizadas:</h3>
            <ul className="about__tech-list">
              <li>React</li>
              <li>React Router</li>
              <li>OMDb API</li>
              <li>CSS3 com BEM</li>
              <li>HTML5 Semântico</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
