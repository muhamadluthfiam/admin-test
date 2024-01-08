// `app/product/page.js` is the UI for the `/product` URL
"Use Client"
import React from "react"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import Link from 'next/link'


async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    },
    // ...
  ]
}

const AddButton = React.forwardRef(({ onClick, href}, ref) => {
  return (
    <button href={href} onClick={onClick} ref={ref} className="outline px-4 rounded-lg bg-red-400 text-white hover:bg-red-300">
      Add
    </button>
  )
})


export default async function Page() {
  const data = await getData()

  return (
    <>
      <div className="mb-[30px]">
        <div className="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
          <div className="w-full flex justify-between">
            <div className="text-xl font-medium text-dark">
              Daftar produk
              <p className="text-sm font-extralight text-slate-400 italic">Produk dalam gengaman anda.</p>
            </div>
            <Link href="/product/add" passHref legacyBehavior>
              <AddButton/>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
        <div className="card !gap-y-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-grey">Total Assets</p>
              <p className="text-xs text-grey">Format Rupiah</p>
              <div className="text-[32px] font-bold text-dark mt-[6px]">
              </div>
            </div>
          </div>
        </div>
        <div className="card !gap-y-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-grey">Total Produk</p>
              <p className="text-xs text-grey">Siap untuk dijual</p>
              <div className="text-[32px] font-bold text-dark mt-[6px]">
              </div>
            </div>
          </div>
        </div>
        <div className="card !gap-y-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-grey">Empty items</p>
              <p className="text-xs text-grey">Please update stock items</p>
              <div className="text-[32px] font-bold text-dark mt-[6px]">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}