/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useRouter } from 'next/router'

export default function post1() {
  const router = useRouter()
  const eventId = router.query.eventId
  console.log(eventId)

  return (
    <div>
      <h1>پست1</h1>
    </div>
  )
}
