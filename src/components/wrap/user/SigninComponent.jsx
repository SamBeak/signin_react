import React from 'react';

export default function SigninComponent() {
    // const userPwInput = document.querySelector('#userPw'); // vanilla js 230911_bhg
    const userPwInput = React.useRef(); // react js 230911_bhg
    const onClickTogglePw = (e) => {
        e.target.classList.toggle('active');
        userPwInput.current.type = userPwInput.current.type === "password" ? "text" : "password";

        // userPwInput.classList.toggle('active'); // vanilla js 230911_bhg
        // userPwInput.type = userPwInput.type === "password" ? "text" : "password"; // vanilla js 230911_bhg
    };
    
    const onClickSignup = () => {
        window.location.href = '/signup';
    };

  return (
    <div id="signin">
        <div className="container">
            <div className="title">
                <h2>Login</h2>
            </div>
            <div className="contents">
                <form action="" id="signinForm" method='get'>
                    <ul className="signin__list">
                        <li className="signin__item">
                            <label htmlFor="userId"></label>
                            <input type="text" id="userId" name="userId" placeholder="아이디" required />
                        </li>
                        <li className="signin__item">
                            <label htmlFor="userPw"></label>
                            <input type="password" id="userPw" name="userPw" placeholder="비밀번호" ref={userPwInput} required />
                            <button type='button' className='toggle__btn btn' onClick={onClickTogglePw}></button>
                        </li>
                    </ul>
                    <div className="signin__btns">
                        <button className="signin__btn btn" type="submit">로그인</button>
                        <button className="signin__btn btn" type="button" onClick={onClickSignup}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
