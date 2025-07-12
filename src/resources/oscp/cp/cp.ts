// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V20API from './v20/v20';
import {
  V20,
  V20AdjustGroupCapacityForecastParams,
  V20GroupCapacityComplianceErrorParams,
  V20HandshakeAcknowledgeParams,
  V20HeartbeatParams,
  V20UpdateGroupMeasurementsParams,
} from './v20/v20';

export class Cp extends APIResource {
  v20: V20API.V20 = new V20API.V20(this._client);
}

Cp.V20 = V20;

export declare namespace Cp {
  export {
    V20 as V20,
    type V20AdjustGroupCapacityForecastParams as V20AdjustGroupCapacityForecastParams,
    type V20GroupCapacityComplianceErrorParams as V20GroupCapacityComplianceErrorParams,
    type V20HandshakeAcknowledgeParams as V20HandshakeAcknowledgeParams,
    type V20HeartbeatParams as V20HeartbeatParams,
    type V20UpdateGroupMeasurementsParams as V20UpdateGroupMeasurementsParams,
  };
}
