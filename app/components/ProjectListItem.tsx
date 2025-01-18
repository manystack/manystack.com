import {Project} from "@/app/types/types"
import CardListItem from "./CardListItem"
import Image from "next/image";

type Props = Pick<Project, "title" | "description" | "thumbnail" | "slug">

const ProjectListItem = ({title, description, thumbnail, slug}: Props) => {
  if (slug) {
    return (
      <a href={"/projects/" + slug}>
        <ProjectListItemContent title={title} description={description} thumbnail={thumbnail} />
      </a>
    )
  }

  return <ProjectListItemContent title={title} description={description} thumbnail={thumbnail} />
}

type ProjectListItemContentProps = Pick<Project, "title" | "description" | "thumbnail">

const ProjectListItemContent = ({title, description, thumbnail}: ProjectListItemContentProps) => {
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

export default ProjectListItem
