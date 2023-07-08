<!DOCTYPE html>
<html>
<head>
  <title>Function Page with Navigation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
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

    section {
      padding: 20px;
    }
  </style>
  <script>
    function showSection(sectionId) {
      const sections = document.querySelectorAll("section");
      sections.forEach(section => {
        section.style.display = "none";
      });
      const selectedSection = document.getElementById(sectionId);
      selectedSection.style.display = "block";
    }
  </script>
</head>
<body>
  <nav>
    <a href="#" onclick="showSection('game-section')">Game</a>
    <a href="#" onclick="showSection('app-section')">App</a>
    <a href="#" onclick="showSection('proxy-section')">Proxy</a>
    <a href="#" onclick="showSection('settings-section')">Settings</a>
  </nav>

  <section id="game-section">
    <!-- Game section content goes here -->
  </section>

  <section id="app-section">
    <!-- App section content goes here -->
  </section>

  <section id="proxy-section">
    <!-- Proxy section content goes here -->
  </section>

  <section id="settings-section">
    <!-- Settings section content goes here -->
  </section>
</body>
</html>
