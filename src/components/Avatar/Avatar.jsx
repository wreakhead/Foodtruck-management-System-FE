import React from "react";
import PopUp from "../PopUp/PopUp";

export default function Avatar() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        style={{ position: "absolute" }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-circle"
        style={{ backgroundColor: "#B1D0E0" }}
      >
        <g id="avatar" clipPath="url(#clip0_1_2)">
          <ellipse
            id="Ellipse 1"
            cx="20.5"
            cy="21"
            rx="9.5"
            ry="10"
            fill="#30475E"
          />
          <path
            id="Ellipse 2"
            d="M42 48C42 45.6362 41.431 43.2956 40.3253 41.1117C39.2197 38.9278 37.5992 36.9435 35.5563 35.2721C33.5135 33.6006 31.0882 32.2748 28.419 31.3702C25.7499 30.4656 22.8891 30 20 30C17.1109 30 14.2501 30.4656 11.581 31.3702C8.9118 32.2748 6.48654 33.6006 4.44365 35.2721C2.40076 36.9435 0.780253 38.9278 -0.32535 41.1117C-1.43095 43.2956 -2 45.6362 -2 48L20 48H42Z"
            fill="#30475E"
          />

          <path
            id="Ellipse 3"
            d="M30.0089 18.3304C30.3986 17.2449 30.5092 16.0941 30.3332 14.9555C30.1573 13.8169 29.6989 12.717 28.9889 11.7299C28.2789 10.7428 27.3339 9.89145 26.2174 9.23311C25.1009 8.57478 23.8389 8.1248 22.5164 7.91348C21.194 7.70217 19.8417 7.73442 18.5508 8.00807C17.2599 8.28172 16.0603 8.79042 15.0328 9.49989C14.0053 10.2094 13.1738 11.1031 12.5943 12.121C12.0148 13.1388 11.7007 14.2572 11.6732 15.4006L21.0429 15.7872L30.0089 18.3304Z"
            fill="#30475E"
          />
          <ellipse
            id="Ellipse 4"
            cx="17.0851"
            cy="15.5402"
            rx="12"
            ry="1.5"
            transform="rotate(5 17.0851 15.5402)"
            fill="#30475E"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="popUp card"
        style={{
          zIndex: 1,
          position: "absolute",
          backgroundColor: "#F5F5F5",
          marginTop: "45px",
        }}
      >
        <PopUp />
      </div>
    </div>
  );
}
