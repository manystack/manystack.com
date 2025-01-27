"use client"

import React, { ReactNode, useContext } from 'react'
import { ContactDialogContext } from "@/app/components/ContactDialogProvider"
import { Button } from "@/components/ui/button"
import { RainbowButton } from '@/components/ui/rainbow-button'

type Props = {
    children: ReactNode
    variant?: "default" | "rainbow"
}

const ContactButton = ({children, variant = "default"}: Props) => {
  const {openContactDialog} = useContext(ContactDialogContext)

  if (variant === "rainbow") {
    return<RainbowButton onClick={openContactDialog}>{children}</RainbowButton>
  }

  return <Button onClick={openContactDialog}>{children}</Button>
}

export default ContactButton
