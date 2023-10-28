import {clientFeedback} from "@/app/data/clientFeedback";
import ClientFeedbackListItem from "@/app/components/ClientFeedbackListItem";
import CardList from "@/app/components/CardList";
import ProjectListItem from "@/app/components/ProjectListItem";
import {projects} from "@/app/data/projects";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <main className="flex-1 flex lg:h-screen flex-col items-center justify-center p-24 bg">
        <h1 className="relative flex place-items-center text-4xl">manystack</h1>
        <p className="text-center text-gray-500">Web and Mobile Application development agency</p>
      </main>
      <CardList title="Our beloved Clients said:">
        {clientFeedback.reverse().map(({id, text, client}) => (
          <ClientFeedbackListItem key={id} text={text} client={client}/>
        ))}
      </CardList>
      <CardList title="Our exciting Projects:">
        {projects.reverse().map(({id, title, description, thumbnail}) => (
          <ProjectListItem key={id} title={title} description={description} thumbnail={thumbnail}/>
        ))}
      </CardList>
    </div>
  )
}
