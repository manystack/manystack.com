"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const postContactForm = async (values: z.infer<typeof formSchema>) => {
  console.log("Submitting form", values)
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    throw new Error("Failed to submit form")
  }
}

const formSchema = z.object({
  email: z.string().email({ message: "Please enter your e-mail address." }),
  message: z.string().min(10, { message: "Please summarize your project in a couple of sentences." }),
})

const ContactDialog = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => postContactForm(values)


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Let&apos;s Build It</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What&apos;s Your Dream Project?</DialogTitle>
          <DialogDescription>
            We&apos;re excited to hear about your project!<br/>
            Please tell us about it and we&apos;ll<br/>
            get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormItem>
              <FormLabel htmlFor="email">What email can we use for getting back to you?</FormLabel>
              <Input {...form.register("email")} placeholder="your@email.com" />
              <FormDescription>
                We&apos;ll never share your email with anyone else.
              </FormDescription>
              <FormMessage>
                {form.formState.errors.email?.message}
              </FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="message">What can we do for you?</FormLabel>
              <Textarea {...form.register("message")} />
              <FormMessage>
                {form.formState.errors.message?.message}
              </FormMessage>
            </FormItem>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog
