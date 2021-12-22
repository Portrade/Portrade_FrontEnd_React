import React from "react";
import DaumPostcode from "react-daum-postcode";
import "./popupPostCode.css";

const PopupPostCode = (props) => {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        props.onChangeAddress(fullAddress);
        props.onClose();
    };

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        left: "55%",
        top: "280px",
        width: "430px",
        height: "500px",
        border: "1px solid black",
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    props.onClose();
                }}
            >
                닫기
            </button>
            <DaumPostcode style={postCodeStyle} autoClose={true} onComplete={handlePostCode} />
        </div>
    );
};

export default PopupPostCode;
