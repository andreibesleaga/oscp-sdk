// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.cp.v20',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/cp/2.0/adjust_group_capacity_forecast',
  operationId: 'adjustGroupCapacityForecastCapacityProvider',
};

export const tool: Tool = {
  name: 'adjust_group_capacity_forecast_cp_oscp_v20',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
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
      group_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['CONSUMPTION', 'GENERATION', 'FALLBACK_CONSUMPTION', 'FALLBACK_GENERATION', 'OPTIMUM'],
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
    required: ['forecasted_blocks', 'group_id', 'type', 'X-Request-ID'],
  },
  annotations: {},
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.cp.v20.adjustGroupCapacityForecast(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
