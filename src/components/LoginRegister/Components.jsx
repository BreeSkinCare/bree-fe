import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  max-width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${({ show }) =>
    show &&
    `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${({ show }) =>
    !show &&
    `transform: translateX(100%);`
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-left:10px;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 0.5px solid #805e41;
  background-color: #a67d5a;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonSocial = styled(Button)`
  border-radius: 40px;
  border: none;
  background-color: ${({ color }) => color};
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8px;
    font-size: 22px;
  }
`;

export const FacebookButton = styled(ButtonSocial)`
  background-color: #3b5998;
`;

export const GoogleButton = styled(ButtonSocial)`
  background-color: #db4437;
`;

export const GhostButton = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  text-transform: uppercase;
  transition: transform 80ms ease-in, background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: #ffffff;
    color: #d9c8ba;
  }
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ show }) =>
    !show &&
    `transform: translateX(-100%);`
  }
`;

export const Overlay = styled.div`
  background: linear-gradient(to right, #fff0e5, #d8b190);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ show }) =>
    !show &&
    `transform: translateX(50%);`
  }
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${({ show }) =>
    !show &&
    `transform: translateX(0);`
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${({ show }) =>
    !show &&
    `transform: translateX(20%);`
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  &::before {
    margin-right: .25em;
  }
  
  &::after {
    margin-left: .25em;
  }
`;

export const DividerText = styled.span`
  font-size: 12px;
  color: #333;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
`;



export const ChangePasswordContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 100%;
  opacity: ${({ show }) => (show ? "1" : "0")};
  z-index: ${({ show }) => (show ? "5" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
`;