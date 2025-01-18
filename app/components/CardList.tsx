import {ReactNode} from "react"


type Props = {
  title: string
  children: ReactNode
}
const CardList = ({ title, children }: Props) => (
  <div className="flex flex-col gap-6 w-full lg:w-128 lg:h-screen pt-4 pl-10">
    <h2 className="pt-4 text-xl text-gray-500">{title}</h2>
    <ul className="overflow-y-scroll flex flex-col gap-10 pr-10 pb-10 rounded">
      {children}
    </ul>
  </div>
)

export default CardList