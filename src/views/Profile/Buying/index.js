import React from 'react';

const data = [
  {
    img: 'https://yams.secondhandapp.at/api/v1/shpock-production/images/5e325aa1957bcb6823b759c8/?rule=aw100ah100q75jpeg',
    title: 'RO water purifier',
    price: 'BDT 18,500.00',
  },
];
const Buying = () => {
  return (
    <>
      {data &&
        data.map((item, i) => (
          <div className='buying d-flex align-items-center'>
            <div>
              <img src={item.img} alt='' />
            </div>
            <div className='content'>
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
            </div>
          </div>
        ))}
    </>
  );
};

export default Buying;
