/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'

// This file is required to use MDX in `app` directory.
// Minimal MDX components for OrbitID landing page
// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Basic HTML components
    h1: (props: any) => <h1 className="text-4xl font-bold mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mb-3" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-medium mb-2" {...props} />,
    h4: (props: any) => <h4 className="text-xl font-medium mb-2" {...props} />,
    p: (props: any) => <p className="mb-4" {...props} />,
    a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
    ...components,
  }
}
