// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Number2_0API from './number-2-0/number-2-0';
import {
  Number2_0,
  Number2_0HandshakeAcknowledgeParams,
  Number2_0HandshakeParams,
  Number2_0HeartbeatParams,
  Number2_0UpdateGroupCapacityForecastParams,
} from './number-2-0/number-2-0';

export class Fp extends APIResource {
  number2_0: Number2_0API.Number2_0 = new Number2_0API.Number2_0(this._client);
}

Fp.Number2_0 = Number2_0;

export declare namespace Fp {
  export {
    Number2_0 as Number2_0,
    type Number2_0HandshakeParams as Number2_0HandshakeParams,
    type Number2_0HandshakeAcknowledgeParams as Number2_0HandshakeAcknowledgeParams,
    type Number2_0HeartbeatParams as Number2_0HeartbeatParams,
    type Number2_0UpdateGroupCapacityForecastParams as Number2_0UpdateGroupCapacityForecastParams,
  };
}
