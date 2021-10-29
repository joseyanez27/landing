import styled from 'styled-components'

export const Input = styled.input`
  border: none;
  border-radius: 3px;
  border: 1px solid rgb(117,117,117);
  padding: 6px;
  font: normal normal normal 14px abeezee-regular;

  :focus {
    outline: none !important;
    border-radius: 3px;
    border: 1px solid rgb(147,69,165);
    box-shadow: 0 0 10px rgb(147,69,165,.3);
    transition: all .3s ease-out;
  }

`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 3px;
  border: 1px solid rgb(117,117,117);
  padding: 6px;
  resize: none;
  font: normal normal normal 14px abeezee-regular;

  :focus {
    outline: none !important;
    border-radius: 3px;
    border: 1px solid rgb(147,69,165);
    box-shadow: 0 0 10px rgb(147,69,165,.3);
    transition: all .3s ease-out;
  }

`;

export const Divider = styled.hr`
    
`;