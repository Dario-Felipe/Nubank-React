import styled from 'styled-components';
import media from '../../tokens/media';
import BlogSmart from '../../img/Blog/BlogSmart.jpg';
import BlogDesktop from '../../img/Blog/BlogDesktop.jpg';

export const SectionBlog = styled.div`
  background-image: url(${BlogSmart});
  background-size: cover;
  background-position: center center;
  padding: 60px 0 290px;

  ${media.sm} {
    background-image: url(${BlogDesktop});
    padding: 30px 40px;
  }

  ${media.lg} {
    padding: 160px 100px;
  }
`;

export const BlogContent = styled.div``;

export const BlogContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 40px 20px;

  h3 {
    width: 70%;
    font-size: 26px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
  }

  ${media.sm} {
    padding: 20px 40px 100px;

    h3 {
      font-size: 46px;
      width: 40%;
    }
  }

  ${media.lg} {
    padding: 100px 40px;

    h3 {
      font-size: 53px;
      width: 35%;
    }
  }
`;
