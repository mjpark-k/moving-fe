import { useState } from "react";

import style from "../../../components/page/login/index.module.css";
import { loginValidation } from "../../../lib/function/validation";
import LoginBtn from "../../../components/page/login/LoginBtn";
import { Link } from "react-router-dom";
import {
  EmailInputComponent,
  PasswordInputComponent,
} from "../../../components/page/login/LoginInput";

type FormLogin = {
  email: string;
  password: string;
};

type FormValidation = {
  email: boolean;
  password: boolean;
};

export default function UserLoginPage() {
  const [values, setValues] = useState<FormLogin>({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState<FormValidation>({
    email: true,
    password: true,
  });

  const inputHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });

    setValidation({
      ...validation,
      [name]: loginValidation(name, value),
    });
  };

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(validation.email && validation.password)) {
      return;
    } else {
      /**TODO API request */
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <svg
            width="140"
            height="80"
            viewBox="0 0 140 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79.9308 41.0571C78.6927 41.0144 77.668 40.8863 76.8569 40.6728C76.0884 40.4167 75.4694 40.0751 74.9998 39.6482C74.5301 39.1786 74.1886 38.6023 73.9751 37.9192C73.8044 37.1934 73.6976 36.3395 73.6549 35.3576C73.6549 34.9734 73.6336 34.3543 73.5909 33.5005C73.5909 32.6039 73.5909 31.622 73.5909 30.5547C73.5909 29.4447 73.5695 28.292 73.5269 27.0966C73.5269 25.9012 73.5269 24.7485 73.5269 23.6385C73.5269 22.5285 73.5269 21.5465 73.5269 20.6927C73.5269 19.8388 73.5269 19.1984 73.5269 18.7715C73.5269 17.1919 73.9538 16.0178 74.8076 15.2494C75.7042 14.4382 76.7928 14.0326 78.0736 14.0326C79.4398 14.0326 80.5498 14.4382 81.4037 15.2494C82.3002 16.0178 82.7485 17.2132 82.7485 18.8355V21.3331C83.5596 21.3331 84.5202 21.3331 85.6302 21.3331C86.7402 21.3331 87.8716 21.3331 89.0243 21.3331C90.177 21.3331 91.3084 21.3331 92.4184 21.3331C93.5284 21.3331 94.489 21.3331 95.3001 21.3331V18.4513C95.3001 16.9571 95.7484 15.8471 96.6449 15.1213C97.5415 14.3955 98.6515 14.0326 99.975 14.0326C101.256 14.0326 102.344 14.3742 103.241 15.0572C104.137 15.7403 104.586 16.7863 104.586 18.1952C104.586 18.7502 104.586 19.8388 104.586 21.4611C104.628 23.0408 104.65 24.7485 104.65 26.5843C104.65 28.42 104.65 30.1704 104.65 31.8355C104.65 33.4578 104.628 34.5891 104.586 35.2295C104.543 36.2115 104.415 37.0653 104.202 37.7911C103.988 38.4742 103.625 39.0505 103.113 39.5201C102.601 39.9471 101.896 40.2886 101 40.5448C100.103 40.8009 98.929 40.9503 97.4774 40.993C96.3674 41.0784 95.0653 41.1425 93.5711 41.1852C92.1195 41.1852 90.6039 41.2065 89.0243 41.2492C87.4874 41.2492 85.9291 41.2492 84.3494 41.2492C82.7698 41.2065 81.2969 41.1425 79.9308 41.0571ZM82.7485 32.2197C82.7912 32.9028 82.9192 33.3084 83.1327 33.4364C83.3462 33.5645 83.8158 33.6499 84.5416 33.6926C85.9077 33.7353 87.3593 33.7566 88.8962 33.7566C90.4332 33.7566 91.8207 33.7139 93.0588 33.6286C93.5284 33.5859 93.9126 33.5645 94.2115 33.5645C94.5103 33.5218 94.7451 33.4791 94.9159 33.4364C95.0867 33.3511 95.1934 33.223 95.2361 33.0522C95.3215 32.8387 95.3642 32.5612 95.3642 32.2197V28.3133C94.553 28.3133 93.5924 28.3133 92.4824 28.3133C91.3724 28.2706 90.2197 28.2493 89.0243 28.2493C87.8716 28.2493 86.7402 28.2706 85.6302 28.3133C84.5202 28.3133 83.5596 28.3133 82.7485 28.3133V32.2197ZM90.8814 55.2097C90.8814 53.2885 91.223 51.5595 91.906 50.0225C92.6318 48.4856 93.6138 47.1835 94.8518 46.1162C96.1326 45.0488 97.6696 44.2377 99.4627 43.6827C101.256 43.1277 103.241 42.8502 105.418 42.8502C107.425 42.8502 109.261 43.1277 110.926 43.6827C112.633 44.2377 114.085 45.0488 115.28 46.1162C116.518 47.1835 117.479 48.4856 118.162 50.0225C118.845 51.5168 119.187 53.2458 119.187 55.2097C119.187 56.9601 118.866 58.5824 118.226 60.0767C117.628 61.5709 116.732 62.873 115.536 63.983C114.341 65.0931 112.889 65.9683 111.182 66.6086C109.517 67.249 107.596 67.5692 105.418 67.5692C103.241 67.5692 101.256 67.249 99.4627 66.6086C97.7123 65.9683 96.1967 65.0931 94.9159 63.983C93.6351 62.873 92.6318 61.5709 91.906 60.0767C91.223 58.5824 90.8814 56.9601 90.8814 55.2097ZM100.359 55.0816C100.359 56.3197 100.807 57.3443 101.704 58.1555C102.601 58.924 103.775 59.3082 105.226 59.3082C106.72 59.3082 107.916 58.924 108.812 58.1555C109.752 57.3443 110.221 56.3197 110.221 55.0816C110.221 53.7155 109.773 52.6695 108.876 51.9437C107.98 51.1752 106.763 50.791 105.226 50.791C103.775 50.791 102.601 51.1539 101.704 51.8797C100.807 52.5627 100.359 53.6301 100.359 55.0816ZM113.487 17.875C113.402 16.0819 113.743 14.737 114.512 13.8405C115.323 12.9013 116.518 12.4316 118.098 12.4316C119.55 12.4316 120.724 12.8799 121.62 13.7765C122.559 14.6303 123.072 16.0819 123.157 18.1311C123.242 20.3084 123.285 22.251 123.285 23.9587C123.328 25.6237 123.349 27.2033 123.349 28.6975C123.349 30.1491 123.328 31.5366 123.285 32.8601C123.285 34.1836 123.264 35.5497 123.221 36.9586C123.136 39.0078 122.687 40.6302 121.876 41.8255C121.065 43.0209 119.848 43.6186 118.226 43.6186C116.604 43.6186 115.408 43.149 114.64 42.2098C113.914 41.2278 113.615 39.6482 113.743 37.4709C113.786 36.3609 113.807 35.0161 113.807 33.4364C113.85 31.8568 113.85 30.1918 113.807 28.4414C113.807 26.6483 113.765 24.8339 113.679 22.9981C113.637 21.1623 113.573 19.4546 113.487 17.875Z"
              fill="#1B92FF"
            />
            <path
              d="M44.1369 67.1847C42.8988 67.1847 41.7248 66.7578 40.6148 65.904C39.5474 65.0501 38.9711 63.7907 38.8857 62.1257C38.8857 61.6133 38.8644 60.9943 38.8217 60.2685C38.8217 59.5428 38.8003 58.7529 38.7576 57.8991C38.7576 57.0452 38.7576 56.1487 38.7576 55.2094C38.7576 54.2702 38.7576 53.331 38.7576 52.3917C35.6411 52.349 32.6099 52.285 29.6641 52.1996C26.761 52.1142 24.1354 51.9648 21.7873 51.7513C19.8234 51.5806 18.4573 51.111 17.6888 50.3425C16.9203 49.5313 16.5788 48.5067 16.6642 47.2686C16.7496 46.0305 17.1551 45.0272 17.8809 44.2588C18.6494 43.4476 20.0582 43.0847 22.1075 43.1701C25.5656 43.2982 29.1518 43.4049 32.866 43.4903C36.623 43.533 40.3586 43.5543 44.0729 43.5543C47.8298 43.5543 51.5441 43.533 55.2157 43.4903C58.8872 43.4049 62.388 43.2768 65.7181 43.1061C67.8954 43.0207 69.411 43.4263 70.2648 44.3228C71.1614 45.1767 71.6096 46.2653 71.6096 47.5888C71.6096 48.8269 71.2681 49.7875 70.585 50.4706C69.9446 51.111 68.8133 51.5165 67.191 51.6873C65.3125 51.9008 62.815 52.0715 59.6984 52.1996C56.6245 52.285 53.2518 52.349 49.5802 52.3917C49.5375 53.7579 49.4948 55.1668 49.4521 56.6183C49.4521 58.0272 49.4521 59.3079 49.4521 60.4606C49.4521 61.6133 49.2814 62.5953 48.9398 63.4064C48.641 64.2603 48.2354 64.9647 47.7231 65.5197C47.2535 66.0747 46.6985 66.4803 46.0581 66.7365C45.4177 67.0353 44.7773 67.1847 44.1369 67.1847ZM22.3636 30.6185C22.3636 28.9961 22.3636 27.6513 22.3636 26.584C22.3636 25.5167 22.3636 24.5988 22.3636 23.8303C22.4063 23.0192 22.4277 22.2934 22.4277 21.653C22.4704 21.0126 22.5344 20.2868 22.6198 19.4757C22.7479 18.0668 23.1962 17.0209 23.9646 16.3378C24.7331 15.612 25.9925 15.2278 27.7429 15.1851C30.4326 15.1424 33.1862 15.0997 36.004 15.057C38.8644 15.0143 41.7034 14.993 44.5211 14.993C47.3389 14.9503 50.0925 14.9503 52.7822 14.993C55.4718 14.993 58.012 15.057 60.4028 15.1851C62.1532 15.2705 63.4127 15.6547 64.1811 16.3378C64.9496 17.0209 65.3979 18.0668 65.5259 19.4757C65.5686 20.2868 65.6113 21.0126 65.654 21.653C65.6967 22.2934 65.7181 23.0192 65.7181 23.8303C65.7607 24.5988 65.7821 25.5167 65.7821 26.584C65.7821 27.6513 65.7821 28.9961 65.7821 30.6185C65.7821 32.1554 65.6754 33.4575 65.4619 34.5249C65.2911 35.5495 64.9069 36.4033 64.3092 37.0864C63.7115 37.7268 62.8576 38.2178 61.7476 38.5593C60.6376 38.9008 59.1434 39.1357 57.2649 39.2637C55.6426 39.3491 53.7428 39.4132 51.5654 39.4559C49.3881 39.4985 47.104 39.5199 44.7133 39.5199C42.3225 39.5199 39.9103 39.4985 37.4769 39.4559C35.0861 39.4132 32.8874 39.3705 30.8808 39.3278C29.0024 39.2851 27.5081 39.093 26.3981 38.7514C25.2881 38.4099 24.4342 37.8976 23.8365 37.2145C23.2388 36.4887 22.8333 35.5922 22.6198 34.5249C22.449 33.4575 22.3636 32.1554 22.3636 30.6185ZM32.0335 24.7909C31.9908 25.6021 31.9695 26.2638 31.9695 26.7761C32.0122 27.2457 32.0549 27.8861 32.0976 28.6973C32.183 29.5938 32.3751 30.1915 32.6739 30.4904C33.0155 30.7892 33.6772 30.96 34.6591 31.0027C35.8972 31.0454 37.3274 31.0881 38.9497 31.1308C40.6148 31.1308 42.3011 31.1308 44.0088 31.1308C45.7592 31.1308 47.4669 31.1308 49.132 31.1308C50.797 31.0881 52.2485 31.0454 53.4866 31.0027C54.4685 30.96 55.1089 30.7892 55.4078 30.4904C55.7493 30.1915 55.9628 29.5938 56.0482 28.6973C56.0909 27.8861 56.1122 27.2457 56.1122 26.7761C56.1549 26.2638 56.1549 25.6021 56.1122 24.7909C56.0695 24.3213 55.9628 24.0011 55.792 23.8303C55.6639 23.6596 55.3224 23.5528 54.7674 23.5101C53.6574 23.4248 52.1204 23.3821 50.1566 23.3821C48.2354 23.3394 46.2075 23.318 44.0729 23.318C41.9809 23.318 39.953 23.3394 37.9892 23.3821C36.0253 23.4248 34.4884 23.4675 33.3784 23.5101C32.8234 23.5528 32.4605 23.6596 32.2897 23.8303C32.1616 24.0011 32.0762 24.3213 32.0335 24.7909Z"
              fill="#1B92FF"
            />
          </svg>
          <p>
            기사님이신가요?<Link to="/driver/login">기사님 전용 페이지</Link>
          </p>
        </div>
        <div className={style.mid}>
          <form className={style.loginForm} onSubmit={loginSubmit}>
            <EmailInputComponent
              value={values.email}
              inputHeandler={inputHeandler}
              validation={validation.email}
            />
            <PasswordInputComponent
              value={values.password}
              inputHeandler={inputHeandler}
              validation={validation.password}
            />
            <LoginBtn
              context="로그인"
              validation={
                !!values.email &&
                !!values.password &&
                validation.email &&
                validation.password
              }
            />
          </form>

          <p>
            아직 무빙 회원이 아니신가요?
            <Link to="/user/signup">이메일로 회원가입하기</Link>
          </p>
        </div>
        <div className={style.bottom}>
          <span>SNS 계정으로 간편 가입하기</span>
          <div className={style.snsIcon}>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36" cy="36" r="36" fill="#F2F2F2" />
              <g clipPath="url(#clip0_226_13073)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.5006 36.3072C49.5017 35.381 49.4179 34.4565 49.2501 33.5449H36.2725V38.7669H43.6866C43.5327 39.592 43.2098 40.378 42.7374 41.0775C42.265 41.777 41.6528 42.3754 40.9379 42.8366V46.2246H45.3893C47.9939 43.8744 49.4967 40.4126 49.4967 36.3047L49.5006 36.3072Z"
                  fill="#3E82F1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.2759 49.4983C39.9953 49.4983 43.1139 48.2901 45.3927 46.2285L40.9414 42.8405C39.7072 43.6506 38.1291 44.1301 36.2759 44.1301C32.6876 44.1301 29.6508 41.7544 28.5685 38.5635H23.9653V42.0622C25.112 44.2983 26.8706 46.178 29.0445 47.4911C31.2185 48.8043 33.7222 49.4992 36.2759 49.4983Z"
                  fill="#32A753"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.5683 38.5633C27.9921 36.9003 27.9921 35.0973 28.5683 33.4342V29.9355H23.9651C23.0017 31.8173 22.5 33.8935 22.5 35.9988C22.5 38.1041 23.0017 40.1803 23.9651 42.062L28.5683 38.5633Z"
                  fill="#F9BB00"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.2758 27.8682C38.299 27.8682 40.1146 28.5499 41.5421 29.8878L45.4925 26.0152C43.1072 23.8366 39.9887 22.5 36.2784 22.5C33.7246 22.4991 31.2209 23.194 29.047 24.5072C26.873 25.8203 25.1145 27.7 23.9678 29.9361L28.5709 33.4348C29.6533 30.2439 32.6901 27.8682 36.2784 27.8682H36.2758Z"
                  fill="#E74133"
                />
              </g>
              <defs>
                <clipPath id="clip0_226_13073">
                  <rect
                    width="27"
                    height="27"
                    fill="white"
                    transform="translate(22.5 22.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36" cy="36" r="36" fill="#FAE300" />
              <g clipPath="url(#clip0_1_1279)">
                <path
                  d="M31.9629 35.0875H33.6908L32.8268 32.6934L31.9629 35.0875Z"
                  fill="#331D1E"
                />
                <path
                  d="M36 22.5C27.7154 22.5 21 27.664 21 34.0349C21 38.1536 23.8082 41.7716 28.0312 43.8085C27.8019 44.5808 26.5543 48.7798 26.5053 49.1103C26.5053 49.1103 26.475 49.3579 26.6394 49.4522C26.6944 49.4792 26.7545 49.4951 26.816 49.4987C26.8775 49.5023 26.9392 49.4937 26.9971 49.4733C27.4702 49.4086 32.4779 45.9833 33.3433 45.3939C34.2235 45.5131 35.1113 45.5718 36 45.5697C44.2846 45.5697 51 40.4058 51 34.0349C51 27.664 44.2846 22.5 36 22.5ZM28.5764 32.2441C28.5577 33.8759 28.5909 35.5921 28.5635 37.1985C28.5548 37.7119 28.2519 37.8653 27.8423 38.0116C27.796 38.0275 27.7462 38.0309 27.6981 38.0214C27.2293 37.9314 26.8558 37.7682 26.8442 37.1999C26.8111 35.5949 26.8543 33.8759 26.8313 32.2441C26.4346 32.2287 25.8692 32.2596 25.5014 32.2441C24.9909 32.2118 24.6361 31.8953 24.6577 31.424C24.6793 30.9528 24.9375 30.6138 25.5101 30.6053C26.863 30.5857 28.5389 30.5857 29.8918 30.6053C30.4688 30.6138 30.7255 30.9542 30.7428 31.424C30.7601 31.8939 30.4111 32.2118 29.9019 32.2441C29.5385 32.2596 28.9745 32.2287 28.5764 32.2441ZM35.8457 37.9342C35.6727 38.011 35.4848 38.0508 35.2947 38.051C34.9341 38.051 34.6587 37.9103 34.5736 37.6782L34.1409 36.5838H31.5072L31.0745 37.6782C30.9909 37.9075 30.7154 38.051 30.3534 38.051C30.1637 38.051 29.9763 38.0111 29.8038 37.9342C29.5644 37.8273 29.3351 37.5319 29.5976 36.7357L31.6731 31.4212C31.7601 31.1871 31.916 30.9833 32.1212 30.8351C32.3265 30.687 32.5719 30.6012 32.8269 30.5885C33.0817 30.6026 33.3267 30.6891 33.5317 30.8373C33.7367 30.9855 33.8928 31.189 33.9808 31.4226L36.049 36.7343C36.313 37.5319 36.0837 37.8329 35.8457 37.9342ZM40.2188 37.9342H37.4423C37.2273 37.9384 37.0193 37.8593 36.8639 37.7143C36.7085 37.5693 36.6183 37.3702 36.613 37.1605V31.4325C36.6222 31.21 36.7193 30.9996 36.884 30.8454C37.0486 30.6911 37.2681 30.605 37.4964 30.605C37.7247 30.605 37.9442 30.6911 38.1088 30.8454C38.2735 30.9996 38.3706 31.21 38.3798 31.4325V36.3911H40.2188C40.3269 36.3847 40.4353 36.4 40.5373 36.436C40.6392 36.472 40.7325 36.5279 40.8114 36.6004C40.8903 36.6729 40.9532 36.7603 40.9962 36.8574C41.0391 36.9544 41.0613 37.059 41.0613 37.1647C41.0613 37.2705 41.0391 37.3751 40.9962 37.4721C40.9532 37.5692 40.8903 37.6566 40.8114 37.7291C40.7325 37.8015 40.6392 37.8575 40.5373 37.8935C40.4353 37.9295 40.3269 37.9448 40.2188 37.9384V37.9342ZM46.9976 37.2984C46.9751 37.4649 46.9022 37.621 46.7881 37.7469C46.6741 37.8727 46.5242 37.9625 46.3576 38.0048C46.1909 38.0471 46.0152 38.04 45.8527 37.9843C45.6903 37.9286 45.5485 37.8269 45.4457 37.6922L43.4163 35.0716L43.1163 35.3642V37.2055C43.1163 37.4294 43.0252 37.6441 42.8629 37.8023C42.7006 37.9606 42.4805 38.0495 42.251 38.0495C42.0214 38.0495 41.8013 37.9606 41.639 37.8023C41.4768 37.6441 41.3856 37.4294 41.3856 37.2055V31.4381C41.3856 31.2143 41.4768 30.9996 41.639 30.8413C41.8013 30.683 42.0214 30.5941 42.251 30.5941C42.4805 30.5941 42.7006 30.683 42.8629 30.8413C43.0252 30.9996 43.1163 31.2143 43.1163 31.4381V33.2471L45.5308 30.8923C45.594 30.8314 45.669 30.7833 45.7515 30.7509C45.8339 30.7186 45.9222 30.7025 46.0111 30.7038C46.2272 30.7093 46.4335 30.7925 46.5906 30.9374C46.7477 31.0823 46.8443 31.2786 46.862 31.4887C46.8698 31.5825 46.857 31.6768 46.8244 31.7654C46.7918 31.8539 46.7402 31.9346 46.6731 32.0022L44.6971 33.9251L46.8274 36.678C46.9653 36.8566 47.025 37.0812 46.9933 37.3026L46.9976 37.2984Z"
                  fill="#331D1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1279">
                  <rect
                    width="30"
                    height="27"
                    fill="white"
                    transform="translate(21 22.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36" cy="36" r="36" fill="#03C75A" />
              <g clipPath="url(#clip0_1_1275)">
                <path
                  d="M40.2737 36.844L31.3753 24H24V48H31.7263V35.154L40.6247 48H48V24H40.2737V36.844Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1275">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(24 24)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
