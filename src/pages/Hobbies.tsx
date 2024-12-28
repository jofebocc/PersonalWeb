import { Link } from "react-router-dom"
import "./Hobbies.css"
export default function Hobbies() {
  return (
    <>
      <h1>Hobbies</h1>
      <h2>What I do outside the office</h2>
      <div className="mainOther">
        <div className="linkcontent">
          <ul className="links">
            <li><Link to="/" >/Home</Link></li>
            <li><a href="">/Work Expirience </a></li>
            <li><a href="">/Traveling </a></li>
          </ul>
        </div>
        <div className="contentHobbies">
          <h1>My Love for Tennis 🎾</h1>
          <img src="/assets/tennis2.jpg" alt="no image" className="images" />
          <p>Since 2023, I’ve been absolutely hooked on tennis—so much so that some might call it an obsession! For me, tennis isn’t just a sport; it’s a way to challenge both my body and my mind. The mental toughness required to stay focused and push through tough moments on the court is something I deeply admire in professional players. Their ability to perform under pressure is nothing short of inspiring.

            Tennis has become my escape, my passion, and my way of pushing my limits. If you're curious about how I’m doing on my tennis journey, feel free to check out my progress on <a href="https://swing.vision/users/df4412b1-2eae-4ee5-8bb1-37a08dcc75e1">SwingVission</a>
          </p>
        </div>
      </div>
    </>
  )
}
