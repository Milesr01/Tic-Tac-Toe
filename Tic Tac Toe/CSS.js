* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    margin: 0;
    background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  }
  
  .nav-menu {
    display: flex; 
    justify-content: center;
    margin: 10px auto; 
  }
  
  .reset-button {
    padding: 5px 20px;
    border: 5px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    color:white;
    font-weight: 100;
    letter-spacing: 2px;
    background:rgba(255,255,255,0.2);
    margin:10px;
    padding: 10px 20px;
    font-size: 15px;
  }
  
  .board-container {
    display: flex;
    flex-wrap: wrap;
    width: 80vh;
    height: 80vh;
    margin: 0 auto;
    border: 20px solid rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  
  .board-container .board-cell {
    flex: 1 1 33%;
    background:rgba(0,0,0,0.2);
    padding:20px 5px;
    text-align: center;
    transition:all 0.5s;
    color: white;
    opacity: 0.8;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .board-container .board-cell.mark-X::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f00d";
  }
  
  .board-container .board-cell.mark-O::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f1ce";
  }