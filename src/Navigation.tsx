import './Navigation.css'
export default function Navigation() {
  return (
    <header className='header'>
      <ul>
        <li><p><span className='titulo'>Boccalandro</span></p></li>
        <li><a href="https://github.com/jofebocc"><img src="/assets/github.svg" alt="GitHub" className="icon" />GitHub</a></li>
        <li><a href=""><img src="/assets/email-img.svg" alt="Email" className="icon" />josefboccalandro@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/josé-boccalandro-b68451145"><img src="/assets/linkedin-img.svg" alt="Linkedin" className="icon" />Linkedin</a></li>
      </ul>
    </header>
  )
};


