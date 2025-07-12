// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.co.v20',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/co/2.0/heartbeat',
  operationId: 'heartbeatCapacityOptimizer',
};

export const tool: Tool = {
  name: 'heartbeat_co_oscp_v20',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.co.v20.heartbeat(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
