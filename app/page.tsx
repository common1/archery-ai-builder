import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <Container className="mt-4">
      <Input type="text" placeholder="Full name" className="mb-2" />
      <Textarea placeholder="bio" />
      <div>
        <Badge variant="success">React</Badge>
      </div>
      <Button href="/app">Click here</Button>
    </Container>
  );
}
