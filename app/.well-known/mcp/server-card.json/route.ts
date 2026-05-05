import { NextResponse } from 'next/server'

// MCP Server Card — SEP-1649 draft
// https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
export async function GET() {
  const serverCard = {
    schemaVersion: '1.0',
    serverInfo: {
      name: 'Truleado',
      version: '1.0.0',
      description:
        'Truleado is influencer marketing software for agencies. Discover creators, manage campaigns, track ROI, and handle client approvals from one workspace.',
    },
    capabilities: {
      tools: false,
      resources: false,
      prompts: false,
    },
    metadata: {
      website: 'https://truleado.com',
      documentation: 'https://truleado.com/docs',
      support: 'support@truleado.com',
      agentSkills: 'https://truleado.com/.well-known/agent-skills/index.json',
    },
  }

  return NextResponse.json(serverCard, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
