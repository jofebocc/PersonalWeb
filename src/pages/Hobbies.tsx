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
          <h1>Sailing</h1>
          <img src="/assets/saling.jpg" alt="no image" className="images" />
          <p>Sailing has been my go-to escape to reconnect with nature and clear my mind. Being out on the water, dealing with shifting winds and waves, has taught me how to stay calm under pressure and adapt to whatever comes my way. It’s a lot like work—things don’t always go as planned, but with the right mindset and some quick problem-solving, you figure it out. Sailing has helped me approach challenges with a clearer head and reminds me to enjoy the process, even when it gets a little unpredictable.</p>
          <h1>KickBoxing</h1>
          <img src="/assets/kick.jpg" alt="no image" className="images" />
          <p>Kickboxing has been one of the most exciting and rewarding parts of my life. It started as a hobby, but it quickly turned into a passion that pushed me to test my limits, both physically and mentally. Training taught me discipline, perseverance, and how to handle pressure in high-stakes situations. Competing, even on an international level, gave me a sense of focus and determination that I carry into everything I do.

            What I love most about kickboxing is how it translates to other areas of my life, especially my work. Whether it’s tackling a big project or meeting a tough deadline, the same mindset applies—stay focused, keep pushing forward, and adapt when things don’t go as planned. Kickboxing taught me to embrace challenges and always strive to be better, both in the ring and out.</p>
        </div>
      </div>
    </>
  )
}
