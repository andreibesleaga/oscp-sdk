// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.fp.v20',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/fp/2.0/handshake_acknowledge',
  operationId: 'handshakeAcknowledgeFlexibilityProvider',
};

export const tool: Tool = {
  name: 'handshake_acknowledge_fp_oscp_v20',
  description: '',
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
    },
    required: ['X-Request-ID'],
  },
  annotations: {},
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.fp.v20.handshakeAcknowledge(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
