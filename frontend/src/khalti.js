const khaltiConfig = {
    publicKey: "6f3fd42a1a684acb8416d5e3477c4c5d",  // Replace with your actual public key
    productIdentity: "1234567890",  // Unique identifier for the product/service
    productName: "Sample Product",  // Name of the product/service
    productUrl: "http://127.0.0.1:5173",  // URL of your product or service
    eventHandler: {
        onSuccess: (payload) => {
            console.log("Payment Successful:", payload);
            // Send payload to backend for verification
            fetch('/api/payment/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: payload.token, amount: payload.amount })
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    alert("Payment Verified Successfully!");
                } else {
                    alert("Payment Verification Failed!");
                }
            })
            .catch(error => console.error('Verification Error:', error));
        },
        onError: (error) => {
            console.log("Payment Error:", error);
            alert("Payment Failed. Please try again.");
        },
        onClose: () => {
            console.log("Khalti widget is closing");
        }
    },
    paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"]
};

export default khaltiConfig;

export { khaltiConfig };
