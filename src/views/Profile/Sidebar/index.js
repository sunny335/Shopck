import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ModalRight from '../../../component/ModalRight';
const Sidebar = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  return (
    <div className='sidebar text-center me-3'>
      <div className='profile-image'>
        <img
          src='https://yams.secondhandapp.at/api/v1/shpock-production/images/default_avatar_m_1/?rule=aw100ah100q75jpeg'
          alt=''
        />
      </div>
      <div className='reviews'>
        <Link to='Profile/reviews'>
          <span>(0)</span>
        </Link>
      </div>
      <h3>Ahmed S.</h3>
      <div className='information'>
        <ul>
          <li>
            <h6>0</h6>
            <p>Bought</p>
          </li>
          <li>
            <h6>0</h6>
            <p>Sold</p>
          </li>
          <li onClick={() => setModal1(!modal1)} className='followers'>
            <h6>0</h6>
            <p>Followers</p>
            <ModalRight modal={modal1} setModal={setModal1}>
              <h1>Followers</h1>
              <div className='followers-modal'>
                <div className='modal-contents'>
                  <div className='items'>
                    <div>
                      <img
                        src='https://yams.secondhandapp.at/api/v1/shpock-production/images/5fc511656825a00d2c9940f1/?rule=aw100ah100q75jpeg'
                        alt=''
                      />
                    </div>
                    <h3>
                      <Link>Child.org Charity Shop</Link>{' '}
                    </h3>
                    <Button>Followers</Button>
                  </div>
                </div>
              </div>
            </ModalRight>
          </li>
          <li onClick={() => setModal2(!modal2)} className='following'>
            <h6>0</h6>
            <p>Following</p>
            <ModalRight modal={modal2} setModal={setModal2}>
              <h1>Following</h1>
              <div className='following-modal'>
                <div className='modal-contents'>
                  <div className='items'>
                    <div>
                      <img
                        src='https://yams.secondhandapp.at/api/v1/shpock-production/images/5fc511656825a00d2c9940f1/?rule=aw100ah100q75jpeg'
                        alt=''
                      />
                    </div>
                    <h3>
                      <Link>Child.org Charity Shop</Link>{' '}
                    </h3>
                    <Button>Following</Button>
                  </div>
                </div>
              </div>
            </ModalRight>
          </li>
        </ul>
      </div>
      <div className='share-edit'>
        <div>
          <Button className='share'>Share</Button>
        </div>
        <div>
          <Button className='edit' onClick={() => setModal3(!modal3)}>
            Edit Profile
          </Button>
          <ModalRight modal={modal3} setModal={setModal3}>
            <h1>Edit Profile</h1>
            <div className='edit-profile-modal'>
              <Form>
                <FormGroup>
                  <Label for='exampleEmail'>Username</Label>
                  <Input type='name' name='name' placeholder='add a Username' />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleText'>Text Area</Label>
                  <Input type='textarea' name='text' id='exampleText' />
                </FormGroup>

                <Button>Submit</Button>
              </Form>
            </div>
          </ModalRight>
        </div>
      </div>
      <p>Joined August 2021</p>
    </div>
  );
};

export default Sidebar;
