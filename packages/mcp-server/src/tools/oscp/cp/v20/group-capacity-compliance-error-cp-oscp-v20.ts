// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.cp.v20',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/cp/2.0/group_capacity_compliance_error',
  operationId: 'groupCapacityComplianceErrorCapacityProvider',
};

export const tool: Tool = {
  name: 'group_capacity_compliance_error_cp_oscp_v20',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      'X-Request-ID': {
        type: 'string',
      },
      forecasted_blocks: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            capacity: {
              type: 'string',
            },
            end_time: {
              type: 'string',
              format: 'date-time',
            },
            phase: {
              type: 'string',
              enum: ['UNKNOWN', 'ONE', 'TWO', 'THREE', 'ALL'],
            },
            start_time: {
              type: 'string',
              format: 'date-time',
            },
            unit: {
              type: 'string',
              enum: ['A', 'W', 'KW', 'WH', 'KWH'],
            },
          },
          required: ['capacity', 'end_time', 'phase', 'start_time', 'unit'],
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
    required: ['message', 'X-Request-ID'],
  },
  annotations: {},
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.cp.v20.groupCapacityComplianceError(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
