import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {

  const handleClick = () => {
    console.log("change")
  }

  return (
    <>
      <h1> Software Engineer </h1>
      <h2>Passionate about the stars</h2>
      <div className='main'>
        <div className="linkcontent">
          <ul className="links">
            <li><Link to="/Hobbies" onClick={handleClick}>/Hobbies</Link></li>
            <li><a href="">/Work Expirience </a></li>
            <li><a href="">/Traveling </a></li>
          </ul>

        </div>
        <div className="content">
          <p>Hi there! 👋 My name is Jose Boccalandro, a Venezuelan software engineer and proud graduate of the University of Houston. With a passion for problem-solving and building innovative solutions, I’ve honed my skills in JavaScript🟨 and Python🐍, making me proficient in crafting efficient and scalable software.

            In addition to my core programming skills, I bring experience in GitHub, scripting, Java, C++, and working with databases like PostgreSQL and SQL. I’m also proficient in Linux, where I enjoy customizing and optimizing my setup. If you're curious to see my ricing🍚  projects, feel free to explore my <a href="https://github.com/jofebocc/dotfiles">dotfiles</a>(I Use Arch BTW) on GitHub.

            Outside of the keyboard, I thrive on finding creative solutions, collaborating with others, and staying curious about emerging technologies. Whether it’s a challenging script, a collaborative project, or perfecting a Linux desktop, I’m always ready for the next adventure!</p>

        </div>
      </div>
    </>

  )
}
