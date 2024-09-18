import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components"

export function TestEmail() {
  return (
    <Html>
      <Head />
      <Preview>A Demo Email</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-2.5 max-w-[480px] rounded-md border border-neutral-100 border-solid bg-white p-8">
            <Heading className="mb-6 font-semibold text-neutral-950 text-xl">
              A Demo Email
            </Heading>
            <Text className="text-neutral-950 text-sm leading-6">
              This is a demo email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
