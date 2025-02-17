import React from "react";
import kpay from '../img/kakao.png'
import cpay from '../img/credit_card.png'
import '../css/reset.css'
import '../css/Pay.css'

const Pay = () => {

    return(
        <>
            <div className="pay-container">
                <div className="pay-title">
                    <p>Download</p>
                    <p>x</p>
                </div>
                <div className="pay-payment">
                    <p>이 게임은 무료입니다. 하지만 적당하다고 생각하시는 가격을 결제하여 
                    개발자에게 후원을 할 수 있습니다.</p>
                    <p>아니오, 게임만 다운로드 받겠습니다.</p>
                    <p>결제 금액</p>
                    <input type="number" name="amount"></input>
                    <p>결제 수단</p>
                    <div className="pay-btn">
                        <div className="pay-kakao">
                            <img src={kpay} alt="pay"></img>
                        </div>
                        <div className="pay-card">
                            <img src={cpay} alt="card"></img>
                            <p>카드 결제</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pay;