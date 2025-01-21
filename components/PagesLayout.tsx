import { ReactNode } from 'react'
import Link from "next/link"

type Props = {
  title: string
  children: ReactNode
}

const PagesLayout = ({ title, children }: Props) => {
  return (
    <>
      <div className="bg-gray-100 p-10">
        <h1 className="text-3xl"><Link href="/">manystack</Link> / {title}</h1>
      </div>
      <div className="max-w-4xl m-auto p-10">{children}</div>
    </>
  )
}

export default PagesLayout
