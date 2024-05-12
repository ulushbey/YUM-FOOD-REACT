import axios from "axios";
import { serverApi } from "lib/config";
import { Member } from "lib/types/member";
import { toast } from "react-toastify";

export const SIGN_IN = async (name: string, password: string) => {
  try {
    const url = serverApi + "/member/login";
    const result = await axios.post(
      url,
      { memberNick: name, memberPassword: password },
      { withCredentials: true }
    );
    const member: Member = result.data.member;
    localStorage.setItem("memberData", JSON.stringify(member));
    localStorage.setItem("accessToken", result.data.accessToken);
    toast.success("Logged In");
    return true;
  } catch (err: any) {
    console.log("Error, signup", err);
    toast.error(err.response.data.message || err.message);
    throw err;
  }
};
export const SIGN_UP = async (
  name: string,
  phone: string,
  password: string,
  address: string
) => {
  try {
    console.log(
      " { memberName: name, memberPhone: phone, memberPassword: password },: ",
      { memberName: name, memberPhone: phone, memberPassword: password }
    );
    const url = serverApi + "/member/signup";
    const result = await axios.post(
      url,
      {
        memberNick: name,
        memberPhone: phone,
        memberPassword: password,
        memberAdress: address,
      },
      { withCredentials: true }
    );
    console.log("signup:", result);

    const member: Member = result.data.member;
    console.log("member:", member);
    localStorage.setItem("memberData", JSON.stringify(member));

    return member;
  } catch (err) {
    console.log("Error, signup", err);
    throw err;
  }
};
