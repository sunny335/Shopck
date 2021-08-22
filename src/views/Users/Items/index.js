import React from 'react';
import { Col, Row } from 'reactstrap';
import ProductCard from '../../../component/ProductCard';

const data = [
  {
    id: 1,
    image:
      'https://yams.secondhandapp.at/api/v1/shpock-production/images/61189121ac7d663f03026cde/?rule=aw237ah237q75jpeg',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
  {
    id: 1,
    image:
      'https://yams.secondhandapp.at/api/v1/shpock-production/images/61063936d484e514b61a71a6/?rule=aw237ah237q75jpeg',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
];

const Items = () => {
  return (
    <div className='watchlist'>
      <Row>
        {data &&
          data.map((item, i) => (
            <Col md={3} className='mb-2'>
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Items;
