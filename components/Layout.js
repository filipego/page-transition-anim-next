import Link from 'next/link'
import React, { Children } from 'react'

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/"><a className="link">some <br />website</a></Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/"><a className="link">Home</a></Link>
            </li>
            <li>
              <Link href="/about"><a className="link">About</a></Link>
            </li>
            <li>
              <Link href="/contact"><a className="link">Contact</a></Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}

export default Layout