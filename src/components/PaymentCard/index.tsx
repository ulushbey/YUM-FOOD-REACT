// import styles from "../styles/Home.module.css";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { serverApi } from "lib/config";
import { useAppSelector } from "store/store";
const PaymentCard = () => {
  const products = useAppSelector((state) => state.cart.products);
  const makePayment = async () => {
    // const stripe = await loadStripe(
    //   "pk_test_51PFGnsP0HCixb7w2JqZdsWB79JM5oxsoSLOXH9h63q7J76fhrCBJZ1kAHXdd0vl7x14FnOVcrshbJqegVuHUyHMB00cNpz9Id7"
    // );
    // const body = {
    //   products: products,
    // };
    // const res = axios.post(`${serverApi}/create-checkout-session`, body);
  };
  return <div className={""}></div>;
};

export default PaymentCard;
