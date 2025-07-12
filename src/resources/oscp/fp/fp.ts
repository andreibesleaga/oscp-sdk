// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V20API from './v20/v20';
import {
  V20,
  V20HandshakeAcknowledgeParams,
  V20HandshakeParams,
  V20HeartbeatParams,
  V20UpdateGroupCapacityForecastParams,
} from './v20/v20';

export class Fp extends APIResource {
  v20: V20API.V20 = new V20API.V20(this._client);
}

Fp.V20 = V20;

export declare namespace Fp {
  export {
    V20 as V20,
    type V20HandshakeParams as V20HandshakeParams,
    type V20HandshakeAcknowledgeParams as V20HandshakeAcknowledgeParams,
    type V20HeartbeatParams as V20HeartbeatParams,
    type V20UpdateGroupCapacityForecastParams as V20UpdateGroupCapacityForecastParams,
  };
}
