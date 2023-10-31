import { cn } from "@/lib/utils"

const Container = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("mx-auto max-w-8xl w-full px-2 sm:px-4 lg:px-8", className)}
      {...props}
    />
  )
}

export default Container
