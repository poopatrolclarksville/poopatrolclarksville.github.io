import React from 'react';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  bookingFormSchema,
  BookingFormSchema
} from '../../lib/schemas/booking-form-schema.zod';

import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export default function BookingForm() {
  const { toast } = useToast();

  const bookingForm = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
  })

  function onSubmit(data: BookingFormSchema) {
    toast({
      title: "Service Request Submitted.",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">
            We will get back with you shortly regarding your
            service request! If you need to contact us directly,
            please email 
            <span className='font-bold'>
              <strong>poopatrolclarksville@gmail.com</strong>
            </span>
          </p>
        </pre>
      ),
    })
  }

  return (
    <Form {...bookingForm}>
      <form onSubmit={bookingForm.handleSubmit(onSubmit)} 
      className="
        desktop:mr-16
        border
        border-slate-200
        rounded
        desktop:rounded-xl
        shadow-md
        shadow-gray-200
        grid
        grid-cols-1
        p-4
        gap-y-8
      ">
        <div className='
          grid
          grid-cols-1
          gap-y-8
          desktop:flex
          desktop:flex-row
          desktop:justify-between
          desktop:items-start
        '>
          <FormField
            control={bookingForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='
                  text-lg
                  font-semibold
                  text-gray-900
                '>
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Peter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={bookingForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='
                  text-lg
                  font-semibold
                  text-gray-900
                '>
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="clean_my_yard@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  Your contact email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={bookingForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Please enter the service type you want and the days
                  you are available to receive our service. Additionally, insert
                  any special details you need to tell us..."
                  className='
                    shadow-inner
                    shadow-gray-200
                  '
                />
              </FormControl>
              <FormDescription>
                We will respond once we receive your message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"
          className='
            mt-8
            w-full
            shadow-md
        '>
          Send Service Request
        </Button>
      </form>
    </Form>
  )
}
