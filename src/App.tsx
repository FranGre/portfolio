import profilePhoto from './assets/profile_photo.svg'
import reactLogo from './assets/react.svg'
import vueLogo from '/vue.svg'
import laravelLogo from '/laravel.svg'
import wordpressLogo from '/wordpress.svg'
import prestashopLogo from '/prestashop.svg'
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
        <a target="_blank">
          <img src={vueLogo} className="logo vue" alt="Vue logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src={laravelLogo} className="logo laravel" alt="Laravel logo" />
        </a>
        <a target="_blank">
          <img src={wordpressLogo} className="logo wordpress" alt="WordPress logo" />
        </a>
        <a target="_blank">
          <img src={prestashopLogo} className="logo prestashop" alt="PrestaShop logo" />
        </a>
        <a target="_blank">
          <img src={cssLogo} className="logo css" alt="CSS logo" />
        </a>
        <a target="_blank">
          <img src={sassLogo} className="logo sass" alt="SASS logo" />
        </a>
        <a target="_blank">
          <img src={jsLogo} className="logo js" alt="JavaScript logo" />
        </a>
        <a target="_blank">
          <img src={tsLogo} className="logo ts" alt="TypeScript logo" />
        </a>
        <a target="_blank">
          <img src={phpLogo} className="logo php" alt="PHP logo" />
        </a>
        <a target="_blank">
          <img src={javaLogo} className="logo java" alt="Java logo" />
        </a>
        <a target="_blank">
          <img src={htmlLogo} className="logo html" alt="HTML logo" />
        </a>
        <a target="_blank">
          <img src={gitLogo} className="logo git" alt="Git logo" />
        </a>
        <a target="_blank">
          <img src={dockerLogo} className="logo docker" alt="Docker logo" />
        </a>
        <a target="_blank">
          <img src={linuxLogo} className="logo linux" alt="Linux logo" />
        </a>
        <a target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={vscodeLogo} className="logo vscode" alt="VSCode logo" />
        </a>
        <a target="_blank">
          <img src={phpstormLogo} className="logo phpstorm" alt="PhpStorm logo" />
        </a>
        <a target="_blank">
          <img src={intellijideaLogo} className="logo intellijidea" alt="IntellijIdea logo" />
        </a>

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
