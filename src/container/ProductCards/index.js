import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'reactstrap';
import ProductCard from '../../component/ProductCard';

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
      'https://yams.secondhandapp.at/api/v1/shpock-production/images/61189121ac7d663f03026cde/?rule=aw237ah237q75jpeg',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
  {
    id: 1,
    image:
      'https://yams.secondhandapp.at/api/v1/shpock-production/images/61189121ac7d663f03026cde/?rule=aw237ah237q75jpeg',
    title: 'Heron six stage water purifire',
    price: 'BDT 16,500.00',
    description:
      'বিশুদ্ধ পানি পান করুন সুস্থ থাকুন  আমরা দিচ্ছি মাসিক কিস্তিতে RO System Water Purifier Machine. মেশিনটি নিতে আজই যোগাযোগ করুনঃ',
  },
];

const ProductCards = () => {
  return (
    <Row className='card-section'>
      {data &&
        data.map((item, i) => (
          <Col md={3}>
            <Link to='/product-single' className='text-dark'>
              <ProductCard {...item} />
            </Link>
          </Col>
        ))}
      <Col md={12} className='text-center'>
        <Button className='loadmore-btn'>Load More</Button>
      </Col>
    </Row>
  );
};

export default ProductCards;
