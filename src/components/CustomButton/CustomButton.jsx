import React from "react";
import "./CustomButton.css";
export default function customButton(props) {
  return (
    <button type="submit" className="customButton" disabled={props.pending}>
      {props.pending ? (
        <svg
          className="loadingRing"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="ring"
            d="M42.6201 22.5C43.9345 22.5 45.013 23.5686 44.8743 24.8757C44.3849 29.4854 42.4801 33.8532 39.3925 37.3625C35.7784 41.4702 30.7915 44.1202 25.3649 44.8169C19.9382 45.5135 14.4437 44.209 9.90932 41.1474C5.37495 38.0858 2.11149 33.4769 0.72956 28.1831C-0.65237 22.8893 -0.0580718 17.2734 2.40125 12.3861C4.86058 7.49885 9.01641 3.67511 14.0911 1.63038C19.1659 -0.41435 24.8118 -0.539955 29.9724 1.27706C34.3814 2.82943 38.1781 5.70887 40.8582 9.49122C41.6181 10.5637 41.1995 12.0231 40.0528 12.6656V12.6656C38.9061 13.3081 37.4677 12.8871 36.6777 11.8367C34.5852 9.05461 31.7081 6.93452 28.3916 5.7668C24.3227 4.33417 19.8712 4.43321 15.87 6.04537C11.8689 7.65753 8.59222 10.6724 6.65316 14.5257C4.71411 18.3791 4.24554 22.807 5.33512 26.9809C6.4247 31.1547 8.99777 34.7886 12.5729 37.2025C16.148 39.6164 20.4802 40.645 24.7588 40.0957C29.0374 39.5464 32.9694 37.457 35.8188 34.2184C38.1414 31.5786 39.6151 28.3227 40.0807 24.8729C40.2565 23.5703 41.3056 22.5 42.6201 22.5V22.5Z"
            fill="#3A3838"
          />
        </svg>
      ) : (
        <>{props.text}</>
      )}
    </button>
  );
}