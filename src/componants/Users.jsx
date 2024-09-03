import React from 'react';
import '../Styles/Users.css';
import PropTypes from 'prop-types';

const Users = (props) => {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={props.image} alt={`${props.firstName} ${props.lastName}`} />
                <div className="card-body">
                    <h5 className="card-title">
                        {`${props.firstName} ${props.lastName}`}
                    </h5>
                   <p style={{fontSize:'14px'}}>
                    <b className='pb-2'> Maiden Name:</b> {props.maidenName}<br />
                    <b>Age:</b> {props.age}<br />
                    <b>Gender:</b> {props.gender}<br />
                    <b>Email:</b> {props.email}<br />
                    <b>Phone:</b> {props.phone}<br />
                    <b>Username:</b> {props.username}<br />
                    <b>Birth Date:</b> {props.birthDate}<br />
                    <b>Blood Group:</b> {props.bloodGroup}<br />
                    <b>Height: </b>{props.height} cm<br />
                    <b>Weight:</b> {props.weight} kg<br />
                    <b>Eye Color:</b> {props.eyeColor}<br />
                    <b>Hair:</b> {props.hairColor}, {props.hairType}<br/>
                    <span className={`fs-5 p-1 rounded text-white ${(props.rating > 4) ? 'bg-success' : (props.rating > 2.5) ? 'bg-warning' : 'bg-danger'}`}>
                        {props.rating}
                    </span>
                   </p>
                </div>
            </div>
        </>
    );
};

Users.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    maidenName: PropTypes.string,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    username: PropTypes.string,
    birthDate: PropTypes.string,
    bloodGroup: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    eyeColor: PropTypes.string,
    hairColor: PropTypes.string,
    hairType: PropTypes.string,
    rating: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Users;
