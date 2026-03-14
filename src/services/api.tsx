export type ConnectionMode = 'online' | 'offline'

export type ConnectionPreview = {
  badge: string
  title: string
  description: string
  meta: string
}

const responses: Record<ConnectionMode, ConnectionPreview> = {
  online: {
    badge: 'API online',
    title: 'Connected to a placeholder endpoint',
    description:
      'Your frontend can behave as if a backend answered successfully and returned starter content.',
    meta: 'Mock latency: 180ms',
  },
  offline: {
    badge: 'Offline mode',
    title: 'Showing fallback frontend behaviour',
    description:
      'The same UI can now explain missing connectivity and still stay understandable for the user.',
    meta: 'Fallback source: local placeholder',
  },
}

export async function getConnectionPreview(
  mode: ConnectionMode,
): Promise<ConnectionPreview> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 220)
  })

  return responses[mode]
}