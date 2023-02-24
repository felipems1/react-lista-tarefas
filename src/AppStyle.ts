import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 20px auto;
  border: 2px solid chartreuse;
  border-radius: 5px;
  padding: 30px;
`;

export const Title = styled.h2`
  color: #eee;
  font-size: 28px;
`;

export const AreaAdd = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px auto;
`;

export const Input = styled.input`
  width: 65%;
  background-color: #444;
  border: 0;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  color: #eee;
`;

export const Button = styled.button`
  width: 32%;
  background-color: chartreuse;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
`;

interface TaskProp {
  completed: boolean;
}

export const Task = styled.div<TaskProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #444;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 10px auto;
  color: #ddd;
  transition: all ease 0.8s;
  border-left: ${(props) => (props.completed ? "6px solid chartreuse" : "")};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

export const TitleTask = styled.h3``;
