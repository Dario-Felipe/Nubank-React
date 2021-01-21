import styled from 'styled-components';
import media from '../../tokens/media';
import RelationshipBackground from '../../img/Relationship/RelationshipBackground.jpg';

export const SectionRelationship = styled.section`
  background-image: url(${RelationshipBackground});
  background-size: cover;
  background-position: center center;
  padding: 150px 0;

  ${media.sm} {
    padding: 80px 40px;
  }

  ${media.lg} {
    padding: 160px 100px;
  }
`;

export const RelationshipContent = styled.div``;

export const RelationshipContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  h3 {
    width: 56%;
    font-size: 26px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
  }

  ${media.sm} {
    h3 {
      font-size: 46px;
      width: 50%;
    }
  }

  ${media.lg} {
    h3 {
      font-size: 53px;
      width: 25%;
    }
  }
`;
