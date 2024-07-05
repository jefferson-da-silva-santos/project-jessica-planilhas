```css
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

:root {
  --primary-font: "DM Sans", sans-serif;
  --secundary-font: "Poppins", sans-serif;
  --terciary-font: "Open Sans", sans-serif;

  --primary-color: #011E11;
  --secundary-color: #79B699;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header-container {
  width: 100%;
  min-height: 100vh;
  background-color: var(--primary-color);
}

.header {
  max-width: 1024px;
  margin: auto;
}

.header-group {
  display: flex;
  min-height: 88vh;
  width: 100%;
  padding: 0 5rem;
  align-items: center;
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1024px;
  margin: auto;
}

.nav-header ul {
  display: flex;
  list-style-type: none;
  gap: 10px;
}

.nav-header ul a{
  text-decoration: none;
  font-family: var(--secundary-font);
  color: white;
  padding: 10px;
  position: relative;
  transition: color .5s ease;
}

.nav-header ul a:hover {
  color: #00ff84;
}

.nav-header ul a::before {
  content: "";
  display: inline-block;
  position: absolute;
  height: 2px;
  width: 0px;
  top: 38px;
  left: 0px;
  border-radius: 20px;
  background-image: linear-gradient(to left, #5dffb0, #00ff84,#011E11);
  transition: width 0.5s ease;
}

.nav-header ul a:hover:before {
  width: 100%;
}

.conteiner-titulo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem;
  height: 510px;
}

.conteiner-titulo h1 {
  color: white;
  font-family: var(--primary-font);
  font-size: 3.5625rem;
  width: 480px;
  font-weight: 600;
}

.title-header{
  font-family: var(--secundary-font);
  font-size: 16px;
  font-weight: 800;
  color: var(--secundary-color);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 20px;
  transition: color 1s ease;
}

.title-header:hover {
  color: #8ae4b8;
}

.button-header {
  width: 360px;
  height: 70px;
  border: none;
  background-image: linear-gradient(to right, #0097b2, #79b699);
  border-radius: 40px;
  font-family: var(--secundary-font);
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 70px;
  cursor: pointer;
  transition-property: transform, box-shadow;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.button-header:hover {
  transform: scale(103%);
  box-shadow: 0px 0px 10px #316d50;
}

.circulo {
  position: absolute;
  min-height: 50%;
  background-color: var(--secundary-color);
  min-width: 50%;
  border-radius: 50%;
  filter: blur(70px);
  animation: float 3s ease-in-out infinite;
}

.imagem-header {
  position: relative;
  clip-path: polygon(36% 15%, 87% 13%, 77% 100%, 21% 84%, 16% 59%, 1% 46%, 2% 0);
  width: 22em;
  animation: float 3s ease-in-out infinite;
}

.conteiner-img {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: right;
  flex-grow: 1;
  padding-right: 40px;
}
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
}




.group-sobre {
  background-color: #79B699;
}

.sobre {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 70px;
  flex-wrap: wrap;
}
.group-text-sobre {
  display: flex;
  flex-direction: column;
  flex-basis: 388px;
  gap: 30px;
}

.group-text-sobre h2 {
  font-family: var(--primary-font);
  font-weight: bolder;
  font-size: 3em;
  line-height: 53px;
}

.group-text-sobre p {
  font-family: var(--primary-font);
  font-size: 1.05em;
  line-height: 28px;
}

.img-sobre {
  clip-path: polygon(0 0, 83% 0, 100% 100%, 19% 100%);
  height: 370px;
}




.group-servico {
  background-color: var(--primary-color);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group-servico h2 {
  font-family: var(--primary-font);
  text-align: center;
  font-size: 2.6em;
  color: var(--secundary-color);
  padding-bottom: 10px;
}

.servico {
  padding: 3rem 0px;
}

.group-h3-servicos-div  h3 {
  font-family: var(--primary-font);
  text-align: left;
  font-size: 2.3em;
  color: var(--secundary-color);
  padding-left: 64px;
  padding-bottom: 10px;
  padding-top: 30px;
}

.group-h3-servicos-div {
  display: flex;
  flex-direction: column;
}


.grup-servicos-prestados {
  display: flex;
  gap: 60px;
  justify-content: space-around;
  padding: 1rem 4rem;
}

.grup-servicos-prestados article {
  background-color: var(--secundary-color);
  padding: 20px;
  width: 250px;
  height: 380px;
  text-align: center;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 0px white;
}

.grup-servicos-prestados article h4 {
  font-family: var(--secundary-font);
  font-size: 1.1em;
  padding: 15px;
}

.grup-servicos-prestados article p {
  font-family: var(--primary-font);
  font-size: 1em;
}

.grup-servicos-prestados article img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
}



.group-h3-servicos-div-2  h3 {
  font-family: var(--primary-font);
  text-align: left;
  font-size: 2.3em;
  color: var(--secundary-color);
  padding-left: 64px;
  padding-bottom: 20px;
  padding-top: 70px;
}

.group-h3-servicos-div-2 {
  display: flex;
  flex-direction: column;
}


.grup-servicos-prestados-2 {
  display: flex;
  gap: 60px;
  justify-content: space-around;
  padding: 1rem 4rem;
}

.grup-servicos-prestados-2 article {
  background-color: var(--secundary-color);
  padding: 10px;
  width: 250px;
  height: 380px;
  text-align: center;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 0px white;
}

.grup-servicos-prestados-2 article h4 {
  font-family: var(--secundary-font);
  font-size: 1.1em;
  padding: 15px;
}

.grup-servicos-prestados-2 article p {
  font-family: var(--primary-font);
  font-size: 1em;
}

.grup-servicos-prestados-2 article img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
}



.group-youtube {
  background-color: var(--secundary-color);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
}

.youtube {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 75rem;
  gap: 3em;
  flex-wrap: wrap;
}

.group-youtube h2 {
  font-family: var(--primary-font);
  font-size: 3.5em;
  font-weight: 500;
}

.group-texts-youtube {
  flex-basis: 26em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25em;
  margin-bottom: 3em;
}

.group-youtube p {
  font-family: var(--secundary-font);
  font-weight: bolder;
  font-size: 1.6em;
  line-height: 1.5em;
  color: #011E11;
}

.group-youtube p a {
  text-decoration: none;
  font-weight: bold;
}
iframe {
  border-radius: 10px;
  border: 3px solid #21A366;
}
.group-frame-youtube {
  flex-basis: 35em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.btn-youtube {
  width: 20em;
  height: 3.5em;
  border: 3px solid white;
  background-color: var(--secundary-color);
  text-transform: uppercase;
  border-radius: 30px;
  font-family: var(--primary-font);
  font-weight: bolder;
  color: white;
  transition-property: transform, box-shadow;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.btn-youtube:hover {
    transform: scale(105%);
    box-shadow: 0px 0px 10px #00ff84;
}
```