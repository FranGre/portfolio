import profilePhoto from './assets/profile_photo.svg'
import reactLogo from './assets/react.svg'
import vueLogo from '/vue.svg'
import laravelLogo from '/laravel.svg'
import wordpressLogo from '/wordpress.svg'
// import prestashopLogo from '/prestashop.svg'
import sassLogo from '/sass.svg'
import cssLogo from '/css.svg'
import jsLogo from '/js.svg'
import tsLogo from '/ts.svg'
import phpLogo from '/php.svg'
import javaLogo from '/java.svg'
import htmlLogo from '/html.svg'
import gitLogo from '/git.svg'
import dockerLogo from '/docker.svg'
import linuxLogo from '/linux.svg'
import vscodeLogo from '/vscode.svg'
import phpstormLogo from '/phpstorm.svg'
import intellijideaLogo from '/intellijidea.svg'
import viteLogo from '/vite.svg'
import gmailLogo from '/gmail.svg'
import githubLogo from '/github.svg'

import Logo from './components/Logo'

import './App.css'

function App() {

  return (
    <>
      <div className='start'>
        <img src={profilePhoto} alt="Foto de perfil" />
        <h1>Fran Gregori Tandazo</h1>
        <p>Estudiante de desarrollo web</p>
      </div>

      <div className='card'>
        <h2>Sobre mi</h2>
        <p>Persona con ganas de realizar las prácticas del grado superior. Empático y sobre todo siempre con buena actitud, con muchas ganas de aprender como funciona la empresa y sus tecnologías. Me considero una persona trabajadora &#9935; y amable, siempre estoy dispuesto a ayudar a los demás.</p>
        <p>Estudio en CIP FP BATOI y realizaré las prácticas en Septiembre &#128197;. Mi objetivo es realizar las prácticas en una empresa que busque continuedad. Ya que en caso de que todo vaya bien, me gustaría quedarme &#9989;.</p>
        <p>&#128161;Las prácticas son una gran oportunidad de entrar al mundo laboral de la programación. Por lo tanto no quiero desaprovecharlas.</p>
      </div>

      <div className='card'>
        <h2>Conocimientos</h2>
        <Logo img={vueLogo} style='vue' name='Vue' />
        <Logo img={reactLogo} style='react' name='React' />
        <Logo img={laravelLogo} style='laravel' name='Laravel' />
        <Logo img={wordpressLogo} style='wordpress' name='WordPress' />
        {/* <Logo img={prestashopLogo} style='prestashop' name='PrestaShop' /> */}
        <Logo img={cssLogo} style='css' name='CSS' />
        <Logo img={sassLogo} style='sass' name='SASS' />
        <Logo img={jsLogo} style='js' name='JavaScript' />
        <Logo img={tsLogo} style='ts' name='TypeScript' />
        <Logo img={phpLogo} style='php' name='PHP' />
        <Logo img={javaLogo} style='java' name='Java' />
        <Logo img={htmlLogo} style='html' name='HTML' />
        <Logo img={gitLogo} style='git' name='Git' />
        <Logo img={dockerLogo} style='docker' name='Docker' />
        <Logo img={linuxLogo} style='linux' name='Linux' />
        <Logo img={viteLogo} style='vite' name='Vite' />
        <Logo img={vscodeLogo} style='vscode' name='VSCode' />
        <Logo img={phpstormLogo} style='phpstorm' name='PhpStorm' />
        <Logo img={intellijideaLogo} style='intellijidea' name='IntellijIdea' />
      </div>

      <footer>
        <p className="read-the-docs">
          Gracias por tu tiempo
        </p>
        <a href="mailto:frangregori61@gmail.com" target="_blank">
          <img src={gmailLogo} className="icon" alt="Gmail logo" />
        </a>
        <a href="https://github.com/FranGre" target="_blank">
          <img src={githubLogo} className="icon" alt="GitHub logo" />
        </a>
      </footer>
    </>
  )
}

export default App
