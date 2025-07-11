// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Number2_0API from './number-2-0/number-2-0';
import {
  Number2_0,
  Number2_0AdjustGroupCapacityForecastParams,
  Number2_0GroupCapacityComplianceErrorParams,
  Number2_0HandshakeAcknowledgeParams,
  Number2_0HeartbeatParams,
  Number2_0UpdateGroupMeasurementsParams,
} from './number-2-0/number-2-0';

export class Cp extends APIResource {
  number2_0: Number2_0API.Number2_0 = new Number2_0API.Number2_0(this._client);
}

Cp.Number2_0 = Number2_0;

export declare namespace Cp {
  export {
    Number2_0 as Number2_0,
    type Number2_0AdjustGroupCapacityForecastParams as Number2_0AdjustGroupCapacityForecastParams,
    type Number2_0GroupCapacityComplianceErrorParams as Number2_0GroupCapacityComplianceErrorParams,
    type Number2_0HandshakeAcknowledgeParams as Number2_0HandshakeAcknowledgeParams,
    type Number2_0HeartbeatParams as Number2_0HeartbeatParams,
    type Number2_0UpdateGroupMeasurementsParams as Number2_0UpdateGroupMeasurementsParams,
  };
}
