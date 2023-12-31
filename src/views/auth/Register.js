import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { FiUpload, FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import Avatar1 from "@src/assets/images/avatars/registerAvatar1.svg";
import Avatar2 from "@src/assets/images/avatars/registerAvatar2.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Register = () => {
  const {t} = useTranslation()
  const path = useLocation().pathname;
  const {isChanged} = useSelector(state => state.register)

  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "white";
    return () => document.getElementById("root").removeAttribute("style");
  }, []);

  return (
    // secreen main div
    <div class="main bg-white">
      <div className="shadow bg-white p-2">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          {/* <Col
          className="  px-1  p-2"
          lg="1"
          sm="2"
        >
        </Col> */}
          <svg
            width="98"
            height="30"
            viewBox="0 0 98 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4689 0C12.703 0.161598 10.2369 0.709628 5.90184 1.82676C2.86661 2.60665 1.00472 3.11252 0 3.38654C0.042156 5.26951 0.330219 9.92072 2.01646 16.8554C3.65352 23.6004 9.56942 27.542 13.4618 29.9659C17.3613 27.542 23.2701 23.5933 24.9072 16.8554C26.5934 9.92072 26.8815 5.26951 26.9237 3.38654C25.9189 3.11252 24.057 2.60665 21.0218 1.82676C16.7008 0.709628 14.2347 0.168624 13.4689 0Z"
              fill="#0A1172"
            />
            <path
              d="M6.54654 3.11815L6.54677 3.11809C10.4332 2.1163 12.6949 1.60929 13.4739 1.44317C14.2557 1.61541 16.5177 2.11655 20.3903 3.11803L20.3908 3.11815C22.9587 3.77811 24.6195 4.22619 25.5967 4.49222C25.5369 6.36673 25.2261 10.5446 23.7445 16.6391L23.7445 16.6392C22.2882 22.6346 17.0861 26.2125 13.4688 28.4716C9.85699 26.2123 4.64913 22.6408 3.19287 16.6392L3.19284 16.6391C1.71127 10.5446 1.40046 6.36672 1.34065 4.49222C2.31791 4.22618 3.9787 3.77811 6.54654 3.11815Z"
              stroke="#B4B5B8"
              strokeWidth="0.685448"
            />
            <path
              d="M16.0372 16.0373L16.0368 16.0367C15.4978 15.1172 14.8499 14.3508 13.8096 14.062L13.8095 14.0619C12.999 13.8363 12.1819 13.8774 11.3856 14.1218C10.9209 14.2661 10.4699 14.4545 10.0142 14.6449C9.8436 14.7161 9.67238 14.7877 9.49953 14.8572L9.49932 14.8573C9.4158 14.8906 9.3325 14.9356 9.22844 14.9918C9.20621 15.0038 9.18303 15.0163 9.1587 15.0293L9.05638 15.0841V14.968C9.05638 14.79 9.05121 14.6129 9.04608 14.437C9.03476 14.049 9.02362 13.6675 9.06863 13.2979C9.24699 11.7069 9.85447 10.3227 11.109 9.29948L11.1091 9.29939C11.6828 8.83359 12.3274 8.51552 13.018 8.30181L13.019 8.3015L13.019 8.30151C13.1275 8.26973 13.2349 8.19378 13.3172 8.10375L13.3183 8.10263L13.3183 8.10264C13.6185 7.78816 14.0692 7.75034 14.3831 8.05219L14.3836 8.05265C14.6759 8.33908 14.6883 8.81731 14.4035 9.12276L14.4034 9.12279C14.1119 9.4351 13.6267 9.44451 13.3446 9.10171M16.0372 16.0373L13.398 9.05722M16.0372 16.0373C16.0561 16.0687 16.0688 16.104 16.0832 16.1526C16.0848 16.1582 16.0865 16.164 16.0882 16.1699C16.0687 16.1592 16.0495 16.1486 16.0305 16.1382C16.0032 16.1231 15.9763 16.1083 15.9495 16.0938C15.8615 16.046 15.7761 16.002 15.6866 15.9672C14.7255 15.572 13.6388 15.9652 12.9469 16.9217L12.9469 16.9217C12.3219 17.7867 12.3452 18.8682 13.045 19.6734L13.0451 19.6735C13.7626 20.4959 14.6988 20.8109 15.7439 20.7123L15.744 20.7123C17.6677 20.5291 19.2282 19.618 20.441 18.0876C20.5434 17.9592 20.6306 17.8778 20.7836 17.8465L20.7836 17.8465L20.7853 17.8461C21.192 17.7519 21.4237 17.3238 21.314 16.9261C21.2046 16.5235 20.7846 16.2728 20.4014 16.3944C19.9949 16.5202 19.7582 16.9529 19.9151 17.3621L19.9153 17.3624C19.9468 17.4432 19.9496 17.5009 19.9375 17.5504C19.925 17.6018 19.8944 17.6526 19.8434 17.7166C18.8636 18.9188 17.6229 19.6654 16.1308 19.9523L16.1306 19.9524C15.2799 20.1186 14.4776 19.9992 13.7842 19.4232C13.2344 18.9638 13.0565 18.2947 13.3207 17.6663C13.5807 17.0479 14.0536 16.6752 14.5701 16.5736C15.0862 16.4721 15.6547 16.6393 16.111 17.1189C16.2109 17.2265 16.2978 17.3477 16.386 17.4707C16.3983 17.4879 16.4107 17.5052 16.4232 17.5225C16.4833 17.6082 16.5406 17.6944 16.6018 17.7865C16.6487 17.8571 16.6979 17.931 16.7524 18.011L16.8296 18.1241L16.8753 17.995C16.883 17.9735 16.8885 17.9593 16.8935 17.9466C16.8963 17.9395 16.8988 17.9329 16.9015 17.9257C16.9077 17.9091 16.9139 17.8903 16.9146 17.8675C17.0393 16.748 16.8357 15.7501 16.0797 14.8331L16.0797 14.8331C15.2256 13.7978 14.1999 13.2553 12.8994 13.2123L12.8993 13.2123C11.8957 13.1817 10.9603 13.4453 10.0486 13.8157M16.0372 16.0373L10.0746 13.8801M13.3446 9.10171C13.3445 9.10159 13.3444 9.10148 13.3443 9.10137L13.398 9.05722M13.3446 9.10171C13.3447 9.1018 13.3448 9.1019 13.3448 9.102L13.398 9.05722M13.3446 9.10171C13.2938 9.04151 13.2561 9.01925 13.2224 9.01177C13.1868 9.00389 13.1429 9.00939 13.0723 9.03252M13.398 9.05722C13.2861 8.92425 13.1977 8.91821 13.0504 8.96656C11.1706 9.60115 10.1335 10.9731 9.75641 12.9192C9.71847 13.104 9.69579 13.2928 9.67303 13.4823C9.66751 13.5282 9.66198 13.5742 9.65623 13.6203M13.0723 9.03252C13.0724 9.03249 13.0725 9.03246 13.0726 9.03243L13.0504 8.96656L13.072 9.03262C13.0721 9.03258 13.0722 9.03255 13.0723 9.03252ZM13.0723 9.03252C11.2199 9.65798 10.1978 11.0071 9.82466 12.9324L9.82451 12.9332L9.82451 12.9332C9.78721 13.1149 9.76496 13.3 9.74222 13.4893C9.7367 13.5352 9.73116 13.5814 9.72536 13.6278M9.72536 13.6278C9.72539 13.6274 9.72542 13.627 9.72546 13.6267L9.65623 13.6203M9.72536 13.6278C9.72531 13.6281 9.72527 13.6285 9.72522 13.6289L9.65623 13.6203M9.72536 13.6278C9.71823 13.7054 9.72029 13.7827 9.72276 13.8754C9.7234 13.8997 9.72407 13.925 9.72462 13.9516M9.65623 13.6203C9.64863 13.7021 9.65083 13.7865 9.65336 13.8831C9.65417 13.9142 9.65501 13.9465 9.65557 13.9805C9.67863 13.9709 9.70166 13.9613 9.72462 13.9516M9.1259 14.968C9.1259 14.9417 9.12579 14.9155 9.12559 14.8893C9.1149 14.895 9.10407 14.9008 9.0931 14.9067L9.1259 14.968ZM9.1259 14.968H9.19542C9.19542 14.9555 9.1954 14.9431 9.19535 14.9306C9.19496 14.9308 9.19457 14.931 9.19417 14.9313C9.17221 14.9431 9.1495 14.9554 9.1259 14.968ZM9.72462 13.9516C9.72511 13.9755 9.72549 14.0004 9.72566 14.0266C9.76804 14.0088 9.80956 13.9912 9.85052 13.9737C9.92649 13.9414 10.0005 13.9099 10.0746 13.8801M9.72462 13.9516C9.75717 13.9379 9.7896 13.9241 9.82181 13.9104C9.89903 13.8775 9.97502 13.8452 10.0486 13.8157M10.0486 13.8157C10.0485 13.8157 10.0485 13.8157 10.0484 13.8157L10.0746 13.8801M10.0486 13.8157C10.0486 13.8157 10.0487 13.8156 10.0487 13.8156L10.0746 13.8801"
              fill="white"
              stroke="white"
              strokeWidth="0.139048"
            />
            <path
              d="M14.0735 22.4121C14.335 22.7381 14.8167 22.7313 15.1205 22.4555L15.121 22.455C15.4167 22.1811 15.4363 21.7303 15.1671 21.4306L15.1665 21.43L14.1278 22.3686M14.0735 22.4121L14.1278 22.3686M14.0735 22.4121C14.0736 22.4121 14.0736 22.4122 14.0737 22.4122L14.1278 22.3686M14.0735 22.4121C14.0211 22.3471 13.9683 22.3104 13.9116 22.2878C13.8535 22.2646 13.7879 22.2548 13.7068 22.249M14.1278 22.3686C14.0088 22.221 13.8779 22.1915 13.7113 22.1797M13.7068 22.249C13.7069 22.249 13.707 22.249 13.7072 22.2491L13.7113 22.1797M13.7068 22.249C13.7066 22.249 13.7065 22.249 13.7064 22.249L13.7113 22.1797M13.7068 22.249C8.94501 21.9632 5.26835 17.8213 5.58029 13.1006L5.5803 13.1006C5.85619 8.97014 8.93333 5.66713 13.0644 5.06016C13.2207 5.03629 13.3771 5.01839 13.5335 5.00646L13.5355 5.0063L13.5355 5.00633C13.6605 5.00043 13.7662 4.99171 13.8631 4.95899C13.9577 4.92705 14.0466 4.87119 14.1337 4.76579L14.1338 4.76562C14.2641 4.60913 14.4575 4.54908 14.6467 4.5629C14.8355 4.57668 15.0263 4.66391 15.1607 4.81031C15.43 5.1036 15.4173 5.56051 15.1213 5.83497C14.8287 6.11219 14.367 6.12298 14.0939 5.81891L14.0933 5.81827C14.0406 5.75808 13.9912 5.72627 13.9396 5.70938C13.8866 5.69204 13.8255 5.68856 13.746 5.6942L13.7446 5.6943C10.1359 5.87568 6.93306 8.73262 6.38476 12.2831C6.34163 12.575 6.31425 12.8679 6.28676 13.1621C6.27282 13.3112 6.25885 13.4607 6.24278 13.6105C6.27421 17.6474 9.28742 21.0286 13.3269 21.5202C13.3674 21.5249 13.4089 21.5266 13.4537 21.5285C13.4611 21.5288 13.4687 21.5291 13.4763 21.5294C13.5284 21.5316 13.5843 21.5347 13.6397 21.5443C13.7429 21.5614 13.825 21.5641 13.8985 21.5443C13.9704 21.5249 14.0409 21.4822 14.117 21.396C14.1171 21.3959 14.1172 21.3958 14.1173 21.3957L13.7113 22.1797"
              fill="white"
              stroke="white"
              strokeWidth="0.139048"
            />
            <path
              d="M10.5408 8.74389L10.5788 8.79515L10.6331 8.76164C11.3963 8.29087 11.9114 7.99774 12.4008 7.80434C12.8886 7.61158 13.3535 7.51688 14.0169 7.4474L14.0171 7.44737C16.3021 7.20075 18.233 7.94532 19.7805 9.67817L19.781 9.67873C19.8066 9.70677 19.8296 9.75401 19.8437 9.81046C19.8577 9.86637 19.861 9.92342 19.8538 9.96678L19.8537 9.96794C19.7886 10.4085 20.0564 10.8125 20.4958 10.8731L20.4962 10.8731C20.9013 10.9268 21.291 10.626 21.3375 10.2108C21.3906 9.76718 21.0692 9.40774 20.6196 9.36822L20.6196 9.36819L20.6179 9.36809C20.5361 9.36292 20.4345 9.32026 20.3828 9.26346C18.437 7.06996 16.0085 6.30939 13.1735 6.85437C12.0982 7.05704 11.1149 7.51757 10.2237 8.20396L10.1692 8.24589L10.2105 8.30082C10.3246 8.45247 10.4326 8.59809 10.5408 8.74389Z"
              fill="white"
              stroke="white"
              strokeWidth="0.139048"
            />
            <path
              d="M10.4222 15.1202L10.3614 15.0865C10.2496 15.2882 10.098 15.3633 9.88968 15.4383L9.88968 15.4383L9.88864 15.4386C9.71562 15.5041 9.54876 15.5753 9.38344 15.6459L9.38281 15.6462L9.38244 15.6464C9.03775 15.796 8.69315 15.9507 8.33914 16.1105C8.00189 15.0721 7.92168 14.0391 8.08198 12.9776C8.25173 11.8869 8.69069 10.9062 9.34777 10.0116L9.38883 9.95566L9.33303 9.91447C9.25342 9.8557 9.18116 9.80131 9.11159 9.74895L9.10857 9.74667C9.04016 9.69517 8.97423 9.64554 8.90681 9.59588L8.85377 9.5568L8.8119 9.60768C7.25618 11.4981 6.77854 14.5531 7.95644 17.0202L7.9869 17.084L8.05019 17.0525C8.12188 17.0167 8.19279 16.9813 8.26317 16.9461C8.5419 16.8067 8.81233 16.6715 9.0904 16.54C9.35464 16.4174 9.6221 16.3055 9.89177 16.1926C9.97089 16.1595 10.0502 16.1263 10.1297 16.0927L10.1297 16.0928L10.131 16.0922C10.2167 16.0539 10.2854 16.0285 10.3524 16.0267C10.4154 16.025 10.4839 16.0442 10.5679 16.1122L10.568 16.1123C10.8858 16.3684 11.3573 16.2281 11.5695 15.9016C11.7855 15.5751 11.6945 15.1133 11.3663 14.8972C11.0399 14.6803 10.5576 14.7293 10.3613 15.0868L10.4222 15.1202ZM10.4222 15.1202C10.5939 14.8076 11.026 14.7545 11.3278 14.9551L8.36105 16.1769C8.71737 16.0161 9.06375 15.8605 9.41012 15.7101C9.57585 15.6394 9.74158 15.5686 9.91322 15.5037C10.1263 15.427 10.298 15.3444 10.4222 15.1202ZM7.98956 16.9273C6.86135 14.4963 7.33986 11.5058 8.86558 9.65186C8.9327 9.7013 8.99838 9.75074 9.06688 9.80231C9.13731 9.85533 9.21072 9.91059 9.29174 9.9704C8.62882 10.873 8.18491 11.864 8.01326 12.9671L7.98956 16.9273ZM7.98956 16.9273C7.9891 16.9275 7.98863 16.9278 7.98817 16.928L8.01918 16.9902M7.98956 16.9273L8.01918 16.9902M8.01918 16.9902L8.08192 16.9603C8.08175 16.9599 8.08157 16.9596 8.0814 16.9592L8.01918 16.9902Z"
              fill="white"
              stroke="white"
              strokeWidth="0.139048"
            />
            <path
              d="M14.146 14.6314C14.3386 14.7853 14.5187 14.9299 14.695 15.0749C14.6006 15.0982 14.5272 15.1109 14.4677 15.1127C14.3884 15.1151 14.3483 15.0978 14.3178 15.0692C14.2802 15.0341 14.2394 14.9655 14.1972 14.8282C14.1797 14.7715 14.1629 14.7063 14.146 14.6314Z"
              fill="white"
              stroke="white"
              strokeWidth="0.278096"
            />
            <path
              d="M63.5546 1.42249C62.7957 2.16741 62.1237 2.85339 61.5391 3.47981C61.7409 3.47981 62.6113 3.8838 64.1496 4.69146C64.3863 4.44748 64.6927 4.12049 65.0688 3.70953C65.6119 3.12494 65.8901 2.77672 65.9043 2.66518C65.6464 2.66518 64.8635 2.25106 63.5546 1.42249Z"
              fill="#0A1172"
            />
            <path
              d="M67.2913 11.2794C67.2147 11.8852 67.0512 12.7483 66.8005 13.8694H57.6733C57.5896 13.7857 57.2972 10.301 56.7959 3.41574C56.8795 3.2833 57.4575 2.50352 58.5297 1.07642C58.8152 4.29976 59.1283 7.55099 59.4695 10.8301C59.5528 10.9138 59.9464 10.9556 60.6495 10.9556H65.6307C65.1437 9.61877 64.5727 8.59534 63.9184 7.88527C64.1621 7.52311 64.6668 6.66 65.4327 5.29531C65.69 5.62959 65.9615 6.02661 66.247 6.48605C66.8389 7.43978 67.1941 8.23349 67.3123 8.86688C67.4308 9.45876 67.4238 10.2629 67.2913 11.2794Z"
              fill="#0A1172"
            />
            <path
              d="M51.1147 1.56846C50.5232 1.03234 50.1993 0.764282 50.1436 0.764282C50.0254 0.764282 49.6965 1.02347 49.1569 1.54216C48.6173 2.06085 48.3477 2.3758 48.3477 2.48733C48.3477 2.55007 48.6224 2.80577 49.1724 3.25506C49.7225 3.70405 50.0463 3.92838 50.1436 3.92838C50.276 3.92838 50.6189 3.70911 51.1724 3.27059C51.7259 2.83207 52.0026 2.55704 52.0026 2.4455C52.0026 2.39671 51.7066 2.10457 51.1147 1.56846Z"
              fill="#0A1172"
            />
            <path
              d="M37.214 1.74485C36.612 1.20873 36.2758 0.940674 36.2064 0.940674C36.0879 0.940674 35.759 1.20018 35.2194 1.71886C34.6798 2.23755 34.4102 2.55599 34.4102 2.67449C34.4102 2.74388 34.6833 2.99642 35.2299 3.43146C35.7764 3.86681 36.1018 4.08417 36.2064 4.08417C36.3525 4.08417 36.7077 3.87188 37.2713 3.4473C37.8353 3.0224 38.1173 2.75086 38.1173 2.63235C38.1173 2.5769 37.8163 2.28096 37.214 1.74485Z"
              fill="#0A1172"
            />
            <path
              d="M55.742 6.34983C55.1017 4.67177 54.3184 3.83306 53.3926 3.83306C52.3967 3.83306 51.3907 4.44205 50.3745 5.66035C49.4623 6.74653 49.0064 7.65178 49.0064 8.37579C49.0064 8.91855 49.3023 9.37134 49.8939 9.73318C50.4091 10.0535 50.9556 10.2135 51.5336 10.2135C52.3622 10.2135 53.0269 10.0117 53.5282 9.60803C53.7373 9.3574 53.9496 9.11025 54.1654 8.86659C54.3323 8.98478 54.4819 9.31209 54.6144 9.8482C54.7256 10.2937 54.7813 10.6698 54.7813 10.9762H43.5761V10.9784H42.8043C42.4839 10.9784 42.1741 10.4806 41.875 9.48509C41.7286 8.86532 41.5822 8.24588 41.4361 7.62611C40.9836 5.73957 40.5971 4.29123 40.2771 3.28174C40.2004 3.40721 39.9323 3.924 39.4729 4.83273C39.0135 5.74115 38.7837 6.21643 38.7837 6.25826L39.3579 8.378C39.7479 9.78451 39.9288 10.6511 39.901 10.9784H34.7841C34.3453 10.9784 34.126 10.665 34.126 10.0383C34.126 9.86436 34.1399 9.60518 34.1678 9.26044C34.1957 8.91602 34.2096 8.65652 34.2096 8.48256C33.9866 8.57287 33.7847 8.81336 33.6038 9.20309C33.4996 9.44675 33.4299 9.6695 33.3947 9.87133C33.1653 11.1733 32.9945 12.2769 32.8833 13.1821C32.8833 13.37 32.9476 13.5351 33.0763 13.678C33.2052 13.8206 33.3602 13.8922 33.5411 13.8922H38.9507C39.2083 13.8922 39.452 13.6412 39.6817 13.14C39.9393 12.5902 40.1307 12.2839 40.2558 12.2211C40.3116 12.3114 40.4475 12.698 40.6633 13.3802C40.7748 13.7214 40.9453 13.8922 41.175 13.8922H44.0052V13.89H47.4193V13.8897H55.8361C55.9965 13.7157 56.16 13.0367 56.3269 11.8532C56.4524 10.9689 56.5152 10.3634 56.5152 10.0361C56.5288 8.9363 56.2712 7.70723 55.742 6.34983ZM52.4838 7.56116C52.2959 7.56116 52.1217 7.54024 51.9617 7.49842C51.4883 7.25476 51.1679 7.04595 51.001 6.87168C51.2864 6.43316 51.6065 6.19996 51.9617 6.17207C52.3866 6.13025 52.8704 6.54121 53.4135 7.40463C53.0722 7.50887 52.7623 7.56116 52.4838 7.56116Z"
              fill="#0A1172"
            />
            <path
              d="M41.7712 29.2145L36.2059 22.6524V29.2145H32.8833V16.8711H35.2922L40.791 23.3335V16.8711H44.1136V29.2145H41.7712Z"
              fill="#0A1172"
            />
            <path
              d="M53.2408 25.3603L51.646 20.1937L50.2339 25.3603H53.2408ZM54.437 29.2145L53.922 27.5366H49.6525L49.1873 29.2145H45.5325L49.6192 16.8711H53.8223L58.341 29.2145H54.437Z"
              fill="#0A1172"
            />
            <path
              d="M59.7579 29.2145V16.8711H68.2969V19.8282H63.1635V22.6358H67.7653V25.5763H63.1635V29.2145H59.7579Z"
              fill="#0A1172"
            />
            <path
              d="M70.2727 29.2145V16.8711H73.7946V29.2145H70.2727Z"
              fill="#0A1172"
            />
            <path
              d="M85.1084 20.2103H81.9686V29.2145H78.5629V20.2103H75.4231V16.8711H85.1084V20.2103Z"
              fill="#0A1172"
            />
            <path
              d="M93.8722 29.2145V24.8121H90.018V29.2145H86.6124V16.8711H90.018V21.8716H93.8722V16.8711H97.2779V29.2145H93.8722Z"
              fill="#0A1172"
            />
          </svg>
        </Link>
      </div>
      <div className="m-2">
        <div className="row align-items-center">
          <div className="col-lg-4 d-lg-block d-none">
            {isChanged ? (
              <img
                src={Avatar2}
                width="100%"
                height="100%"
                alt="second image"
              />
            ) : (
              <img
                className=""
                src={Avatar1}
                width="100%"
                height="100%"
                alt="first image"
              />
            )}
          </div>
          <div className="col-lg-8 col-sm-12 px-sm-2  register_page_content">
            <div className="width-80-per mx-auto">
              {/* steps headers start */}
              <div className="d-flex flex-column flex-md-row gap-lg-1 gap-2  ">
                {/* accounts */}
                <div className="d-flex align-items-center gap-1">
                  <div
                    class="p-1 rounded"
                    style={{
                      backgroundColor: path === '/register/account-details' ? "#0A1172" : "#F8F7FA",
                      color: path === '/register/account-details' ? "white" : "black",
                    }}
                  >
                    <TbSmartHome size={20} />
                  </div>
                  <div>
                    <span className="d-block fs-5 fw-bolder">{t("Account")}</span>
                    <span>{t("Account Details")}</span>
                  </div>
                </div>
                <div className="h-25 my-auto">
                  <div>
                    <span>
                      <MdKeyboardArrowRight size={25} />
                    </span>
                  </div>
                </div>
                {/* personal information */}
                <div className="d-flex align-items-center gap-1">
                  <div
                    className="p-1 rounded"
                    style={{
                      backgroundColor: path === '/register/personal-details' ? "#0A1172" : "#F8F7FA",
                      color: path === '/register/personal-details' ? "white" : "black",
                    }}
                  >
                    <FiUsers size={20} />
                  </div>

                  <div>
                    <span className="fs-5 d-block fw-bolder">{t("Personal")}</span>
                    <span>{t("Enter information")}</span>
                  </div>
                </div>
                <div className="h-25 my-auto">
                  <span>
                    <MdKeyboardArrowRight size={25} />
                  </span>
                </div>
                {/* upload */}
                <div className="d-flex align-items-center gap-1">
                  <div
                    className="p-1 rounded"
                    style={{
                      backgroundColor: path === '/register/upload-items' ? "#0A1172" : "#F8F7FA",
                      color: path === '/register/upload-items' ? "white" : "black",
                    }}
                  >
                    <FiUpload size={20} />
                  </div>

                  <div>
                    <span className="fs-5 d-block fw-bolder">{t("Upload")}</span>
                    <span>{t("User Info Upload ")}</span>
                  </div>
                </div>
                <div className="h-25 my-auto">
                  <span>
                    <MdKeyboardArrowRight size={25} />
                  </span>
                </div>
                {/* Verification */}
                <div className="d-flex align-items-center gap-1">
                  {
                    <div
                      className="p-1 rounded"
                      style={{
                        backgroundColor: path === '/register/verify-email' ? "#0A1172" : "#F8F7FA",
                        color: path === '/register/verify-email' ? "white" : "black",
                      }}
                    >
                      <IoDocumentTextOutline size={20} />
                    </div>
                  }
                  <div>
                    <span className="fs-5" style={{ fontWeight: "bold" }}>
                      {t("Verification")}
                    </span>
                    <br />
                    <span>{t("Notify of Completion")}</span>
                  </div>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;

// // ** React Imports
// import { useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// // ** Custom Hooks
// // import { useSkin } from '@hooks/useSkin'
// import useJwt from '@src/auth/jwt/useJwt'

// // ** Store & Actions
// import { useDispatch } from 'react-redux'
// import { handleLogin } from '@store/authentication'

// // ** Third Party Components
// import { useForm, Controller } from 'react-hook-form'
// import { Facebook, Twitter, Mail, GitHub } from 'react-feather'

// // ** Context
// import { AbilityContext } from '@src/utility/context/Can'

// // ** Custom Components
// import InputPasswordToggle from '@components/input-password-toggle'

// // ** Reactstrap Imports
// import { Row, Col, CardTitle, CardText, Label, Button, Form, Input, FormFeedback } from 'reactstrap'

// // ** Illustrations Imports
// // import illustrationsLight from '@src/assets/images/pages/register-v2.svg'
// // import illustrationsDark from '@src/assets/images/pages/register-v2-dark.svg'

// // ** Styles
// import '@styles/react/pages/page-authentication.scss'

// const defaultValues = {
//   email: '',
//   terms: false,
//   username: '',
//   password: ''
// }

// const Register = () => {
//   // ** Hooks
//   const ability = useContext(AbilityContext)
//   // const { skin } = useSkin()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const {
//     control,
//     setError,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({ defaultValues })

//   // const source = skin === 'dark' ? illustrationsDark : illustrationsLight

//   const onSubmit = data => {
//     const tempData = { ...data }
//     delete tempData.terms
//     if (Object.values(tempData).every(field => field.length > 0) && data.terms === true) {
//       const { username, email, password } = data
//       useJwt
//         .register({ username, email, password })
//         .then(res => {
//           if (res.data.error) {
//             for (const property in res.data.error) {
//               if (res.data.error[property] !== null) {
//                 setError(property, {
//                   type: 'manual',
//                   message: res.data.error[property]
//                 })
//               }
//             }
//           } else {
//             const data = { ...res.data.user, accessToken: res.data.accessToken }
//             ability.update(res.data.user.ability)
//             dispatch(handleLogin(data))
//             navigate('/')
//           }
//         })
//         .catch(err => console.log(err))
//     } else {
//       for (const key in data) {
//         if (data[key].length === 0) {
//           setError(key, {
//             type: 'manual',
//             message: `Please enter a valid ${key}`
//           })
//         }
//         if (key === 'terms' && data.terms === false) {
//           setError('terms', {
//             type: 'manual'
//           })
//         }
//       }
//     }
//   }

//   return (
//     <div className='auth-wrapper auth-cover'>
//       <Row className='auth-inner m-0'>
//         <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
//           <svg viewBox='0 0 139 95' version='1.1' height='28'>
//             <defs>
//               <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
//                 <stop stopColor='#000000' offset='0%'></stop>
//                 <stop stopColor='#FFFFFF' offset='100%'></stop>
//               </linearGradient>
//               <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
//                 <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
//                 <stop stopColor='#FFFFFF' offset='100%'></stop>
//               </linearGradient>
//             </defs>
//             <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
//               <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
//                 <g id='Group' transform='translate(400.000000, 178.000000)'>
//                   <path
//                     d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
//                     id='Path'
//                     className='text-primary'
//                     style={{ fill: 'currentColor' }}
//                   ></path>
//                   <path
//                     d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
//                     id='Path'
//                     fill='url(#linearGradient-1)'
//                     opacity='0.2'
//                   ></path>
//                   <polygon
//                     id='Path-2'
//                     fill='#000000'
//                     opacity='0.049999997'
//                     points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
//                   ></polygon>
//                   <polygon
//                     id='Path-2'
//                     fill='#000000'
//                     opacity='0.099999994'
//                     points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
//                   ></polygon>
//                   <polygon
//                     id='Path-3'
//                     fill='url(#linearGradient-2)'
//                     opacity='0.099999994'
//                     points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
//                   ></polygon>
//                 </g>
//               </g>
//             </g>
//           </svg>
//           <h2 className='brand-text text-primary ms-1'>Vuexy</h2>
//         </Link>
//         <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
//           <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
//             {/* <img className='img-fluid' src={source} alt='Login Cover' /> */}
//           </div>
//         </Col>
//         <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
//           <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
//             <CardTitle tag='h2' className='fw-bold mb-1'>
//               Adventure starts here 🚀
//             </CardTitle>
//             <CardText className='mb-2'>Make your app management easy and fun!</CardText>

//             <Form action='/' className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)}>
//               <div className='mb-1'>
//                 <Label className='form-label' for='register-username'>
//                   Username is
//                 </Label>
//                 <Controller
//                   id='username'
//                   name='username'
//                   control={control}
//                   render={({ field }) => (
//                     <Input autoFocus placeholder='johndoe' invalid={errors.username && true} {...field} />
//                   )}
//                 />
//                 {errors.username ? <FormFeedback>{errors.username.message}</FormFeedback> : null}
//               </div>
//               <div className='mb-1'>
//                 <Label className='form-label' for='register-email'>
//                   Email
//                 </Label>
//                 <Controller
//                   id='email'
//                   name='email'
//                   control={control}
//                   render={({ field }) => (
//                     <Input type='email' placeholder='john@example.com' invalid={errors.email && true} {...field} />
//                   )}
//                 />
//                 {errors.email ? <FormFeedback>{errors.email.message}</FormFeedback> : null}
//               </div>
//               <div className='mb-1'>
//                 <Label className='form-label' for='register-password'>
//                   Password
//                 </Label>
//                 <Controller
//                   id='password'
//                   name='password'
//                   control={control}
//                   render={({ field }) => (
//                     <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
//                   )}
//                 />
//               </div>
//               <div className='form-check mb-1'>
//                 <Controller
//                   name='terms'
//                   control={control}
//                   render={({ field }) => (
//                     <Input {...field} id='terms' type='checkbox' checked={field.value} invalid={errors.terms && true} />
//                   )}
//                 />
//                 <Label className='form-check-label' for='terms'>
//                   I agree to
//                   <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
//                     privacy policy & terms
//                   </a>
//                 </Label>
//               </div>
//               <Button type='submit' block color='primary'>
//                 Sign up
//               </Button>
//             </Form>
//             <p className='text-center mt-2'>
//               <span className='me-25'>Already have an account?</span>
//               <Link to='/login'>
//                 <span>Sign in instead</span>
//               </Link>
//             </p>
//             <div className='divider my-2'>
//               <div className='divider-text'>or</div>
//             </div>
//             <div className='auth-footer-btn d-flex justify-content-center'>
//               <Button color='facebook'>
//                 <Facebook size={14} />
//               </Button>
//               <Button color='twitter'>
//                 <Twitter size={14} />
//               </Button>
//               <Button color='google'>
//                 <Mail size={14} />
//               </Button>
//               <Button className='me-0' color='github'>
//                 <GitHub size={14} />
//               </Button>
//             </div>
//           </Col>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default Register
