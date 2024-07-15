import { GetCookie } from "../Cookies/CookiesLocal";

export const DELETE = async (url: string) => {
  try {
    const response = await fetch(url, { cache: 'no-cache', method: 'DELETE' });

    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }

    const res = await response.json();
    return res;
  }
  catch (error) {
    return { error: "Something went wrong" };
  }
}

export const DELETEToken = async (url: string) => {
  try {
    const response = await fetch(url, {
      cache: 'no-cache', method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${await GetCookie('token')}`
      }
    });

    if (!response.ok) {
      throw new Error('Something Went Wrong');
    }

    const res = await response.json();
    return res;
  }
  catch (error) {
    return { error: "Something went wrong" };
  }
}

