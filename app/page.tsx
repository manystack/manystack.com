import {clientFeedbacks} from "@/app/data/clientFeedbacks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg">
      <h1 className="relative flex place-items-center">manystack</h1>
      <p className="text-center text-gray-500">Web and Mobile Application development agency</p>
        <ul>
            {clientFeedbacks.map(({id, text, client: {name}}) => (
                <li key={id}>
                    {text} - {name}
                </li>
            ))}
        </ul>
    </main>
  )
}
