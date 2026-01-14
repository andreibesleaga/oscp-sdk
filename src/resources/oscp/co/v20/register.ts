// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Register extends APIResource {
  create(params: RegisterCreateParams, options?: RequestOptions): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/co/2.0/register', {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          'X-Request-ID': xRequestID,
          ...(xCorrelationID != null ? { 'X-Correlation-ID': xCorrelationID } : undefined),
          ...(xSegmentCount?.toString() != null ?
            { 'X-Segment-Count': xSegmentCount?.toString() }
          : undefined),
          ...(xSegmentIndex?.toString() != null ?
            { 'X-Segment-Index': xSegmentIndex?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  update(params: RegisterUpdateParams, options?: RequestOptions): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.put('/oscp/co/2.0/register', {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          'X-Request-ID': xRequestID,
          ...(xCorrelationID != null ? { 'X-Correlation-ID': xCorrelationID } : undefined),
          ...(xSegmentCount?.toString() != null ?
            { 'X-Segment-Count': xSegmentCount?.toString() }
          : undefined),
          ...(xSegmentIndex?.toString() != null ?
            { 'X-Segment-Index': xSegmentIndex?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  delete(params: RegisterDeleteParams, options?: RequestOptions): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.delete('/oscp/co/2.0/register', {
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          'X-Request-ID': xRequestID,
          ...(xCorrelationID != null ? { 'X-Correlation-ID': xCorrelationID } : undefined),
          ...(xSegmentCount?.toString() != null ?
            { 'X-Segment-Count': xSegmentCount?.toString() }
          : undefined),
          ...(xSegmentIndex?.toString() != null ?
            { 'X-Segment-Index': xSegmentIndex?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface RegisterCreateParams {
  /**
   * Body param
   */
  token: string;

  /**
   * Body param
   */
  version_url: Array<RegisterCreateParams.VersionURL>;

  /**
   * Header param
   */
  'X-Request-ID': string;

  /**
   * Header param
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param
   */
  'X-Segment-Count'?: number;

  /**
   * Header param
   */
  'X-Segment-Index'?: number;
}

export namespace RegisterCreateParams {
  export interface VersionURL {
    /**
     * Base URL of the API
     */
    base_url: string;

    /**
     * Version of the API
     */
    version: string;
  }
}

export interface RegisterUpdateParams {
  /**
   * Body param
   */
  token: string;

  /**
   * Body param
   */
  version_url: Array<RegisterUpdateParams.VersionURL>;

  /**
   * Header param
   */
  'X-Request-ID': string;

  /**
   * Header param
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param
   */
  'X-Segment-Count'?: number;

  /**
   * Header param
   */
  'X-Segment-Index'?: number;
}

export namespace RegisterUpdateParams {
  export interface VersionURL {
    /**
     * Base URL of the API
     */
    base_url: string;

    /**
     * Version of the API
     */
    version: string;
  }
}

export interface RegisterDeleteParams {
  /**
   * Body param
   */
  token: string;

  /**
   * Body param
   */
  version_url: Array<RegisterDeleteParams.VersionURL>;

  /**
   * Header param
   */
  'X-Request-ID': string;

  /**
   * Header param
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param
   */
  'X-Segment-Count'?: number;

  /**
   * Header param
   */
  'X-Segment-Index'?: number;
}

export namespace RegisterDeleteParams {
  export interface VersionURL {
    /**
     * Base URL of the API
     */
    base_url: string;

    /**
     * Version of the API
     */
    version: string;
  }
}

export declare namespace Register {
  export {
    type RegisterCreateParams as RegisterCreateParams,
    type RegisterUpdateParams as RegisterUpdateParams,
    type RegisterDeleteParams as RegisterDeleteParams,
  };
}
