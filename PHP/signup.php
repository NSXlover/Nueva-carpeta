<?php
session_start();
//BBDD connection file
include './conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['submit'])) {

        //Extract the pass
        $pass = $_POST['password'];

        //Put the pass as session variable
        $_SESSION['pass'] = $pass;

        //The system create the user using the ID of the usuarios' table
        //SPrepare the SQL query
        $sql = "SELECT max(ID) as ID FROM usuarios";

        if ($stmt = $conn->prepare($sql)) { //Use a prepared statement to prevent SQL injection
            //Execute the query
            $stmt->execute();

            //Store the result
            $stmt->store_result();

            //Check if the result has rows
            if ($stmt->num_rows > 0) {
                //Bind the result to variables
                $stmt->bind_result($ID);

                //Fetch the result
                $stmt->fetch();

                // Do something with $ID
                // ...

            } else {
                // Handle the case where the result has no rows
                print '<p>Empty table</p>';
            }

            //Close the prepared statement
            $stmt->close();
        } else {
            //Handle the case where the prepared statement fails
            print '<p>Error in prepared statement: ' . $conn->error . '</p>';
        }

        //Close the database connection
        $conn->close();
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo 'Hola, es con get';
}
