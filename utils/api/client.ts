export const BASE_URL = "http://dsm-rank.site";
export const IMAGE_BASE_URL =
  "https://ttt-image.s3.ap-northeast-2.amazonaws.com";

export default async function api<T>(
  url: string,
  option?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${url}`, option);

    if (!response.ok) throw response;

    return (await response.json()) as Promise<T>;
  } catch (err) {
    throw err;
  }
}
