import { Badge, Card, Container, Group, SimpleGrid, Text } from "@mantine/core";

export default function Tags({}) {
  return (
    <Card fluid mih="30%">
      <Text size="xl">Your Tags</Text>
      <SimpleGrid cols={5}>
        <Badge variant="outline">SONGS</Badge>
      </SimpleGrid>
    </Card>
  );
}
