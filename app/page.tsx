import {clientFeedback} from "@/app/data/clientFeedback";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex-1 flex h-screen flex-col items-center justify-center p-24 bg">
        <h1 className="relative flex place-items-center text-4xl">manystack</h1>
        <p className="text-center text-gray-500">Web and Mobile Application development agency</p>
      </main>
      <div className="flex flex-col gap-4 w-96 h-screen pt-4">
        <h2 className="px-4 text-lg">Client Feedback</h2>
        <ul className="overflow-y-scroll flex flex-col gap-4 pr-4 pb-4 rounded">
          {clientFeedback.reverse().map(({id, text, client: {name}}) => (
            <li key={id} className="rounded p-4 bg-stone-700">
              <article>
                <p>{text}</p>
                <div className="mt-4 text-right" rel="author">- {name}</div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
