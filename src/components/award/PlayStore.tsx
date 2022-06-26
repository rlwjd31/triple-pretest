import styled from "styled-components";

import GoogleBadge from "../../assets/images/play-store2x.png";

import Badge from "./Badge";

const PlayStore = styled(Badge)`
  margin-right: 39px;
  background-image: url(${GoogleBadge});
`;

export default PlayStore;
