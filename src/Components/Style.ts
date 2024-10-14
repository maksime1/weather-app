import styled from "styled-components";

export const WeatherContainer = styled.div`
  padding: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(45deg, #2f4680, #500ae4);
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  & > img {
    cursor: pointer;
    width: 50px;
    padding: 15px;
    border-radius: 50%;
    background: #ebfffc;
  }
  & > input {
    height: 50px;
    border: none;
    outline: none;
    border-radius: 40px;
    padding-left: 25px;
    color: #626262;
    background-color: #ebfffc;
    font-size: 18px;
  }
`;
export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 150px;
    margin: 20px 0;
  }
  .temperature {
    color: #fff;
    font-size: 65px;
    line-height: 1;
  }
  .city {
    color: #fff;
    font-size: 40px;
  }
`;
export const WeatherData = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  .humadity {
    display: flex;
    gap: 15px;
    font-size: 16px;
    color: #fff;
    & > img {
      width: 26px;
      margin-top: 10px;
    }
  }
  .wind {
    display: flex;
    gap: 15px;
    font-size: 16px;
    color: #fff;
    & > img {
      width: 26px;
      margin-top: 10px;
    }
  }
`;
