import React,{ Component } from "react";
import { useState, useRef } from "react"


function Calculator({date,setDate,zodiac,setZodiac,stateRef,display,setDisplay,setStart,start}) {

  const cons = (reg) => {
    zodiac[reg] ? setZodiac({...zodiac,[reg] :false}) : setZodiac({...zodiac,[reg] :true}
  )}
  
  const totalDays = () => {
    console.log("total days running");
    if(date.month === 1){
      //setAnswer({...answer,totalday:0+date.day});
      stateRef.current = 0+date.day;
    }else if(date.month === 2){
      //setAnswer({...answer,totalday:31+date.day});
      stateRef.current = 31+date.day;
    }else if(date.month === 3){
      //setAnswer({...answer,totalday:60+date.day});
      stateRef.current = 60+date.day;
    }else if(date.month === 4){
      //setAnswer({...answer,totalday:91+date.day});
      stateRef.current = 91+date.day;
    }else if(date.month === 5){
      //setAnswer({...answer,totalday:121+date.day});
      stateRef.current = 121+date.day;
    }else if(date.month === 6){
      //setAnswer({...answer,totalday:152+date.day});
      stateRef.current = 152+date.day;
    }else if(date.month === 7){
      //setAnswer({...answer,totalday:182+date.day});
      stateRef.current = 182+date.day;
    }else if(date.month === 8){
      //setAnswer({...answer,totalday:213+date.day});
      stateRef.current = 213+date.day;
    }else if(date.month === 9){
      //setAnswer({...answer,totalday:244+date.day});
      stateRef.current = 244+date.day;
    }else if(date.month === 10){
      //setAnswer({...answer,totalday:274+date.day});
      stateRef.current = 274+date.day;
    }else if(date.month === 11){
      //setAnswer({...answer,totalday:305+date.day});
      stateRef.current = 305+date.day;
    }else if(date.month === 12){
      //setAnswer({...answer,totalday:335+date.day});
      stateRef.current = 335+date.day;
    }else{
      console.log("input Month");
    }};
  const westZodiac =() => {
    if(stateRef.current > 80 && stateRef.current < 111 ){
      return "Aries";
    }else if(stateRef.current > 110 && stateRef.current < 142 ){
      return "Taurus";
    }else if(stateRef.current > 141 && stateRef.current < 173 ){
      return "Gemini";
    }else if(stateRef.current > 172 && stateRef.current < 205 ){
      return "Cancer";
    }else if(stateRef.current > 204 && stateRef.current < 236 ){
      return "Leo";
    }else if(stateRef.current > 235 && stateRef.current < 266 ){
      return "Virgo";
    }else if(stateRef.current > 266 && stateRef.current < 297 ){
      return "Libra";
    }else if(stateRef.current > 296 && stateRef.current < 327 ){
      return "Scorpio";
    }else if(stateRef.current > 326 && stateRef.current < 357 ){
      return "Sagitarius";
    }else if(stateRef.current > 356 && stateRef.current < 367 ){
      return "Capricorn";
    }else if(stateRef.current > 0 && stateRef.current < 20 ){
      return "Capricorn";
    }else if(stateRef.current > 19 && stateRef.current < 50 ){
      return"Aquarius";
    }else if(stateRef.current > 49 && stateRef.current < 81 ){
      return"Pisces";
    }
  }
  const chinsZodiac = () =>{
    if (date.year % 12 === 0){
      return "Monkey";
    }else if(date.year % 12 === 1) {
      return"Rooster"
    }else if(date.year % 12 === 2) {
      return"Dog"
    }else if(date.year % 12 === 3) {
      return"Pig"
    }else if(date.year % 12 === 4) {
      return"Rat"
    }else if(date.year % 12 === 5) {
      return"Ox"
    }else if(date.year % 12 === 6) {
      return"Tiger"
    }else if(date.year % 12 === 7) {
      return"Rabbit"
    }else if(date.year % 12 === 8) {
      return"Dragon"
    }else if(date.year % 12 === 9) {
      return"Snake"
    }else if(date.year % 12 === 10) {
      return"Horse"
    }else if(date.year % 12 === 11) {
      return"Goat"
    }
  };
  const dayHide = () => {
    const oddMonth = [0,1,3,5,7,8,10,12];
    if(oddMonth.includes(date.month)){
      return true;
    }else{
      return false;
    }
  }
  const elmntZod = () => {
    if(date.year % 2 === 0){
      if(date.year % 5 === 1){
        return "Fire";
      }else if(date.year % 5 === 4){
        return "Wood";
      }else if(date.year % 5 === 3){
        return "Earth";
      }else if(date.year % 5 === 0){
        return "Metal";
      }else if(date.year % 5 === 2){
        return "Water";
      }
    }else if(date.year % 2 === 1){
      if(date.year % 5 === 2){
        return "Fire";
      }else if(date.year % 5 === 0){
        return "Wood";
      }else if(date.year % 5 === 4){
        return "Earth";
      }else if(date.year % 5 === 1){
        return "Metal";
      }else if(date.year % 5 === 3){
        return "Water";
      }
    }
  }
  const generate =()=> {
    totalDays();
    setZodiac({
      ...zodiac,
      czod:chinsZodiac(),
      wzod:westZodiac(),
      elmczod:elmntZod(),
    });
    setDisplay({chn:zodiac.chins,wst:zodiac.west});
    setStart({start1:false,start2:false,startl1:false,startl2:false});
  }
  return (
    <div className="calcu">
      <h1>Enter Your Birth</h1>
      <div className="date-form">
        <div className="day-div">
          <p>Date</p>
          <select name="d1day" onChange={e => {setDate({...date,day:parseInt(e.target.value)})}}>
            <option value="1" selected="">
              1
            </option>
            <option value={2}>2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30" className={date.month === 2 ? "hide" : ""}>30</option>
            <option value="31" className={dayHide() ? "" : "hide"}>31</option>
          </select>
        </div>
        <div className="month-div">
          <p>Month</p>
          <select name="d1month" onChange={e => {setDate({...date,month:parseInt(e.target.value)})}}>
            <option value="1" selected="">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="year-div">
          <p>Year</p>
          <select name="d1year" onChange={e => setDate({...date,year:parseInt(e.target.value)})}>
            <option value="1924">1924</option>
            <option value="1925">1925</option>
            <option value="1926">1926</option>
            <option value="1927">1927</option>
            <option value="1928">1928</option>
            <option value="1929">1929</option>
            <option value="1930">1930</option>
            <option value="1931">1931</option>
            <option value="1932">1932</option>
            <option value="1933">1933</option>
            <option value="1934">1934</option>
            <option value="1935">1935</option>
            <option value="1936">1936</option>
            <option value="1937">1937</option>
            <option value="1938">1938</option>
            <option value="1939">1939</option>
            <option value="1940">1940</option>
            <option value="1941">1941</option>
            <option value="1942">1942</option>
            <option value="1943">1943</option>
            <option value="1944">1944</option>
            <option value="1945">1945</option>
            <option value="1946">1946</option>
            <option value="1947">1947</option>
            <option value="1948">1948</option>
            <option value="1949">1949</option>
            <option value="1950">1950</option>
            <option value="1951">1951</option>
            <option value="1952">1952</option>
            <option value="1953">1953</option>
            <option value="1954">1954</option>
            <option value="1955">1955</option>
            <option value="1956">1956</option>
            <option value="1957">1957</option>
            <option value="1958">1958</option>
            <option value="1959">1959</option>
            <option value="1960">1960</option>
            <option value="1961">1961</option>
            <option value="1962">1962</option>
            <option value="1963">1963</option>
            <option value="1964">1964</option>
            <option value="1965">1965</option>
            <option value="1966">1966</option>
            <option value="1967">1967</option>
            <option value="1968">1968</option>
            <option value="1969">1969</option>
            <option value="1970">1970</option>
            <option value="1971">1971</option>
            <option value="1972">1972</option>
            <option value="1973">1973</option>
            <option value="1974">1974</option>
            <option value="1975">1975</option>
            <option value="1976">1976</option>
            <option value="1977">1977</option>
            <option value="1978">1978</option>
            <option value="1979">1979</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000" selected>2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        <div className="west-check">
            <input type="checkbox" onChange={()=>cons("west")}  checked={zodiac.west ? true : false} /> Western Zodiac
        </div>
        <div className="chinese-check">
            <input type="checkbox" onChange={()=>cons("chins")}  checked={zodiac.chins ? true : false} /> Chinese Zodiac
        </div>
        <button className="submit-btn" onClick={generate}>Submit</button>
  
      </div>
    </div>
  );
}
export default Calculator;
