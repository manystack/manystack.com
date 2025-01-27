import {ReactNode} from "react"


type Props = {
  title: string
  children: ReactNode
}
const CardList = ({ title, children }: Props) => (
  <>
    <h2 className="pt-4 text-xl text-gray-500">{title}</h2>
    <ul className="flex flex-col gap-10 pr-10 pb-10 rounded">
      {children}
    </ul>
  </>
)

export default CardList