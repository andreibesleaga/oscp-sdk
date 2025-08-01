// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.fp.v20',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/fp/2.0/heartbeat',
  operationId: 'heartbeatFlexibilityProvider',
};

export const tool: Tool = {
  name: 'heartbeat_fp_oscp_v20',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      'X-Request-ID': {
        type: 'string',
      },
      offline_mode_at: {
        type: 'string',
        description:
          'A time in the future that indicates when, in case no more heartbeat\nmessages are received, it can be assumed the receiving party is\noffline (unavailable). This time SHOULD be updated with every\nheartbeat message.\n',
        format: 'date-time',
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
    required: ['X-Request-ID'],
  },
  annotations: {},
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.fp.v20.heartbeat(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
