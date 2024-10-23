'use client'

import { Input } from '@/components/ui/input'
import { formUrlQuery, removeKeysFromQuery } from '@/utils/utils'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface CustomInputProps {
  route: string
  iconPosition: string
  imgSrc: string
  placeholder: string
  otherClasses?: string
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses
}: CustomInputProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const [search, setSearch] = useState(query || '')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'q',
          value: search
        })

        router.push(newUrl, { scroll: false })
      } else {
        console.log(route, pathname)
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['q']
          })

          router.push(newUrl, { scroll: false })
        }
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [search, route, pathname, router, searchParams, query])

  return (
    <div
      className={`flex h-12 grow items-center gap-4 border px-3.5 ${otherClasses}`}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer text-white'
        />
      )}

      <Input
        type='text'
        placeholder={placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='no-focus !important border-none bg-transparent text-sm shadow-none outline-none focus-visible:ring-transparent focus-visible:ring-offset-0'
      />

      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer'
          draggable={false}
        />
      )}
    </div>
  )
}

export default LocalSearchbar
