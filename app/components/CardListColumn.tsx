import {ReactNode} from "react"

type Props = {
  children: ReactNode
}
const CardListColumn = ({ children }: Props) => (
  <div className="overflow-y-scroll flex flex-col gap-6 w-full lg:w-128 lg:h-screen pt-4 pl-10">
    {children}
  </div>
)

export default CardListColumn
