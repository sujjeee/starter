import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface LoginEmailProps {
  url: string
}

export function LoginEmail({ url }: LoginEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>This link will expire in 5 minutes</Preview>
      <Tailwind>
        {/* eslint-disable-next-line tailwindcss/enforces-shorthand */}
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-2.5 max-w-[480px] rounded-md border border-solid border-neutral-100 bg-white p-8">
            <Heading className="mb-6 text-xl font-semibold text-neutral-950">
              Verify your email to login
            </Heading>
            <Text className="text-sm leading-6 text-neutral-950">
              Click the button below to securely login, this link will expire in
              5 minutes.
            </Text>
            {/* eslint-disable-next-line tailwindcss/enforces-shorthand */}
            <Section className="mb-[32px] mt-[32px] text-left">
              <Button
                className="rounded-md bg-neutral-950 px-5 py-3 text-center text-[14px] font-normal text-white no-underline"
                href={url}
              >
                Log in
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
