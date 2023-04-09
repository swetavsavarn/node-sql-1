const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
const region = "ap-south-1";

// Set up AWS credentials
const credentials = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
};


async function getSecrets() {
  try {
    // Create an Secrets Manager client
    const client = new SecretsManagerClient({ region, credentials });

    // Get secret value
    const secretName = process.env.SECRET_NAME;
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const data = await client.send(command);

    if (data.SecretString !== undefined) {
      return data.SecretString;
    } else {
      const buff = Buffer.from(data.SecretBinary, 'base64');
      console.log(`decodedBinarySecret ${buff.toString('ascii')}`);
      return buff.toString('ascii');
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}
// getSecrets()

module.exports = {
  getSecrets: getSecrets
};
