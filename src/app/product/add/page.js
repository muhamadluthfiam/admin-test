"use client"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  })
})

function onSubmit() {
  console.log('hello word')
}
export default function AddForm() {
  // ...
  const form = useForm()
  return (
    <>
      <div className="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
        <div className="w-full flex justify-between">
          <div className="text-xl font-medium text-dark">
            Add produk
            <p className="text-sm font-extralight text-slate-400 italic">Produk dalam gengaman anda.</p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="luthfi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="20000" {...field} className="rounded-lg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                </div>
              </>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      
    </>
  )
}

