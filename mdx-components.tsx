import type { MDXComponents } from 'mdx/types'
import ContactButton from './app/components/ContactButton'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      const { href, children } = props
    
      if (href === '/contact') {
        return <ContactButton {...props} />
      }
    
      return <a href={href} {...props}>{children}</a>
    },
    ...components,
  }
}
