import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function PortfolioItem(props) {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item" data-toggle="modal" data-target="#portfolioModal1">
        <div className="portfolio-item-caption">
          <div className="portfolio-item-caption-content">
            <div className="portfolio-item-text">
              {props.itemText}
            </div>
            <div className="portfolio-plus">
              <FontAwesomeIcon icon={faPlus} className="fas fa-3x" />
            </div>
          </div>
        </div>
        <img className="portfolio-item-image" src="/images/portfolio/cabin.png" alt="" />
      </div>
    </div>
  )
}

export default PortfolioItem;