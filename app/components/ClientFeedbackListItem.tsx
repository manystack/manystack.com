import {Feedback} from "@/app/types/types"
import CardListItem from "@/app/components/CardListItem"

type Props = Pick<Feedback, "text" | "client">

const ClientFeedbackListItem = ({text, client: {name, title, company, website}}: Props) => {
  return (
    <CardListItem>
      <div className="flex gap-4">
        <span className="-mt-2 text-8xl text-gray-400">”</span>
        <div className="mr-8 overflow-hidden">
          <blockquote className="text-gray-700">{text}</blockquote>
          <div className="mt-10 text-gray-600" rel="author">
            <div className="font-semibold">
              {name}
              {title && <> - <span>{title}</span></>}
            </div>
            {company && <span className="block">{company}</span>}
            {website && <a className="block underline truncate" href={website} target="_blank">{website}</a>}
          </div>
        </div>
      </div>
    </CardListItem>
  )
}

export default ClientFeedbackListItem
