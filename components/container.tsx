import { cn } from "@/lib/utils"

const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"article">) => {
  return (
    <article
      className={cn("mx-auto max-w-8xl w-full lg:px-8", className)}
      {...props}
    />
  )
}

export default Container
