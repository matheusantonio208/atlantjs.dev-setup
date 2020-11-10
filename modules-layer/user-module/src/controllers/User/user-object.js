export function updateUserObject({
  first_name,
  last_name,
  email,
  password_hash,
  photo_profile,
  date_birth,
  phone_number,
  country,
  state,
}) {
  return {
    first_name,
    last_name,
    email,
    password_hash,
    photo_profile,
    date_birth,
    phone_number,
    country,
    state,
  };
}

export function newUserObject({
  first_name,
  last_name,
  email,
  password_hash,
  photo_profile,
  date_birth,
  phone_number,
  country,
  state,
  group,
  date_last_login,
  locale_last_login,
  account_status,
}) {
  return {
    first_name,
    last_name,
    email,
    password_hash,
    photo_profile,
    date_birth,
    phone_number,
    country,
    state,
    group,
    date_last_login,
    locale_last_login,
    account_status,
  };
}

export function loginUserObject({ email, password_hash }) {
  return { email, password_hash };
}
