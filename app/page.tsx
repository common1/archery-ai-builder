import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="mt-4">
      <Button href="/app">Click here</Button>
    </Container>
  );
}
