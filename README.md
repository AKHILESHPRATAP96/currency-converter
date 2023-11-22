<h1>Currency Converter App</h1>
<p>Welcome to the Currency Converter app! This application allows users to convert currencies, sign in, sign up, reset their passwords, and sign up using their Google accounts.</p>

<h2>Features</h2>
<p>Currency Conversion: Users can convert currencies with real-time exchange rates.</p>
<p>User Authentication: Secure sign-in and sign-up functionalities.</p>
<p>Password Reset: Users can reset their passwords if forgotten.</p>
<p>Google Sign-Up: Users have the option to sign up using their Google accounts.</p>
<p>Technologies Used</p>
<p>React: ^18.2.0</p>
<p>React Router DOM: ^6.19.0</p>
<p>Bootstrap: ^5.3.2</p>
<p>Bootstrap Icons: ^1.11.1</p>
<p>@react-oauth/google: ^0.12.1</p>
<p>jwt-decode: ^4.0.0</p>
<p>Folder_Structure</p>

currency-converter/
|-- src/
| |-- components/
| | |-- Auth/
| | | |-- SignUp.js
| | | |-- SignIn.js
| | | |-- ForgotPassword.js
| | | |-- authPage/
| | |-- CurrencyConverter/
| | |-- ConverterForm.js
| |-- App.js
| |-- index.js
|-- public/
|-- package.json

Usage
Start the development server:
npm i
npm start
