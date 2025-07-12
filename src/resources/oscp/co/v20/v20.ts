// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RegisterAPI from './register';
import { Register, RegisterCreateParams, RegisterDeleteParams, RegisterUpdateParams } from './register';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class V20 extends APIResource {
  register: RegisterAPI.Register = new RegisterAPI.Register(this._client);

  handshake(params: V20HandshakeParams, options?: RequestOptions): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/co/2.0/handshake', {
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

  heartbeat(params: V20HeartbeatParams, options?: RequestOptions): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/co/2.0/heartbeat', {
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

  updateAssetMeasurements(
    params: V20UpdateAssetMeasurementsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/co/2.0/update_asset_measurements', {
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

  updateGroupCapacityForecast(
    params: V20UpdateGroupCapacityForecastParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/co/2.0/update_group_capacity_forecast', {
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

export interface V20HandshakeParams {
  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Body param: The interval (in seconds) in which the sender of this response
   * expects heartbeats to receive. If provided, value must be 1 or higher. If the
   * sender is not interested in the heartbeat of the receiver, this field can be
   * omitted.
   */
  heartbeat_interval?: number;

  /**
   * Body param: For determining how measurements are aggregated. Providing multiple
   * configurations is allowed. An empty array represents no configurations.
   */
  measurement_configuration?: Array<'CONTINUOUS' | 'INTERMITTENT'>;

  /**
   * Header param:
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param:
   */
  'X-Segment-Count'?: number;

  /**
   * Header param:
   */
  'X-Segment-Index'?: number;
}

export interface V20HeartbeatParams {
  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Body param: A time in the future that indicates when, in case no more heartbeat
   * messages are received, it can be assumed the receiving party is offline
   * (unavailable). This time SHOULD be updated with every heartbeat message.
   */
  offline_mode_at?: string;

  /**
   * Header param:
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param:
   */
  'X-Segment-Count'?: number;

  /**
   * Header param:
   */
  'X-Segment-Index'?: number;
}

export interface V20UpdateAssetMeasurementsParams {
  /**
   * Body param:
   */
  group_id: string;

  /**
   * Body param:
   */
  measurements: Array<V20UpdateAssetMeasurementsParams.Measurement>;

  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Header param:
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param:
   */
  'X-Segment-Count'?: number;

  /**
   * Header param:
   */
  'X-Segment-Index'?: number;
}

export namespace V20UpdateAssetMeasurementsParams {
  export interface Measurement {
    asset_category: string;

    asset_id: string;

    energy_measurement?: Measurement.EnergyMeasurement;

    instantaneous_measurement?: Measurement.InstantaneousMeasurement;
  }

  export namespace Measurement {
    export interface EnergyMeasurement {
      direction: 'NET' | 'IMPORT' | 'EXPORT';

      measure_time: string;

      phase: 'UNKNOWN' | 'ONE' | 'TWO' | 'THREE' | 'ALL';

      unit: 'WH' | 'KWH';

      value: number;

      energy_type?: 'FLEXIBLE' | 'NONFLEXIBLE' | 'TOTAL';

      initial_measure_time?: string;
    }

    export interface InstantaneousMeasurement {
      measure_time: string;

      phase: 'UNKNOWN' | 'ONE' | 'TWO' | 'THREE' | 'ALL';

      unit: 'A' | 'W' | 'KW' | 'WH' | 'KWH';

      value: number;
    }
  }
}

export interface V20UpdateGroupCapacityForecastParams {
  /**
   * Body param:
   */
  forecasted_blocks: Array<V20UpdateGroupCapacityForecastParams.ForecastedBlock>;

  /**
   * Body param:
   */
  group_id: string;

  /**
   * Body param:
   */
  type: 'CONSUMPTION' | 'GENERATION' | 'FALLBACK_CONSUMPTION' | 'FALLBACK_GENERATION' | 'OPTIMUM';

  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Header param:
   */
  'X-Correlation-ID'?: string;

  /**
   * Header param:
   */
  'X-Segment-Count'?: number;

  /**
   * Header param:
   */
  'X-Segment-Index'?: number;
}

export namespace V20UpdateGroupCapacityForecastParams {
  export interface ForecastedBlock {
    capacity: string;

    end_time: string;

    phase: 'UNKNOWN' | 'ONE' | 'TWO' | 'THREE' | 'ALL';

    start_time: string;

    unit: 'A' | 'W' | 'KW' | 'WH' | 'KWH';
  }
}

V20.Register = Register;

export declare namespace V20 {
  export {
    type V20HandshakeParams as V20HandshakeParams,
    type V20HeartbeatParams as V20HeartbeatParams,
    type V20UpdateAssetMeasurementsParams as V20UpdateAssetMeasurementsParams,
    type V20UpdateGroupCapacityForecastParams as V20UpdateGroupCapacityForecastParams,
  };

  export {
    Register as Register,
    type RegisterCreateParams as RegisterCreateParams,
    type RegisterUpdateParams as RegisterUpdateParams,
    type RegisterDeleteParams as RegisterDeleteParams,
  };
}
