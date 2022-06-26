import styled from "styled-components";

import AppleBadge from "../../assets/images/badge-apple4x.png";

import Badge from "./Badge";

const AppStore = styled(Badge)`
  background-image: url(${AppleBadge});
  margin-right: 0px;
`;

export default AppStore;
