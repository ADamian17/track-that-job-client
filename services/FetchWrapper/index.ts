type OptionsProps = Parameters<typeof fetch>[1];

export class FetchWrapper {
  static get(path: string, options?: OptionsProps): Promise<Response> {
    return fetch(path, {
      ...options,
      method: 'GET',
    });
  }

  static post(path: string, options?: OptionsProps): Promise<Response> {
    return fetch(path, {
      ...options,
      method: 'POST',
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
      },
      body: options?.body,
    });
  }

  static put(path: string, options?: OptionsProps): Promise<Response> {
    return fetch(path, {
      ...options,
      method: 'PUT',
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
      },
    });
  }

  static delete(path: string, options?: OptionsProps): Promise<Response> {
    return fetch(path, {
      ...options,
      method: 'DELETE',
    });
  }
}
