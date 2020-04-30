export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "gr-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://y8gf5yep46.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_X1ZXsLQ8J",
      APP_CLIENT_ID: "30k24gfotu66r3i0ufo7levnmr",
      IDENTITY_POOL_ID: "us-east-2:78af062d-9888-40c7-92d9-a377724ea135"
    }
  };