import { cn } from "@/lib/utils"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { basement } from "@/fonts"
import { Container } from "@/components"

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
    <Container className='flex pt-[200px]'>
      <div className='flex flex-col items-center justify-center w-1/2 bg-black'>
        <h1
          className={cn(
            basement.className,
            " text-[35px] uppercase leading-tight sm:text-[56px]"
          )}
        >
          The Sales Champions' Factory
        </h1>
        <h2 className='mb-6 text-xl leading-loose sm:text-2xl'>
          Become a EURO-US sales champion and empower the next generation of B2B
          sales reps.
        </h2>
        <form
          className='flex gap-2 w-full'
          name='waitinglist'
          method='POST'
          data-netlify='true'
        >
          <input type='hidden' name='form-name' value='waitinglist' />
          <input
            type='email'
            name='email'
            id='email'
            required
            placeholder='Enter your email...'
            className='rounded-md border-2 bg-black border-gray-300 px-3 py-2 focus:outline-gray-500'
          />
          <button
            type='submit'
            className='rounded-md border-2 border-white bg-white px-6 py-2 text-black hover:border-gray-700 hover:bg-gray-700'
          >
            Join the factory
          </button>
        </form>
      </div>
      <div className='flex gap-10 w-2/3'>
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
    </Container>
  )
}
