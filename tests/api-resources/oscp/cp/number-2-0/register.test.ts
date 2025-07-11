// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Oscp from 'oscp-sdk';

const client = new Oscp({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource register', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.oscp.cp.number2_0.register.create({
      token: 'token',
      version_url: [{ base_url: 'base_url', version: 'version' }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.oscp.cp.number2_0.register.create({
      token: 'token',
      version_url: [{ base_url: 'base_url', version: 'version' }],
      'X-Request-ID': 'X-Request-ID',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.oscp.cp.number2_0.register.update({
      token: 'token',
      version_url: [{ base_url: 'base_url', version: 'version' }],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.oscp.cp.number2_0.register.update({
      token: 'token',
      version_url: [{ base_url: 'base_url', version: 'version' }],
      'X-Request-ID': 'X-Request-ID',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.oscp.cp.number2_0.register.delete({
      token: 'token',
      version_url: [{ base_url: 'base_url', version: 'version' }],
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.oscp.cp.number2_0.register.delete({
      token: 'token',
      version_url: [{ base_url: 'base_url', version: 'version' }],
      'X-Request-ID': 'X-Request-ID',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Segment-Count': 0,
      'X-Segment-Index': 0,
    });
  });
});
