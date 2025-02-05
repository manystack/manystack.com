import ClientFeedbackListItem from "@/app/components/ClientFeedbackListItem"
import CardList from "@/app/components/CardList"
import ServiceListItem from "@/app/components/ServiceListItem"
import ProjectListItem from "@/app/components/ProjectListItem"
import {services} from "@/app/data/services"
import {projects} from "@/app/data/projects"
import {clientFeedback} from "@/app/data/clientFeedback"
import {orderBy} from "lodash"
import ContactButton from "@/app/components/ContactButton"
import CardListColumn from "./components/CardListColumn"

export default function Home() {
  console.log("services", services)

  return (
    <div className="flex flex-col xl:flex-row">
      <main className="xl:flex-1 flex h-screen -my-32 xl:-my-0 flex-col items-center justify-center px-12 lg:p-24 bg">
        <h1 className="relative flex place-items-center text-5xl">manystack</h1>
        <div className="text-center text-gray-500 flex flex-col items-center gap-8">
          <p>Web and Mobile Applications for Success</p>
          <p>
            Our Dream is to build Your Dream.<br />
            With ❤️.
          </p>
          <ContactButton variant="rainbow">Let&apos;s Build It</ContactButton>
        </div>
      </main>
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <CardListColumn>
          <CardList title="What we love to do:">
            {orderBy(services, "order").map(({id, title, description, thumbnail, slug}) => (
              <ServiceListItem key={id} title={title} description={description} thumbnail={thumbnail} slug={slug} />
            ))}
          </CardList>
          <CardList title="Our beloved Clients said:">
            {orderBy(clientFeedback, "order").map(({id, text, client}) => (
              <ClientFeedbackListItem key={id} text={text} client={client} />
            ))}
          </CardList>            
        </CardListColumn>
        <CardListColumn>
          <CardList title="Our exciting Projects:">
            {orderBy(projects, "order").map(({id, title, description, thumbnail, slug}) => (
              <ProjectListItem key={id} title={title} description={description} thumbnail={thumbnail} slug={slug} />
            ))}
          </CardList>
        </CardListColumn>
      </div>
    </div>
  )
}
