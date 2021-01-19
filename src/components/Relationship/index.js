import React from 'react';
import Link from '../Link/index';
import {
  SectionRelationship,
  RelationshipContent,
  RelationshipContentText,
} from './style';

const Relationship = () => (
  <>
    <SectionRelationship>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <RelationshipContent>
              <RelationshipContentText>
                <h3>Reinventando a relação das pessoas com o dinheiro</h3>
                <Link
                  modifier="link-content_button"
                  url="http://localhost:3000/#"
                  text="É nisso que acreditamos"
                />
              </RelationshipContentText>
            </RelationshipContent>
          </div>
        </div>
      </div>
    </SectionRelationship>
  </>
);

export default Relationship;
