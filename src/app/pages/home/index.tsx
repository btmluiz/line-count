import React from "react";
import * as Styled from "./styled";
import { Typography } from "@mui/material";

type Props = {};

type State = {
  textTransformed: string;
};

class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      textTransformed: "",
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  private onTextChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const target = event.target;
    const value = target.value
      .replaceAll(/(\r\n|\r|\n){2,}/g, "$1")
      .trim()
      .split("\n");
    let text = "";

    value.forEach((v, index) => {
      if (v !== "") {
        text += `${index + 1}. ${v}\n`;
      }
    });

    this.setState({
      textTransformed: text,
    });
  }

  render() {
    const {
      state: { textTransformed },
    } = this;

    return (
      <Styled.Root>
        <Typography variant={"h5"}>Enumerador de linhas</Typography>
        <Styled.Wrapper>
          <Styled.InputWrapper>
            <Styled.InputField
              multiline
              fullWidth
              onChange={this.onTextChange}
              placeholder={"Digite aqui..."}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputField
              multiline
              fullWidth
              placeholder={"Resultado aqui"}
              value={textTransformed}
            />
          </Styled.InputWrapper>
        </Styled.Wrapper>
      </Styled.Root>
    );
  }
}

export default HomePage;
