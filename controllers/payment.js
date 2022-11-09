let axios = require("axios");
class Payment {
  static async getPayRequest(req, res, next) {
    try {
      // let inf = infin
      const randomId = Math.floor(Math.random() * Infinity);
      let url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic U0ItTWlkLXNlcnZlci05cGtlMVdZRFFqcjlmcklfTTU5bHl2Umg6`,
        },
      };
      const body = {
        transaction_details: {
          order_id: `PASS-${randomId}`, // id order // increment
          gross_amount: 10000, // total price
        },
        credit_card: {
          secure: true,
        },
      };
      const { data } = await axios.post(url, body, config);
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Payment;
