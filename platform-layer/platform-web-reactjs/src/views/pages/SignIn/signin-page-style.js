import { Form, Input } from '@rocketseat/unform';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormPanel = styled(Form)`
  width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  background: #eee;
  border-radius: 4px;
  padding: 60px 30px;

  label {
    color: #444444;
    font-weight: bold;
    text-transform: uppercase;
  }

  button {
    border: 0;
    background: #7d40e7;
    border-radius: 4px;
    padding: 12px 15px;
    color: #eee;
    font-weight: bold;
  }

  img {
    height: 45px;
    width: 245px;
    align-self: center;
    margin-bottom: 40px;
  }
`;

export const InputField = styled(Input)`
  width: 100%;
  margin: 10px auto 15px auto;
  padding: 12px 15px;
  border: 1px solid #dddddd;
  border-radius: 4px;

  &::placeholder {
    color: #999999;
  }
`;
