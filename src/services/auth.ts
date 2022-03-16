interface IRegisterUser {
  email: string
  password: string
  numberPhone: string
  id: string
}

export const registerUser = async ({
  email,
  password,
  id,
  numberPhone,
}: IRegisterUser) => {
  const resp = await fetch(`http://localhost:3005/profile/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, email, password, numberPhone }),
  })
  const data = await resp.json()
  if (!resp.ok) {
    throw data
  }
  return data
}

export const loginUser = async (
  email: string,
  password: string,
) => {
  const resp = await fetch(`http://localhost:3005/profile?email=${email}&password=${password}`)
  const data = await resp.json()
  if (!resp.ok) {
    throw data
  }
  return data
}
