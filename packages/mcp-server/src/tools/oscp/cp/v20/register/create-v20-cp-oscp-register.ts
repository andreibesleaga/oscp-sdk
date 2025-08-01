// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.cp.v20.register',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/cp/2.0/register',
  operationId: 'registerCapacityProvider',
};

export const tool: Tool = {
  name: 'create_v20_cp_oscp_register',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
      },
      version_url: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            base_url: {
              type: 'string',
              description: 'Base URL of the API',
            },
            version: {
              type: 'string',
              description: 'Version of the API',
            },
          },
          required: ['base_url', 'version'],
        },
      },
      'X-Request-ID': {
        type: 'string',
      },
      'X-Correlation-ID': {
        type: 'string',
      },
      'X-Segment-Count': {
        type: 'integer',
      },
      'X-Segment-Index': {
        type: 'integer',
      },
    },
    required: ['token', 'version_url', 'X-Request-ID'],
  },
  annotations: {},
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.cp.v20.register.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
