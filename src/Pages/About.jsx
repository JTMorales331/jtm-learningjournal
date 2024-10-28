// import AboutComponent from './index'

import AboutIntro from "../components/About/AboutIntro";
import AboutContent from "../components/About/AboutContent";

export default function About({postLayout}) {
  
  return (
    <>
      <AboutIntro
        name="Terry"
        userIcon={'../public/images/profilepic.JPG'}
      >
        I'm mostly doing this for thesis huhuhuhu but i wanna learn broskidesu.
      </AboutIntro>
      
      <section className="about-content">
        <AboutContent
          title="How I stay committed to learning"
        >
          How I stay committed, you ask? It is all because of anxiety. Yes, my worrisome anxious and overthinking mind could not stop worrying about the unknown future of a pleb such as myself that I'm very scared of not making money at all. I have quit my music and audio life and just dove deep in the front-end development rabbit hole.
        </AboutContent>
        <AboutContent
          title="How I started"
        >
          I started out studying front-end development when I discovered "React" and how I like the color of the logo which is almost like the similar color as html tags. I am also more keen on creatives than purely logic which may have come from my music and audio background.
        </AboutContent>
      </section>

      {postLayout}
      
    </>
  )
}