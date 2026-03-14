export type ConnectionMode = 'online' | 'offline'

export type ConnectionPreview = {
  badge: string
  title: string
  description: string
  meta: string
}

export async function getConnectionPreview(
  mode: ConnectionMode,
  responses: Record<ConnectionMode, ConnectionPreview>,
): Promise<ConnectionPreview> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 220)
  })

  return responses[mode]
}