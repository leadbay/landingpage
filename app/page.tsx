import { Hero } from "@/components"
import ReactMarkdown from "react-markdown"

interface RecordType {
  id: string
  fields: {
    name: string
    picture: [
      {
        url: string
      }
    ]
    company_logo: [
      {
        thumbnails: {
          small: {
            url: string
          }
        }
      }
    ]
    title: string
    description: string
  }
}

async function getChampions() {
  const res = await fetch(
    "https://api.airtable.com/v0/appXbiCXzlzJD4GFG/tblmWkzgrDt4yA6De",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.AIRTABLE_API_KEY,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    console.log(res)
  }

  return res.json()
}

export default async function Home() {
  const champions = await getChampions()

  return (
    <>
      <Hero />
      <div className='flex w-full gap-2'>
        {champions?.records?.map((record: RecordType) => (
          <div key={record.id} className='p-6 bg-white text-black'>
            <h1>{record?.fields?.name}</h1>
            <img src={record?.fields?.picture?.[0]?.url} />
            <img
              src={record?.fields?.company_logo?.[0]?.thumbnails?.small?.url}
            />
            <p>{record?.fields?.title}</p>
            <ReactMarkdown children={record?.fields?.description} />
          </div>
        ))}
      </div>
    </>
  )
}
