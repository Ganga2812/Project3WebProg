<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Login</title>
    <style>
        body{
            margin-left: 20%;
            margin-right: 20%;
        }
    </style>
</head>
<body>
    <h2>WELCOME TO THE</h2>
    <h1>GAME OF LIFE</h1>
    
    <div class="login">
        <form id="Login" action="index.html" method="POST">
            <label for="username"><h3>Enter your Username</h3></label>
            <input type="text" name="username" placeholder="Username"/>
            <br><br>
            <input type="submit"/>
            <input type="submit" name="guest" value="Sign in as Guest" />
        </form>
    </div>
</body>
</html>