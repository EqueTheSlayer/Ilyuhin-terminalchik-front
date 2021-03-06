import {serverUrl} from "./api.constants";

export function getUrl(api?: string): string {
  return api ? `${serverUrl}/${api}` : serverUrl;
}

export async function reqApi(method: string, api?: string, body?: object,) {
  return fetch(getUrl(api), {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(async res => {
      const data = await res.json();

      return {data: data, statusCode: res.status}
    });
}
