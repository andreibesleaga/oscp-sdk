// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RegisterAPI from './register';
import { Register, RegisterCreateParams, RegisterDeleteParams, RegisterUpdateParams } from './register';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Number2_0 extends APIResource {
  register: RegisterAPI.Register = new RegisterAPI.Register(this._client);

  adjustGroupCapacityForecast(
    params: Number2_0AdjustGroupCapacityForecastParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/cp/2.0/adjust_group_capacity_forecast', {
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

  groupCapacityComplianceError(
    params: Number2_0GroupCapacityComplianceErrorParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/cp/2.0/group_capacity_compliance_error', {
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

  handshakeAcknowledge(
    params: Number2_0HandshakeAcknowledgeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/cp/2.0/handshake_acknowledge', {
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

  heartbeat(params: Number2_0HeartbeatParams, options?: RequestOptions): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/cp/2.0/heartbeat', {
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

  updateGroupMeasurements(
    params: Number2_0UpdateGroupMeasurementsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'X-Request-ID': xRequestID,
      'X-Correlation-ID': xCorrelationID,
      'X-Segment-Count': xSegmentCount,
      'X-Segment-Index': xSegmentIndex,
      ...body
    } = params;
    return this._client.post('/oscp/cp/2.0/update_group_measurements', {
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

export interface Number2_0AdjustGroupCapacityForecastParams {
  /**
   * Body param:
   */
  forecasted_blocks: Array<Number2_0AdjustGroupCapacityForecastParams.ForecastedBlock>;

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

export namespace Number2_0AdjustGroupCapacityForecastParams {
  export interface ForecastedBlock {
    capacity: string;

    end_time: string;

    phase: 'UNKNOWN' | 'ONE' | 'TWO' | 'THREE' | 'ALL';

    start_time: string;

    unit: 'A' | 'W' | 'KW' | 'WH' | 'KWH';
  }
}

export interface Number2_0GroupCapacityComplianceErrorParams {
  /**
   * Body param:
   */
  message: string;

  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Body param:
   */
  forecasted_blocks?: Array<Number2_0GroupCapacityComplianceErrorParams.ForecastedBlock>;

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

export namespace Number2_0GroupCapacityComplianceErrorParams {
  export interface ForecastedBlock {
    capacity: string;

    end_time: string;

    phase: 'UNKNOWN' | 'ONE' | 'TWO' | 'THREE' | 'ALL';

    start_time: string;

    unit: 'A' | 'W' | 'KW' | 'WH' | 'KWH';
  }
}

export interface Number2_0HandshakeAcknowledgeParams {
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

export interface Number2_0HeartbeatParams {
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

export interface Number2_0UpdateGroupMeasurementsParams {
  /**
   * Body param:
   */
  group_id: string;

  /**
   * Body param:
   */
  measurements: Array<Number2_0UpdateGroupMeasurementsParams.Measurement>;

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

export namespace Number2_0UpdateGroupMeasurementsParams {
  export interface Measurement {
    direction: 'NET' | 'IMPORT' | 'EXPORT';

    measure_time: string;

    phase: 'UNKNOWN' | 'ONE' | 'TWO' | 'THREE' | 'ALL';

    unit: 'WH' | 'KWH';

    value: number;

    energy_type?: 'FLEXIBLE' | 'NONFLEXIBLE' | 'TOTAL';

    initial_measure_time?: string;
  }
}

Number2_0.Register = Register;

export declare namespace Number2_0 {
  export {
    type Number2_0AdjustGroupCapacityForecastParams as Number2_0AdjustGroupCapacityForecastParams,
    type Number2_0GroupCapacityComplianceErrorParams as Number2_0GroupCapacityComplianceErrorParams,
    type Number2_0HandshakeAcknowledgeParams as Number2_0HandshakeAcknowledgeParams,
    type Number2_0HeartbeatParams as Number2_0HeartbeatParams,
    type Number2_0UpdateGroupMeasurementsParams as Number2_0UpdateGroupMeasurementsParams,
  };

  export {
    Register as Register,
    type RegisterCreateParams as RegisterCreateParams,
    type RegisterUpdateParams as RegisterUpdateParams,
    type RegisterDeleteParams as RegisterDeleteParams,
  };
}
