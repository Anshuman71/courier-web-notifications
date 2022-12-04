import { CourierClient } from "@trycourier/courier";

const USER_ID = "Github_28081510";

const courier = CourierClient({
  authorizationToken: process.env.COURIER_SERVER_KEY,
});

export default async function handler(req, res) {
  const { requestId } = await courier.send({
    message: {
      to: {
        user_id: USER_ID,
        courier: {
          channel: USER_ID,
        },
      },
      template: "0JF1V5PY79MMZHKWYD4QH4KYDZH0",
      data: {
        recipientName: "Anshuman",
        message: req.body.message,
      },
    },
  });
  return res.send({ requestId });
}
