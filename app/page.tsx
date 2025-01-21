import ClientFeedbackListItem from "@/app/components/ClientFeedbackListItem"
import CardList from "@/app/components/CardList"
import ProjectListItem from "@/app/components/ProjectListItem"
import {projects} from "@/app/data/projects"
import {clientFeedback} from "@/app/data/clientFeedback"
import {orderBy} from "lodash"
import ContactDialog from "@/app/components/ContactDialog"

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <main className="flex-1 flex lg:h-screen flex-col items-center justify-center px-12 py-48 lg:p-24 bg">
        <h1 className="relative flex place-items-center text-4xl">manystack</h1>
        <div className="text-center text-gray-500 flex flex-col items-center gap-8">
          <p>Web and Mobile Application development team</p>
          <p>
            Our Dream is to build Your Dream.<br />
            With ❤️.
          </p>
          <ContactDialog />
        </div>
      </main>
      <CardList title="Our beloved Clients said:">
        {orderBy(clientFeedback, "order").map(({id, text, client}) => (
          <ClientFeedbackListItem key={id} text={text} client={client} />
        ))}
      </CardList>
      <CardList title="Our exciting Projects:">
        {orderBy(projects, "order").map(({id, title, description, thumbnail, slug}) => (
          <ProjectListItem key={id} title={title} description={description} thumbnail={thumbnail} slug={slug} />
        ))}
      </CardList>
    </div>
  )
}
