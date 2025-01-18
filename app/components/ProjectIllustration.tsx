import Image from "next/image";

type Props = {
  src: string
  title: string
}

const ProjectIllustration = ({src, title}: Props) => (
  <Image width="960" height="540" className="rounded my-8" src={src} alt={title} />
)

export default ProjectIllustration
