import React from 'react';

const App = () => {
  return (
    <div className="container-fluid" style={{ "background": "#548987" }}>
    <div className="container" >
    <div className="row" >
    <div className="col-sm-2"></div>
        <div className="col-sm-4">
            <img src="./images/task1.png" width="103%" alt="..."/>
        </div>
        <div className="col-sm-4 " style={{"background":"#ffba33"}} >
            <div className="row">
            <div className="col-sm-2"></div>
                <div className="col-sm-8" style={{"marginTop":"150px","background":"white","borderRadius":"8px","boxShadow":"0px 0px 8px 0px gray"}}>
                    <div className="row pt-3 pb-3" style={{"boxShadow":"0px 0px 20px 2px #dee1e6"}}>
                        <div className="col-sm-7 text-warning">ALREADY MEMBERS</div>
                        <div className="col-sm-5 text-secondary">Need Help</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 pt-3">
                            <input type="text" placeholder="Enter your username" className="form-control"/>
                            <input type="password" placeholder="Enter your Password" className="form-control mt-3"/>
                            <input type="submit" value="SIGN IN" className="form-control mt-4 mb-4" style={{"background":"#1a535c","color":"white"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
               <center> <div className="col-sm-8 text-light pt-4">Don't Have any account yet?<br/><b style={{"color":"#1a535c"}}>Create an account</b></div></center>
                <div className="col-sm-2"></div>
            </div>
        </div>
        <div className="col-sm-2"></div>
    </div>
    </div>
</div>
  );
};

export default App;