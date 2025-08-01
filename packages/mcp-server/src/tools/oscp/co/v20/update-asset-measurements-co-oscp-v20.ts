// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.co.v20',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/co/2.0/update_asset_measurements',
  operationId: 'updateAssetMeasurementsCapacityOptimizer',
};

export const tool: Tool = {
  name: 'update_asset_measurements_co_oscp_v20',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      group_id: {
        type: 'string',
      },
      measurements: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            asset_category: {
              type: 'string',
            },
            asset_id: {
              type: 'string',
            },
            energy_measurement: {
              type: 'object',
              properties: {
                direction: {
                  type: 'string',
                  enum: ['NET', 'IMPORT', 'EXPORT'],
                },
                measure_time: {
                  type: 'string',
                  format: 'date-time',
                },
                phase: {
                  type: 'string',
                  enum: ['UNKNOWN', 'ONE', 'TWO', 'THREE', 'ALL'],
                },
                unit: {
                  type: 'string',
                  enum: ['WH', 'KWH'],
                },
                value: {
                  type: 'number',
                },
                energy_type: {
                  type: 'string',
                  enum: ['FLEXIBLE', 'NONFLEXIBLE', 'TOTAL'],
                },
                initial_measure_time: {
                  type: 'string',
                  format: 'date-time',
                },
              },
              required: ['direction', 'measure_time', 'phase', 'unit', 'value'],
            },
            instantaneous_measurement: {
              type: 'object',
              properties: {
                measure_time: {
                  type: 'string',
                  format: 'date-time',
                },
                phase: {
                  type: 'string',
                  enum: ['UNKNOWN', 'ONE', 'TWO', 'THREE', 'ALL'],
                },
                unit: {
                  type: 'string',
                  enum: ['A', 'W', 'KW', 'WH', 'KWH'],
                },
                value: {
                  type: 'number',
                },
              },
              required: ['measure_time', 'phase', 'unit', 'value'],
            },
          },
          required: ['asset_category', 'asset_id'],
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
    required: ['group_id', 'measurements', 'X-Request-ID'],
  },
  annotations: {},
};

export const handler = async (client: Oscp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oscp.co.v20.updateAssetMeasurements(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
