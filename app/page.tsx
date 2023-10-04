import { Hero } from "@/components"
import Image from "next/image"
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
      <div className='flex gap-10 max-w-7xl mx-auto'>
        {champions?.records?.map((record: RecordType) => (
          <div
            key={record.id}
            className='bg-white text-black rounded-2xl max-w-[320px] overflow-hidden'
          >
            <Image
              src={record?.fields?.picture?.[0]?.url}
              alt={record?.fields?.name}
              width={320}
              height={320}
              className='object-cover aspect-square'
            />
            <div className='flex flex-col divide-y divide-gray-400 p-6'>
              <div className='flex justify-between mb-3'>
                <div className='flex flex-col '>
                  <h1 className='font-bold'>{record?.fields?.name}</h1>
                  <p>{record?.fields?.title}</p>
                </div>
                <Image
                  src={
                    record?.fields?.company_logo?.[0]?.thumbnails?.small?.url
                  }
                  alt={record?.fields?.name}
                  width={48}
                  height={48}
                  className='object-contain h-8'
                />
              </div>
              <div className='flex flex-col pt-3 text-sm'>
                <ReactMarkdown children={record?.fields?.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
