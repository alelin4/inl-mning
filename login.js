

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title >Bobs
    </title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="Meny">
        <h1 id="rubrik"><i>Bobs Onlineglass</i></h1>
        
    </div>
<h4 id="islogged"></h4>



    <div class="hej">
       <span id="bytelogin">
        <form >
            <h2>Login</h2>
            <label >Namn:</label></br>
            <input id="username"></br></br>

            <label>Lösenord</label></br>
            <input id="password"></br>
            
          <button type="button" onclick="login()">Login</button> 
        </form>
      </span>
        
      
<span id="byteregi">
        <form >
            <h2>Regi</h2>
            <label >Namn:</label></br>
            <input id="newuser"></br></br>
            <label>Lösenord</label></br>
            <input id="newpassword"></br>
             <button type="button" onclick="registister()">regi</button>
        </form>
 </span>      
</div>

<div class="glassigt"> 
    

   <div class="glasstext">
    <h3>Hej och välkomna Bobs Onlineglass</h3>
    <p id="glass">Vi Bobs vill ge en unik chans att få bra glasupplevelse</br>
    hem till dig. Me våra specialister så lovar vi er en </br>
    fantastisk glasupplevelse utan krångel.</br></br>
    Vi vet hur svårt det kan vara att välja bland</br>
    alla glassmaker, därför har vi gjort det lättare </br>
    att välja rätt smak för just dig. Med hjälp av </br>
    flera influencers har vi skärt ner till endast </br>
    50 smaker. Allt för göra de lättare just er. </br>
    Klicka här för se våra härliga smaker: <a href="glassmaker.html">Glassmaker</a></br></br>
    Bobs online glass grundades 2015 av Bob Carlsson.</br></p> 

<p id="glasstext"></p>
 </div>

</div>  
    <span id="logout">
 <button onclick="logoutbutton()" >logout</button>
</span>

        <script src="login.js"></script>
    </body>
</html>
