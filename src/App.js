import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { readRemoteFile } from 'react-papaparse'
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';


function App() {
  const [state, setState] = useState(['a']);
  const [kmn, setKmn] = useState();
  const [tabell, setTabell] = useState([]);
  const [kommun, setKommun] = useState(['',29])
  const [selected, setSelected] = useState(1)
  const [selectHidden, setSelectHidden] = useState(true)
  const [kyrka, setKyrka] = useState(false)
  const [visible, setVisible] = useState(false)
  const [kyrkselect, setKyrkSelect] = useState();
  const [costs, setCosts] = useState({
    avdrag: 0,
    lon: 0
  })
  useEffect(() => {
    readRemoteFile(
      "/skattesatser-2020.csv",
      {
        complete: (results) => {
          setState(results.data)
          let uniq = [...results.data]
          console.log(uniq)
          let tmp = []
          let tmp2 = []
          uniq.map(v => {
            if(tmp.indexOf(v[2]) === -1){
              tmp.push(v[2])
              tmp2.push([v[2],v[5]])
            }
          })
          tmp2 = tmp2.sort()
          console.log(tmp2)
          setKmn(tmp2)
        }
      }
    );
    readRemoteFile(
      "/allmanna-tabeller-manad-2020.csv",
      {
        complete: (results) => {
          setTabell(results.data)
         // console.log(results.data)
          
        }
      }
    )
  }, [])

  const handleKyrka = () => {
   // handleLon(costs.lon, kyrka ? 4 : 5)
    setKyrka(!kyrka)
    

  }

  const handleKyrkaSelect = (event) => {
    let newMap = [...kommun]
    setKyrkSelect(event.target.value)
    newMap[1] = event.target.value.substring(0,2)
    setKommun(newMap)
    handleLon(costs.lon, kyrka ? 4 : 5, event.target.value.substring(0,2))
  }

  const handleChange = (event) => {
    setVisible(true)
    
    let tmp = Number((event.target.value).substring(0,2))
    setSelected(event.target.value)
    tabell.map(x => {
      if((Number(x[1]) === Number(tmp)) && (Number(costs.lon) >= Number(x[2])) && (Number(costs.lon) <= Number(x[3]))){
        setKommun(x)
        setCosts({...costs, avdrag: Number(x[4])})
        console.log(x)
      }

    })
  }

  const handleLon = (newLon, kyrka, fastkommun) => {
    if(isNaN(newLon)) newLon = Number(newLon.replace(/\D/g,''));
    setSelectHidden(false);
    let tmp = {...costs};
    tmp.lon = newLon;
    setCosts(tmp)
    tabell.map(x => {
      if((Number(x[1]) === (fastkommun ? Number(fastkommun) :Number(kommun[1]))) && (newLon >= Number(x[2])) && (newLon <= Number(x[3]))){
        setKommun(x)
        tmp.avdrag = Number(x[kyrka])
        setCosts(tmp)
      }

    })

  }


  const Sel2 = () => {

    return (        
    <Select
    className="selects"
      native
      value={selected}
      onChange={handleChange}
    >
      {kmn.map(v => <option name={v[0]} value={String(Math.round(v[1])) + v[0]}>{v[0]}</option>)}
    </Select>)
  }

  const KyrkSelect = () => {
    console.log(selected.substring(2))
    let grej = state.filter(v => v[2] === selected.substring(2))
    grej = grej.sort((x,y) => (x > y))
    return (
      <Select
      className="selects"
      native
      onChange={handleKyrkaSelect}
      value={kyrkselect}
      
      >
        <option value="33none">Välj församling</option>
        {grej.map(v => <option name={v[3]} value={String(Math.round(v[4])) + v[3]}>{v[3]}</option>)}


      </Select>


    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <Fade in={true} timeout={1000}>
          <Paper className="App-Paper">
            <Typography variant="h4">Lönekalkylator</Typography>
            <Typography variant="subtitle1">
                Fyll i din nuvarande månadslön för att se din uppskattade nettolön för 2020
            </Typography>
          <TextField 
          autoComplete="off" 
          className="selects" 
          id="standard-basic" 
          InputProps={{
            endAdornment: <InputAdornment position="end">Kr</InputAdornment>,
          }}
          onChange={(event) => handleLon(event.target.value, 4)} label="Månadslön"/>
          {selectHidden ? "" :
          <Fade in={true} timeout={2000}>
          <div>
            
            <Sel2 />
            <br />
            <Fade in={visible} timeout={1000}>
            <div>

              <p className="lesser"> 
                <Checkbox
                checked={kyrka}
                onChange={handleKyrka}
                name="checkedB"
                color="primary"
                label="Medlem i svenska kyrkan?"
              /> Medlem i Svenska kyrkan?
              </p>
            </div>
            </Fade> 
            
            
        </div>
        </Fade>
          }
          {kyrka ? 
            <Fade in={true} timeout={1000}>
            <div>
            <KyrkSelect />
            </div>
            </Fade>
        
          : ""}

          
          <Fade in={visible} timeout={1000}>
                <div className="containsData">
                  <br ></br>
                  <table className="lesser2">
                    <tbody></tbody>
                    <tr>
                      <td>Nettolön</td>
                      <td>{costs.lon} kr</td>
                    </tr>
                    <tr>
                      <td>Skatt</td>
                      <td>-{costs.avdrag} kr</td>
                    </tr>
                    <tr>
                      <td>Skattetabell</td>
                      <td>{kommun[1]}</td>
                    </tr>
                    <tr>
                      <td>Kvar efter skatt</td>
                      <td><b>{(costs.lon - costs.avdrag)} kr</b></td>
                    </tr>
                  </table>
                  </div>
 
                  </Fade>

        </Paper>
        </Fade>
      </header>
    </div>
  );
}

export default App;
