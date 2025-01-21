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
import {Textarea} from "@/components/ui/textarea"
import {Loader2} from "lucide-react"
import React, {useState} from "react"
import {RainbowButton} from "@/components/ui/rainbow-button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog"
import confetti from "canvas-confetti"

const postContactForm = async (values: z.infer<typeof formSchema>) => {
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
  email: z.string().email({message: "Please enter your e-mail address."}),
  message: z.string().min(10, {message: "Please summarize your project in a couple of sentences."}),
})

const ContactDialog = () => {
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleOpenChange = (open: boolean) => setShowForm(open)
  const handleClickContinue = () => setSubmitted(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  const {formState: {isSubmitting}} = form

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await postContactForm(values)
    setShowForm(false)
    setSubmitted(true)
    triggerConfetti()
    form.reset()
  }

  return (
    <>
      <Dialog open={showForm} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <RainbowButton>Let&apos;s Build It</RainbowButton>
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
                <Input {...form.register("email")} placeholder="your@email.com"/>
                <FormDescription>
                  We&apos;ll never share your email with anyone else.
                </FormDescription>
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
              <FormItem>
                <FormLabel htmlFor="message">What can we do for you?</FormLabel>
                <Textarea {...form.register("message")} placeholder="Build my dream!" rows={5}/>
                <FormMessage>
                  {form.formState.errors.message?.message}
                </FormMessage>
              </FormItem>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="animate-spin"/>}
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <AlertDialog open={submitted}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Thank You!</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-2">Thanks for reaching out! We’ll respond within 24 hours.</p>
              <p>We’re excited to help bring your dream to life.</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleClickContinue}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

const triggerConfetti = () => {
  const end = Date.now() + 3 * 1000 // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

  const frame = () => {
    if (Date.now() > end) return

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    })
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    })

    requestAnimationFrame(frame)
  }

  frame()
}

export default ContactDialog
