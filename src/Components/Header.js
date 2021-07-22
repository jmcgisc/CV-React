import React from "react";
import TypeWriter from "react-typewriter";
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import {  InfoTwoToneIcon } from '@material-ui/icons/InfoTwoTone';
import { EmojiObjectsTwoToneIcon } from "@material-ui/icons/EmojiObjectsTwoTone";
import { BuildTwoToneIcon } from "@material-ui/icons/BuildTwoTone";
import { ContactMailTwoToneIcon } from "@material-ui/icons/ContactMailTwoTone";

const links = [{
  id: "about",
  text: "acerca de mi",
  icon:  < InfoTwoToneIcon />
  }, 
  {
  id: "skills",
  text: "Tecnologías",
  icon:  < EmojiObjectsTwoToneIcon />
  }, 
  {
  id: "work",
  text: "ExperienciasTecnológicas",
  icon:  < BuildTwoToneIcon />
  }, 
  {
  id: " contact",
  text: "Contáctame",
  icon:  < ContactMailTwoToneIcon />
  }
]

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              INICIO
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Acerca de
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              C.V.
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Trabajos
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Motivación 
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `Soy ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            Ubicado en {city}. <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
