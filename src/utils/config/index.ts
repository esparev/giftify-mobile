const envConfig = {
  apiBaseURL: 'https://giftify-api.up.railway.app',
  apiV1BaseURL: 'https://giftify-api.up.railway.app/api/v1',
  apiGraphqlURL: 'https://giftify-api.up.railway.app/graphql',
};

const authConfig = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export { envConfig, authConfig };
