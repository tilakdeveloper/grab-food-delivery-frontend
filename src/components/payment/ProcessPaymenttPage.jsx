import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useError } from '../common/ErrorDisplay';
import Payment from "./Payment";

const ProcessPaymenttPage = () => {

    const [searchParams] = useSearchParams();
    const [paymentCompleted, setPaymentCompleted] = useState(false);


    const navigate = useNavigate();
    const { ErrorDisplay, showError } = useError();

    const [orderDetails, setOrderDetails] = useState({
        orderId: '',
        amount: 0
    })

    useEffect(() => {

        const orderId = searchParams.get('orderid');
        const amount = searchParams.get('amount');


        if (!orderId || !amount) {
            showError('Missing order information in URL');
            return;
        }


        if (isNaN(amount)) {
            showError('Invalid amount specified');
            return;
        }

        setOrderDetails({
            orderId: orderId,
            amount: amount
        });


    }, [searchParams])





    const handlePaymentSuccess = (paymentIntent) => {

        console.log('Payment succeeded:', paymentIntent);

        setPaymentCompleted(true);

        setTimeout(() => {
            navigate('/my-order-history');
        }, 8000);
    };



    if (paymentCompleted) {
        return (
            <div className="payment-success">
                <h2>Payment Successful!</h2>
                <p>Thank you for your purchase. Order ID: {orderDetails.orderId}</p>
                <p>You will receive an email of your payment success</p>
            </div>
        );
    }


    return (
        <div className="checkout-container">
            <ErrorDisplay />

            {/* <h1>Grab Food</h1> */}

            <Payment
                amount={orderDetails.amount}
                orderId={orderDetails.orderId}
                onSuccess={handlePaymentSuccess}
            />

        </div>
    )

}
export default ProcessPaymenttPage;