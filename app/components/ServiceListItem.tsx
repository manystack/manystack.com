import {Project} from "@/app/types/types"
import CardListItem from "./CardListItem"
import Image from "next/image"

type Props = Pick<Project, "title" | "description" | "thumbnail" | "slug">

const ServiceListItem = ({title, description, thumbnail, slug}: Props) => {
  if (slug) {
    return (
      <a href={"/areas-of-expertise/" + slug}>
        <ServiceListItemContent title={title} description={description} thumbnail={thumbnail} />
      </a>
    )
  }

  return <ServiceListItemContent title={title} description={description} thumbnail={thumbnail} />
}

type ServiceListItemContentProps = Pick<Project, "title" | "description" | "thumbnail">

const ServiceListItemContent = ({title, description, thumbnail}: ServiceListItemContentProps) => {
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

export default ServiceListItem
