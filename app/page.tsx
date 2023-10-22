import {clientFeedback} from "@/app/data/clientFeedback";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex-1 flex h-screen flex-col items-center justify-center p-24 bg">
        <h1 className="relative flex place-items-center text-4xl">manystack</h1>
        <p className="text-center text-gray-500">Web and Mobile Application development agency</p>
      </main>
      <div className="flex flex-col gap-6 w-128 h-screen pt-4">
        <h2 className="pt-4 text-xl text-gray-500">Our beloved Clients said:</h2>
        <ul className="overflow-y-scroll flex flex-col gap-10 pr-10 pb-10 rounded">
          {clientFeedback.reverse().map(({id, text, client: {name, title, company, website}}) => (
            <li key={id} className="rounded p-8 bg-gray-200">
              <article>
                <div className="flex gap-4">
                  <span className="-mt-2 text-8xl text-gray-400">”</span>
                  <div className="mr-8">
                    <blockquote className="text-gray-700">{text}</blockquote>
                    <div className="mt-10 text-gray-600" rel="author">
                      <div className="font-semibold">
                        {name}
                        {title && <> - <span>{title}</span></>}
                      </div>
                      {company && <span className="block">{company}</span>}
                      {website && <a className="block underline truncate w-72" href={website} target="_blank">{website}</a>}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
