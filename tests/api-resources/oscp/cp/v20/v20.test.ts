// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Oscp from 'oscp-sdk';

const client = new Oscp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v20', () => {
  // Prism tests are disabled
  test.skip('adjustGroupCapacityForecast: only required params', async () => {
    const responsePromise = client.oscp.cp.v20.adjustGroupCapacityForecast({
      forecasted_blocks: [
        {
          capacity: 'capacity',
          end_time: '2019-12-27T18:11:19.117Z',
          phase: 'UNKNOWN',
          start_time: '2019-12-27T18:11:19.117Z',
          unit: 'A',
        },
      ],
      group_id: 'group_id',
      type: 'CONSUMPTION',
      'X-Request-ID': 'X-Request-ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('adjustGroupCapacityForecast: required and optional params', async () => {
    const response = await client.oscp.cp.v20.adjustGroupCapacityForecast({
      forecasted_blocks: [
        {
          capacity: 'capacity',
          end_time: '2019-12-27T18:11:19.117Z',
          phase: 'UNKNOWN',
          start_time: '2019-12-27T18:11:19.117Z',
          unit: 'A',
        },
      ],
      group_id: 'group_id',
      type: 'CONSUMPTION',
      'X-Request-ID': 'X-Request-ID',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // Prism tests are disabled
  test.skip('groupCapacityComplianceError: only required params', async () => {
    const responsePromise = client.oscp.cp.v20.groupCapacityComplianceError({
      message: 'message',
      'X-Request-ID': 'X-Request-ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('groupCapacityComplianceError: required and optional params', async () => {
    const response = await client.oscp.cp.v20.groupCapacityComplianceError({
      message: 'message',
      'X-Request-ID': 'X-Request-ID',
      forecasted_blocks: [
        {
          capacity: 'capacity',
          end_time: '2019-12-27T18:11:19.117Z',
          phase: 'UNKNOWN',
          start_time: '2019-12-27T18:11:19.117Z',
          unit: 'A',
        },
      ],
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // Prism tests are disabled
  test.skip('handshakeAcknowledge: only required params', async () => {
    const responsePromise = client.oscp.cp.v20.handshakeAcknowledge({ 'X-Request-ID': 'X-Request-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('handshakeAcknowledge: required and optional params', async () => {
    const response = await client.oscp.cp.v20.handshakeAcknowledge({
      'X-Request-ID': 'X-Request-ID',
      heartbeat_interval: 0,
      measurement_configuration: ['CONTINUOUS'],
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // Prism tests are disabled
  test.skip('heartbeat: only required params', async () => {
    const responsePromise = client.oscp.cp.v20.heartbeat({ 'X-Request-ID': 'X-Request-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('heartbeat: required and optional params', async () => {
    const response = await client.oscp.cp.v20.heartbeat({
      'X-Request-ID': 'X-Request-ID',
      offline_mode_at: '2019-12-27T18:11:19.117Z',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // Prism tests are disabled
  test.skip('updateGroupMeasurements: only required params', async () => {
    const responsePromise = client.oscp.cp.v20.updateGroupMeasurements({
      group_id: 'group_id',
      measurements: [
        {
          direction: 'NET',
          measure_time: '2019-12-27T18:11:19.117Z',
          phase: 'UNKNOWN',
          unit: 'WH',
          value: 0,
        },
      ],
      'X-Request-ID': 'X-Request-ID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateGroupMeasurements: required and optional params', async () => {
    const response = await client.oscp.cp.v20.updateGroupMeasurements({
      group_id: 'group_id',
      measurements: [
        {
          direction: 'NET',
          measure_time: '2019-12-27T18:11:19.117Z',
          phase: 'UNKNOWN',
          unit: 'WH',
          value: 0,
          energy_type: 'FLEXIBLE',
          initial_measure_time: '2019-12-27T18:11:19.117Z',
        },
      ],
      'X-Request-ID': 'X-Request-ID',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });
});
