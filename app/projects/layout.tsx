import { ReactNode } from 'react'
import PagesLayout from "@/components/PagesLayout"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => <PagesLayout title="projects">{children}</PagesLayout>

export default Layout
