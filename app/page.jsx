import Link from 'next/link'

export default function Home() {
  const links = [
    { id: 1, name: 'ثبت نام', url: '/item1' },
    { id: 2, name: 'ثبت', url: '/item2' },
    { id: 3, name: 'دانشجویان', url: '/item3' },
  ]

  return (
    <div>
      <h1>UNIU</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
