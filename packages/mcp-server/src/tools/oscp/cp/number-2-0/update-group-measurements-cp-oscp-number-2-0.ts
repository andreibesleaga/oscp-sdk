// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'oscp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Oscp from 'oscp-sdk';

export const metadata: Metadata = {
  resource: 'oscp.cp.number_2_0',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oscp/cp/2.0/update_group_measurements',
  operationId: 'updateGroupMeasurementsCapacityProvider',
};

export const tool: Tool = {
  name: 'update_group_measurements_cp_oscp_number_2_0',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
  const response = await client.oscp.cp.number2_0.updateGroupMeasurements(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
