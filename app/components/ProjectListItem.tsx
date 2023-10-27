import {Project} from "@/app/types/types"
import CardListItem from "./CardListItem"

type Props = Pick<Project, "title" | "description">

const ClientFeedbackListItem = ({title, description}: Props) => {
  return (
    <CardListItem>
      <div className="flex gap-4">
        <div className="mr-8 overflow-hidden">
          <h2 className="text-gray-700">{title}</h2>
          <p className="mt-10 text-gray-600">
              {description}
          </p>
        </div>
      </div>
    </CardListItem>
  )
}

export default ClientFeedbackListItem
