import Link from 'next/link'
import React from 'react'

export default function Navber() {
  return (
    <nav>
        <Link className="logo" href='/'>Our Topics</Link>
        <Link className="btnAddTopic" href='/addTopic'>Add Topic</Link>
    </nav>
  )
}
