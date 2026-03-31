export class ApiUtils {
    constructor(apiContext, loginPayload) {

        this.apiContext = apiContext;
        this.loginPayload = loginPayload;

    }

    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayload
            });

        if (!loginResponse.ok()) {
            const errorText = await loginResponse.text();
            throw new Error(`Login failed: ${loginResponse.status()} ${errorText}`);
        }

        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;

        if (!token) {
            throw new Error(`Login succeeded but token is missing. Response: ${JSON.stringify(loginResponseJson)}`);
        }

        return token;

    }

    //create order - login token, oderPayload
    async createOrder(orderPayload) {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,

                headers: {
                    'Authorization': response.token,
                    'Content-type': 'application/json'
                }

            });

        if (!orderResponse.ok()) {
            const errorText = await orderResponse.text();
            throw new Error(`Create order failed: ${orderResponse.status()} ${errorText}`);
        }

        const orderResponseJson = await orderResponse.json();
        //const orderId = orderResponseJson?.orders?.[0];
        const orderId = orderResponseJson.orders[0];

        if (!orderId) {
            throw new Error(`Order ID missing in create-order response: ${JSON.stringify(orderResponseJson)}`);
        }

        response.orderId = orderId;
        return response;

    }
}