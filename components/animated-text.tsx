import { motion } from "framer-motion"

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return <span className='word-wrapper'>{props.children}</span>
}

interface AnimatedCharactersProps {
  text: string
  type: keyof typeof tagMap
  className?: string
}

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
} as const

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = (props) => {
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.1 },
    },
  }

  const splitWords = props.text.split(" ")

  const words: string[][] = []

  for (const item of splitWords) {
    words.push(item.split(""))
  }

  words.map((word) => {
    return word.push("\u00A0")
  })

  const Tag = tagMap[props.type]

  return (
    <Tag className={props.className}>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {word.map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              )
            })}
          </Wrapper>
        )
      })}
    </Tag>
  )
}

export default AnimatedCharacters
