// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Oscp } from '../client';

export abstract class APIResource {
  protected _client: Oscp;

  constructor(client: Oscp) {
    this._client = client;
  }
}
