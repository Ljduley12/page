<!DOCTYPE html>
<html>
<head>
  <title>Blank Page with Navigation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 120in;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    nav {
      padding: 20px;
    }

    nav a {
      margin-left: 20px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <nav>
    <a href="blank.html" target="_blank">Game</a>
    <a href="#app-section">App</a>
    <a href="#proxy-section">Proxy</a>
  </nav>

  <div id="app-section">
    <!-- App section content goes here -->
  </div>

  <div id="proxy-section">
    <!-- Proxy section content goes here -->
  </div>
</body>
</html>
