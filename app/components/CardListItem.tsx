import {ReactNode} from "react"

type Props = {
  children: ReactNode
}

const CardListItem = ({children}: Props) => (
  <li className="rounded p-8 bg-gray-200">
    <article>
      {children}
    </article>
  </li>
)

export default CardListItem
