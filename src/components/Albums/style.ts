import styled from "styled-components";

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  width: 267px;
  height: 477px;
  background-color: #292929;
  border-radius: 0.25rem;
`;

export const AlbumItem = styled.div`
  display: grid;
  justify-items: center;
`;

export const ThumbnailWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 100px;
  position: relative;
`;

export const IconBackground = styled.div`
  width: 21px;
  height: 40px;
  background-color: #292929;
  border-radius: 0.25rem;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: center;
`;

export const AddAlarmIcon = styled.img`
  cursor: pointer;
`;

export const PlayIconLink = styled.a`
  cursor: pointer;
`;

export const AlbumPhoto = styled.img`
  width: 105px;
  border-radius: 0.25rem;
`;

export const AlbumTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
`;

export const AlbumArtist = styled.h4`
  font-size: 10px;
  font-weight: 300;
`;
