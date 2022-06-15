import React, { Component } from "react";
import styled from "styled-components";

  render = () => {
    return (
      <StyledUl>
        <StyledLi>
          <StyledA onClick={() => this.handleClick("Home")}>Home</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA onClick={() => this.handleClick("News")}>Home</StyledA>
        </StyledLi>
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("DropDown")}>
            DropDown
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("Link1")}>Link 1</SubA>
            <SubA onClick={() => this.handleClick("Link2")}>Link 2</SubA>
            <SubA onClick={() => this.handleClick("Link3")}>Link 3</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}

export default Menu;