import { useState } from "react/cjs/react.development";
import "./App.css";
import OurNavbar from "./components/OurNavbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// let alertheight = document.getElementById("alertheight");

function App() {
  const [Mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [Mode, setMode] = useState("light");
  const [Nav, setNav] = useState("dark");
  const [btnKaColour, setbtnKaColour] = useState("dark");
  const [Btn, setBtn] = useState("Enable Dark Mode");
  const [variesText, setVariesText] = useState("Enter text here...");
  const [alertnull, setalert] = useState({
    cat: null,
    main: null,
    msg: null,
  });
  const [aboutStyle, setAboutStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  const ToggleMode = () => {
    if (Nav === "light") {
      setMode("light");
      setbtnKaColour("dark");
      setNav("dark");
      setBtn("Enable Dark Mode");

      setMystyle({
        color: "rgb(30, 30, 30)",
        backgroundColor: "white",
      });

      showAlert("danger", "OOPs...", "Dark Mode has been disabled!!");
      document.title = "TextUtils";

      setAboutStyle({
        color: 'black',
        backgroundColor: 'white',
      })

    } 
    
    else {
      setMode("dark");
      setbtnKaColour("light");
      setNav("light");
      setBtn("Enable Light Mode");

      setMystyle({
        color: "white",
        backgroundColor: "rgb(30, 30, 30)",
      });

      showAlert("success", "SUCCESS!!", "Dark Mode has been enabled!!");
      document.title = "TextUtils- Dark Mode";

      setAboutStyle({
        color: 'white',
        backgroundColor: 'rgb(30, 30, 30)',
      })

    }
  };

  const colorchangeMode1 = () => {
    setMystyle({
      color: "white",
      backgroundColor: "rgb(62, 62, 62)",
    });

    setbtnKaColour("light");
    document.title = "TextUtils- Coloured Mode";
    // alertheight.style.backgroundColor = "black";

    setAboutStyle({
      color: 'white',
      backgroundColor: 'rgb(62, 62, 62)',
    })
  };

  const colorchangeMode2 = () => {
    setMystyle({
      color: "white",
      backgroundColor: "rgb(2, 56, 2)",
    });

    setbtnKaColour("light");
    document.title = "TextUtils- Coloured Mode";

    setAboutStyle({
      color: 'white',
      backgroundColor: 'rgb(2, 56, 2)',
    })
  };

  const colorchangeMode3 = () => {
    setMystyle({
      color: "white",
      backgroundColor: "rgb(123, 3, 3)",
    });

    setbtnKaColour("light");
    document.title = "TextUtils- Coloured Mode";

    setAboutStyle({
      color: "white",
      backgroundColor: "rgb(123, 3, 3)",
    });

  };

  const colorchangeMode4 = () => {
    setMystyle({
      color: "black",
      backgroundColor: "rgb(191, 191, 9)",
    });

    setbtnKaColour("dark");
    document.title = "TextUtils- Coloured Mode";

    setAboutStyle({
      color: "black",
      backgroundColor: "rgb(191, 191, 9)",
    });
  };

  const colorchangeMode5 = () => {
    setMystyle({
      color: "white",
      backgroundColor: "rgb(1, 71, 98)",
    });

    setbtnKaColour("light");
    document.title = "TextUtils- Coloured Mode";

    setAboutStyle({
      color: "white",
      backgroundColor: "rgb(1, 71, 98)",
    });
  };

  const toLowerCase = () => {
    let newText = variesText.toLowerCase();
    setVariesText(newText);

    showAlert(
      "success",
      "SUCCESS!!",
      "Text has been converted into LowerCase!!"
    );
  };

  const toUpperCase = () => {
    let newText = variesText.toUpperCase();
    setVariesText(newText);

    showAlert(
      "success",
      "SUCCESS!!",
      "Text has been converted into UpperCase!!"
    );
  };

  const toClear = () => {
    let newText = "";
    setVariesText(newText);

    showAlert("danger", "OOPs...", "Text has been cleared!!");
  };

  const changeText = (event) => {
    setVariesText(event.target.value);
  };

  const showAlert = (categor, mainalert, message) => {
    setalert({
      cat: categor,
      main: mainalert,
      msg: message,
    });

    setTimeout(() => {
      setalert({
        cat: null,
        main: null,
        msg: null,
      });
    }, 2000);
  };

  return (
    <>
      <Router>
        <OurNavbar
          mode={Mode}
          nav={Nav}
          togglemode={ToggleMode}
          btntext={Btn}
          title="PropTitle"
          about="About Us"
          source="Source"
          source1="Facebook"
          source2="Instagram"
          source3="Whatsapp"
          coloredMode1={colorchangeMode1}
          coloredMode2={colorchangeMode2}
          coloredMode3={colorchangeMode3}
          coloredMode4={colorchangeMode4}
          coloredMode5={colorchangeMode5}
        />
        <div id="alertTextCon">
          <div
            id="alertheight"
            style={{ backgroundColor: Nav == "dark" ? "#212529" : "white" }}
          >
            <Alert alerthaiye={alertnull} />
          </div>
          {/* <About /> */}
          <Switch>
            <Route path="/about">
              <About style={aboutStyle} />
            </Route>
            <Route path="/">
              <TextForm
                heading="Enter the text to analyze!!"
                mystyle={Mystyle}
                btnColour={btnKaColour}
                handleButtonLower={toLowerCase}
                handleButtonUpper={toUpperCase}
                handleButtonClear={toClear}
                handleOnChange={changeText}
                text={variesText}
                textLength={variesText.length}
                totalChar={
                  variesText.split(" ").filter((elem) => {
                    return elem.length != 0;
                  }).length
                }
                time={variesText.split(" ").length * (1 / 238)}
                preview={variesText}
              />
            </Route>
          </Switch>
        </div>

        {/* React always partially matches the path so we need to write *exat* just to make it clear

          path="/users" --> component1      
          path="/users/home" --> component2  
          in both cases it will show component 1 as it will partially match the keyword /users
          
          so we need to write exact to see the exact path ex- /users/home */}
      </Router>
    </>
  );
}

export default App;
