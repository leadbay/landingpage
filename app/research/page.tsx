import { basement } from "@/fonts"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <>
      <header>
        <h1 className={cn(basement.className, "text-3xl")}>Research</h1>

        <h2 className='mt-2 text-gray-500'>Taking a position with regards to rising AI tides.</h2>
      </header>

      <section className='my-5'>
        <h3 className={cn(basement.className, "text-xl mb-2")}>
          Mission
        </h3>

        <p>
          At Leadbay we are on a mission to empower B2B sales with technology.
        </p>

        <p>
          We believe this is important because millions of people across the globe work in B2B sales. Yet the IT tools available to them are mostly complex and outdated.
        </p>

        <p>
          Most common tools used today are no better, functionality-wise, than what a database management software offered in the ’90. The full potential of Computer Science, is yet to be leveraged in sales.
        </p>

        <p>
          We choose this as our focus.
        </p>
      </section>

      <section className='my-5'>
        <h3 className={cn(basement.className, "text-xl mb-2")}>
          Techno-optimists
        </h3>

        <p>
          In the current AI tide, inflating both expectations and fears, we take a clear position as techno-optimists (cf. <Link href="https://a16z.com/the-techno-optimist-manifesto/" target="_blank"> Marc Adreessen’s Techno-Optimist Manifesto</Link>).
        </p>

        <p>
          In addition to reasons given by Marc Adreessen, we are optimists also because the human is in the center of our R&D. We are building technology that extends the human intelligence, and hand-in-hand with the human pushes the boundaries of previously possible.
        </p>

        <p>
        This is especially important in the context of growing evidence that the average human IQ in developed countries might be seeing <Link href="https://en.wikipedia.org/wiki/Flynn_effect#Possible_end_of_progression" target="_blank">end of growth or even decline</Link>.
        </p>
      </section>

      <section className='my-5'>
        <h3 className={cn(basement.className, "text-xl mb-2")}>
          Augmenting (rather than replacing) the Human
        </h3>

        <p>
          Our view on technology as an extension of the human intellect, is in the continuity of some of the fundamental positions in Computer Science that have shaped the modern, commercially available, information technologies. Firstly, we refer to the Memex – a concept proposed by Vannevar Bush in his article <Link href="https://en.wikipedia.org/wiki/As_We_May_Think" target="_blank">"As We May Think" (1945)</Link> that inspired personal computers, the Internet and the Web.
        </p>

        <p>
          Secondly, we refer to Doug Engelbart work on augmenting human intellect – <Link href="https://www.youtube.com/watch?v=yJDv-zdhzMY" target="_blank">NLS Augment (1969)</Link> that set the ground for modern human-computer interfaces and collaborative software.
        </p>

        <p>
        At its current frontier, the way how humans and machines can achieve complex tasks together involves AI. We explore ways how AI can support the human in navigating complex information spaces, making predictions, learning, and making decisions. This research involves both the work on core AI systems and the work on novel ways to interact with them.
        </p>
      </section>

      <section className='my-5'>
        <h3 className={cn(basement.className, "text-xl mb-2")}>
          Building for Digital Natives
        </h3>

        <p>
          The human is now almost inseparable from technology. The human brain, during its formative years, is heavily exposed to technology that is involved in many cognitive tasks. We are only beginning to understand the implications of this phenomenon, but the following is clear: the expectations from technology are changing, digital natives are a growing part of the population (and <Link href="https://www.cnbc.com/2019/03/05/how-millennials-and-gen-z-are-reshaping-the-future-of-the-workforce.html" target="_blank">already 38% of the workforce</Link>), and they have specific needs.
        </p>

        <p>
          We are building for them.
        </p>
      </section>

      <section className='my-5'>
        <h3 className={cn(basement.className, "text-xl mb-2")}>
        There is more to AI than chatbots and current LLMs
        </h3>

        <p>
          The popularity of Chat GPT has established a strong, almost synonymous, association between AI and a conversational interface. Conversational interfaces have important limitations and are known to increase the users’ cognitive load more than classic graphic user interfaces. As other AI researchers (https://www.linkedin.com/posts/activity-7112049714035871744-uOzX?utm_source=share&utm_medium=member_desktop ), we are skeptical about their widespread use in the future. We are interested in going beyond.
        </p>

        <p>
          Independently of the form of interaction being conversational or not, we can also expect much more from an AI system when it comes to supporting the human in tasks that require accurate and timely information. This is precisely what the context of professional interactions and sales is all about. This view is consistent with Yann Le Cun’s view : <Link href="https://twitter.com/ylecun/status/1625118108082995203" target="_blank">“There *will* be better systems that are factual, non toxic, and controllable. They just won't be auto-regressive LLMs.”</Link>
        </p>

        <p>
        Rather than focusing on one AI feature to add to a software, we are interested in a future where AI can manifest itself throughout the whole software system, supporting the user in multiple tasks, in many different ways.
        </p>
      </section>


      <footer>
        <p>
          We are aware that in the current world, these positions, however reasoned and moderate, may appear radical. It is maybe how it should be.
        </p>
        <p>
        <a href="https://milstan.net" target="_blank">Milan Stankovic, PhD. Co-founder of Leadbay</a></p>
      </footer>
    </>
  )
}
