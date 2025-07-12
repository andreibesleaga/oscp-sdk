// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V20API from './v20/v20';
import {
  V20,
  V20HandshakeParams,
  V20HeartbeatParams,
  V20UpdateAssetMeasurementsParams,
  V20UpdateGroupCapacityForecastParams,
} from './v20/v20';

export class Co extends APIResource {
  v20: V20API.V20 = new V20API.V20(this._client);
}

Co.V20 = V20;

export declare namespace Co {
  export {
    V20 as V20,
    type V20HandshakeParams as V20HandshakeParams,
    type V20HeartbeatParams as V20HeartbeatParams,
    type V20UpdateAssetMeasurementsParams as V20UpdateAssetMeasurementsParams,
    type V20UpdateGroupCapacityForecastParams as V20UpdateGroupCapacityForecastParams,
  };
}
