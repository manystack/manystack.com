import {Project} from "@/app/types/types"
import CardListItem from "./CardListItem"
import Image from "next/image";

type Props = Pick<Project, "title" | "description" | "thumbnail">

const ClientFeedbackListItem = ({title, description, thumbnail}: Props) => {
  return (
    <CardListItem>
      <div className="flex flex-col gap-8 mx-8">
        <h2 className="font-semibold text-gray-700">{title}</h2>
        {thumbnail && <Image width="310" height="310" className="rounded" src={"/images/" + thumbnail} alt={title}/>}
        <p className="text-gray-600">{description}</p>
      </div>
    </CardListItem>
  )
}

export default ClientFeedbackListItem
