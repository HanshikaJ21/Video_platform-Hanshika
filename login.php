<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles_login.css">
</head>
<body>
    <div class="login-container">
        <h2>Welcome back to your favorite video streaming page</h2>
        <?php
        // Display error message if present
        if(isset($_GET['error']) && $_GET['error'] == 'invalid_credentials') {
            echo '<p class="error-message">Invalid username or password</p>';
        }
        ?>
        <form action="login_process.php" method="POST">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</body>
</html>
