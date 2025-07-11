// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Oscp from 'oscp-sdk';

const client = new Oscp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource number2_0', () => {
  // skipped: tests are disabled for the time being
  test.skip('handshake: only required params', async () => {
    const responsePromise = client.oscp.fp.number2_0.handshake({ 'X-Request-ID': 'X-Request-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('handshake: required and optional params', async () => {
    const response = await client.oscp.fp.number2_0.handshake({
      'X-Request-ID': 'X-Request-ID',
      heartbeat_interval: 0,
      measurement_configuration: ['CONTINUOUS'],
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('handshakeAcknowledge: only required params', async () => {
    const responsePromise = client.oscp.fp.number2_0.handshakeAcknowledge({ 'X-Request-ID': 'X-Request-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('handshakeAcknowledge: required and optional params', async () => {
    const response = await client.oscp.fp.number2_0.handshakeAcknowledge({
      'X-Request-ID': 'X-Request-ID',
      heartbeat_interval: 0,
      measurement_configuration: ['CONTINUOUS'],
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('heartbeat: only required params', async () => {
    const responsePromise = client.oscp.fp.number2_0.heartbeat({ 'X-Request-ID': 'X-Request-ID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('heartbeat: required and optional params', async () => {
    const response = await client.oscp.fp.number2_0.heartbeat({
      'X-Request-ID': 'X-Request-ID',
      offline_mode_at: '2019-12-27T18:11:19.117Z',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateGroupCapacityForecast: only required params', async () => {
    const responsePromise = client.oscp.fp.number2_0.updateGroupCapacityForecast({
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

  // skipped: tests are disabled for the time being
  test.skip('updateGroupCapacityForecast: required and optional params', async () => {
    const response = await client.oscp.fp.number2_0.updateGroupCapacityForecast({
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
});
