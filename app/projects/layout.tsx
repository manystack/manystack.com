import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-gray-100 p-4 text-center">
        <h1 className="text-4xl">manystack / projects</h1>
      </div>
      <div className="max-w-4xl m-auto">{children}</div>
    </>
  )
}

export default Layout
