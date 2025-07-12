// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.co.number_2_0',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/co/2.0/handshake',
  operationId: 'handshakeCapacityOptimizer',
};

export const tool: Tool = {
  name: 'handshake_co_oscp_number_2_0',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'X-Request-ID': {
        type: 'string',
      },
      heartbeat_interval: {
        type: 'integer',
        description:
          'The interval (in seconds) in which the\nsender of this response expects heartbeats to\nreceive. If provided, value must be 1 or higher.\nIf the sender is not interested in the heartbeat\nof the receiver, this field can be omitted.\n',
      },
      measurement_configuration: {
        type: 'array',
        description:
          'For determining how measurements are\naggregated. Providing multiple configurations\nis allowed. An empty array represents no\nconfigurations.\n',
        items: {
          type: 'string',
          enum: ['CONTINUOUS', 'INTERMITTENT'],
        },
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
  const response = await client.oscp.co.number2_0.handshake(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
