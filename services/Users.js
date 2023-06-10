export async function fetchUser(username) {
  try {
    const fetched = await fetch(
      `${process.env.BACKEND_BASE_URL}/forms/${username}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          Origin: "http://localhost:3000",
        },
      }
    ).then((x) => x.json());
    return fetched;
  } catch (err) {
    return err;
  }
}
export async function CreateUser(obj) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    const Saved = fetch(
      `${process.env.BACKEND_BASE_URL}/forms`,
      requestOptions
    ).then((response) => response.json());
    return Saved;
  } catch (err) {
    return err;
  }
}
export async function UpdateUser(obj, username) {
  try {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    const Updated = fetch(
      `${process.env.BACKEND_BASE_URL}/forms/${username}`,
      requestOptions
    ).then((response) => response.json());
    return Updated;
  } catch (err) {
    return err;
  }
}
