import { util } from "@monorepo/utils";

export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `This a message from the serverless backend and ${util()}`,
      },
      null,
      2
    ),
  };
};
