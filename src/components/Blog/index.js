import React from 'react';
import { SectionBlog, BlogContent, BlogContentText } from './style';
import Link from '../Link/index';

const Blog = () => (
  <>
    <SectionBlog>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <BlogContent>
              <BlogContentText>
                <h3>Um blog para você repensar o seu dinheiro</h3>
                <Link
                  modifier="link-content_button--white"
                  url="http://localhost:3000/#"
                  text="Conheça o Fala, Nubank"
                />
              </BlogContentText>
            </BlogContent>
          </div>
        </div>
      </div>
    </SectionBlog>
  </>
);

export default Blog;
