import { ReactNode } from 'react'
import PagesLayout from "@/components/PagesLayout"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => <PagesLayout title="areas of expertise">
  <div className="prose prose-a:text-blue-500 prose-ul:list-disc prose-ol:list-decimal">
    {children}
  </div>
</PagesLayout>

export default Layout
