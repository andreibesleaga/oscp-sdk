// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoAPI from './co/co';
import { Co } from './co/co';
import * as CpAPI from './cp/cp';
import { Cp } from './cp/cp';
import * as FpAPI from './fp/fp';
import { Fp } from './fp/fp';

export class OscpResource extends APIResource {
  fp: FpAPI.Fp = new FpAPI.Fp(this._client);
  cp: CpAPI.Cp = new CpAPI.Cp(this._client);
  co: CoAPI.Co = new CoAPI.Co(this._client);
}

OscpResource.Fp = Fp;
OscpResource.Cp = Cp;
OscpResource.Co = Co;

export declare namespace OscpResource {
  export { Fp as Fp };

  export { Cp as Cp };

  export { Co as Co };
}
