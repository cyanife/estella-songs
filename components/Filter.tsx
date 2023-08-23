'use client'

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FilterValue } from '@/types'

type FilterProps = {
  categories: string[]
  filter: FilterValue
  setFilter: (filter: FilterValue) => void
  onRandom: () => void
}

export default function Filter({
  categories,
  filter: { category, keyword },
  setFilter,
  onRandom,
}: FilterProps) {
  return (
    <div className="my-6 grid gap-3 grid-cols-2 grid-rows-2 md:grid-cols-5 md:grid-rows-1 w-full">
      <Listbox
        value={category}
        onChange={(category) => setFilter({ category, keyword })}
      >
        <div className="relative h-9 md:order-1 order-2">
          <Listbox.Button
            className={({ open }) =>
              `relative w-full py-2 pl-8 pr-10 cursor-default rounded-lg text-left text-sm shadow-md bg-white bg-opacity-70 focus:bg-opacity-100 ${
                open ? 'bg-opacity-100' : ''
              }`
            }
          >
            <span className="truncate">{category || '全部'}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg focus:outline-none text-sm"
            >
              <Listbox.Option
                key={`category-all`}
                value={''}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-8 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
              >
                {'全部'}
              </Listbox.Option>
              {categories.map((category, idx) => (
                <Listbox.Option
                  key={`category-${idx}`}
                  value={category}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-8 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                >
                  {category}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <input
        className="rounded-lg h-9 px-3 py-2 bg-white shadow-md bg-opacity-70 focus:outline-none focus:bg-opacity-100 text-sm md:order-2 order-1 md:col-span-3 col-span-2"
        type="text"
        value={keyword}
        onChange={(e) => setFilter({ keyword: e.target.value, category })}
      ></input>
      <button
        className="rounded-lg h-9 bg-white shadow-md bg-opacity-70 hover:bg-opacity-100 active:bg-opacity-0 focus:outline-none text-sm md:order-3 order-3"
        onClick={() => onRandom()}
      >
        随便听听
      </button>
    </div>
  )
}
