import { Button, Form, Host, HStack, Image, List, Section, Spacer, Text } from '@expo/ui/swift-ui';
import { buttonStyle, font, foregroundStyle, padding } from '@expo/ui/swift-ui/modifiers';

export default function SecondaryTextExample() {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <List>
            <Button onPress={() => console.log('Navigate')} modifiers={[buttonStyle('plain')]}>
              <HStack>
                <Text>Night Shift</Text>
                <Spacer />
                <Text
                  modifiers={[
                    foregroundStyle({type: 'hierarchical', style: 'secondary'}),
                    padding({ trailing: 8 }),
                  ]}>
                  22:00 to 07:00
                </Text>
                <Image systemName="chevron.right" size={14} color="#C7C7CC" />
              </HStack>
            </Button>
          </List>
          <List>
            <Text modifiers={[foregroundStyle({type: 'hierarchical', style: 'secondary'}), font({ size: 14 })]}>
              Save up to 280.7 MB. This will permanently delete all photos and videos kept in the Recently Deleted album.
            </Text>
          </List>
        </Section>
      </Form>
    </Host>
  );
}
