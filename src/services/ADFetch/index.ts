export default class FetchWrapper {
  static post<T>(path: string, data: T): Promise<Response> {
    return fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
