
import React from 'react';
import { Button, Col, Row, Table } from 'reactstrap';


const Appoints = () => {


  return (
    <div >
      <div md={12} className="text-center my-5">
        <h2>All Products</h2>

      </div>
      <div className='table' >

        <Table className='w-100' responsive>
          <tr className="d-flex justify-content-between">
            <td style={{ width: '20%', fontWeight: '700' }}>title</td>
            <td style={{ width: '20%', fontWeight: '700' }}>Created At</td>
            <td style={{ width: '20%', fontWeight: '700' }}>Creator Name</td>
            <td style={{ width: '20%', fontWeight: '700' }}>Creator Nid</td>
            <td style={{ width: '20%', fontWeight: '700' }}>Creator Phone</td>
            <td style={{ width: '20%', fontWeight: '700' }}>Delete</td>
          </tr>
          <body>

            <tr className="d-flex justify-content-between text-white" style={{backgroundColor:'#FD3C71 '}}>
              <td style={{ width: '20%' }}>Relme Buds Wired Earphones</td>
              <td style={{ width: '20%' }}>
                2 hours ago
              </td>
              <td style={{ width: '20%' }}>Mark </td>
              <td style={{ width: '20%' }}>93825347957349</td>
              <td style={{ width: '20%' }}>+99023454</td>
              <td style={{ width: '20%' }}>
                {' '}
                <Button
                  size="small"
                  color="secondary"
                  // onClick={() => dispatch(deletePost(post?._id))}

                  className="shadow"
                >
                 <span>&#9986;</span>
                </Button>
              </td>
            </tr>

          </body>
        </Table>
      </div>
    </div>
  );
};
export default Appoints;
