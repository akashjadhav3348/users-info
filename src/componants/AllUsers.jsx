import React from 'react'
import Users from './Users'

const AllUsers = () => {
    const users = [
        {
            "id": 1,
            "firstName": "Emily",
            "lastName": "Johnson",
            "maidenName": "Smith",
            "age": 28,
            "gender": "female",
            "email": "emily.johnson@x.dummyjson.com",
            "phone": "+81 965-431-3024",
            "username": "emilys",
            "password": "emilyspass",
            "birthDate": "1996-5-30",
            "image": "https://dummyjson.com/icon/emilys/128",
            "bloodGroup": "O-",
            "height": 193.24,
            "weight": 63.16,
            "eyeColor": "Green",
            "hair": {
                "color": "Brown",
            },
            "rating":"1.7"
        },
        {
            "id": 2,
            "firstName": "Michael",
            "lastName": "Williams",
            "maidenName": "",
            "age": 35,
            "gender": "male",
            "email": "michael.williams@x.dummyjson.com",
            "phone": "+49 258-627-6644",
            "username": "michaelw",
            "password": "michaelwpass",
            "birthDate": "1989-8-10",
            "image": "https://dummyjson.com/icon/michaelw/128",
            "bloodGroup": "B+",
            "height": 186.22,
            "weight": 76.32,
            "eyeColor": "Red",
            "hair": {
                "color": "Green",
                "type": "Straight"
            },
            "rating":"6.7"
        },
        {
            "id": 3,
            "firstName": "Sophia",
            "lastName": "Brown",
            "maidenName": "",
            "age": 42,
            "gender": "female",
            "email": "sophia.brown@x.dummyjson.com",
            "phone": "+81 210-652-2785",
            "username": "sophiab",
            "password": "sophiabpass",
            "birthDate": "1982-11-6",
            "image": "https://dummyjson.com/icon/sophiab/128",
            "bloodGroup": "O-",
            "height": 177.72,
            "weight": 52.6,
            "eyeColor": "Hazel",
            "hair": {
                "color": "White",
            },
            "rating":"2.7"
        },
        {
            "id": 4,
            "firstName": "James",
            "lastName": "Davis",
            "maidenName": "",
            "age": 45,
            "gender": "male",
            "email": "james.davis@x.dummyjson.com",
            "phone": "+49 614-958-9364",
            "username": "jamesd",
            "password": "jamesdpass",
            "birthDate": "1979-5-4",
            "image": "https://dummyjson.com/icon/jamesd/128",
            "bloodGroup": "AB+",
            "height": 193.31,
            "weight": 62.1,
            "eyeColor": "Amber",
            "hair": {
                "color": "Blonde",
            },
            "rating":"5.8"
        },
        {
            "id": 5,
            "firstName": "Emma",
            "lastName": "Miller",
            "maidenName": "Johnson",
            "age": 30,
            "gender": "female",
            "email": "emma.miller@x.dummyjson.com",
            "phone": "+91 759-776-1614",
            "username": "emmaj",
            "password": "emmajpass",
            "birthDate": "1994-6-13",
            "image": "https://dummyjson.com/icon/emmaj/128",
            "bloodGroup": "AB-",
            "height": 192.8,
            "weight": 63.62,
            "eyeColor": "Green",
            "hair": {
              "color": "White",
            },
            "rating":"3.7"
        },
        {
            "id": 6,
            "firstName": "Olivia",
            "lastName": "Wilson",
            "maidenName": "",
            "age": 22,
            "gender": "female",
            "email": "olivia.wilson@x.dummyjson.com",
            "phone": "+91 607-295-6448",
            "username": "oliviaw",
            "password": "oliviawpass",
            "birthDate": "2002-4-20",
            "image": "https://dummyjson.com/icon/oliviaw/128",
            "bloodGroup": "B+",
            "height": 182.61,
            "weight": 58,
            "eyeColor": "Hazel",
            "hair": {
              "color": "Gray",
            },
            "rating":"4.8"
        }


    ]

    return (
        <>
            <div>All Users</div>
            <div className="d-flex flex-wrap gap-3">

                {users.map((user) => (
                    <Users
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        maidenName={user.maidenName}
                        age={user.age}
                        gender={user.gender}
                        email={user.email}
                        phone={user.phone}
                        username={user.username}
                        birthDate={user.birthDate}
                        image={user.image}
                        bloodGroup={user.bloodGroup}
                        height={user.height}
                        weight={user.weight}
                        eyeColor={user.eyeColor}
                        hairColor={user.hair.color}
                        hairType={user.hair.type}
                        rating={user.rating}
                    />
                ))}
            </div>
        </>
    )
}

export default AllUsers