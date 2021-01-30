//import '../Pictures';
const users = [
    {
        'name': 'Krishna',
        'email': 'krishna@krishna.com',
        'password': 'pass123',
        'isLoggedIn': false,
        'favorites': ['Vrindavan', 'Fall', 'Sunflower'],
        'picture' : [
            {  
                'name': 'Vrindavan',
                'date': '01/01/2021',
                'likes': 3,
                'source': '../Pictures/Vrindavan.jpg',
                'profile': true,
                
            },
            { 
                'name': 'Rose',
                'date': '01/04/2021',
                'likes': 2,
                'source': '../Pictures/Rose.jpg',
                'profile': false
            },
            { 
                'name': 'Red',
                'date': '01/14/2021',
                'likes': 0,
                'source': '../Pictures/Red.jpg',
                'profile': false
            }

        ]

    },
    {
        'name': 'Shakthi',
        'email': 'shakthi@shakthi.com',
        'password': 'pass123',
        'isLoggedIn': false,
        'favorites': ['GantakiRiver', 'Red', 'Fire'],
        'picture' : [
            { 
                'name': 'GantakiRiver',
                'date': '01/10/2021',
                'likes': 3,
                'source': '../Pictures/GantakiRiver.jpg',
                'profile': true
            },
            { 
                'name': 'Nature',
                'date': '01/15/2021',
                'likes': 2,
                'source': '../Pictures/nature1.jpg',
                'profile': false
            },
            { 
                'name': 'Sunflower',
                'date': '01/19/2021',
                'likes': 0,
                'source': '../Pictures/sunflower.jpg',
                'profile': false
            }

        ]

    },
    {
        'name': 'Kumar',
        'email': 'kumar@kumar.com',
        'password': 'pass123',
        'isLoggedIn': false,
        'favorites': ['SriRangam', 'Rose', 'Nature'],
        'picture' : [
            { 
                'name': 'Sri Rangam',
                'date': '01/04/2021',
                'likes': 3,
                'source': '../Pictures/Srirangam.jpg',
                'profile': true
            },
            { 
                'name': 'Fire',
                'date': '01/14/2021',
                'likes': 2,
                'source': '../Pictures/Fire.jpg',
                'profile': false
            },
            { 
                'name': 'Fall',
                'date': '01/26/2021',
                'likes': 2,
                'source': '../Pictures/Fall.jpg',
                'profile': false
            }

        ]

    }

];
export default users;