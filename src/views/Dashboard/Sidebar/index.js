import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const EmployerSidebar = () => {

  return (
    <Card className="sidebar-nav mb-6">
      <CardImg
        className="w-50 m-auto"
        src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
      />
      <CardBody className="text-center">
        <h6>Profile</h6>
        <CardTitle tag="h5" />
        <strong>Email:&nbsp;</strong>
        <span>sunny@gmail.com</span>
        <p>
          Name:
        </p>
      </CardBody>
      <CardBody>
        <div className="d-flex justify-content-between">
          {/* <h6>80%</h6> */}
        </div>
        {/* <Progress color="primary" animated value={80} /> */}
      </CardBody>
      <CardBody className="p-0">
        <ListGroup>
          <ListGroupItem className='rounded-0'>
            <NavLink exact to="/dashboard" className="text-decoration-none text-dark d-flex align-items-center">
             <span style={{fontSize:"30px",marginRight:'10px'}}>&#10050;</span>
              Posts
            </NavLink>
          </ListGroupItem>
          <ListGroupItem className='rounded-0'>
            <NavLink
              exact
              to="/dashboard/signup"
              className="text-decoration-none text-dark d-flex align-items-center"
            >
             <span style={{fontSize:"30px",marginRight:'10px'}}>&#10050;</span>
              SignUp
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter className="bg-white p-0 pb-0 border-0">
        <ListGroup>
          <ListGroupItem className='rounded-0'>
            <Link to="#" className="text-decoration-none text-dark d-flex align-items-center">
              {' '}
               <span style={{fontSize:"30px",marginRight:'10px'}}>&#10050;</span>
              Log out
            </Link>
          </ListGroupItem>

        </ListGroup>
      </CardFooter>
    </Card>
  );
};

export default EmployerSidebar;
