import { ActionIcon, AppShell, Group, Title } from '@mantine/core';
import { IconBrandGithub, IconCompass } from '@tabler/icons-react';
import Link from 'next/link';
import ColorSchemeToggle from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 60 }} padding="0">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group wrap="nowrap" style={{ cursor: 'pointer' }}>
              <Title order={2}>▼</Title>
            </Group>
            <Group ml="xl" gap="lg">
              <ColorSchemeToggle />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
