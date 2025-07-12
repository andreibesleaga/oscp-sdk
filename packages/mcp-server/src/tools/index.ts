// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import handshake_fp_oscp_v20 from './oscp/fp/v20/handshake-fp-oscp-v20';
import handshake_acknowledge_fp_oscp_v20 from './oscp/fp/v20/handshake-acknowledge-fp-oscp-v20';
import heartbeat_fp_oscp_v20 from './oscp/fp/v20/heartbeat-fp-oscp-v20';
import update_group_capacity_forecast_fp_oscp_v20 from './oscp/fp/v20/update-group-capacity-forecast-fp-oscp-v20';
import create_v20_fp_oscp_register from './oscp/fp/v20/register/create-v20-fp-oscp-register';
import update_v20_fp_oscp_register from './oscp/fp/v20/register/update-v20-fp-oscp-register';
import delete_v20_fp_oscp_register from './oscp/fp/v20/register/delete-v20-fp-oscp-register';
import adjust_group_capacity_forecast_cp_oscp_v20 from './oscp/cp/v20/adjust-group-capacity-forecast-cp-oscp-v20';
import group_capacity_compliance_error_cp_oscp_v20 from './oscp/cp/v20/group-capacity-compliance-error-cp-oscp-v20';
import handshake_acknowledge_cp_oscp_v20 from './oscp/cp/v20/handshake-acknowledge-cp-oscp-v20';
import heartbeat_cp_oscp_v20 from './oscp/cp/v20/heartbeat-cp-oscp-v20';
import update_group_measurements_cp_oscp_v20 from './oscp/cp/v20/update-group-measurements-cp-oscp-v20';
import create_v20_cp_oscp_register from './oscp/cp/v20/register/create-v20-cp-oscp-register';
import update_v20_cp_oscp_register from './oscp/cp/v20/register/update-v20-cp-oscp-register';
import delete_v20_cp_oscp_register from './oscp/cp/v20/register/delete-v20-cp-oscp-register';
import handshake_co_oscp_v20 from './oscp/co/v20/handshake-co-oscp-v20';
import heartbeat_co_oscp_v20 from './oscp/co/v20/heartbeat-co-oscp-v20';
import update_asset_measurements_co_oscp_v20 from './oscp/co/v20/update-asset-measurements-co-oscp-v20';
import update_group_capacity_forecast_co_oscp_v20 from './oscp/co/v20/update-group-capacity-forecast-co-oscp-v20';
import create_v20_co_oscp_register from './oscp/co/v20/register/create-v20-co-oscp-register';
import update_v20_co_oscp_register from './oscp/co/v20/register/update-v20-co-oscp-register';
import delete_v20_co_oscp_register from './oscp/co/v20/register/delete-v20-co-oscp-register';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(handshake_fp_oscp_v20);
addEndpoint(handshake_acknowledge_fp_oscp_v20);
addEndpoint(heartbeat_fp_oscp_v20);
addEndpoint(update_group_capacity_forecast_fp_oscp_v20);
addEndpoint(create_v20_fp_oscp_register);
addEndpoint(update_v20_fp_oscp_register);
addEndpoint(delete_v20_fp_oscp_register);
addEndpoint(adjust_group_capacity_forecast_cp_oscp_v20);
addEndpoint(group_capacity_compliance_error_cp_oscp_v20);
addEndpoint(handshake_acknowledge_cp_oscp_v20);
addEndpoint(heartbeat_cp_oscp_v20);
addEndpoint(update_group_measurements_cp_oscp_v20);
addEndpoint(create_v20_cp_oscp_register);
addEndpoint(update_v20_cp_oscp_register);
addEndpoint(delete_v20_cp_oscp_register);
addEndpoint(handshake_co_oscp_v20);
addEndpoint(heartbeat_co_oscp_v20);
addEndpoint(update_asset_measurements_co_oscp_v20);
addEndpoint(update_group_capacity_forecast_co_oscp_v20);
addEndpoint(create_v20_co_oscp_register);
addEndpoint(update_v20_co_oscp_register);
addEndpoint(delete_v20_co_oscp_register);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
