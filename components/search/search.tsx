'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useDebounce } from 'use-debounce'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const router = useRouter()

  const [text, setText] = useState('')
  const [query] = useDebounce(text, 750)



useEffect(() => {
    if (!query) {
      router.push(`/marketplace?page=${1}`);
    }
 else{
          router.push(`/marketplace?page=${1}&search=${query}`)
        }
  }, [query, router]);
  return (
    <div className='relative rounded-md shadow-sm p-auto'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
       <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer text-black"></AiOutlineSearch>
      </div>
      <input
        type='email'
        className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        placeholder='Search prompt '
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}

export default Search