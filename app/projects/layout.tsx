import { ReactNode } from 'react'
import Link from "next/link";

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-gray-100 p-10">
        <h1 className="text-3xl"><Link href="/">manystack</Link> / projects</h1>
      </div>
      <div className="max-w-4xl m-auto p-10">{children}</div>
    </>
  )
}

export default Layout
