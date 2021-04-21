<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <?php
    session_start();

    if(isset($_POST['guest'])) {
        echo '<h1>Welcome Guest</h1>';
    }
    else{
        if(isset($_POST['username'])){
            $_SESSION['username'] = $_POST['username'];
            $_SESSION['count'] = 0;
        }
        login($_SESSION['username']);
    }
    function addUser($name){

        $username = $name;
    
        $file = "acct.txt";
        $tuples = file_get_contents($file);
        $tuples .= $username . "\n";
        file_put_contents($file, $tuples);
    
    }

    function login($name){
        $file = file_get_contents("acct.txt");
        $users = explode("\n", $file);
        
        $result = array_search($name, $users, true);
        if($result === false){
            addUser($name);
            echo '<h1>Welcome new user '. $name . '</h1>';
        }
        else{
            echo '<h1>Welcome back '. $name . '</h1>';
        }
    }
    ?>
    
    <div class="menu">
    
    <button onclick="startButton()">Start</button>
    <button onclick="stopButton()">Stop</button>
    <button onclick="randButton()">Random</button>
    <button onclick="clearButton()">Clear</button>

    <label id="generation">Generation: 0</label>

    <div class="flexBreak"></div>
    <button onclick="pattern1Button()">Pattern 1 (still)</button>
    <button onclick="pattern2Button()">Pattern 2 (osci)</button>
    <button onclick="pattern3Button()">Pattern 3 (osci)</button>
    <button onclick="pattern4Button()">Pattern 4 (glider)</button>
    
    <div class="flexBreak"></div>
    <button onclick="increment1Button()">Increment x1</button>
    <button onclick="increment23Button()">Increment x23</button>

    </div>

    <canvas id= "main"></canvas>

    <script src="index.js"></script>
</body>
</html>