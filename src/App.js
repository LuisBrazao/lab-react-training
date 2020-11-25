import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Moment from 'moment';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={Moment(new Date('1992-07-14')).format('llll')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <hr/>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="es">Ludwig</Greetings>
      <Greetings lang="fr">Ludwig</Greetings>
      <hr/>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <hr/>
      <BoxColor r={255} g={100} b={0} />
      <hr/>
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <hr/>
      <Rating>3.5</Rating>
      <hr/>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <hr/>
      <LikeButton />
      <hr/>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
