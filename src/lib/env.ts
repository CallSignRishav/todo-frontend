const env = {
  API_URL: process.env.API_URL as string,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL as string,

  JWT_SECRET: process.env.JWT_SECRET as string,
};

export default env;
