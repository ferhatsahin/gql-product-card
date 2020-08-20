import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { PageContainer } from "./ProductPage.style";

export default function RedirectPage() {
  return (
    <PageContainer>
      <GoBackLink to="/">Hi! Go Back Please</GoBackLink>
    </PageContainer>
  );
}

const GoBackLink = styled(Link)`
  font-size: 40px;
  text-align: center;
`;
