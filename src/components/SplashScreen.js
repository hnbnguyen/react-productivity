import styled from "styled-components";
import {CgSun} from "react-icons/all";
import {HiMoon} from "react-icons/all";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
`;

const Body =  styled.div`
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.body};
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light"){
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size = {40} /> : <CgSun size = {40} />;

    return (
        <Body>
            <Container>
                <Toggle onClick = {changeTheme}>
                    {icon}
                </Toggle>
            </Container>
        </Body>
    );
};

export default Splash;