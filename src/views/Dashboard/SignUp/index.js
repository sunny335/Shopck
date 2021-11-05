
import React, { useEffect, useState } from 'react';
import { CardHeader, Col, Row, Button, Table } from 'reactstrap';

const SignUp = () => {



  return (
    <div>
      <div md={12} className="text-center my-5">
        <h2>Sign Up Lists</h2>

      </div>
      <Table className='w-100' responsive>
        <tr className="d-flex justify-content-between">
          <td style={{ width: '20%', fontWeight: '700' }}>Role</td>
          <td style={{ width: '20%', fontWeight: '700' }}>Created At</td>
          <td style={{ width: '20%', fontWeight: '700' }}>Name</td>
          <td style={{ width: '20%', fontWeight: '700' }}>Email</td>
          {/* <td style={{ width: '20%', fontWeight: '700' }}>Creator Nid</td> */}
          <td style={{ width: '20%', fontWeight: '700' }}>Delete</td>
        </tr>
        <body>

          <tr className="d-flex justify-content-between">
            <td style={{ width: '20%' }}>User </td>
            <td style={{ width: '20%' }}>

            </td>
            <td style={{ width: '20%' }}>
              ahmed
            </td>
            <td style={{ width: '20%' }}>@mail.com</td>
            <td style={{ width: '20%' }}>
              {' '}
              <Button
                size="small"
                color="secondary"
                className="shadow"


              >
                Delete
              </Button>
            </td>
          </tr>

        </body>
      </Table>
    </div>
  );
};
export default SignUp;
