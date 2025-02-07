// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env = (window as any).env;

export const environment = {
  API_URL: env['API_URL']!,
};
